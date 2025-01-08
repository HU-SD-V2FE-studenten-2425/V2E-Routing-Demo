import { Router } from '@vaadin/router';

import './pages/home-page';
import './pages/about-page';

const outlet = document.querySelector('body');
const router = new Router(outlet);

router.setRoutes([
  { path: `/`, component: 'home-page' },
  { path: `/about`, component: 'about-page' },
]);