export const ORIGIN = 'https://signal-social-portfolio-satyam.chetan-patil767378.chatgpt.site';
export const pages = {
  '/': { label: 'Profile', title: 'Satyam Singh | Social Media Manager Portfolio', description: 'Meet Satyam Singh, a social media manager in Mumbai. Explore his approach to content strategy, creative work and digital communities.' },
  '/work': { label: 'My work', title: 'Campaigns & Content | Satyam Singh', description: 'Explore campaign case study spaces and a visual content showcase in Satyam Singh’s social media portfolio. Project details are added as they are verified.' },
  '/skills': { label: 'Skills & stack', title: 'Social Media Skills & Platform Stack | Satyam Singh', description: 'Explore content strategy, social media management, creative direction and the platform stack in Satyam Singh’s editable skills dashboard.' },
  '/impact': { label: 'Impact', title: 'Social Media Impact Dashboard | Satyam Singh', description: 'A space for verified social media results, including reach, engagement and campaign performance. Metrics currently display editable placeholders.' },
  '/journey': { label: 'Journey', title: 'Professional Journey | Satyam Singh', description: 'Follow the professional journey of social media manager Satyam Singh. Role details and achievements await confirmation.' },
  '/about': { label: 'How I think', title: 'Social Media Approach | Satyam Singh', description: 'A look at the strategy, creativity, data and community principles behind Satyam Singh’s social media work.' },
  '/contact': { label: 'Contact', title: 'Contact Satyam Singh | Social Media Manager', description: 'Start a conversation with Satyam Singh about social media, content strategy or creative campaigns.' },
};
export const routePaths = Object.keys(pages);
export const normalPath = path => path === '/' ? '/' : path.replace(/\/+$/, '') || '/';
export function pageFor(path) { return pages[normalPath(path)] || null; }
export function jsonLd(path) {
  const profile = { '@context': 'https://schema.org', '@type': 'ProfilePage', '@id': `${ORIGIN}/#profile`, url: `${ORIGIN}/`, name: 'Satyam Singh — Social Media Portfolio', mainEntity: { '@type': 'Person', name: 'Satyam Singh', jobTitle: 'Social Media Manager', homeLocation: { '@type': 'Place', name: 'Mumbai, India' }, sameAs: ['https://www.linkedin.com/in/satyam-singh77/'] } };
  const site = { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${ORIGIN}/#website`, url: `${ORIGIN}/`, name: 'Satyam Singh — Social Media Portfolio' };
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Profile', item: `${ORIGIN}/` }, ...(path === '/' ? [] : [{ '@type': 'ListItem', position: 2, name: pageFor(path)?.label || 'Page', item: `${ORIGIN}${path}` }])] };
  return path === '/' ? [site, profile] : [site, breadcrumb];
}
