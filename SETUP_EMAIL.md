# Email Setup Guide for Contact Form

## Overview
The contact form now sends emails to Vijay Kumar's inbox with client details and automatically sends a confirmation email to the client.

## Setup Instructions

### Option 1: Gmail (Recommended for Development)

1. **Enable 2-Step Verification** (if not already enabled)
   - Go to myaccount.google.com
   - Navigate to Security section
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer" (or your device)
   - Google will generate a 16-character password
   - Copy this password

3. **Update `.env.local`**
   ```
   EMAIL_USER=agathamudivijay2002@gmail.com
   EMAIL_PASSWORD=your_16_character_app_password
   ```

4. **Install Dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

5. **Restart Development Server**
   ```bash
   npm run dev
   ```

### Option 2: Using Resend (Recommended for Production)

1. **Sign up at [resend.com](https://resend.com)**

2. **Get API Key** from your Resend dashboard

3. **Update `.env.local`**
   ```
   RESEND_API_KEY=your_resend_api_key
   ```

4. **Update API Route** (`app/api/send-email/route.ts`)
   - Replace nodemailer code with Resend client

### Option 3: Other Email Services
- SendGrid
- MailerSend  
- AWS SES
- Your own SMTP server

## How It Works

### Client Flow:
1. User fills out the contact form
2. Clicks "Send Message"
3. Form data is sent to `/api/send-email`
4. Server sends two emails:
   - **Email to Vijay**: Contains all client details, message, timestamp, and IP
   - **Confirmation Email to Client**: Professional thank you message

### Email Templates:
- **Admin Email**: Includes client info, message content, submission time
- **Client Confirmation**: Thank you message with summary of their submission

## Email Content

### Information Sent to Vijay:
- Client's Full Name
- Client's Email Address
- Subject Line
- Complete Message
- Submission Timestamp (IST)
- Client's IP Address (if available)

### Confirmation Email Sent to Client:
- Professional thank you message
- Message summary
- Link to LinkedIn profile
- Contact information

## Testing

1. **Test Locally:**
   ```bash
   npm run dev
   ```

2. **Fill Contact Form** with test data

3. **Check Emails:**
   - Your email inbox for confirmation
   - Vijay's email (agathamudivijay2002@gmail.com) for admin email

## Troubleshooting

### Error: "Failed to send email"
- Check `.env.local` credentials
- Verify email service is configured correctly
- Check browser console and server logs

### Gmail: "Invalid login credentials"
- Make sure you're using App Password, not regular password
- App Password must be exactly 16 characters
- Check that 2-Step Verification is enabled

### Emails not received
- Check spam/junk folder
- Verify sender email address
- Check mail service logs

## Security Notes
🔒 Never commit `.env.local` to version control  
🔒 App passwords are unique and service-specific  
🔒 Email addresses are only stored during transmission  
🔒 Client IP is logged for security purposes  

## Support
For issues, check:
- Nodemailer docs: https://nodemailer.com/
- Resend docs: https://resend.com/docs
- Next.js API Routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
