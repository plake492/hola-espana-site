/**
 * Seed script: Creates 12 dummy blog posts in Sanity.
 *
 * Usage:
 *   npx tsx scripts/seed-blog-posts.ts
 *
 * Requires NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET,
 * and SANITY_API_WRITE_TOKEN in .env.local
 */

import { config } from 'dotenv';
config(); // loads .env
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: '2025-12-12',
  useCdn: false,
});

// ── Image URLs (picsum.photos — direct JPEG, no redirects) ──────
const IMAGES = {
  featured: [
    'https://picsum.photos/seed/spain1/1200/800.jpg',
    'https://picsum.photos/seed/spain2/1200/800.jpg',
    'https://picsum.photos/seed/spain3/1200/800.jpg',
    'https://picsum.photos/seed/spain4/1200/800.jpg',
    'https://picsum.photos/seed/spain5/1200/800.jpg',
    'https://picsum.photos/seed/spain6/1200/800.jpg',
    'https://picsum.photos/seed/spain7/1200/800.jpg',
    'https://picsum.photos/seed/spain8/1200/800.jpg',
    'https://picsum.photos/seed/spain9/1200/800.jpg',
    'https://picsum.photos/seed/spain10/1200/800.jpg',
    'https://picsum.photos/seed/spain11/1200/800.jpg',
    'https://picsum.photos/seed/spain12/1200/800.jpg',
  ],
  inline: [
    'https://picsum.photos/seed/inline1/800/500.jpg',
    'https://picsum.photos/seed/inline2/800/500.jpg',
    'https://picsum.photos/seed/inline3/800/500.jpg',
  ],
};

// ── Helper: upload image from URL ───────────────────────────────
async function uploadImage(url: string, filename: string) {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  const contentType = res.headers.get('content-type') || '';
  if (!contentType.startsWith('image/')) {
    throw new Error(`Expected image, got ${contentType} from ${url}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  const asset = await client.assets.upload('image', buffer, {
    filename,
    contentType,
  });
  return { _type: 'image' as const, asset: { _type: 'reference' as const, _ref: asset._id } };
}

// ── Portable Text helpers ───────────────────────────────────────
function block(
  text: string,
  style: string = 'normal',
  marks?: { type: string; href?: string; text: string }[]
) {
  if (marks && marks.length > 0) {
    const children: any[] = [];
    let remaining = text;
    for (const mark of marks) {
      const idx = remaining.indexOf(mark.text);
      if (idx === -1) continue;
      if (idx > 0) {
        children.push({ _type: 'span', _key: rk(), text: remaining.slice(0, idx), marks: [] });
      }
      const markKey = rk();
      children.push({ _type: 'span', _key: rk(), text: mark.text, marks: [markKey] });
      remaining = remaining.slice(idx + mark.text.length);

      return {
        _type: 'block',
        _key: rk(),
        style,
        children: [
          ...(idx > 0
            ? [{ _type: 'span', _key: rk(), text: text.slice(0, idx), marks: [] }]
            : []),
          { _type: 'span', _key: rk(), text: mark.text, marks: [markKey] },
          ...(remaining ? [{ _type: 'span', _key: rk(), text: remaining, marks: [] }] : []),
        ],
        markDefs: [
          mark.type === 'link'
            ? { _type: 'link', _key: markKey, href: mark.href }
            : undefined,
        ].filter(Boolean),
      };
    }
  }
  return {
    _type: 'block',
    _key: rk(),
    style,
    children: [{ _type: 'span', _key: rk(), text, marks: [] }],
    markDefs: [],
  };
}

function strongBlock(text: string, boldPart: string, style: string = 'normal') {
  const idx = text.indexOf(boldPart);
  if (idx === -1) return block(text, style);
  return {
    _type: 'block',
    _key: rk(),
    style,
    children: [
      ...(idx > 0 ? [{ _type: 'span', _key: rk(), text: text.slice(0, idx), marks: [] }] : []),
      { _type: 'span', _key: rk(), text: boldPart, marks: ['strong'] },
      ...(idx + boldPart.length < text.length
        ? [{ _type: 'span', _key: rk(), text: text.slice(idx + boldPart.length), marks: [] }]
        : []),
    ],
    markDefs: [],
  };
}

function listItem(text: string, listItem: 'bullet' | 'number' = 'bullet', level: number = 1) {
  return {
    _type: 'block',
    _key: rk(),
    style: 'normal',
    listItem,
    level,
    children: [{ _type: 'span', _key: rk(), text, marks: [] }],
    markDefs: [],
  };
}

function inlineImage(imageRef: { _type: string; asset: { _type: string; _ref: string } }, alt: string) {
  return {
    _type: 'image',
    _key: rk(),
    asset: imageRef.asset,
    alt,
  };
}

let _counter = 0;
function rk() {
  return `k${Date.now().toString(36)}${(++_counter).toString(36)}`;
}

// ── Post definitions ────────────────────────────────────────────
const posts = [
  {
    title: 'The Complete Guide to Spain\'s Non-Lucrative Visa',
    slug: 'complete-guide-spain-non-lucrative-visa',
    categories: ['visa', 'legal'],
    publishedAt: '2025-11-15T09:00:00Z',
    excerpt: 'Everything you need to know about Spain\'s most popular retirement visa, from financial requirements to the application timeline.',
    seo: {
      metaTitle: 'Spain Non-Lucrative Visa Guide 2025',
      metaDescription: 'Complete guide to applying for Spain\'s non-lucrative visa. Requirements, costs, timeline, and expert tips for US citizens.',
      keywords: ['non-lucrative visa spain', 'spain retirement visa', 'move to spain'],
    },
    body: (img: any) => [
      block('If you\'re dreaming of a slower pace of life under the Spanish sun, the non-lucrative visa is likely your best path forward. Designed for retirees and those who can support themselves without working in Spain, this visa has become the go-to option for thousands of Americans each year.', 'normal'),
      block('What Is the Non-Lucrative Visa?', 'h2'),
      block('The non-lucrative visa (visado de residencia no lucrativa) allows non-EU citizens to live in Spain for one year, renewable for up to five years. The key requirement: you must prove sufficient financial means without needing employment in Spain.'),
      block('Financial Requirements', 'h3'),
      strongBlock('For 2025, the minimum income requirement is approximately €28,800 per year for the primary applicant. This figure is based on Spain\'s IPREM indicator, calculated at 400% of the monthly amount.', '€28,800 per year'),
      listItem('Primary applicant: ~€28,800/year'),
      listItem('First dependent: add ~€7,200/year'),
      listItem('Each additional dependent: add ~€7,200/year'),
      block('These amounts must be demonstrated through bank statements, pension income, investment returns, or a combination thereof.'),
      inlineImage(img, 'Spanish coastline with traditional white buildings'),
      block('The Application Process', 'h2'),
      block('The process involves two stages: the initial visa application at your nearest Spanish consulate, and then registering for your TIE (Tarjeta de Identidad de Extranjero) once you arrive in Spain.'),
      block('Step 1: Gather Your Documents', 'h3'),
      listItem('Valid passport (at least 1 year remaining)', 'number'),
      listItem('Completed visa application form (EX-01)', 'number'),
      listItem('Proof of financial means (bank statements, pension letters)', 'number'),
      listItem('Private health insurance covering Spain', 'number'),
      listItem('Criminal background check (apostilled and translated)', 'number'),
      listItem('Medical certificate', 'number'),
      block('Step 2: Consulate Appointment', 'h3'),
      block('Schedule an appointment at your nearest Spanish consulate. Processing typically takes 30-60 days. Once approved, you\'ll have 90 days to enter Spain and begin your residency.'),
      block('Pro tip: Start gathering documents at least 3 months before your planned consulate appointment. Background checks and apostilles alone can take 6-8 weeks.', 'blockquote'),
      block('Common Mistakes to Avoid', 'h2'),
      listItem('Insufficient funds documentation — show a consistent balance, not a recent large deposit'),
      listItem('Missing apostilles on US documents'),
      listItem('Health insurance that doesn\'t meet Spanish requirements (must have no copays and cover the full territory)'),
      listItem('Applying too early or too late — timing matters'),
      block('For more details on the financial requirements, check the official Spanish consulate guidelines. Working with an experienced immigration attorney can save months of back-and-forth.', 'normal',
        [{ type: 'link', href: 'https://www.exteriores.gob.es', text: 'official Spanish consulate guidelines' }]),
    ],
  },
  {
    title: 'Digital Nomad Visa: Work Remotely from Spain',
    slug: 'digital-nomad-visa-work-remotely-spain',
    categories: ['visa', 'expat'],
    publishedAt: '2025-10-28T09:00:00Z',
    excerpt: 'Spain\'s digital nomad visa lets remote workers live legally in Spain. Here\'s what you need to qualify and how to apply.',
    seo: {
      metaTitle: 'Spain Digital Nomad Visa Guide 2025',
      metaDescription: 'How to get Spain\'s digital nomad visa. Income requirements, tax benefits, and step-by-step application process.',
      keywords: ['digital nomad visa spain', 'remote work spain', 'spain startup law'],
    },
    body: (img: any) => [
      block('Spain officially launched its digital nomad visa in 2023 under the Startup Law (Ley de Startups), and it\'s been a game-changer for remote workers looking to base themselves in Europe.'),
      block('Who Qualifies?', 'h2'),
      block('The visa is designed for non-EU nationals who work remotely for companies outside Spain or are freelancers with predominantly non-Spanish clients.'),
      block('Key Requirements', 'h3'),
      listItem('Employment or freelance contract with a non-Spanish company'),
      listItem('The company must have been operating for at least 1 year'),
      listItem('No more than 20% of your income can come from Spanish clients'),
      listItem('Minimum income of approximately €28,800/year'),
      listItem('Relevant professional qualifications or 3+ years of experience'),
      block('The Tax Advantage', 'h2'),
      strongBlock('Here\'s where it gets interesting. Digital nomad visa holders can opt for the Beckham Law tax regime, which taxes Spanish-source income at a flat 24% rate instead of the progressive scale that tops out at 47%.', 'flat 24% rate'),
      block('This special tax regime applies for up to 5 years and can represent significant savings, especially for higher earners. You\'ll also avoid wealth tax on non-Spanish assets.'),
      inlineImage(img, 'Laptop and coffee at a Spanish café terrace'),
      block('Application Timeline', 'h2'),
      block('The process is more straightforward than many Spanish visa applications:'),
      listItem('Gather documents: 2-4 weeks', 'number'),
      listItem('Submit at consulate: appointment dependent', 'number'),
      listItem('Processing time: 20 business days (officially)', 'number'),
      listItem('Enter Spain and apply for TIE: within 90 days', 'number'),
      block('Many applicants report the full process from start to TIE card taking about 3-4 months.'),
      block('Digital Nomad vs. Non-Lucrative Visa', 'h2'),
      block('The crucial difference: the digital nomad visa allows you to work. The non-lucrative visa explicitly prohibits employment. If you plan to continue working remotely, the digital nomad visa is clearly the right choice.'),
      block('It\'s worth noting that Spain has become one of the most popular digital nomad destinations in Europe, competing with Portugal and Croatia for the top spot.', 'blockquote'),
      block('For the latest application requirements, visit the UGE portal. We recommend working with a qualified immigration attorney to navigate the nuances.', 'normal',
        [{ type: 'link', href: 'https://www.uge.gob.es', text: 'UGE portal' }]),
    ],
  },
  {
    title: 'Understanding Spanish Property Tax for Expats',
    slug: 'understanding-spanish-property-tax-expats',
    categories: ['real-estate', 'legal'],
    publishedAt: '2025-10-10T09:00:00Z',
    excerpt: 'Buying property in Spain comes with tax obligations that differ significantly from the US. Here\'s what every expat buyer needs to know.',
    seo: {
      metaTitle: 'Spanish Property Tax Guide for US Expats',
      metaDescription: 'Understand IBI, transfer tax, capital gains, and annual obligations when buying property in Spain as a US citizen.',
      keywords: ['spain property tax', 'buying property spain', 'IBI tax spain'],
    },
    body: (img: any) => [
      block('Spain\'s property tax system can feel like a maze if you\'re coming from the relatively straightforward US model. Multiple taxes apply at different stages — purchase, ownership, and sale — and they vary by region.'),
      block('Taxes When Buying', 'h2'),
      block('Transfer Tax (ITP)', 'h3'),
      strongBlock('For resale properties, you\'ll pay Impuesto de Transmisiones Patrimoniales (ITP). Rates vary by autonomous community, typically ranging from 6% to 10% of the purchase price.', '6% to 10%'),
      listItem('Andalucía: 7%'),
      listItem('Catalonia: 10%'),
      listItem('Valencia: 10%'),
      listItem('Madrid: 6%'),
      block('VAT on New Builds', 'h3'),
      block('New properties from developers are subject to 10% VAT (IVA) instead of transfer tax, plus 1.5% stamp duty (AJD).'),
      inlineImage(img, 'Traditional Spanish villa with terracotta roof'),
      block('Annual Property Taxes', 'h2'),
      block('IBI (Impuesto sobre Bienes Inmuebles)', 'h3'),
      block('This is Spain\'s equivalent of US property tax, calculated on the cadastral value (valor catastral), which is typically much lower than market value. Rates range from 0.4% to 1.1% depending on the municipality.'),
      block('Wealth Tax (Impuesto sobre el Patrimonio)', 'h3'),
      block('If your total Spanish assets exceed €700,000 (€500,000 in Catalonia), you may be subject to wealth tax. Rates range from 0.2% to 3.5%. Some regions, like Madrid, have historically offered exemptions.'),
      block('The US-Spain tax treaty helps prevent double taxation, but you should always consult a cross-border tax specialist to optimize your position.', 'blockquote'),
      block('Taxes When Selling', 'h2'),
      block('Capital gains on Spanish property are taxed at progressive rates:'),
      listItem('First €6,000: 19%'),
      listItem('€6,001 - €50,000: 21%'),
      listItem('€50,001 - €200,000: 23%'),
      listItem('Over €200,000: 26%'),
      block('Non-residents face a 3% withholding at the point of sale, which can be offset against your actual capital gains liability.'),
      block('For a detailed breakdown of the US-Spain tax treaty, visit the IRS foreign tax guide. Professional guidance from a bilingual tax advisor is strongly recommended.', 'normal',
        [{ type: 'link', href: 'https://www.irs.gov/individuals/international-taxpayers', text: 'IRS foreign tax guide' }]),
    ],
  },
  {
    title: 'Best Neighborhoods in Barcelona for American Expats',
    slug: 'best-neighborhoods-barcelona-american-expats',
    categories: ['living', 'expat'],
    publishedAt: '2025-09-22T09:00:00Z',
    excerpt: 'From the buzzy streets of Eixample to the beachside calm of Poblenou, discover the best Barcelona neighborhoods for expat life.',
    seo: {
      metaTitle: 'Best Barcelona Neighborhoods for Expats 2025',
      metaDescription: 'Discover the top Barcelona neighborhoods for American expats. Costs, vibes, amenities, and insider tips for each area.',
      keywords: ['barcelona neighborhoods expats', 'living in barcelona', 'barcelona expat guide'],
    },
    body: (img: any) => [
      block('Barcelona is one of the most popular destinations for Americans relocating to Spain, and for good reason. But with over 70 distinct neighborhoods (barris), choosing where to live can be overwhelming.'),
      block('We\'ve helped dozens of families settle into Barcelona. Here are our top picks based on livability, international community, and overall quality of life.'),
      block('Eixample', 'h2'),
      strongBlock('The grid-like Eixample district is Barcelona\'s most sought-after neighborhood for expats. Wide boulevards, stunning Modernista architecture, and walkability make it a perennial favorite.', 'most sought-after neighborhood'),
      listItem('Average rent (2-bed): €1,400-€2,200/month'),
      listItem('Vibe: Cosmopolitan, architectural, walkable'),
      listItem('Best for: Couples, professionals, architecture lovers'),
      block('The Dreta de l\'Eixample (right side) tends to be pricier and more upscale, while the Esquerra (left) offers slightly better value with equally good amenities.'),
      inlineImage(img, 'Eixample district street with Modernista buildings'),
      block('Sarrià-Sant Gervasi', 'h2'),
      block('If you\'re relocating with children, Sarrià-Sant Gervasi is likely where you\'ll end up. This uphill district feels almost like a village within the city, with excellent international schools nearby.'),
      listItem('Average rent (3-bed): €2,000-€3,500/month'),
      listItem('Vibe: Family-friendly, quiet, green spaces'),
      listItem('Best for: Families with children, those wanting suburban feel'),
      block('Poblenou', 'h2'),
      block('The former industrial district has transformed into Barcelona\'s innovation hub. Think Brooklyn meets the Mediterranean — converted warehouses, coworking spaces, and the beach just blocks away.'),
      listItem('Average rent (2-bed): €1,200-€1,800/month'),
      listItem('Vibe: Creative, techy, beachside'),
      listItem('Best for: Remote workers, digital nomads, younger expats'),
      block('Gràcia', 'h3'),
      block('A bohemian neighborhood with a fiercely local identity. Gràcia\'s plazas fill with life every evening, and the dining scene rivals any part of the city. Less English is spoken here, which can be a plus if you want full immersion.'),
      block('Wherever you land, give yourself at least a month in a short-term rental before committing to a long-term lease. Every neighborhood reveals its true character over time.', 'blockquote'),
    ],
  },
  {
    title: 'NIE Number: Your First Step to Life in Spain',
    slug: 'nie-number-first-step-life-spain',
    categories: ['legal', 'visa'],
    publishedAt: '2025-09-05T09:00:00Z',
    excerpt: 'The NIE is Spain\'s foreigner identification number and you\'ll need it for almost everything. Here\'s how to get yours.',
    seo: {
      metaTitle: 'How to Get Your NIE Number in Spain',
      metaDescription: 'Step-by-step guide to obtaining your NIE number in Spain. Where to apply, what documents you need, and how long it takes.',
      keywords: ['NIE number spain', 'foreigner ID spain', 'NIE application'],
    },
    body: (img: any) => [
      block('Before you can open a bank account, sign a rental contract, or even set up a phone plan in Spain, you\'ll need one thing: your NIE (Número de Identidad de Extranjero).'),
      block('What Is the NIE?', 'h2'),
      block('The NIE is a unique identification number assigned to all foreigners who have financial, professional, or social dealings in Spain. Think of it as your Spanish social security number — it follows you everywhere.'),
      strongBlock('Important: The NIE number itself is permanent, but the certificate confirming it expires after 3 months. You may need to renew the certificate for certain transactions.', 'permanent'),
      block('When Do You Need It?', 'h2'),
      listItem('Opening a Spanish bank account'),
      listItem('Signing a rental or purchase contract'),
      listItem('Setting up utilities'),
      listItem('Registering with social security'),
      listItem('Filing Spanish taxes'),
      listItem('Buying a car or getting a Spanish driving license'),
      inlineImage(img, 'Spanish government building facade'),
      block('How to Apply', 'h2'),
      block('Option 1: From the US', 'h3'),
      block('You can apply at your nearest Spanish consulate before moving. This is often the smoothest route, though appointment availability varies. You\'ll need:'),
      listItem('Completed EX-15 form', 'number'),
      listItem('Passport and copy', 'number'),
      listItem('Justification for needing the NIE (property purchase contract, job offer, etc.)', 'number'),
      listItem('Fee payment (approximately €12)', 'number'),
      block('Option 2: In Spain', 'h3'),
      block('Apply at the Oficina de Extranjería or a police station with a foreigners\' office. The same documents apply, plus proof of your address in Spain.'),
      block('Don\'t confuse the NIE with the TIE (Tarjeta de Identidad de Extranjero). The TIE is the physical card that residents receive; the NIE is just the number. You can have a NIE without being a resident.', 'blockquote'),
      block('For appointment booking, use the sede electrónica system. Slots fill up fast — check daily in the early morning for new availability.', 'normal',
        [{ type: 'link', href: 'https://sede.administracionespublica.gob.es', text: 'sede electrónica system' }]),
    ],
  },
  {
    title: 'Spanish Healthcare: A Guide for US Expats',
    slug: 'spanish-healthcare-guide-us-expats',
    categories: ['living', 'expat'],
    publishedAt: '2025-08-18T09:00:00Z',
    excerpt: 'Spain\'s healthcare system consistently ranks among the world\'s best. Here\'s how to access it as an American expat.',
    seo: {
      metaTitle: 'Spain Healthcare Guide for Americans',
      metaDescription: 'How Spanish healthcare works for expats. Public vs private, costs, enrollment, and what to expect from the system.',
      keywords: ['spain healthcare expats', 'spanish health system', 'health insurance spain'],
    },
    body: (img: any) => [
      block('Coming from the US healthcare system, Spain\'s approach will feel almost surreal. Universal coverage, minimal out-of-pocket costs, and consistently excellent outcomes — it\'s one of the top reasons Americans choose Spain.'),
      block('Public Healthcare (Sistema Nacional de Salud)', 'h2'),
      strongBlock('Spain\'s public healthcare system ranks 7th globally by the WHO. Once enrolled, most services are completely free, including specialist visits, hospital stays, and emergency care.', '7th globally'),
      block('Who Can Access Public Healthcare?', 'h3'),
      listItem('Legal residents contributing to social security (working or self-employed)'),
      listItem('Retirees receiving a Spanish pension'),
      listItem('Those who qualify via the convenio especial (special agreement — approximately €60/month)'),
      block('Note: Non-lucrative visa holders initially rely on private insurance, but may access the public system through the convenio especial after registering as residents.'),
      inlineImage(img, 'Modern Spanish hospital exterior'),
      block('Private Healthcare', 'h2'),
      block('Private health insurance in Spain is remarkably affordable compared to the US. Comprehensive plans typically cost €100-€300/month depending on age and coverage level.'),
      block('Popular providers include:', 'h3'),
      listItem('Sanitas — Largest private network, English-speaking doctors available'),
      listItem('Adeslas — Wide hospital network, good for families'),
      listItem('DKV — Strong mental health coverage'),
      listItem('Cigna — Familiar to Americans, international coverage'),
      block('Many expats maintain private insurance even after gaining public access, using it for shorter wait times and English-speaking specialists.'),
      block('Prescriptions and Pharmacy', 'h2'),
      block('Spanish pharmacies (farmacias) are highly regulated and pharmacists can advise on minor ailments. Many medications that require prescriptions in the US are available over the counter in Spain.'),
      block('The Spanish healthcare system was a deciding factor in our own move. After years of navigating US insurance, the simplicity and quality here still amazes us.', 'blockquote'),
    ],
  },
  {
    title: 'Opening a Spanish Bank Account: Step by Step',
    slug: 'opening-spanish-bank-account-step-by-step',
    categories: ['living', 'legal'],
    publishedAt: '2025-08-01T09:00:00Z',
    excerpt: 'A Spanish bank account is essential for daily life. We break down the best banks, required documents, and common pitfalls.',
    seo: {
      metaTitle: 'How to Open a Bank Account in Spain',
      metaDescription: 'Guide to opening a Spanish bank account as an expat. Best banks, required documents, and tips for Americans.',
      keywords: ['spanish bank account', 'banking spain expat', 'open bank account spain'],
    },
    body: (img: any) => [
      block('You\'ll need a Spanish bank account for rent payments, utility bills, and receiving your residency card. Here\'s the good news: it\'s one of the simpler administrative tasks you\'ll face.'),
      block('When Should You Open an Account?', 'h2'),
      block('Ideally, as soon as you have your NIE number. Some banks allow non-residents to open accounts, which means you can potentially set this up before your move.'),
      block('Required Documents', 'h2'),
      listItem('Valid passport', 'number'),
      listItem('NIE number (or proof of application)', 'number'),
      listItem('Proof of address (padron certificate, rental contract, or utility bill)', 'number'),
      listItem('Proof of income or employment', 'number'),
      listItem('Spanish phone number', 'number'),
      inlineImage(img, 'Modern bank branch interior in Spain'),
      block('Best Banks for Expats', 'h2'),
      block('CaixaBank', 'h3'),
      strongBlock('Spain\'s largest bank with the most extensive ATM and branch network. Their CaixaBank Now app supports English and their customer service for international clients is solid.', 'Spain\'s largest bank'),
      block('Sabadell', 'h3'),
      block('Popular in Catalonia and the Mediterranean coast. Known for being more flexible with non-resident accounts and having English-speaking staff in major cities.'),
      block('BBVA', 'h3'),
      block('Strong digital banking platform. Their app is excellent and they offer competitive foreign exchange rates for transferring money from the US.'),
      block('Online-Only Options', 'h3'),
      listItem('N26 — German neobank, great for getting started quickly'),
      listItem('Revolut — Multi-currency accounts, excellent exchange rates'),
      listItem('Wise — Best for international transfers, not a full bank'),
      block('Tips for Americans', 'h2'),
      block('FATCA compliance makes some Spanish banks hesitant to open accounts for US citizens. CaixaBank and BBVA are generally the most accommodating. Bring your US tax ID (SSN) and be prepared for additional paperwork.', 'blockquote'),
      block('For comparing current account fees, check the Banco de España comparison tool. Fees vary significantly between banks and account types.', 'normal',
        [{ type: 'link', href: 'https://www.bde.es', text: 'Banco de España comparison tool' }]),
    ],
  },
  {
    title: 'The Real Cost of Living in Spain: 2025 Breakdown',
    slug: 'real-cost-living-spain-2025-breakdown',
    categories: ['living', 'expat'],
    publishedAt: '2025-07-14T09:00:00Z',
    excerpt: 'Forget the clickbait — here\'s an honest, detailed breakdown of what it actually costs to live in Spain as an American expat.',
    seo: {
      metaTitle: 'Cost of Living in Spain 2025 for Expats',
      metaDescription: 'Honest cost of living breakdown in Spain for American expats. Rent, food, healthcare, transport, and lifestyle costs.',
      keywords: ['cost of living spain', 'spain expenses expat', 'living costs spain 2025'],
    },
    body: (img: any) => [
      block('Every "cost of living in Spain" article seems to either wildly underestimate or overestimate expenses. After helping hundreds of Americans relocate, here\'s what real budgets actually look like.'),
      block('The Numbers: Monthly Budget for a Couple', 'h2'),
      block('These figures represent a comfortable lifestyle in a mid-sized Spanish city (Valencia, Málaga, Seville). Barcelona and Madrid run 20-40% higher.'),
      block('Housing', 'h3'),
      listItem('2-bedroom apartment (city center): €900-€1,400/month'),
      listItem('2-bedroom apartment (outside center): €650-€1,000/month'),
      listItem('Utilities (electric, water, gas, internet): €150-€200/month'),
      inlineImage(img, 'Spanish apartment balcony overlooking a plaza'),
      block('Food & Dining', 'h3'),
      listItem('Groceries (couple): €350-€500/month'),
      listItem('Dining out (2x/week): €200-€350/month'),
      listItem('Coffee culture (daily café con leche): €40-€60/month'),
      strongBlock('A menú del día — Spain\'s incredible lunch deal — gets you a three-course meal with wine for €12-€16 at most restaurants. Take advantage of this.', 'menú del día'),
      block('Transportation', 'h3'),
      listItem('Monthly transit pass: €40-€55'),
      listItem('Car ownership (insurance, fuel, maintenance): €200-€350/month'),
      listItem('Occasional taxi/Uber: €30-€50/month'),
      block('Healthcare', 'h3'),
      listItem('Private insurance (per person): €80-€200/month'),
      listItem('Convenio especial (public access): €60/month'),
      listItem('Dental (private): €30-€50/month'),
      block('The Bottom Line', 'h2'),
      block('A couple can live comfortably in most Spanish cities for €2,500-€3,500/month. In Barcelona or Madrid, budget €3,500-€5,000 for equivalent comfort.'),
      block('These numbers represent a comfortable middle-class lifestyle — not scraping by, but not luxury either. You\'ll eat well, travel domestically, and enjoy Spain\'s incredible quality of life.', 'blockquote'),
    ],
  },
  {
    title: 'Empadronamiento: Why Your Town Hall Registration Matters',
    slug: 'empadronamiento-town-hall-registration-matters',
    categories: ['legal', 'living'],
    publishedAt: '2025-06-27T09:00:00Z',
    excerpt: 'The padrón is one of Spain\'s most important bureaucratic steps — and one of the most overlooked by new arrivals.',
    seo: {
      metaTitle: 'Empadronamiento Guide: Spain Padrón Registration',
      metaDescription: 'Why the padrón registration matters and how to complete it. Essential step for healthcare, voting, and residency.',
      keywords: ['empadronamiento spain', 'padron registration', 'town hall registration spain'],
    },
    body: (img: any) => [
      block('Within weeks of arriving in Spain, you need to register at your local town hall (ayuntamiento). This process, called empadronamiento, puts you on the padrón — the municipal register of residents.'),
      block('Why It Matters', 'h2'),
      strongBlock('The padrón certificate (certificado de empadronamiento) is required for almost every administrative process in Spain. Without it, you\'ll hit roadblocks everywhere.', 'required for almost every administrative process'),
      block('You need it for:', 'h3'),
      listItem('Applying for or renewing your TIE (residency card)'),
      listItem('Enrolling in public healthcare'),
      listItem('Registering children in school'),
      listItem('Applying for the convenio especial'),
      listItem('Eventually applying for permanent residency or citizenship'),
      listItem('Accessing certain municipal services and discounts'),
      inlineImage(img, 'Spanish ayuntamiento building with flag'),
      block('How to Register', 'h2'),
      block('The process is straightforward but varies slightly by municipality. Generally:'),
      listItem('Book an appointment at your ayuntamiento (online or by phone)', 'number'),
      listItem('Bring your passport and NIE', 'number'),
      listItem('Bring proof of address (rental contract, property deed, or a letter from your landlord)', 'number'),
      listItem('Fill out the registration form (hoja padronal)', 'number'),
      listItem('Receive your certificado de empadronamiento', 'number'),
      block('Important Details', 'h2'),
      block('Everyone in your household needs to register — including children. If you\'re renting, your landlord cannot legally refuse to provide the documentation needed for your padrón registration.'),
      block('The certificate expires for official use after 3 months. You\'ll need to request a fresh one whenever it\'s required for an administrative process. This is free and usually instant at the ayuntamiento.', 'blockquote'),
      block('You can check your municipality\'s specific requirements on the sede electrónica local government portal.', 'normal',
        [{ type: 'link', href: 'https://sede.administracionespublica.gob.es', text: 'sede electrónica local government portal' }]),
    ],
  },
  {
    title: 'Buying Property in Spain: The Complete Expat Guide',
    slug: 'buying-property-spain-complete-expat-guide',
    categories: ['real-estate', 'legal'],
    publishedAt: '2025-06-10T09:00:00Z',
    excerpt: 'From finding the right agent to signing at the notary, here\'s every step of buying a home in Spain as a foreign national.',
    seo: {
      metaTitle: 'Buying Property in Spain as an Expat',
      metaDescription: 'Complete guide to purchasing Spanish property. Agents, mortgages, notary process, and legal considerations for expats.',
      keywords: ['buying property spain', 'spain real estate expat', 'purchase home spain'],
    },
    body: (img: any) => [
      block('Buying property in Spain is a milestone that many expats dream about — and with good reason. Property prices remain significantly below peak levels in many areas, the lifestyle is unbeatable, and ownership provides long-term stability.'),
      block('Step 1: Get Your Finances in Order', 'h2'),
      block('Before browsing Idealista, understand your budget:'),
      listItem('Purchase price'),
      listItem('Transfer tax (6-10%) or VAT (10% for new builds)'),
      listItem('Notary and registry fees (~1-2%)'),
      listItem('Legal fees (~1-1.5%)'),
      listItem('Mortgage arrangement fee (if applicable)'),
      strongBlock('Rule of thumb: budget an additional 12-15% on top of the purchase price for all associated costs.', '12-15%'),
      inlineImage(img, 'Beautiful Spanish finca with garden'),
      block('Step 2: Find the Right Agent', 'h2'),
      block('Spain\'s real estate market is fragmented. Unlike the US MLS system, there\'s no central listing database. Properties may appear on one agency\'s books but not another\'s.'),
      block('Look for agents who are API (Agente de la Propiedad Inmobiliaria) certified. English-speaking agents are common in expat-heavy areas, but having someone who can navigate both cultures is invaluable.'),
      block('Step 3: Making an Offer', 'h3'),
      block('The process typically follows this flow:'),
      listItem('Verbal offer through your agent', 'number'),
      listItem('Señal (earnest money deposit): €3,000-€6,000 to take it off market', 'number'),
      listItem('Contrato de arras: formal deposit contract, usually 10% of price', 'number'),
      listItem('Due diligence period: nota simple check, outstanding debts, community fees', 'number'),
      listItem('Escritura (deed signing) at the notary', 'number'),
      block('Step 4: The Notary', 'h2'),
      block('The notary (notario) is a public official who verifies the legality of the transaction. Both buyer and seller attend the signing. The notary reads the entire deed aloud — in Spanish — and both parties sign.'),
      block('Always hire an independent lawyer before reaching the notary stage. The notary represents the state, not you. Your lawyer reviews contracts, checks for liens, and ensures everything is above board.', 'blockquote'),
      block('Mortgages for Non-Residents', 'h2'),
      block('Spanish banks typically offer non-residents up to 60-70% loan-to-value, compared to 80% for residents. Interest rates are competitive with the broader European market.'),
      block('For property listings, check Idealista, the largest property portal in Spain.', 'normal',
        [{ type: 'link', href: 'https://www.idealista.com', text: 'Idealista' }]),
    ],
  },
  {
    title: 'Learning Spanish: Realistic Expectations for Adults',
    slug: 'learning-spanish-realistic-expectations-adults',
    categories: ['culture', 'expat'],
    publishedAt: '2025-05-23T09:00:00Z',
    excerpt: 'You don\'t need to be fluent before moving. Here\'s a practical language roadmap for expats at any level.',
    seo: {
      metaTitle: 'Learning Spanish as an Adult Expat',
      metaDescription: 'Realistic timeline and strategies for learning Spanish as an adult relocating to Spain. Resources, schools, and tips.',
      keywords: ['learning spanish adults', 'spanish for expats', 'language learning spain'],
    },
    body: (img: any) => [
      block('One of the biggest anxieties about moving to Spain is the language barrier. Let\'s address it head-on: you do not need to be fluent before you move, but you should commit to learning.'),
      block('Realistic Timeline', 'h2'),
      strongBlock('The Foreign Service Institute estimates that English speakers need approximately 600-750 hours of study to reach professional fluency in Spanish. That\'s about 6-9 months of intensive study.', '600-750 hours'),
      block('But here\'s the thing — you don\'t need professional fluency to live well in Spain. Here\'s what a more practical timeline looks like:'),
      block('Months 1-3: Survival Spanish', 'h3'),
      listItem('Ordering food and drinks'),
      listItem('Basic shopping and directions'),
      listItem('Emergency phrases'),
      listItem('Numbers, dates, and telling time'),
      block('Months 3-6: Functional Spanish', 'h3'),
      listItem('Managing appointments and phone calls'),
      listItem('Understanding mail and official documents'),
      listItem('Following conversations at moderate speed'),
      listItem('Expressing opinions and preferences'),
      inlineImage(img, 'Spanish language class in a bright classroom'),
      block('Months 6-12: Comfortable Spanish', 'h3'),
      listItem('Handling bureaucratic processes independently'),
      listItem('Making Spanish friends'),
      listItem('Following the news and reading local publications'),
      listItem('Understanding regional accents and slang'),
      block('Best Resources', 'h2'),
      block('Before You Arrive', 'h3'),
      listItem('Pimsleur Spanish — Best for pronunciation and conversational basics'),
      listItem('Duolingo — Good for daily habit building, not sufficient alone'),
      listItem('iTalki — Affordable online tutoring with native speakers'),
      block('Once in Spain', 'h3'),
      listItem('Local language schools (escuelas de idiomas) — group classes are social and affordable'),
      listItem('Intercambio events — language exchange meetups, free, and great for making friends'),
      listItem('Immersion — simply living your life in Spanish as much as possible'),
      block('Don\'t let the language barrier delay your move. Some of the most successful expats we\'ve worked with arrived with barely any Spanish and were conversational within 6 months through full immersion.', 'blockquote'),
    ],
  },
  {
    title: 'Spain\'s Golden Visa: Is It Still Worth It in 2025?',
    slug: 'spain-golden-visa-still-worth-it-2025',
    categories: ['visa', 'real-estate'],
    publishedAt: '2025-05-05T09:00:00Z',
    excerpt: 'Spain\'s Golden Visa program has changed significantly. We analyze whether the property investment route still makes sense.',
    seo: {
      metaTitle: 'Spain Golden Visa 2025: Is It Worth It?',
      metaDescription: 'Analysis of Spain\'s Golden Visa program in 2025. Changes, investment options, and whether it still makes sense for Americans.',
      keywords: ['spain golden visa 2025', 'golden visa investment', 'spain residency by investment'],
    },
    body: (img: any) => [
      block('Spain\'s Golden Visa, introduced in 2013, has been one of Europe\'s most popular residency-by-investment programs. But recent legislative changes have put its future in question.'),
      block('What Is the Golden Visa?', 'h2'),
      block('The Golden Visa grants residency to non-EU nationals who make a qualifying investment in Spain. The most popular route has been real estate, though other investment options exist.'),
      block('Investment Options', 'h3'),
      listItem('Real estate: €500,000+ purchase (status under review)'),
      listItem('Financial assets: €1,000,000+ in Spanish company shares'),
      listItem('Bank deposits: €1,000,000+'),
      listItem('Government bonds: €2,000,000+'),
      listItem('Business project: creating jobs and contributing to innovation'),
      inlineImage(img, 'Luxury Spanish villa with infinity pool'),
      block('The 2024-2025 Changes', 'h2'),
      strongBlock('In April 2024, Prime Minister Sánchez announced plans to eliminate the real estate investment route, citing housing affordability concerns. As of early 2025, the legislative process is ongoing.', 'eliminate the real estate investment route'),
      block('What this means practically:'),
      listItem('Applications already submitted continue to be processed'),
      listItem('The real estate route may be phased out or modified'),
      listItem('Financial investment routes remain unaffected'),
      listItem('Renewals for existing Golden Visa holders are not impacted'),
      block('Is It Still Worth It?', 'h2'),
      block('For Americans considering the Golden Visa, the calculation has shifted:'),
      block('Pros', 'h3'),
      listItem('Fast-track to residency without employment requirements'),
      listItem('Freedom to live and work in Spain'),
      listItem('Travel freely within the Schengen zone'),
      listItem('Path to permanent residency and citizenship'),
      block('Cons', 'h3'),
      listItem('High minimum investment'),
      listItem('Uncertainty around the real estate route'),
      listItem('Tax implications (you become a Spanish tax resident)'),
      listItem('The digital nomad visa or non-lucrative visa may offer a simpler path'),
      block('Our advice: if you were planning to buy property in Spain anyway and the €500,000 threshold fits your budget, the Golden Visa remains attractive while it\'s available. But don\'t buy property solely for the visa — other routes may serve you better.', 'blockquote'),
      block('For the latest legislative updates, monitor the BOE (Official State Gazette) for published changes to the Ley de Emprendedores.', 'normal',
        [{ type: 'link', href: 'https://www.boe.es', text: 'BOE (Official State Gazette)' }]),
    ],
  },
];

// ── Main ────────────────────────────────────────────────────────
async function main() {
  console.log('Uploading images...');

  // Upload featured images
  const featuredImages = await Promise.all(
    IMAGES.featured.map((url, i) => uploadImage(url, `featured-${i}.jpg`))
  );

  // Upload inline images
  const inlineImages = await Promise.all(
    IMAGES.inline.map((url, i) => uploadImage(url, `inline-${i}.jpg`))
  );

  console.log(`Uploaded ${featuredImages.length + inlineImages.length} images.`);
  console.log('Creating blog posts...');

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const inlineImg = inlineImages[i % inlineImages.length];
    const body = post.body(inlineImg);

    const doc = {
      _type: 'post',
      title: post.title,
      slug: { _type: 'slug', current: post.slug },
      mainImage: {
        ...featuredImages[i],
        alt: `Featured image for: ${post.title}`,
      },
      categories: post.categories,
      publishedAt: post.publishedAt,
      excerpt: post.excerpt,
      body,
      seo: {
        _type: 'seo',
        ...post.seo,
      },
    };

    const created = await client.create(doc);
    console.log(`  ✓ Created: "${post.title}" (${created._id})`);
  }

  console.log('\nDone! 12 blog posts created.');
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
