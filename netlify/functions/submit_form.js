const nodemailer = require('nodemailer');
const querystring = require('querystring');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  // Parse URL-encoded form data
  const formData = querystring.parse(event.body);
  const { name, email, message } = formData;

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'slimme.prullenbak@gmail.com', // Replace with your email
      pass: 'aobl gihy iveb nkqd', // Replace with your App Password
    },
  });

  // Email options
  let mailOptions = {
    from: email,
    to: 'slimme.prullenbak@gmail.com', // Replace with your email
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: 'Thank you, your message has been sent.',
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Sorry, there was an error sending your message. Please try again later.',
    };
  }
};