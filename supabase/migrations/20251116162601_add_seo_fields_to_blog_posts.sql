/*
  # Add SEO and Enhanced Fields to Blog Posts

  1. New Columns Added
    - `meta_title` (text, nullable) - SEO meta title for search engines
    - `meta_description` (text, nullable) - SEO meta description for search results
    - `keywords` (text array) - SEO keywords for better search visibility
    - `reading_time` (integer, nullable) - Estimated reading time in minutes
    - `view_count` (integer) - Track how many times the post has been viewed
    
  2. Changes Made
    - Add SEO-related columns to improve search engine optimization
    - Add reading_time field for better user experience
    - Add view_count field for analytics
    - All new fields are optional to maintain compatibility with existing posts

  3. Notes
    - Existing blog posts will have NULL values for new fields
    - These fields can be filled in when editing existing posts
    - view_count defaults to 0 for new posts
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'meta_title'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN meta_title text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'meta_description'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN meta_description text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'keywords'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN keywords text[] DEFAULT '{}';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'reading_time'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN reading_time integer;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'view_count'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN view_count integer DEFAULT 0;
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS blog_posts_keywords_idx ON blog_posts USING GIN(keywords);
CREATE INDEX IF NOT EXISTS blog_posts_view_count_idx ON blog_posts(view_count DESC);
