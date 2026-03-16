'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import { email as copy } from '@/lib/siteCopy/contactCopy.json';

interface FormState {
  name: string;
  email: string;
  serviceType: string;
  message: string;
}

const INITIAL_STATE: FormState = { name: '', email: '', serviceType: '', message: '' };

export default function EmailBlock() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Send failed');
      setStatus('success');
      setForm(INITIAL_STATE);
    } catch {
      setStatus('error');
    }
  };

  const fieldClass = 'w-full bg-default px-3 py-3 font-serif text-xs text-black placeholder:text-[#b3b3b3] outline-none focus:ring-1 focus:ring-ocean';

  return (
    <div className="bg-ocean-alt flex flex-col gap-4 px-4 pt-12 pb-4 text-white">
      <div className="grid grid-cols-[175px_auto] gap-4">
        {/* Left: label */}
        <p className="w-24 shrink-0 font-serif text-lg leading-snug">{copy.heading}</p>

        {/* Right: form */}
        {status === 'success' ? (
          <div className="flex flex-1 items-center justify-center py-8">
            <p className="text-center font-serif text-sm">Thanks! We&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-3">
            <input type="text" placeholder={copy.fields.name} value={form.name} onChange={handleChange('name')} required className={fieldClass} />
            <input type="email" placeholder={copy.fields.email} value={form.email} onChange={handleChange('email')} required className={fieldClass} />
            <div className="relative">
              <select value={form.serviceType} onChange={handleChange('serviceType')} required className={`${fieldClass} appearance-none`}>
                <option value="" disabled>
                  {copy.fields.serviceType}
                </option>
                {copy.serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 text-[10px] text-[#b3b3b3]">▼</span>
            </div>
            <textarea
              placeholder={copy.fields.message}
              value={form.message}
              onChange={handleChange('message')}
              rows={6}
              required
              className={`${fieldClass} mt-2 resize-none`}
            />
            {status === 'error' && <p className="font-serif text-xs text-white/80">Something went wrong — please try again.</p>}
            <div className="flex justify-end">
              <Button className="px-6 py-1.5 text-sm" onClick={undefined}>
                {status === 'loading' ? 'Sending…' : copy.submit}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
