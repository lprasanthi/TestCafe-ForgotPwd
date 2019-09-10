import { Selector } from 'testcafe';

const forgot_pw_link = Selector('#forgotpw');
const email_field = Selector('#sign_in_email');
const submit_btn = Selector('#update_button');
const next_btn = Selector('#checkEmail');
const email_sent_success_message = 'An email has been sent to the address provided';

fixture`ForgotPasswordTests`
  .page('https://thingspeak.com/login');


test('Forgot password - existing profile', async t => {

  await t
    .typeText(email_field, 'spsaiprasanthi@gmail.com')
    .click(next_btn)

  await t
    .switchToIframe('#myFrame')
    .click(forgot_pw_link)

  await t
    .expect(Selector('h2').textContent).contains('Forgot Password?')
    .click(submit_btn)

  await t
    .expect(Selector('h2').textContent).contains('Sign in to your MathWorks Account')
    .expect(Selector('h3').textContent).eql('Success')
    .expect(Selector('#success').child('p').textContent).contains(email_sent_success_message)

});
