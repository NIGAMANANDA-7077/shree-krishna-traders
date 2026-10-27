import React, { useState } from 'react';
import { LuSend, LuCircleCheck } from 'react-icons/lu';
import { companyInfo, productCategories } from '../data/companyData';

export default function QuotationForm() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', category: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const msg = encodeURIComponent(
      `Hello Shree Krishna Traders,\n\nI would like to request a quotation.\n\nName: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\nProduct/Service: ${form.category}\n\nDetails:\n${form.message}\n\nPlease provide pricing at the earliest.`
    );
    setTimeout(() => {
      window.open(`https://wa.me/${companyInfo.whatsappNumber}?text=${msg}`, '_blank');
      setSubmitted(true);
      setLoading(false);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="s-card p-10 flex flex-col items-center justify-center text-center min-h-[400px] gap-6">
        <div className="w-16 h-16 rounded-full bg-[#F45F02]/10 flex items-center justify-center">
          <LuCircleCheck className="w-8 h-8 text-[#F45F02] stroke-[1.5]" />
        </div>
        <div>
          <h3 className="font-display font-black text-2xl text-[#2D241C] uppercase mb-2">Quotation Sent!</h3>
          <p className="text-sm text-[#9A8470]">Your request has been sent via WhatsApp. Our team will respond shortly.</p>
        </div>
        <button onClick={() => setSubmitted(false)} className="animated-button-ghost btn-sm">
          <span className="circle" />
          <span className="text">Send Another Request</span>
          <svg className="arr-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <svg className="arr-2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="s-card p-8 space-y-5">
      <div className="mb-2">
        <h3 className="font-display font-black text-xl text-[#2D241C] uppercase tracking-tight">Request a Quotation</h3>
        <p className="text-xs text-[#9A8470] mt-1">Fill the form — we'll respond via WhatsApp within hours.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-mono font-bold text-[#9A8470] uppercase tracking-wider mb-1.5">Full Name *</label>
          <input name="name" required value={form.name} onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.12)] text-[#2D241C] text-sm placeholder-[#C4B49A] focus:outline-none focus:border-[#F45F02] transition-colors" />
        </div>
        <div>
          <label className="block text-[10px] font-mono font-bold text-[#9A8470] uppercase tracking-wider mb-1.5">Company / Organisation</label>
          <input name="company" value={form.company} onChange={handleChange}
            placeholder="Company name"
            className="w-full px-4 py-3 rounded-xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.12)] text-[#2D241C] text-sm placeholder-[#C4B49A] focus:outline-none focus:border-[#F45F02] transition-colors" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] font-mono font-bold text-[#9A8470] uppercase tracking-wider mb-1.5">Phone Number *</label>
          <input name="phone" type="tel" required value={form.phone} onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="w-full px-4 py-3 rounded-xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.12)] text-[#2D241C] text-sm placeholder-[#C4B49A] focus:outline-none focus:border-[#F45F02] transition-colors" />
        </div>
        <div>
          <label className="block text-[10px] font-mono font-bold text-[#9A8470] uppercase tracking-wider mb-1.5">Email Address</label>
          <input name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="email@company.com"
            className="w-full px-4 py-3 rounded-xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.12)] text-[#2D241C] text-sm placeholder-[#C4B49A] focus:outline-none focus:border-[#F45F02] transition-colors" />
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-mono font-bold text-[#9A8470] uppercase tracking-wider mb-1.5">Product / Service Category *</label>
        <select name="category" required value={form.category} onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.12)] text-[#2D241C] text-sm focus:outline-none focus:border-[#F45F02] transition-colors">
          <option value="">Select a category…</option>
          {productCategories.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
          <option value="General Enquiry">General Enquiry</option>
          <option value="Project Supply Coordination">Project Supply Coordination</option>
          <option value="Bird Safety Net Installation">Bird Safety Net Installation</option>
        </select>
      </div>

      <div>
        <label className="block text-[10px] font-mono font-bold text-[#9A8470] uppercase tracking-wider mb-1.5">Project Details &amp; Requirements *</label>
        <textarea name="message" required rows={4} value={form.message} onChange={handleChange}
          placeholder="Describe your requirement — product names, quantities, grades, delivery location, and timeline..."
          className="w-full px-4 py-3 rounded-xl bg-[#FFF7EC] border border-[rgba(30,22,21,0.12)] text-[#2D241C] text-sm placeholder-[#C4B49A] focus:outline-none focus:border-[#F45F02] transition-colors resize-none" />
      </div>

      <button type="submit" disabled={loading}
        className="w-full btn-bubbles py-3.5 text-sm font-bold disabled:opacity-60 justify-center">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span>
          {loading ? 'Sending...' : 'Send via WhatsApp'}
          <LuSend className="w-4 h-4 ml-1 stroke-[2.5]" />
        </span>
      </button>
    </form>
  );
}
