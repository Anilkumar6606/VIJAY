import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create transporter using Gmail or your email service
    // Make sure to set these environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email to Vijay Kumar with client details
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'agathamudivijay2002@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #0066ff; margin-bottom: 20px;">New Message from Contact Form</h2>
            
            <div style="margin-bottom: 20px; border-left: 4px solid #0066ff; padding-left: 15px;">
              <p style="margin: 10px 0; color: #333;">
                <strong style="color: #0066ff;">From:</strong> ${name}
              </p>
              <p style="margin: 10px 0; color: #333;">
                <strong style="color: #0066ff;">Email:</strong> <a href="mailto:${email}" style="color: #0066ff; text-decoration: none;">${email}</a>
              </p>
              <p style="margin: 10px 0; color: #333;">
                <strong style="color: #0066ff;">Subject:</strong> ${subject}
              </p>
            </div>

            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; margin: 20px 0;">
              <h3 style="color: #0066ff; margin-top: 0;">Message:</h3>
              <p style="color: #555; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word;">
                ${message}
              </p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #999;">
              <p style="margin: 5px 0;">Submitted at: ${new Date().toLocaleString('en-US', { 
                timeZone: 'Asia/Kolkata',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}</p>
              <p style="margin: 5px 0;">IP Address: ${request.headers.get('x-forwarded-for') || 'Not available'}</p>
            </div>
          </div>
        </div>
      `,
    }

    // Send email to Vijay
    await transporter.sendMail(mailOptions)

    // Optional: Send confirmation email to client
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Message Received - Agathamudi Vijay Kumar',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #0066ff; margin-bottom: 20px;">Thank You! 🙏</h2>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Hi ${name},
            </p>

            <p style="color: #555; font-size: 14px; line-height: 1.8;">
              Thank you for reaching out! I've received your message and will get back to you as soon as possible.
            </p>

            <div style="background-color: #f0f7ff; padding: 15px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #0066ff;">
              <p style="color: #0066ff; margin: 0; font-weight: bold;">Message Summary:</p>
              <p style="color: #555; margin: 10px 0 0 0; font-size: 14px;">
                <strong>Subject:</strong> ${subject}
              </p>
            </div>

            <p style="color: #555; font-size: 14px; line-height: 1.8;">
              I appreciate your interest and will respond to your inquiry promptly. In the meantime, feel free to connect with me on 
              <a href="https://linkedin.com/in/agathamudi-vijay-kumar-22a264297" style="color: #0066ff; text-decoration: none;">LinkedIn</a>.
            </p>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                Best regards,<br>
                <strong style="color: #0066ff;">Agathamudi Vijay Kumar</strong><br>
                Digital Marketing Specialist | Performance Marketer
              </p>
            </div>

            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
              <p style="color: #999; font-size: 12px; margin: 0;">
                📧 agathamudivijay2002@gmail.com | 📱 +91 7730890887
              </p>
            </div>
          </div>
        </div>
      `,
    }

    // Send confirmation email to client
    await transporter.sendMail(clientMailOptions)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully! Check your inbox for confirmation.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
