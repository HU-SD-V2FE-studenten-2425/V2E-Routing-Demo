import { Router } from '@vaadin/router';

import './pages/home-page';
import './pages/about-page';
import './pages/courses-page';
import './pages/page-not-found';

const outlet = document.querySelector('body');
const router = new Router(outlet);

router.setRoutes([
  { path: `/`, component: 'home-page' },
  { path: `/about`, component: 'about-page' },
  { path: `/course`, component: 'courses-page' },
  { path: '(.*)', component: 'page-not-found' }
]);