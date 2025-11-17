/*
  # Create Categories Table

  1. New Tables
    - `categories`
      - `id` (uuid, primary key) - Unique identifier
      - `name` (text, unique) - Category name
      - `slug` (text, unique) - URL-friendly slug
      - `description` (text, nullable) - Category description
      - `created_at` (timestamptz) - When created

  2. Security
    - Enable RLS on `categories` table
    - Anyone can read categories
    - Only authenticated users can create/update/delete categories

  3. Initial Data
    - Pre-populate with common categories

  4. Notes
    - This provides a dropdown list for blog post categories
    - Categories can be managed through the admin panel
*/

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read categories"
  ON categories
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert categories"
  ON categories
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update categories"
  ON categories
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete categories"
  ON categories
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS categories_slug_idx ON categories(slug);
CREATE INDEX IF NOT EXISTS categories_name_idx ON categories(name);

INSERT INTO categories (name, slug, description) VALUES
  ('SEO', 'seo', 'Search Engine Optimization tips and strategies'),
  ('Marketing', 'marketing', 'Digital marketing insights and best practices'),
  ('AI Automation', 'ai-automation', 'Artificial intelligence and automation trends'),
  ('Google Ads', 'google-ads', 'Google Ads management and optimization'),
  ('Meta Ads', 'meta-ads', 'Facebook and Instagram advertising strategies'),
  ('Web Design', 'web-design', 'Website design and development tips'),
  ('Social Media', 'social-media', 'Social media marketing strategies'),
  ('Content Marketing', 'content-marketing', 'Content creation and distribution')
ON CONFLICT (slug) DO NOTHING;
