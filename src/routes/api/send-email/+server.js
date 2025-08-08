import nodemailer from 'nodemailer';
import { json, error as kitError } from '@sveltejs/kit';
import { PRIVATE_GMAIL_USER, PRIVATE_GMAIL_PASS } from '$env/static/private';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const {  name, email, message, companyName, industry, phoneNumber, interest} = await request.json();

console.log('Form submitted successfully!', `<p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
            <p><strong>Interest:</strong> ${interest}</p>
              <p><strong>Message:</strong> ${message}</p> ${ PRIVATE_GMAIL_USER} ${PRIVATE_GMAIL_PASS}`);

  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: PRIVATE_GMAIL_USER,
  //     pass: PRIVATE_GMAIL_PASS
  //   }
  // });

  // try { 
  //   await transporter.sendMail({
  //     from: '"Support Team" <support@yourcompany.com>',
  //     to: 'icbl9532@gmail.com',
  //     subject: 'New Form Submission',
  //     html: `<p><strong>Email:</strong> ${email}</p>
  //  <p><strong>Company Name:</strong> ${companyName}</p>
   // <p><strong>Industry:</strong> ${industry}</p>
   //   <p><strong>Phone Number:</strong> ${phoneNumber}</p>
   //       <p><strong>Interest:</strong> ${interest}</p>
   //         <p><strong>Message:</strong> ${message}</p>`
  //   });
  //   return json({ message: 'Email sent successfully' });
  // } catch (err) {
  //   console.error(err);
  //   throw kitError(500, 'Failed to send email');
  // }
}
