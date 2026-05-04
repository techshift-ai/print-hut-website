/** Central source for all Print Hut business data used across the site */

export const siteData = {
  name: 'Print Hut',
  url: 'https://print-hut-website.pages.dev',
  tagline: 'Custom printing in Woodbridge, Ontario.',
  description:
    'Print Hut is a custom printing shop in Woodbridge, Ontario. T-shirts, business cards, flyers, table cloths, stickers, and decals — printed fast, priced clearly, and ready when you need them.',
  phone: '647.780.3103',
  phoneTel: '+16477803103',
  email: 'sales@printhut.ca',
  address: {
    street: '260 Regina Road, Unit 16B',
    city: 'Woodbridge',
    province: 'ON',
    postalCode: 'L4L 8P8',
    country: 'CA',
    full: '260 Regina Road, Unit 16B, Woodbridge, ON L4L 8P8, Canada',
  },
  social: {
    instagram: 'https://www.instagram.com/_printhut/',
    instagramHandle: '@_printhut',
    facebook: 'https://www.facebook.com/printhutCA/',
    facebookHandle: '@printhutCA',
  },
  geo: {
    lat: 43.7866,
    lng: -79.5541,
  },
} as const;

export const products = [
  {
    id: 'clothing',
    name: 'Custom Clothing',
    subtitle: 'T-Shirts & Hoodies',
    description:
      'Custom printed t-shirts and hoodies for teams, events, uniforms, merch, and personal projects. Bring your own design or work with us on one.',
    pricing: 'Quote-based — varies by quantity, colors, and garment type.',
    cta: 'Get a Quote',
    ctaHref: '#contact',
    icon: 'Shirt',
    image: '/images/clothing-1.jpg',
  },
  {
    id: 'business-cards',
    name: 'Business Cards',
    subtitle: 'Standard 3.5" x 2"',
    description:
      'Printed on quality card stock. Single-sided or double-sided. Bring your design file or we will help set one up.',
    pricing: 'Starting at $60 for 500 cards.',
    pricingTable: [
      { qty: '500', single: '$60', double: '$80' },
      { qty: '1,000', single: '$100', double: '$120' },
    ],
    cta: 'Order Business Cards',
    ctaHref: '#contact',
    icon: 'CreditCard',
    image: '/images/business-cards-1.jpg',
  },
  {
    id: 'flyers',
    name: 'Flyers',
    subtitle: 'Multiple Sizes Available',
    description:
      'Available in 5.5" x 8.5", 8.5" x 11", 11" x 17", and 12" x 18". Cardstock postcards or regular flyer paper. Great for events, promotions, menus, and handouts.',
    pricing: 'Starting at $100 for 500 flyers.',
    pricingTable: [
      { qty: '500', price: '$100' },
      { qty: '1,000', price: '$200' },
      { qty: '2,000', price: '$250' },
      { qty: '3,000', price: '$300' },
      { qty: '5,000', price: '$350' },
    ],
    cta: 'Order Flyers',
    ctaHref: '#contact',
    icon: 'FileText',
    image: '/images/flyers-1.jpg',
  },
  {
    id: 'table-cloths',
    name: 'Custom Table Cloths',
    subtitle: 'For 6-Foot Folding Tables',
    description:
      'Branded table cloths for trade shows, events, and markets. Black and white base options available. Designed for standard 6-foot folding tables.',
    pricing: 'Single table cloth: $80. Two table cloths: $120.',
    pricingTable: [
      { qty: '1', price: '$80' },
      { qty: '2', price: '$120' },
    ],
    cta: 'Order Table Cloths',
    ctaHref: '#contact',
    icon: 'LayoutGrid',
    image: '/images/tablecloth-1.jpg',
  },
  {
    id: 'stickers-decals',
    name: 'Stickers & Decals',
    subtitle: 'Custom Printed',
    description:
      'Custom sticker and decal printing for branding, packaging, laptops, vehicles, and giveaways. Any size, any shape.',
    pricing: 'Quote-based — varies by size, quantity, and material.',
    cta: 'Get a Quote',
    ctaHref: '#contact',
    icon: 'Sticker',
    image: '/images/stickers-1.jpg',
  },
] as const;
