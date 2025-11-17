# EmailJS Setup Guide

This guide will help you configure EmailJS to receive contact form notifications.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the prompts to connect your email account
5. Copy your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

### Template Content:

**Subject:**
```
New Contact: {{service}} - {{from_name}}
```

**Body:**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0;">
    <h1 style="margin: 0;">New Contact Form Submission</h1>
    <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone is interested in your services!</p>
  </div>
  <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
    <div style="margin-bottom: 20px;">
      <strong style="color: #2563eb;">Name:</strong><br/>
      <span>{{from_name}}</span>
    </div>
    <div style="margin-bottom: 20px;">
      <strong style="color: #2563eb;">Email:</strong><br/>
      <a href="mailto:{{from_email}}">{{from_email}}</a>
    </div>
    <div style="margin-bottom: 20px;">
      <strong style="color: #2563eb;">Phone:</strong><br/>
      <span>{{phone}}</span>
    </div>
    <div style="margin-bottom: 20px;">
      <strong style="color: #2563eb;">Service Interested In:</strong><br/>
      <span>{{service}}</span>
    </div>
    <div style="margin-bottom: 20px;">
      <strong style="color: #2563eb;">Message:</strong><br/>
      <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin-top: 10px;">
        {{message}}
      </div>
    </div>
  </div>
</div>
```

4. Set **To Email** to: `{{to_email}}`
5. Save the template and copy your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** (top right)
2. Find your **Public Key** under API Keys
3. Copy it (you'll need this)

## Step 5: Configure Your Application

Open `src/lib/emailjs-config.ts` and replace the placeholders:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xxxxxxx',      // Replace with your Service ID
  TEMPLATE_ID: 'template_xxxxxxx',    // Replace with your Template ID
  PUBLIC_KEY: 'xxxxxxxxxxxxxx',       // Replace with your Public Key
};
```

## Step 6: Test

1. Run your application
2. Fill out the contact form
3. Submit it
4. Check your email (mukeshmr0728@gmail.com) for the notification

## Free Plan Limits

EmailJS free plan includes:
- 200 emails per month
- No credit card required
- Perfect for small businesses

## Troubleshooting

### Email not received?
- Check spam folder
- Verify all IDs are correct in `emailjs-config.ts`
- Check EmailJS dashboard for error logs
- Ensure your email service is properly connected

### CORS errors?
- EmailJS handles CORS automatically
- No additional configuration needed

### Rate limiting?
- Free plan: 200 emails/month
- Upgrade if you need more

## Variables Available in Template

The following variables are sent from the contact form:
- `{{from_name}}` - Contact person's name
- `{{from_email}}` - Contact person's email
- `{{phone}}` - Contact person's phone
- `{{service}}` - Service they're interested in
- `{{message}}` - Their message
- `{{to_email}}` - Your email (mukeshmr0728@gmail.com)
