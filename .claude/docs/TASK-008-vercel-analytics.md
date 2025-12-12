# TASK-008: Setup Vercel Analytics

**Objective:** Add Vercel Analytics to track website visitors and performance.

**Prerequisites:** TASK-007 completed and verified

**Estimated Time:** 15-20 minutes

---

## Background: Why Vercel Analytics?

Vercel Analytics provides:
- **Web Analytics:** Page views, unique visitors, top pages
- **Speed Insights:** Real-world performance metrics
- **Privacy-friendly:** No cookies, GDPR/CCPA compliant
- **Zero configuration:** Works automatically with Vercel deployments
- **Free tier:** Sufficient for most projects

Perfect for this project since we're deploying to Vercel anyway.

---

## Steps

### 1. Install Vercel Analytics

```bash
npm install @vercel/analytics @vercel/speed-insights
```

### 2. Add Analytics to Root Layout

Update `src/app/layout.tsx`:

```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hola España - Legal and Relocation Experts',
  description: 'Expert immigration services for US citizens relocating to Spain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        
        {/* Vercel Analytics */}
        <Analytics />
        <SpeedInsights />
        
        {/* Development-only playground link */}
        {process.env.NODE_ENV === 'development' && (
          <a 
            href="/playground" 
            className="fixed bottom-6 right-6 z-50 bg-brand-rust text-white px-4 py-3 rounded-full shadow-lg hover:bg-brand-brick transition-colors flex items-center gap-2 font-medium"
          >
            <span>🛝</span>
            <span>Playground</span>
          </a>
        )}
      </body>
    </html>
  )
}
```

### 3. Create Analytics Utility (Optional but Recommended)

Create `src/lib/utils/analytics.ts` for custom event tracking:

```typescript
/**
 * Track custom events in Vercel Analytics
 * Note: Custom events may require Vercel Pro plan
 */

/**
 * Track contact form submission
 * @param formName - Name of the form submitted
 */
export const trackContactForm = (formName: string) => {
  if (typeof window !== 'undefined' && window.va) {
    window.va('event', {
      name: 'contact_form_submit',
      data: { form: formName }
    })
  }
}

/**
 * Track package view
 * @param packageName - Name of the package viewed
 */
export const trackPackageView = (packageName: string) => {
  if (typeof window !== 'undefined' && window.va) {
    window.va('event', {
      name: 'package_view',
      data: { package: packageName }
    })
  }
}

/**
 * Track blog post read
 * @param postTitle - Title of the blog post
 */
export const trackBlogRead = (postTitle: string) => {
  if (typeof window !== 'undefined' && window.va) {
    window.va('event', {
      name: 'blog_read',
      data: { title: postTitle }
    })
  }
}

/**
 * Track Calendly scheduler click
 */
export const trackCalendlyClick = () => {
  if (typeof window !== 'undefined' && window.va) {
    window.va('event', {
      name: 'calendly_click',
      data: { type: 'scheduler' }
    })
  }
}

/**
 * Track external link clicks
 * @param url - URL that was clicked
 * @param label - Label for the link
 */
export const trackExternalLink = (url: string, label?: string) => {
  if (typeof window !== 'undefined' && window.va) {
    window.va('event', {
      name: 'external_link_click',
      data: { url, label }
    })
  }
}

// TypeScript declaration for window.va
declare global {
  interface Window {
    va?: (
      event: 'event',
      data: { name: string; data?: Record<string, any> }
    ) => void
  }
}
```

### 4. Add TypeScript Types

Create or update `src/types/vercel.d.ts`:

```typescript
/// <reference types="@vercel/analytics" />
/// <reference types="@vercel/speed-insights" />
```

---

## Verification Checklist

- [ ] @vercel/analytics and @vercel/speed-insights installed
- [ ] Analytics components added to layout.tsx
- [ ] No TypeScript errors
- [ ] Site still runs in development
- [ ] analytics.ts utility file created
- [ ] Type declarations added

## Review Points

### 1. Development Testing

In development mode:
- Analytics won't send real data
- Check console for any errors
- Verify no build warnings
- App should run normally

### 2. Component Integration Check

Verify both components are imported:
```typescript
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
```

And rendered in layout:
```tsx
<Analytics />
<SpeedInsights />
```

### 3. Build Test

Test production build:
```bash
npm run build
```

Should build without errors or warnings about analytics.

### 4. TypeScript Check

Run TypeScript check:
```bash
npx tsc --noEmit
```

Should have no errors related to analytics types.

---

## Understanding Vercel Analytics

### Two Components

**1. Analytics**
- Tracks page views
- Tracks custom events (Pro plan)
- Privacy-friendly (no cookies)
- Data appears in Vercel dashboard

**2. SpeedInsights**
- Measures real-world performance
- Tracks Core Web Vitals:
  - LCP (Largest Contentful Paint)
  - FID (First Input Delay)
  - CLS (Cumulative Layout Shift)
- Shows performance scores in dashboard

### How It Works

When deployed to Vercel:
1. Analytics automatically activates
2. No configuration needed
3. Data appears in project dashboard
4. View at: https://vercel.com/[team]/[project]/analytics

In development:
- Analytics are disabled
- No data is sent
- No impact on development

---

## Viewing Analytics

### Access Dashboard

1. Go to https://vercel.com
2. Select your project
3. Click "Analytics" tab
4. View metrics:
   - Page views
   - Unique visitors
   - Top pages
   - Referrers
   - Devices/browsers

### Speed Insights

Click "Speed Insights" tab to see:
- Real User Monitoring data
- Core Web Vitals scores
- Performance over time
- Page-by-page breakdowns

---

## Custom Event Tracking (Pro Feature)

The utility functions we created support custom events, but these require Vercel Pro plan:

```tsx
'use client'

import { trackContactForm } from '@/lib/utils/analytics'

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // ... form logic
    trackContactForm('main-contact')
  }
  
  return <form onSubmit={handleSubmit}>...</form>
}
```

**Note:** Custom events are optional. Basic page view tracking works on all plans.

---

## Common Issues & Solutions

**Issue:** Analytics not showing in dashboard  
**Solution:** Must deploy to Vercel first. Doesn't work on localhost or other hosts.

**Issue:** TypeScript errors about va  
**Solution:** Add type declarations in vercel.d.ts

**Issue:** Build fails with analytics error  
**Solution:** Ensure packages are installed: `npm install @vercel/analytics @vercel/speed-insights`

**Issue:** Can't see custom events  
**Solution:** Custom events require Pro plan. Check your Vercel plan tier.

**Issue:** Analytics slowing down site  
**Solution:** Vercel Analytics is optimized and shouldn't impact performance. Check other factors.

---

## Privacy Considerations

### GDPR/CCPA Compliance

Vercel Analytics is privacy-friendly:
- ✅ No cookies
- ✅ No personal data collected
- ✅ Compliant with GDPR, CCPA, PECR
- ✅ No consent banners needed

### Data Retention

- Data retained for 13 months
- Aggregated, anonymous data
- No IP addresses stored
- No user tracking across sites

### Privacy Policy

Still recommend having a privacy policy that mentions:
- "We use Vercel Analytics to understand site usage"
- "No personal data or cookies are used"
- Link to Vercel's privacy policy

---

## Alternative: Audience Insights (Pro)

Vercel Pro offers additional features:
- Funnel analysis
- Custom event tracking
- Advanced filtering
- Data exports

For most projects, the free tier is sufficient.

---

## Monitoring Best Practices

### What to Track

**Essential:**
- Page views (automatic)
- Top pages (automatic)
- Performance metrics (automatic)

**Optional (with custom events):**
- Form submissions
- Button clicks
- External links
- Package selections
- Blog engagement

### Dashboard Review Schedule

- Weekly: Check page views and trends
- Monthly: Review top pages and performance
- Quarterly: Analyze patterns, adjust strategy

---

## Next Steps

After verification passes:
- Deploy to Vercel to see analytics in action
- Review additional Sanity schemas (see SANITY-SCHEMAS-REMAINING.md)
- Begin building production pages
- Implement remaining components

---

## Notes for AI Agents

- Analytics only work after Vercel deployment
- Don't worry about custom events initially
- Focus on basic page view tracking first
- Custom event tracking requires Pro plan
- Update Context7 with analytics setup
- Document any tracking decisions in Context7
