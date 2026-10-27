import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  LuCloudUpload, 
  LuCheck, 
  LuImage, 
  LuLock, 
  LuSparkles, 
  LuExternalLink, 
  LuArrowUpRight, 
  LuDatabase, 
  LuTrash2, 
  LuEye,
  LuInfo
} from 'react-icons/lu';
import { saveGalleryItem, getDynamicGalleryItems, isSupabaseConfigured } from '../lib/supabase';

const GALLERY_CATEGORIES = [
  'Anchoring Systems',
  'Construction Chemicals',
  'Waterproofing Solutions',
  'Industrial Fasteners',
  'Welding & Cutting',
  'Surface Finishing',
  'Power Tools',
  'Hand Tools',
  'Safety Products',
  'Project Supplies'
];

export default function UploadPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Form states
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(GALLERY_CATEGORIES[0]);
  const [caption, setCaption] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successInfo, setSuccessInfo] = useState(null);

  // Recent uploaded items
  const [uploadedItems, setUploadedItems] = useState([]);
  const [loadingItems, setLoadingItems] = useState(false);

  // Check simple session auth
  useEffect(() => {
    const authed = sessionStorage.getItem('skt_upload_auth') === 'true';
    if (authed) setIsAuthenticated(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Default admin PIN for Shree Krishna Traders
    if (password === 'admin123' || password === 'skt2026') {
      setIsAuthenticated(true);
      sessionStorage.setItem('skt_upload_auth', 'true');
      setErrorMsg('');
    } else {
      setErrorMsg('Incorrect security passkey. Try "admin123" or "skt2026".');
    }
  };

  const loadRecentItems = async () => {
    setLoadingItems(true);
    const items = await getDynamicGalleryItems();
    setUploadedItems(items);
    setLoadingItems(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadRecentItems();
    }
  }, [isAuthenticated]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    if (!title || !caption || (!imageFile && !imagePreview)) {
      alert('Please provide Title, Category, Caption, and an Image file.');
      return;
    }

    setIsSubmitting(true);
    setSuccessInfo(null);

    try {
      const res = await saveGalleryItem({
        title,
        category,
        caption,
        imageFile,
        imageUrl: imagePreview
      });

      if (res.success) {
        setSuccessInfo({
          storage: res.storage,
          title: res.item.title
        });
        // Reset form
        setTitle('');
        setCaption('');
        setImageFile(null);
        setImagePreview('');
        // Refresh list
        loadRecentItems();
      } else {
        alert('Upload failed: ' + (res.error || 'Unknown error'));
      }
    } catch (err) {
      alert('Upload exception: ' + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isConnected = isSupabaseConfigured();

  // ─── 1. Password Protection Gate ─────────────────────────
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen s-section-cream flex items-center justify-center p-4 pt-32">
        <div className="s-card p-8 sm:p-10 max-w-md w-full bg-white border border-[rgba(30,22,21,0.12)] shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.1)] flex items-center justify-center text-[#F45F02] mb-6">
            <LuLock className="w-7 h-7" />
          </div>
          <div className="s-pill mb-2">SECRET PORTAL</div>
          <h1 className="font-display font-black text-2xl sm:text-3xl text-[#1A1208] uppercase mb-2">
            Gallery Admin Upload
          </h1>
          <p className="text-xs text-[#6B5A49] leading-relaxed mb-6">
            Enter the authorized administrator passkey to upload new products to the live site gallery.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#9A8470] mb-1.5">
                Admin Passkey
              </label>
              <input
                type="password"
                placeholder="Enter password (default: admin123)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.12)] text-[#1A1208] text-sm focus:outline-none focus:border-[#F45F02] transition-colors"
                autoFocus
              />
            </div>
            {errorMsg && (
              <p className="text-xs text-red-500 font-semibold">{errorMsg}</p>
            )}

            <button
              type="submit"
              className="w-full cssbuttons-io py-3 justify-center text-xs font-bold"
            >
              <span>Unlock Upload Desk</span>
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-[rgba(30,22,21,0.08)] flex items-center justify-between text-[11px] font-mono text-[#9A8470]">
            <span>Hint: default passkey is <strong>admin123</strong></span>
            <Link to="/" className="text-[#F45F02] hover:underline">Back to Site</Link>
          </div>
        </div>
      </div>
    );
  }

  // ─── 2. Authenticated Upload Dashboard ───────────────────
  return (
    <div className="min-h-screen s-section-cream pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[rgba(30,22,21,0.1)]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="s-pill text-[10px] bg-[#FFF7EC] border-[#F45F02]/30 text-[#F45F02] font-mono font-black">
                ADMIN ACCESS GRANTED
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold ${
                isConnected 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-300' 
                  : 'bg-amber-50 text-amber-800 border border-amber-300'
              }`}>
                <LuDatabase className="w-3.5 h-3.5" />
                <span>{isConnected ? 'Supabase Live Connected' : 'Local Hybrid Mode Active'}</span>
              </span>
            </div>

            <h1 className="s-heading text-4xl sm:text-6xl text-[#1A1208]">
              GALLERY UPLOAD PORTAL.
            </h1>
            <p className="text-sm text-[#5C4D3E] max-w-2xl mt-2 leading-relaxed">
              Upload real photographs from your device or job site. Once saved, images instantly appear on the live <strong>Gallery Page</strong> and <strong>Home Page Marquee</strong>!
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/gallery"
              target="_blank"
              className="cssbuttons-io btn-sm text-xs"
            >
              <span>
                <LuEye className="w-3.5 h-3.5 mr-1" />
                View Live Gallery
                <LuExternalLink className="w-3 h-3 ml-1" />
              </span>
            </Link>
            <button
              onClick={() => {
                sessionStorage.removeItem('skt_upload_auth');
                setIsAuthenticated(false);
              }}
              className="px-3.5 py-2 rounded-full border border-[rgba(30,22,21,0.15)] text-xs font-mono font-bold text-[#5C4D3E] hover:bg-black/5"
            >
              Lock
            </button>
          </div>
        </div>

        {/* Database Status Alert Banner */}
        <div className="p-5 rounded-2xl bg-white border border-[rgba(30,22,21,0.1)] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFF7EC] text-[#F45F02] flex items-center justify-center shrink-0">
              <LuInfo className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-[#1A1208]">
                Free Cloud Database Guide (Supabase + Vercel / Netlify)
              </h4>
              <p className="text-xs text-[#6B5A49] leading-relaxed mt-0.5">
                Current uploads are saved safely in your browser storage and will be immediately synced when you add your free <strong>Supabase</strong> credentials in <code>.env</code>.
              </p>
            </div>
          </div>
          <a
            href="https://supabase.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono font-bold text-[#F45F02] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Supabase Free Dashboard</span>
            <LuArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Main Grid: Upload Form (Left) + Uploaded List (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Form */}
          <div className="lg:col-span-7 s-card p-6 sm:p-8 bg-white border border-[rgba(30,22,21,0.12)] shadow-xl">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[rgba(30,22,21,0.08)]">
              <LuCloudUpload className="w-5 h-5 text-[#F45F02]" />
              <h3 className="font-display font-black text-lg text-[#1A1208] uppercase tracking-tight">
                New Product Image Entry
              </h3>
            </div>

            {successInfo && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-center gap-3 text-xs animate-in fade-in">
                <LuCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <strong>Successfully Uploaded!</strong> "{successInfo.title}" is now added to the gallery. (Stored via {successInfo.storage === 'supabase' ? 'Supabase Cloud DB' : 'Instant Local Storage'}).
                </div>
              </div>
            )}

            <form onSubmit={handleUploadSubmit} className="space-y-5">
              
              {/* Image Picker */}
              <div>
                <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#9A8470] mb-2">
                  Select Product Photo *
                </label>
                
                <div className="relative border-2 border-dashed border-[rgba(30,22,21,0.15)] hover:border-[#F45F02]/60 rounded-2xl p-6 text-center bg-[#FFFDF9] transition-all cursor-pointer group">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                    required={!imagePreview}
                  />

                  {imagePreview ? (
                    <div className="relative flex flex-col items-center">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="max-h-52 w-auto object-contain rounded-xl shadow-md border border-[rgba(30,22,21,0.1)] mb-3"
                      />
                      <span className="text-xs font-mono font-bold text-[#F45F02] group-hover:underline">
                        Click or drag to change image
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-4">
                      <div className="w-12 h-12 rounded-full bg-[#FFF7EC] flex items-center justify-center text-[#F45F02] mb-3 group-hover:scale-110 transition-transform">
                        <LuImage className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-bold text-[#1A1208]">
                        Click to upload image or drag &amp; drop
                      </span>
                      <span className="text-[11px] text-[#9A8470] mt-1">
                        PNG, JPG, JPEG or WEBP (Direct site photos supported)
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#9A8470] mb-1.5">
                  Product / Item Title *
                </label>
                <input
                  type="text"
                  placeholder="e.g. M24 Grade 10.9 Structural Foundation Bolts"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.12)] text-[#1A1208] text-sm focus:outline-none focus:border-[#F45F02] transition-colors"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#9A8470] mb-1.5">
                  Category Division *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.12)] text-[#1A1208] text-sm focus:outline-none focus:border-[#F45F02] transition-colors font-medium"
                >
                  {GALLERY_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Caption / Description */}
              <div>
                <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#9A8470] mb-1.5">
                  Technical Caption &amp; Application Details *
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe the application, manufacturer brand, site usage, or test grade specifications..."
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.12)] text-[#1A1208] text-sm focus:outline-none focus:border-[#F45F02] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-bubbles py-4 text-sm font-bold justify-center disabled:opacity-60"
              >
                <span /><span /><span /><span /><span />
                <span>
                  {isSubmitting ? 'Uploading to Database...' : 'Save & Publish to Gallery'}
                  <LuArrowUpRight className="w-4 h-4 ml-1 stroke-[2.5]" />
                </span>
              </button>
            </form>
          </div>

          {/* Right: Recently Added Images */}
          <div className="lg:col-span-5 space-y-4">
            <div className="s-card p-6 bg-white border border-[rgba(30,22,21,0.12)] shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[rgba(30,22,21,0.08)]">
                <div className="flex items-center gap-2">
                  <LuSparkles className="w-4 h-4 text-[#F45F02]" />
                  <h3 className="font-display font-black text-base text-[#1A1208] uppercase tracking-tight">
                    Custom Added Photos ({uploadedItems.length})
                  </h3>
                </div>
                <button
                  onClick={loadRecentItems}
                  className="text-[11px] font-mono text-[#F45F02] hover:underline"
                >
                  Refresh
                </button>
              </div>

              {loadingItems ? (
                <div className="py-12 text-center text-xs font-mono text-[#9A8470]">
                  Loading gallery items...
                </div>
              ) : uploadedItems.length === 0 ? (
                <div className="py-12 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#FFF7EC] flex items-center justify-center text-[#9A8470] mx-auto">
                    <LuImage className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-bold text-[#5C4D3E]">No Custom Uploads Yet</p>
                  <p className="text-[11px] text-[#9A8470] max-w-xs mx-auto">
                    Use the form on the left to upload your first custom product photograph.
                  </p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[550px] overflow-y-auto pr-1">
                  {uploadedItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-[#FFFDF9] border border-[rgba(30,22,21,0.08)] flex items-start gap-3 hover:border-[#F45F02]/40 transition-colors group"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-lg bg-black/5 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] font-mono font-bold text-[#F45F02] uppercase block">
                          {item.category}
                        </span>
                        <h4 className="text-xs font-bold text-[#1A1208] truncate">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-[#6B5A49] line-clamp-1 mt-0.5">
                          {item.caption}
                        </p>
                        <span className="text-[9px] font-mono text-[#9A8470] block mt-1">
                          {item.created_at ? new Date(item.created_at).toLocaleDateString() : 'Just now'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Tips */}
            <div className="s-card p-5 bg-[#FFF7EC] border border-[rgba(30,22,21,0.08)] text-xs space-y-2 text-[#5C4D3E]">
              <div className="font-bold text-[#1A1208] uppercase text-[11px] font-mono flex items-center gap-1.5">
                <span>💡 Production Deployment Tip</span>
              </div>
              <p className="leading-relaxed text-[11px]">
                When hosting on Vercel or Netlify, simply create a free project at <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-[#F45F02] font-bold underline">supabase.com</a> and add <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> to your environment variables.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
