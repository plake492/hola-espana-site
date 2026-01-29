import type { Metadata } from 'next';
import { Hero, About, WeKnowSpain, WhyBookUs, CTA, Services } from '@/components/home';

export const metadata: Metadata = {
  title: 'Hola España - Spanish Immigration & Relocation Experts',
  description: 'Expert legal and relocation services for US citizens moving to Spain. Visa applications, residency permits, and complete relocation packages.',
  keywords: ['Spain immigration', 'US to Spain relocation', 'Spanish visa', 'residency permit Spain', 'immigration lawyer Spain'],
  openGraph: {
    title: 'Hola España - Spanish Immigration & Relocation Experts',
    description:
      'Expert legal and relocation services for US citizens moving to Spain. Visa applications, residency permits, and complete relocation packages.',
    url: 'https://holaespana.com',
    siteName: 'Hola España',
    images: [
      {
        url: '/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Hola España - Spanish Immigration Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hola España - Spanish Immigration & Relocation Experts',
    description: 'Expert legal and relocation services for US citizens moving to Spain.',
    images: ['/images/hero.webp'],
  },
};

export default function Preview() {
  return (
    <>
      <Hero />
      <Services />
      <WeKnowSpain />
      <WhyBookUs />
      <About />
      <CTA />
    </>
  );
}
