# How to Post Blogs on XMarketing Website

This guide will walk you through the complete process of creating and publishing blog posts on your website with role-based access control.

## Understanding User Roles

The system has three user roles with different permissions:

### Role Types

1. **Admin** (Full Access)
   - Create, edit, and delete blog posts
   - Manage users (create, edit roles, delete)
   - Access all admin features
   - Full control over the system

2. **Editor** (Content Management)
   - Create and edit blog posts
   - Publish posts
   - Cannot delete posts
   - Cannot manage users

3. **Viewer** (Read-Only)
   - View all blog posts in admin panel
   - Cannot create, edit, or delete posts
   - Cannot manage users
   - Good for reviewers or observers

## Getting Started

### 1. Create Your First Admin Account

**IMPORTANT**: The first user must be created directly in Supabase with the admin role.

1. Go to your **Supabase Dashboard**
2. Click on **"Authentication"** in the sidebar
3. Click **"Add User"** → **"Create New User"**
4. Fill in the form:
   - Email: your@email.com
   - Password: (secure password)
   - **User Metadata**: Click to expand, then add:
     ```json
     {
       "role": "admin",
       "full_name": "Your Name"
     }
     ```
5. Click **"Create User"**

This creates your first admin account with full permissions.

### 2. Access the Admin Panel

1. Navigate to your website
2. Add `/admin` to your URL (e.g., `https://yourwebsite.com/admin`)
   - Or manually type in the browser's address bar and go to the admin page
3. You'll see a login page
4. Enter the email and password you created in Supabase
5. Click "Sign In"

You'll now see the admin dashboard with your role displayed in the header.

## Managing Users (Admin Only)

Once you're logged in as an admin, you can create additional users with different roles.

### Adding New Users

1. In the admin dashboard, click the **"User Management"** tab
2. Click **"Add User"** button
3. Fill in the form:
   - **Email**: User's email address
   - **Password**: Secure password (min 6 characters)
   - **Full Name**: User's full name
   - **Role**: Select Admin, Editor, or Viewer
4. Click **"Create User"**

The user will be created immediately and can log in with their credentials.

### Changing User Roles

1. Go to the **"User Management"** tab
2. Find the user in the list
3. Use the **dropdown** in the "Role" column to change their role
4. The change is saved automatically

**Role Recommendations:**
- Use **Admin** for people who need full control
- Use **Editor** for content creators and writers
- Use **Viewer** for stakeholders who need to review content

## Creating a Blog Post

### Step 1: Click "New Post"

Once logged into the admin panel, click the blue "New Post" button in the top right corner.

### Step 2: Fill in the Required Fields

#### **Title*** (Required)
- Enter your blog post title
- Example: "5 Ways to Improve Your Google Ads Performance"
- The system will automatically generate a URL-friendly slug

#### **Slug*** (Required)
- This is the URL-friendly version of your title
- Auto-generated from the title, but you can edit it
- Example: `5-ways-to-improve-your-google-ads-performance`
- Keep it lowercase with dashes between words

#### **Category*** (Required)
- Enter the blog post category
- Examples: Marketing, SEO, Automation, Tips, Case Study
- Keep categories consistent across posts

#### **Author Name*** (Required)
- Your name or the name of the person writing the post
- Example: "John Smith" or "XMarketing Team"

#### **Featured Image URL** (Optional)
- URL to an image for the blog post header
- Use stock photo services like Pexels or Unsplash
- Example: `https://images.pexels.com/photos/123456/pexels-photo-123456.jpeg`
- Leave blank if you don't want a featured image

#### **Tags** (Optional)
- Comma-separated list of tags
- Example: `marketing, tips, google ads, conversion`
- Used for organization and SEO

#### **Excerpt*** (Required)
- Short summary of your post (2-3 sentences)
- This appears on the blog listing page
- Example: "Learn five proven strategies to boost your Google Ads performance and lower your cost per click. These actionable tips will help you get better results from your campaigns."

#### **Content*** (Required)
- The full text of your blog post
- Write naturally with line breaks for paragraphs
- You can use simple formatting by adding blank lines between paragraphs
- The system will preserve your line breaks and paragraph spacing

Example:
```
This is the first paragraph of my blog post. It introduces the topic and engages the reader.

This is the second paragraph. Notice the blank line above to separate it from the first paragraph.

Here's another paragraph with more valuable information for readers.
```

#### **Status** (Required)
- Choose between:
  - **Draft**: Save without publishing (only you can see it)
  - **Published**: Make it live on the blog for everyone to see

### Step 3: Save Your Post

1. Click the blue "Save Post" button at the bottom
2. Your post will be saved to the database
3. If you selected "Published", it will immediately appear on your blog

## Managing Existing Posts

### Viewing All Posts

The admin dashboard shows a table with all your blog posts:
- **Title**: The post title and slug
- **Category**: Post category
- **Status**: Draft or Published (with eye icon)
- **Author**: Who wrote it
- **Actions**: Edit or Delete buttons

### Editing a Post

1. Click the blue "Edit" button (pencil icon) on any post
2. Make your changes in the editor
3. Click "Save Post" to update

### Deleting a Post

1. Click the red "Delete" button (trash icon) on any post
2. Confirm you want to delete it
3. The post will be permanently removed

### Publishing a Draft

1. Edit the draft post
2. Change the Status from "Draft" to "Published"
3. Save the post
4. It will now appear on your public blog

## Tips for Great Blog Posts

### Content Writing Tips

1. **Start with a hook**: Grab attention in the first paragraph
2. **Use clear headings**: Break up long content (though our editor doesn't support markdown, you can use caps or symbols)
3. **Keep paragraphs short**: 2-4 sentences per paragraph
4. **Add value**: Focus on helping your readers solve problems
5. **Include a call-to-action**: End with a next step or invitation to contact you

### SEO Best Practices

1. **Use descriptive titles**: Include keywords naturally
2. **Write compelling excerpts**: This is what shows in search results
3. **Choose relevant categories**: Keep them consistent
4. **Add useful tags**: 3-5 tags per post
5. **Use good images**: Featured images improve engagement

### Posting Frequency

- **Consistency matters**: Try to post at least 1-2 times per month
- **Quality over quantity**: One great post is better than several mediocre ones
- **Plan ahead**: Save drafts and publish on a schedule

## Viewing Your Blog

### Public Blog Page

Your visitors can see all published posts at:
- Click "Blog" in the main navigation
- Shows all published posts with search and category filters
- Displays featured images, excerpts, and metadata

### Individual Post Page

When someone clicks a blog post:
- They see the full content with proper formatting
- Featured image appears at the top
- Author, date, category, and tags are displayed
- A call-to-action box encourages contact

## Troubleshooting

### Can't Login?
- Double-check your email and password
- Make sure you created the user in Supabase Authentication
- Try resetting your password in Supabase dashboard

### Post Not Showing on Blog?
- Check the status is set to "Published" (not Draft)
- Refresh the blog page
- Check the published_at date is set

### Formatting Issues?
- Use blank lines to separate paragraphs
- Don't use complex formatting - keep it simple
- Preview posts by viewing them on the public blog page

### Lost Your Changes?
- Changes aren't saved until you click "Save Post"
- If you accidentally close the editor, your changes are lost
- Save drafts frequently while writing long posts

## Need Help?

If you encounter issues:
1. Check this guide first
2. Verify your admin account exists in Supabase
3. Check the browser console for any error messages
4. Make sure all required fields are filled

---

**Remember**: You can always save as a draft, preview it on the blog, then edit and publish when ready!
