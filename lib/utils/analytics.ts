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
      data: { form: formName },
    });
  }
};

/**
 * Track package view
 * @param packageName - Name of the package viewed
 */
export const trackPackageView = (packageName: string) => {
  if (typeof window !== 'undefined' && window.va) {
    window.va('event', {
      name: 'package_view',
      data: { package: packageName },
    });
  }
};

/**
 * Track blog post read
 * @param postTitle - Title of the blog post
 */
export const trackBlogRead = (postTitle: string) => {
  if (typeof window !== 'undefined' && window.va) {
    window.va('event', {
      name: 'blog_read',
      data: { title: postTitle },
    });
  }
};

/**
 * Track Calendly scheduler click
 */
export const trackCalendlyClick = () => {
  if (typeof window !== 'undefined' && window.va) {
    window.va('event', {
      name: 'calendly_click',
      data: { type: 'scheduler' },
    });
  }
};

/**
 * Track external link clicks
 * @param url - URL that was clicked
 * @param label - Label for the link
 */
export const trackExternalLink = (url: string, label?: string) => {
  if (typeof window !== 'undefined' && window.va) {
    window.va('event', {
      name: 'external_link_click',
      data: { url, label },
    });
  }
};

// TypeScript declaration for window.va
declare global {
  interface Window {
    va?: (event: 'event', data: { name: string; data?: Record<string, unknown> }) => void;
  }
}
