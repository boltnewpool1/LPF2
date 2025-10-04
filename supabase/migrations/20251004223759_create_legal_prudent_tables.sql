/*
  # Legal Prudent Fraternity Database Schema

  ## Overview
  This migration creates the core tables for the Legal Prudent Fraternity website to store:
  - Contact form submissions
  - Legal aid requests
  - Membership applications
  - Newsletter subscriptions
  - Blog post data
  
  ## New Tables
  
  ### `contact_submissions`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Contact name
  - `email` (text) - Contact email
  - `subject` (text) - Message subject
  - `message` (text) - Message content
  - `created_at` (timestamptz) - Submission timestamp
  
  ### `legal_aid_requests`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Requester name
  - `email` (text) - Requester email
  - `phone` (text) - Contact phone
  - `case_type` (text) - Type of legal case
  - `description` (text) - Case description
  - `urgency` (text) - Urgency level
  - `service_type` (text) - Type of service requested
  - `status` (text) - Request status (default: 'pending')
  - `created_at` (timestamptz) - Request timestamp
  
  ### `membership_applications`
  - `id` (uuid, primary key) - Unique identifier
  - `full_name` (text) - Applicant full name
  - `email` (text) - Applicant email
  - `phone` (text) - Contact phone
  - `institution` (text) - Institution name
  - `profession` (text) - Professional role
  - `membership_tier` (text) - Selected membership tier
  - `experience` (text) - Years of experience
  - `interests` (text) - Areas of interest
  - `expectations` (text) - Membership expectations
  - `status` (text) - Application status (default: 'pending')
  - `created_at` (timestamptz) - Application timestamp
  
  ### `newsletter_subscriptions`
  - `id` (uuid, primary key) - Unique identifier
  - `email` (text, unique) - Subscriber email
  - `subscribed` (boolean) - Subscription status (default: true)
  - `created_at` (timestamptz) - Subscription timestamp
  
  ### `blog_posts`
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Post title
  - `excerpt` (text) - Post excerpt
  - `content` (text) - Full post content
  - `category` (text) - Post category
  - `author` (text) - Author name
  - `tags` (text[]) - Post tags array
  - `read_time` (text) - Estimated read time
  - `published` (boolean) - Publication status (default: false)
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp
  
  ## Security
  - RLS enabled on all tables
  - Public read access for blog posts (published only)
  - Insert-only policies for form submissions (no user authentication required)
  - Admin-only access for status updates and management
*/

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create legal_aid_requests table
CREATE TABLE IF NOT EXISTS legal_aid_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  case_type text NOT NULL,
  description text NOT NULL,
  urgency text NOT NULL DEFAULT 'normal',
  service_type text NOT NULL DEFAULT 'free',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE legal_aid_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit legal aid request"
  ON legal_aid_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create membership_applications table
CREATE TABLE IF NOT EXISTS membership_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  institution text,
  profession text NOT NULL,
  membership_tier text NOT NULL DEFAULT 'student',
  experience text,
  interests text NOT NULL,
  expectations text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE membership_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit membership application"
  ON membership_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  author text NOT NULL,
  tags text[] DEFAULT '{}',
  read_time text DEFAULT '5 min read',
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  TO anon
  USING (published = true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_legal_aid_created_at ON legal_aid_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_legal_aid_status ON legal_aid_requests(status);
CREATE INDEX IF NOT EXISTS idx_membership_created_at ON membership_applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_membership_status ON membership_applications(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_blog_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_created_at ON blog_posts(created_at DESC);
