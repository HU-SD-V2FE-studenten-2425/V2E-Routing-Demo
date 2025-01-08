import { Router } from '@vaadin/router';
import { userController } from '../controller/user-controller';

import './pages/home-page';
import './pages/about-page';
import './pages/courses-page';
import './pages/course-page';
import './pages/login-page';
import './pages/page-not-found';

const outlet = document.querySelector('body');
const router = new Router(outlet);

const isLoggedIn = (context, commands) => {
  if (!userController.isLoggedIn()) {
    return commands.redirect('/login');
  }
  return null;
};

router.setRoutes([
  { path: `/`, component: 'home-page' },
  { path: `/about`, component: 'about-page' },
  { path: `/course`, component: 'courses-page', action: isLoggedIn },
  { path: `/course/:code`, component:'course-page', action: isLoggedIn},
  { path: `/login`, component: 'login-page' },
  { path: '(.*)', component: 'page-not-found' }
]);

export { router }