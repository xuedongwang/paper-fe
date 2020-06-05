const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/pages/home')
  },
  {
    name: 'HomePage',
    path: '/p/:currentPage',
    component: () => import('@/pages/home')
  },
  {
    name: 'Article',
    path: '/a/:id',
    component: () => import('@/pages/article')
  }
];

export default routes;
