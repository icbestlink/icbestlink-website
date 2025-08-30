import nodemailer from 'nodemailer';
import { json, error as kitError } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const {  name, email, message, companyName, industry, phoneNumber, interest} = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: env.PRIVATE_GMAIL_USER,
      pass: env.PRIVATE_GMAIL_PASS,
    }
  });

  try { 
    await transporter.sendMail({
      from: '"Support Team" <support@icbestlink.com>',
      to: 'cs@icbestlink.com',
      subject: 'New Form Submission',
      html: `<p><strong>Email:</strong> ${email}</p>
             <p><strong>Company Name:</strong> ${companyName}</p>
             <p><strong>Industry:</strong> ${industry}</p>
             <p><strong>Phone Number:</strong> ${phoneNumber}</p>
             <p><strong>Interest:</strong> ${interest}</p>
             <p><strong>Message:</strong> ${message}</p>`
    });
    return json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error(err);
    throw kitError(500, 'Failed to send email');
  }
}
