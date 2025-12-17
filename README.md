# XMarketing

A modern, responsive marketing website built with React, TypeScript, and Tailwind CSS.

## Features

- Modern, professional design
- Fully responsive layout
- **Blog CMS** - Complete content management system
  - Public blog with category filtering
  - Individual post pages with related content
  - Admin dashboard for managing posts
  - Authentication for secure access
  - Draft/publish workflow
  - Categories, tags, and featured images
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
- **Supabase** - Database and authentication for blog CMS
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

### 1. Blog CMS Setup (Supabase)

Follow the detailed guide in `BLOG_CMS_SETUP.md` to:
- Run the database migration
- Enable authentication
- Create your admin account
- Start creating blog posts

Quick setup:
1. Go to Supabase SQL Editor
2. Run the migration SQL from `BLOG_CMS_SETUP.md`
3. Enable email auth in Supabase
4. Visit `/admin/login` to create your admin account

### 2. Google Sheets Setup

Follow the detailed guide in `GOOGLE_SHEETS_SETUP.md` to:
- Create a Google Sheet
- Set up Google Apps Script
- Get your Web App URL
- Configure the application

Quick setup:
1. Update `src/lib/sheets-config.ts` with your Google Apps Script URL

### 3. EmailJS Setup

Follow the detailed guide in `EMAILJS_SETUP.md` to:
- Create EmailJS account
- Add email service
- Create email template
- Get your credentials

Quick setup:
1. Update `src/lib/emailjs-config.ts` with your EmailJS credentials

### 4. Update Contact Information

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
│   ├── BlogPage.tsx          # Blog index
│   ├── BlogPostPage.tsx      # Individual post view
│   ├── AdminDashboard.tsx    # Blog admin dashboard
│   ├── AdminLogin.tsx        # Admin authentication
│   ├── BlogEditor.tsx        # Post editor
│   └── [service pages]
├── lib/                # Configuration files
│   ├── supabase.ts           # Supabase client & types
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

## Blog CMS

A full-featured content management system for your blog:

### Public Features
- Browse all published posts at `/blog`
- Filter posts by category
- View individual posts at `/blog/[slug]`
- See related posts on each article
- Responsive design on all devices

### Admin Features (requires authentication)
- Access admin dashboard at `/admin`
- Create, edit, and delete blog posts
- Draft and publish workflow
- Live preview of posts before publishing
- Category and tag management
- Featured image support
- Automatic slug generation from titles
- Filter dashboard by status (All, Published, Drafts)

### Creating Your First Post
1. Visit `/admin/login` and create an account
2. Click "New Post" in the admin dashboard
3. Fill in title, excerpt, content, and other details
4. Use the Preview button to see how it looks
5. Click "Publish Now" to make it live

For complete setup and usage instructions, see `BLOG_CMS_SETUP.md`

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

The `.env` file contains:
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `VITE_GOOGLE_SHEETS_URL` - Your Google Apps Script Web App URL (optional, can configure in `sheets-config.ts`)

Additional configuration in code files:
- `src/lib/emailjs-config.ts` - EmailJS credentials
- `src/lib/sheets-config.ts` - Google Sheets Web App URL

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved

## Support

For setup help, refer to:
- `BLOG_CMS_SETUP.md` - Complete blog CMS setup and usage guide
- `GOOGLE_SHEETS_SETUP.md` - Google Sheets integration
- `EMAILJS_SETUP.md` - EmailJS integration
