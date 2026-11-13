import type { Project } from '../types';
// Required fields are title and img_poster (see src/types.ts)
// DUMMY DATA: replace before publishing.
const data: Project = {
  title: 'Talon Point',
  featured: true,
  about: 'A landing zone and drop zone management tool used for military risk assessment',
  features:
    'Geo-spatial map visualization using leaflet · Comprehensive survey submission workflow · Robust survey data validation',
  stack: 'React · Node · Express · MongoDB',
  img_poster: 'talon_point.png',
  url_link: 'https://talonpoint.josce.net/',
  sort_order: 0,
};

export default data;
