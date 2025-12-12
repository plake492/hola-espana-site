# Next Steps - After Initial Setup

After completing TASK-001 through TASK-008, you have the foundation. Here's what comes next.

---

## Immediate Next Steps (Week 2-3)

### 1. Complete Sanity Schemas

Create the remaining document types:

**Service Schema** (`sanity/schemas/documents/service.ts`)

- Used for: Visa services, real estate services, etc.
- Fields: title, slug, icon, shortDescription, description, order

**Package Schema** (`sanity/schemas/documents/package.ts`)

- Used for: Essentials, Complete, Premium packages
- Fields: name, tier, price, priceNote, description, features, highlighted, order

**Team Member Schema** (`sanity/schemas/documents/teamMember.ts`)

- Used for: Attorney bio, team bios
- Fields: name, role, image, bio, credentials, languages

See `SANITY-SCHEMAS-REMAINING.md` for complete code.

---

### 2. Build Production Page Layouts

Start with homepage:

**Homepage Sections:**

1. Hero (value proposition + CTA)
2. Services overview (3 cards)
3. Why choose us (2-column)
4. Testimonials
5. Final CTA

**Files to Create:**

- `src/components/sections/Hero.tsx`
- `src/components/sections/ServicesGrid.tsx`
- `src/components/sections/WhyChooseUs.tsx`
- `src/components/sections/Testimonials.tsx`
- `src/components/sections/FinalCTA.tsx`

**Then update:**

- `src/app/page.tsx` - Compose sections

---

### 3. Create Layout Components

**Header/Navigation:**

- `src/components/layout/Header.tsx`
- Logo
- Navigation menu (desktop + mobile)
- CTA button (Schedule Consultation)

**Footer:**

- `src/components/layout/Footer.tsx`
- Links (pages, services, legal)
- Contact info
- Social media links
- Copyright

**Update:**

- `src/app/layout.tsx` - Add Header and Footer

---

### 4. Implement Blog System

**Blog Listing Page:**

- `src/app/blog/page.tsx`
- Fetch posts from Sanity
- Display as grid with images
- Filter by category (optional)
- Pagination (if many posts)

**Blog Post Page:**

- `src/app/blog/[slug]/page.tsx`
- Dynamic route for each post
- Fetch post by slug
- Render PortableText body
- Show meta info (date, category)
- Related posts (optional)

**Components:**

- `src/components/blog/PostCard.tsx` - For listing
- `src/components/blog/PostHeader.tsx` - For post page
- `src/components/sanity/PortableText.tsx` - Render rich text

---

## Mid-Project Tasks (Week 3-4)

### 5. Build Other Pages

**About Page** (`src/app/about/page.tsx`)

- Attorney bio from Sanity
- Personal story
- Credentials and experience
- Why immigration law
- Why Spain

**Services Page** (`src/app/services/page.tsx`)

- Fetch services from Sanity
- Display in grid or sections
- Link to packages

**Packages Page** (`src/app/packages/page.tsx`)

- Fetch packages from Sanity
- 3-column layout for tiers
- Pricing display
- Feature comparison
- CTA to contact/schedule

**Contact Page** (`src/app/contact/page.tsx`)

- Contact form
- Calendly embed
- Contact information
- Map (optional)

---

### 6. Form Implementation

**Contact Form Component:**

```tsx
src / components / forms / ContactForm.tsx;
```

**Features:**

- Name, email, phone, message fields
- Form validation (react-hook-form or native)
- Submit to email service or Sanity
- Success/error states
- Track with Vercel Analytics

**Email Service Options:**

1. Vercel API route + Resend
2. Vercel API route + SendGrid
3. FormSubmit (simplest, third-party)
4. Save to Sanity (review in Studio)

---

### 7. Calendly Integration

**Simple Approach:**

```tsx
// In contact page or separate /schedule page
<Script src="https://assets.calendly.com/assets/external/widget.js" />
<div
  className="calendly-inline-widget"
  data-url="https://calendly.com/[username]/30min"
  style={{ minWidth: '320px', height: '700px' }}
/>
```

**Button Trigger:**

```tsx
<Button
  onClick={() =>
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/[username]/30min',
    })
  }
>
  Schedule Consultation
</Button>
```

---

### 8. Image Optimization

**Sanity Image Component:**

```tsx
src / components / sanity / SanityImage.tsx;
```

Use `next/image` with Sanity's image URLs:

- Automatic optimization
- Responsive sizing
- Lazy loading
- Blur placeholder

**Usage:**

```tsx
import { urlFor } from '@/lib/sanity/image';
<Image src={urlFor(image).url()} alt={image.alt} width={800} height={600} />;
```

---

## Polish Phase (Week 4-5)

### 9. Animations

Add FadeIn animations to key elements:

- Section headings
- Service cards
- Package cards
- Testimonials

**Don't overdo it** - use sparingly for impact.

---

### 10. SEO Implementation

**Meta Tags:**
Create `src/components/SEO.tsx` component for each page:

- Title
- Description
- Open Graph tags
- Twitter Card tags

**Sitemap:**
Use Next.js to generate:

```tsx
// src/app/sitemap.ts
export default function sitemap() {
  return [
    { url: '/', lastModified: new Date() },
    { url: '/about', lastModified: new Date() },
    // ...
  ];
}
```

**Robots.txt:**

```tsx
// src/app/robots.ts
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://holaespana.com/sitemap.xml',
  };
}
```

---

### 11. Performance Optimization

**Check and Improve:**

- [ ] Lighthouse score (target 90+)
- [ ] Image optimization (all images next/image)
- [ ] Font optimization (next/font)
- [ ] Code splitting (lazy loading)
- [ ] Bundle size (analyze with webpack-bundle-analyzer)

**Core Web Vitals:**

- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1

---

### 12. Responsive Testing

Test on:

- [ ] Desktop (Chrome, Safari, Firefox)
- [ ] Tablet (iPad, Android tablet)
- [ ] Mobile (iPhone, Android phone)
- [ ] Different screen sizes (375px to 1920px+)

Check:

- Navigation menu (mobile hamburger)
- Form layouts
- Image sizing
- Text readability
- Button sizes (touch targets)

---

## Pre-Launch (Week 5-6)

### 13. Content Migration

Work with client to:

- Write/gather all page content
- Create initial blog posts (5 recommended)
- Get professional photos
- Collect testimonials
- Finalize service descriptions
- Set package pricing

**Input into Sanity:**

- Create posts in Studio
- Upload images
- Set up services
- Configure packages
- Add team members

---

### 14. Client Training

**CMS Training Session (1-2 hours):**

1. Sanity Studio overview
2. Creating blog posts
3. Adding images
4. Publishing/unpublishing
5. Editing services/packages
6. Common issues and fixes

**Training Materials:**

- Screen recording of session
- Written documentation
- Quick reference guide
- Contact info for support

---

### 15. Testing Phase

**Functional Testing:**

- [ ] All links work
- [ ] Forms submit correctly
- [ ] Calendly integration works
- [ ] Images load properly
- [ ] Mobile navigation works
- [ ] Blog posts display correctly

**Content Testing:**

- [ ] No lorem ipsum
- [ ] All images have alt text
- [ ] SEO meta tags filled
- [ ] Legal pages (privacy, terms)
- [ ] Contact info correct

**Browser Testing:**

- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Mobile browsers

---

### 16. Deployment

**Pre-Deploy Checklist:**

- [ ] Environment variables set in Vercel
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Analytics configured
- [ ] Error tracking set up (optional: Sentry)
- [ ] Sanity CORS configured for production domain

**Deploy Process:**

1. Push to GitHub
2. Connect to Vercel
3. Configure domain
4. Test production build
5. Final smoke tests

---

## Post-Launch (Week 6-7+)

### 17. 30-Day Support Period

**Available for:**

- Bug fixes
- Minor adjustments
- Technical issues
- CMS questions

**Not included:**

- New features
- Content changes
- Design overhauls
- Additional pages

---

### 18. Monitoring

**Weekly Checks:**

- Vercel Analytics (traffic)
- Speed Insights (performance)
- Form submissions
- Any errors in logs

**Monthly:**

- SEO rankings (Google Search Console)
- Blog engagement
- Conversion metrics
- Competitor analysis

---

### 19. Growth Opportunities

**Future Enhancements:**

- Email newsletter signup
- Resource downloads (visa guides)
- Video testimonials
- Live chat integration
- Multi-language (English/Spanish)
- Client portal (for existing clients)

**SEO Continued:**

- Regular blog posts (2-4 per month)
- Backlink building
- Guest posting
- Local directory listings

---

## Project Management Tips

### Staying Organized

1. **Use Context7** - Update after each session
2. **Document Decisions** - Why you chose X over Y
3. **Version Control** - Commit often with clear messages
4. **Test Early** - Don't wait until the end
5. **Communicate Often** - Weekly updates to client

### Managing Scope

**When Client Asks for "Just One More Thing":**

1. Acknowledge the request
2. Check if it's in scope
3. If not, offer to quote separately
4. Add to "Phase 2" list
5. Stay friendly but firm

**Red Flags:**

- "While you're at it..."
- "This should be quick..."
- "Can't you just..."

**Response:**
"That's a great idea! It's outside our current scope, but I'd be happy to quote it as an add-on or include it in Phase 2."

---

## Success Criteria

The project is successful when:

- ✅ Client can manage content independently
- ✅ Site is fast, responsive, and bug-free
- ✅ All core pages are complete and polished
- ✅ SEO foundation is solid
- ✅ Analytics are tracking properly
- ✅ Contact forms and Calendly work
- ✅ Client is happy with the result
- ✅ Project stays within budget

---

## Resources

**Documentation:**

- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com
- Sanity: https://www.sanity.io/docs
- React Spring: https://www.react-spring.dev

**Tools:**

- Lighthouse (performance)
- Google Search Console (SEO)
- Vercel Dashboard (analytics)
- Sanity Studio (content management)

**Community:**

- Next.js Discord
- Sanity Slack
- Stack Overflow
- Reddit: r/nextjs, r/webdev

---

Ready to build! Start with the remaining Sanity schemas, then move to page layouts. Take it one step at a time, test frequently, and keep the client updated. You've got this! 🚀
