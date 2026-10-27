import React, { useState, useEffect } from 'react';
import { LuX, LuSend, LuCircleCheck } from 'react-icons/lu';
import { companyInfo, productCategories } from '../data/companyData';

export default function QuotationModal({ isOpen, onClose, defaultCategory, initialCategory }) {
  const activeCat = defaultCategory || initialCategory || '';
  const [form, setForm] = useState({ name: '', phone: '', category: activeCat, message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setForm(prev => ({ ...prev, category: defaultCategory || initialCategory || prev.category }));
      setSubmitted(false);
    }
  }, [isOpen, defaultCategory, initialCategory]);

  if (!isOpen) return null;

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const msg = encodeURIComponent(
      `Hello Shree Krishna Traders,\n\nQuotation Request:\nName: ${form.name}\nPhone: ${form.phone}\nCategory: ${form.category}\n\nDetails: ${form.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/${companyInfo.whatsappNumber}?text=${msg}`, '_blank');
      setSubmitted(true);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4" onClick={onClose}>
      <div className="absolute inset-0 bg-[#1A1208]/70 backdrop-blur-lg" />
      <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[rgba(30,22,21,0.1)] overflow-hidden"
        onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-[rgba(30,22,21,0.08)] bg-[#FFF7EC]">
          <div>
            <div className="s-pill-orange text-[9px] mb-1">QUOTATION DESK</div>
            <h2 className="font-display font-black text-lg text-[#1A1208] uppercase">Request a Quotation</h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-white border border-[rgba(30,22,21,0.1)] flex items-center justify-center hover:bg-[#F45F02] hover:text-white transition-colors">
            <LuX className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        <div className="p-7">
          {submitted ? (
            <div className="flex flex-col items-center text-center gap-5 py-8">
              <div className="w-14 h-14 rounded-full bg-[#F45F02]/10 flex items-center justify-center">
                <LuCircleCheck className="w-7 h-7 text-[#F45F02]" />
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-[#1A1208] uppercase mb-1">Request Sent!</h3>
                <p className="text-sm text-[#9A8470]">We'll respond via WhatsApp shortly.</p>
              </div>
              <button onClick={() => { setSubmitted(false); onClose(); }} className="cssbuttons-io btn-sm text-sm">
                <span>Close Window</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono font-bold text-[#9A8470] uppercase tracking-wider mb-1.5">Name *</label>
                <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.12)] text-[#1A1208] text-sm placeholder-[#C4B49A] focus:outline-none focus:border-[#F45F02] transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-mono font-bold text-[#9A8470] uppercase tracking-wider mb-1.5">Phone *</label>
                <input name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.12)] text-[#1A1208] text-sm placeholder-[#C4B49A] focus:outline-none focus:border-[#F45F02] transition-colors" />
              </div>
              <div>
                <label className="block text-[10px] font-mono font-bold text-[#9A8470] uppercase tracking-wider mb-1.5">Category</label>
                <select name="category" value={form.category} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.12)] text-[#1A1208] text-sm focus:outline-none focus:border-[#F45F02] transition-colors">
                  <option value="">Select category…</option>
                  {productCategories.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-mono font-bold text-[#9A8470] uppercase tracking-wider mb-1.5">Details *</label>
                <textarea name="message" required rows={3} value={form.message} onChange={handleChange}
                  placeholder="Products, quantities, delivery location..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.12)] text-[#1A1208] text-sm placeholder-[#C4B49A] focus:outline-none focus:border-[#F45F02] transition-colors resize-none" />
              </div>
              <button type="submit" disabled={loading} className="w-full btn-bubbles py-3.5 text-sm font-bold disabled:opacity-60 justify-center">
                <span /><span /><span /><span /><span />
                <span>
                  {loading ? 'Sending...' : 'Send via WhatsApp'}
                  <LuSend className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
