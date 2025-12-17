# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets to receive and store contact form submissions.

## Overview

Your contact form will:
1. Save submissions to Google Sheets
2. Send email notifications via EmailJS
3. Work without any backend server

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **+ Blank** to create a new spreadsheet
3. Name it something like "Contact Form Submissions"
4. Create column headers in the first row:
   - Column A: **Name**
   - Column B: **Email**
   - Column C: **Phone**
   - Column D: **Service**
   - Column E: **Message**
   - Column F: **Timestamp**

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Copy and paste this script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Add new row with form data
    sheet.appendRow([
      data.name,
      data.email,
      data.phone,
      data.service,
      data.message,
      data.timestamp
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click the **Save** icon (disk icon)
5. Name your project (e.g., "Contact Form Handler")

## Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: Contact Form Handler
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to [Your Project Name] (unsafe)**
9. Click **Allow**
10. **Copy the Web App URL** (you'll need this)

## Step 4: Configure Your Application

Open `src/lib/sheets-config.ts` and add your Web App URL:

```typescript
export const GOOGLE_SHEETS_CONFIG = {
  SHEET_URL: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',
};
```

## Step 5: Update Contact Information

Edit `src/pages/ContactPage.tsx` to add your contact details:

Search for these placeholders and replace them:
- `your@email.com` → Your actual email
- `+1 (234) 567-890` → Your actual phone
- `Your City, Your Country` → Your actual location

## Step 6: Configure EmailJS

Follow the instructions in `EMAILJS_SETUP.md` to set up email notifications.

Update `src/lib/emailjs-config.ts`:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xxxxxxx',
  TEMPLATE_ID: 'template_xxxxxxx',
  PUBLIC_KEY: 'xxxxxxxxxxxxxx',
  RECIPIENT_EMAIL: 'your@email.com',
};
```

## Step 7: Test Your Setup

1. Run your application locally: `npm run dev`
2. Fill out the contact form
3. Submit it
4. Check your Google Sheet for the new row
5. Check your email for the notification

## Troubleshooting

### Submissions not appearing in Google Sheets?

1. **Check Script URL**: Make sure the URL in `sheets-config.ts` is correct
2. **Check Permissions**: Script must be deployed with "Anyone" access
3. **Check Sheet Name**: Script writes to the active sheet
4. **View Script Logs**:
   - Go to Apps Script editor
   - Click **Executions** on the left
   - Check for errors

### How to view submissions?

Open your Google Sheet at any time to see all submissions.

### How to export data?

1. Open your Google Sheet
2. Click **File** → **Download**
3. Choose format (Excel, CSV, PDF, etc.)

### How to clear old submissions?

1. Select the rows you want to delete (don't delete the header row)
2. Right-click → **Delete rows**

### How to get notified in Google Sheets?

You can add email notifications:
1. In Google Sheets, click **Tools** → **Notification rules**
2. Choose "Any changes are made"
3. Set notification frequency

## Security Notes

- The script is public but only accepts POST requests
- No sensitive data is exposed
- All submissions are stored in your private Google Sheet
- Only you have access to the sheet

## Viewing Your Data

Your Google Sheet will automatically update with new submissions in real-time. You can:
- Sort and filter data
- Create charts and analytics
- Export to other formats
- Share with team members
- Use Google Sheets formulas for analysis

## Benefits

- **Free**: No cost for storing form data
- **Real-time**: Instant updates
- **Accessible**: View from anywhere
- **Exportable**: Download in multiple formats
- **Shareable**: Collaborate with team members
- **No Database**: No need for complex backend setup
- **Reliable**: Google's infrastructure

## Limitations

- Daily execution limits: 20,000 calls/day (more than enough)
- Maximum script runtime: 6 minutes per execution
- Simultaneous executions: 30

These limits are very generous and suitable for most business needs.
