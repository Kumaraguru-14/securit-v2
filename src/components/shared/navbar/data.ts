import { FooterOneData } from '@/interface';
import { MobileMenuItem } from '../mobile-menu/MobileMenu';

export interface MobileMenuGroup {
  id: string;
  title: string;
  submenu: MobileMenuItem[];
}

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'home',
    title: 'Home',
    submenu: [],
  },
  {
    id: 'resources',
    title: 'Resources',
    submenu: [
      { id: 'blog', label: 'Blog', href: './blog' },
      { id: 'tutorial', label: 'Tutorial', href: './tutorial' },
      { id: 'faq', label: 'FAQ', href: './faq' },
      { id: 'glossary', label: 'Glossary', href: './glossary' },
    ],
  },
  {
    id: 'company',
    title: 'Company',
    submenu: [],
  },
  {
    id: 'pricing',
    title: 'Pricing',
    submenu: [],
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    submenu: [],
  },
];

export const footerData: FooterOneData[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Career', href: '/career' },
      { label: 'Case Studies', href: '/case-study' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Documentation', href: '/documentation' },
      { label: 'Tutorial', href: '/tutorial' },
      { label: 'Community', href: '/community' },
    ],
  },
  {
    title: 'Legal Policies',
    links: [
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'GDPR Compliance', href: '/gdpr' },
      { label: 'Affiliate Policy', href: '/affiliate-policy' },
    ],
  },
];
