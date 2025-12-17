# XMarketing

A modern, responsive marketing website built with React, TypeScript, and Tailwind CSS.

## Features

- Modern, professional design
- Fully responsive layout
- Contact form with Google Sheets integration
- Email notifications via EmailJS
- Service pages for:
  - AI Automation
  - Meta Ads
  - Google Ads
  - SEO Services
  - Website Design
- Pricing page
- About page

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Google Sheets** - Contact form storage
- **EmailJS** - Email notifications

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the application (see Configuration section below)

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Configuration

### 1. Google Sheets Setup

Follow the detailed guide in `GOOGLE_SHEETS_SETUP.md` to:
- Create a Google Sheet
- Set up Google Apps Script
- Get your Web App URL
- Configure the application

Quick setup:
1. Update `src/lib/sheets-config.ts` with your Google Apps Script URL

### 2. EmailJS Setup

Follow the detailed guide in `EMAILJS_SETUP.md` to:
- Create EmailJS account
- Add email service
- Create email template
- Get your credentials

Quick setup:
1. Update `src/lib/emailjs-config.ts` with your EmailJS credentials

### 3. Update Contact Information

Edit `src/pages/ContactPage.tsx` to replace placeholders:
- Email address
- Phone number
- Location

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── PricingPage.tsx
│   └── [service pages]
├── lib/                # Configuration files
│   ├── emailjs-config.ts
│   └── sheets-config.ts
└── App.tsx             # Main app component
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contact Form

The contact form:
1. Validates user input
2. Saves submission to Google Sheets
3. Sends email notification via EmailJS
4. Shows success/error message to user
5. Clears form on successful submission

## Customization

### Colors

The site uses a blue color scheme. To change:
1. Update Tailwind classes in component files
2. Search for `blue-` and replace with your color

### Content

- Update text content directly in page components
- Replace service offerings in service pages
- Modify pricing plans in `PricingPage.tsx`

### Services

To add/remove services:
1. Update `Navbar.tsx` service menu
2. Add/remove corresponding page files
3. Update routing in `App.tsx`

## Deployment

### Netlify

1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel

1. Import your repository
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### Other Platforms

Build the project with `npm run build` and deploy the `dist` folder.

## Environment Variables

No environment variables are required. All configuration is done in the config files:
- `src/lib/emailjs-config.ts`
- `src/lib/sheets-config.ts`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved

## Support

For setup help, refer to:
- `GOOGLE_SHEETS_SETUP.md` - Google Sheets integration
- `EMAILJS_SETUP.md` - EmailJS integration
