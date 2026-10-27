-- ===============================================================
-- SHREE KRISHNA TRADERS - SUPABASE SQL SETUP
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard)
-- ===============================================================

-- 1. Create table for gallery items
CREATE TABLE IF NOT EXISTS public.gallery_items (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    caption TEXT,
    image TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;

-- 3. Allow public read access (so any visitor can view the images)
CREATE POLICY "Public Read Gallery" 
ON public.gallery_items 
FOR SELECT 
USING (true);

-- 4. Allow public insert access for the secret upload portal
CREATE POLICY "Public Insert Gallery" 
ON public.gallery_items 
FOR INSERT 
WITH CHECK (true);

-- 5. Create storage bucket named 'gallery'
-- In your Supabase Dashboard: Go to 'Storage' -> 'New Bucket' -> name it 'gallery' -> set to Public.
-- Or run:
INSERT INTO storage.buckets (id, name, public) 
VALUES ('gallery', 'gallery', true)
ON CONFLICT (id) DO NOTHING;

-- Policy to allow public image uploads to 'gallery' bucket
CREATE POLICY "Public Upload to Gallery Bucket" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'gallery');

CREATE POLICY "Public Read from Gallery Bucket" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'gallery');
