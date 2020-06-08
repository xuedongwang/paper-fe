const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/pages/home'),
    meta: {
      header: true,
      footer: true,
      keeyAlive: true
    }
  },
  {
    name: 'Article',
    path: '/a/:id',
    component: () => import('@/pages/article'),
    meta: {
      header: true,
      footer: true,
      keeyAlive: true
    }
  },
  {
    name: 'Archives',
    path: '/archives',
    component: () => import('@/pages/archives'),
    meta: {
      header: true,
      footer: true,
      keeyAlive: true
    }
  },
  {
    name: 'Search',
    path: '/search',
    component: () => import('@/pages/search'),
    meta: {
      header: true,
      footer: true,
      keeyAlive: true
    }
  },
  {
    name: 'category',
    path: '/category/:id',
    component: () => import('@/pages/category'),
    meta: {
      header: true,
      footer: true,
      keeyAlive: true
    }
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('@/pages/article'),
    meta: {
      header: true,
      footer: true,
      keeyAlive: true
    }
  }
];

export default routes;
