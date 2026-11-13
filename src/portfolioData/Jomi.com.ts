import type { Project } from '../types';
// Required fields are title and img_poster (see src/types.ts)
const data: Project = {
  title: 'Jomi.com',
  featured: true,
  about: 'Academic medical journal publishing peer-reviewed surgical videos',
  features:
    'Surgical video streaming · Editorial CMS for articles and videos · Institutional access for hospitals and medical schools',
  stack: 'React · Node · Express · MongoDB',
  img_poster: 'jomi.jpg',
  url_link: 'https://jomi.com',
  sort_order: 1,
};

export default data;
