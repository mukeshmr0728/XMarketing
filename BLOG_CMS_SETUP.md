# Blog CMS Setup Guide

A complete content management system for your blog with authentication, draft/publish workflow, categories, tags, and featured images.

## Overview

The blog CMS includes:
- **Public Blog** - View all published posts
- **Individual Post Pages** - Full blog post views with related posts
- **Admin Dashboard** - Manage all posts (create, edit, delete, publish)
- **Rich Editor** - Create and edit posts with preview
- **Authentication** - Secure admin access with email/password
- **Categories & Tags** - Organize and filter content
- **Draft/Published States** - Control visibility

## Features

### Public Features
- View all published blog posts
- Filter by category
- Individual post pages with related posts
- Featured images
- Tags and categories
- Responsive design

### Admin Features
- Secure authentication
- Create, edit, and delete posts
- Draft and publish workflow
- Live preview
- Category management
- Tag support
- Featured image URLs
- Automatic slug generation
- Status filtering (All, Published, Drafts)

## Database Setup

### Step 1: Run the Migration

You need to run this SQL in your Supabase SQL Editor to create the blog_posts table:

```sql
/*
  # Create Blog Posts Table

  ## Overview
  Creates a comprehensive blog content management system with support for drafts,
  publishing, categories, tags, and featured images.

  ## New Tables

  ### blog_posts
  - id (uuid, primary key) - Unique identifier for each blog post
  - title (text, required) - Blog post title
  - slug (text, unique, required) - URL-friendly version of title
  - excerpt (text, required) - Short summary/preview of the post
  - content (text, required) - Full blog post content (supports markdown/HTML)
  - author_id (uuid, required) - References auth.users, tracks post author
  - featured_image (text, optional) - URL to featured/hero image
  - category (text, required) - Post category for organization
  - tags (text[], optional) - Array of tags for filtering and search
  - status (text, required) - Either 'draft' or 'published'
  - published_at (timestamptz, optional) - When post was published
  - created_at (timestamptz) - When post was created
  - updated_at (timestamptz) - When post was last updated

  ## Security

  ### Row Level Security (RLS)
  - RLS is enabled on the blog_posts table

  ### Policies
  1. **Public Read Access** - Anyone can view published blog posts
  2. **Authenticated Create** - Only authenticated users can create posts
  3. **Author Update** - Only post authors can update their own posts
  4. **Author Delete** - Only post authors can delete their own posts

  ## Indexes
  - Index on slug for fast lookups by URL
  - Index on status and published_at for efficient querying of published posts
  - Index on category for filtering
  - Index on author_id for author-specific queries

  ## Important Notes
  - Posts default to 'draft' status
  - Slugs must be unique to prevent URL conflicts
  - Published_at is automatically set when status changes to 'published'
  - Updated_at is automatically updated on any modification
*/

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  author_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  featured_image text,
  category text NOT NULL DEFAULT 'General',
  tags text[] DEFAULT '{}',
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status_published ON blog_posts(status, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_author ON blog_posts(author_id);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read published blog posts
CREATE POLICY "Anyone can view published posts"
  ON blog_posts FOR SELECT
  USING (status = 'published');

-- Policy: Authenticated users can create posts
CREATE POLICY "Authenticated users can create posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = author_id);

-- Policy: Authors can update their own posts
CREATE POLICY "Authors can update own posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (auth.uid() = author_id)
  WITH CHECK (auth.uid() = author_id);

-- Policy: Authors can delete their own posts
CREATE POLICY "Authors can delete own posts"
  ON blog_posts FOR DELETE
  TO authenticated
  USING (auth.uid() = author_id);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_blog_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();

  -- Automatically set published_at when status changes to published
  IF NEW.status = 'published' AND OLD.status = 'draft' AND NEW.published_at IS NULL THEN
    NEW.published_at = now();
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to call the function before update
DROP TRIGGER IF EXISTS trigger_update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER trigger_update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_blog_posts_updated_at();

-- Function to generate slug from title
CREATE OR REPLACE FUNCTION generate_slug(title text)
RETURNS text AS $$
BEGIN
  RETURN lower(regexp_replace(regexp_replace(trim(title), '[^a-zA-Z0-9\s-]', '', 'g'), '\s+', '-', 'g'));
END;
$$ LANGUAGE plpgsql IMMUTABLE;
```

### Step 2: Access Supabase SQL Editor

1. Go to your Supabase Dashboard: https://app.supabase.com
2. Select your project
3. Click on **SQL Editor** in the left sidebar
4. Click **+ New Query**
5. Paste the SQL migration above
6. Click **Run** to execute

## Authentication Setup

### Enable Email Auth in Supabase

1. Go to Supabase Dashboard → Authentication → Providers
2. Make sure **Email** is enabled
3. Configure email settings (optional)
4. **Important**: Disable email confirmation for development:
   - Go to Authentication → Settings
   - Under "Email Auth", toggle OFF "Enable email confirmations"

### Create Your Admin Account

1. Visit `/admin/login` or `/admin` on your site
2. Click "Don't have an account? Sign up"
3. Enter your email and password (minimum 6 characters)
4. Click "Create Account"
5. After account creation, sign in with your credentials

## Using the Blog CMS

### Accessing the Admin Area

- Admin Login: `/admin/login` or `/admin`
- After login, you'll see the Admin Dashboard

### Creating a Blog Post

1. Click **New Post** button in the dashboard
2. Fill in the post details:
   - **Title** - The post headline
   - **Slug** - Auto-generated from title (editable)
   - **Excerpt** - Short summary for post previews
   - **Content** - Full post content (HTML supported)
   - **Category** - Post category for organization
   - **Tags** - Comma-separated tags
   - **Featured Image** - URL to an image
   - **Status** - Draft or Published

3. Use the **Preview** button to see how it looks
4. Click **Save as Draft** to save without publishing
5. Click **Publish Now** to make it live immediately

### Managing Posts

From the Admin Dashboard:

- **Filter by Status** - View All, Published, or Drafts
- **Publish/Unpublish** - Toggle visibility with the eye icon
- **Edit** - Modify post content with the edit icon
- **Delete** - Remove posts with the trash icon

### Content Formatting

The content field supports HTML. Here are some examples:

```html
<h2>Section Heading</h2>
<p>Your paragraph text here.</p>

<h3>Subsection</h3>
<p>More content with <strong>bold</strong> and <em>italic</em> text.</p>

<ul>
  <li>Bullet point 1</li>
  <li>Bullet point 2</li>
</ul>

<blockquote>
  A quote or callout box
</blockquote>

<a href="https://example.com">Link text</a>

<img src="https://example.com/image.jpg" alt="Description" />
```

## URL Structure

- Blog Index: `/blog`
- Individual Posts: `/blog/your-post-slug`
- Admin Dashboard: `/admin`
- Admin Login: `/admin/login`

## Features Explained

### Draft/Publish Workflow

- Posts start as **drafts** by default
- Only published posts appear on the public blog
- You can unpublish posts at any time

### Categories

- Organize posts into categories
- Filter posts by category on the blog page
- Enter any category name when creating a post

### Tags

- Add multiple tags (comma-separated)
- Tags help with organization and search
- Displayed on individual post pages

### Featured Images

- Add a URL to any image
- Images appear on blog index and post pages
- Use services like Pexels for free stock photos

### Slugs

- Auto-generated from post title
- Used in the URL (e.g., `/blog/my-post-title`)
- Can be manually edited
- Must be unique

### Related Posts

- Individual post pages show 3 related posts
- Related posts are from the same category
- Helps visitors discover more content

## Security

### Row Level Security (RLS)

The blog uses Supabase RLS for security:

- **Public Read** - Anyone can view published posts
- **Author Only** - Only post authors can edit/delete their posts
- **Authenticated Create** - Only logged-in users can create posts

### Best Practices

1. **Keep your password secure** - Use a strong password
2. **Regular backups** - Export your posts regularly
3. **Test in drafts** - Preview posts before publishing
4. **Unique slugs** - Ensure each post has a unique URL

## Troubleshooting

### Cannot create posts

**Issue**: "You must be logged in to create or edit posts"

**Solution**:
1. Make sure you're logged in at `/admin/login`
2. Check that email auth is enabled in Supabase
3. Verify the migration was run successfully

### Posts not appearing

**Issue**: Posts don't show on the blog page

**Solution**:
1. Check the post status is set to "Published"
2. Verify the `published_at` field is set
3. Check browser console for errors

### Authentication not working

**Issue**: Cannot log in or create account

**Solution**:
1. Check Supabase credentials in `.env` file
2. Verify email auth is enabled in Supabase
3. Disable email confirmation in Supabase settings
4. Check browser console for errors

### Images not loading

**Issue**: Featured images don't display

**Solution**:
1. Verify the image URL is valid and accessible
2. Check that images support HTTPS
3. Use direct image URLs (not web pages)
4. Try a different image hosting service

## Tips for Success

### Writing Great Posts

1. **Catchy titles** - Make them clear and compelling
2. **Strong excerpts** - Write summaries that encourage clicks
3. **Quality images** - Use relevant, high-quality featured images
4. **Structure content** - Use headings, lists, and paragraphs
5. **Add value** - Share insights, tips, and actionable advice

### SEO Best Practices

1. **Descriptive slugs** - Use keywords in your URL slugs
2. **Relevant categories** - Choose accurate categories
3. **Useful tags** - Add tags that describe your content
4. **Quality content** - Write comprehensive, helpful posts
5. **Regular publishing** - Maintain a consistent posting schedule

### Content Strategy

1. **Plan ahead** - Create content calendar
2. **Draft first** - Write in drafts before publishing
3. **Review and edit** - Always preview before publishing
4. **Update old posts** - Keep content fresh and relevant
5. **Engage readers** - End with questions or calls to action

## Exporting Data

To backup your blog posts:

1. Go to Supabase Dashboard → Table Editor
2. Select the `blog_posts` table
3. Click the **Export** button
4. Choose CSV or JSON format
5. Save the file locally

## Advanced Customization

### Adding More Categories

Simply type new category names when creating posts. They'll automatically appear in the filter dropdown.

### Custom Styling

Blog content inherits the site's global styles. To customize:

1. Edit the CSS classes in blog components
2. Add custom styles to `index.css`
3. Update Tailwind configuration if needed

### Adding More Fields

To add custom fields to posts:

1. Add columns to the `blog_posts` table in Supabase
2. Update the `BlogPost` interface in `src/lib/supabase.ts`
3. Add form fields in `BlogEditor.tsx`
4. Display fields in `BlogPage.tsx` and `BlogPostPage.tsx`

## Support

For issues with:
- **Supabase** - Check [Supabase Documentation](https://supabase.com/docs)
- **React/TypeScript** - Refer to component code comments
- **Authentication** - Review Supabase Auth docs

## Summary

Your blog CMS is now fully configured with:
- Secure authentication
- Complete CRUD operations
- Draft/publish workflow
- Categories and tags
- Featured images
- Responsive design
- SEO-friendly URLs

Start creating amazing content!
