import { createClient } from '@supabase/supabase-js';

// Environment variables or fallback credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a Supabase client if keys are provided
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Helper to check if Supabase is connected
export const isSupabaseConfigured = () => Boolean(supabase);

// Local storage key for custom uploaded gallery items (hybrid fallback)
const LOCAL_STORAGE_GALLERY_KEY = 'skt_custom_gallery_items';

/**
 * Fetch dynamic gallery items:
 * First attempts to query Supabase 'gallery_items' table.
 * If Supabase is not yet configured, falls back to browser localStorage.
 */
export async function getDynamicGalleryItems() {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('gallery_items')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && Array.isArray(data)) {
        return data;
      }
      console.warn('Supabase fetch failed, falling back to local cache:', error);
    } catch (err) {
      console.warn('Supabase error:', err);
    }
  }

  // Fallback to localStorage
  try {
    const cached = localStorage.getItem(LOCAL_STORAGE_GALLERY_KEY);
    return cached ? JSON.parse(cached) : [];
  } catch (e) {
    return [];
  }
}

/**
 * Save new item to database / cloud storage:
 */
export async function saveGalleryItem({ title, category, caption, imageFile, imageUrl }) {
  let finalImageUrl = imageUrl;

  // If Supabase is configured and image file is provided, upload to Supabase Storage bucket 'gallery'
  if (supabase && imageFile) {
    try {
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
      const filePath = `uploads/${fileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('gallery')
        .upload(filePath, imageFile, {
          cacheControl: '3600',
          upsert: false
        });

      if (!uploadError) {
        const { data: publicUrlData } = supabase.storage
          .from('gallery')
          .getPublicUrl(filePath);
        finalImageUrl = publicUrlData.publicUrl;
      } else {
        console.warn('Storage upload error, using direct URL/preview:', uploadError);
      }
    } catch (err) {
      console.warn('Supabase storage upload exception:', err);
    }
  }

  const newItem = {
    id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
    title,
    category,
    caption,
    image: finalImageUrl,
    created_at: new Date().toISOString()
  };

  // If Supabase is configured, insert row into 'gallery_items' table
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('gallery_items')
        .insert([newItem])
        .select();

      if (!error) {
        return { success: true, item: data?.[0] || newItem, storage: 'supabase' };
      }
      console.warn('Supabase insert error, saving locally:', error);
    } catch (err) {
      console.warn('Supabase insert exception:', err);
    }
  }

  // Fallback save to localStorage
  try {
    const existing = JSON.parse(localStorage.getItem(LOCAL_STORAGE_GALLERY_KEY) || '[]');
    existing.unshift(newItem);
    localStorage.setItem(LOCAL_STORAGE_GALLERY_KEY, JSON.stringify(existing));
    return { success: true, item: newItem, storage: 'local' };
  } catch (err) {
    return { success: false, error: err.message };
  }
}
