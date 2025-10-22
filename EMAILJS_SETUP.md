# EmailJS Setup Instructions

## Overview
The contact form has been configured to send emails to `info@raydesign.uk` using EmailJS service. Follow these steps to complete the setup:

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID** (e.g., `service_raydesign`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} ({{from_email}})
Service: {{service_type}}

Message:
{{message}}

---
This message was sent via the Ray Design Technologies contact form.
Reply to: {{reply_to}}
```

4. Save the template and note the **Template ID** (e.g., `template_contact`)

## Step 4: Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** in the API Keys section

## Step 5: Update Environment Variables
1. Open `.env.local` file in the project root
2. Replace the placeholder values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
NEXT_PUBLIC_CONTACT_EMAIL=info@raydesign.uk
```

## Step 6: Test the Setup
1. Restart your development server: `npm run dev`
2. Fill out the contact form on your website
3. Check if emails are received at `info@raydesign.uk`

## Troubleshooting
- Ensure all environment variables are set correctly
- Check EmailJS dashboard for delivery status
- Verify email service configuration
- Check browser console for any JavaScript errors

## Security Notes
- Never commit actual API keys to version control
- The `.env.local` file is already in `.gitignore`
- EmailJS public key is safe to use in frontend applications