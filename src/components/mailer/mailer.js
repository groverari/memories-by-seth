const nodemailer = require('nodemailer')

async function sendEmail(text, name) {
  // Create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'arieshgrover12@gmail.com',
      pass: 'Grover99!' // You should use environment variables or another secure method to handle passwords
    }
  })

  // Email options
  let mailOptions = {
    from: 'arieshgrover12@gmail.com', // sender address
    to: 'arieshgrover0@gmail.com', // receiver address
    subject: `New Email From ${name}`, // Subject line
    text: text // plain text body
  }

  // Send email
  try {
    let info = await transporter.sendMail(mailOptions)
    console.log('Email sent: ' + info.response)
  } catch (error) {
    console.error('Error sending email: ', error)
  }
}

export default sendEmail
