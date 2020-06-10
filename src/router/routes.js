const routes = [
  {
    path: '/',
    component: () => import('@/Home'),
    children: [
      {
        name: 'HomePage',
        path: '/',
        component: () => import('@/pages/home'),
        meta: {
          header: true,
          footer: true,
          keeyAlive: true,
          title: '主页'
        }
      },
      {
        name: 'Article',
        path: 'a/:id',
        component: () => import('@/pages/article'),
        meta: {
          header: true,
          footer: true,
          keeyAlive: true,
          title: '文章'
        }
      },
      {
        name: 'Archives',
        path: 'archives',
        component: () => import('@/pages/archives'),
        meta: {
          header: true,
          footer: true,
          keeyAlive: true,
          title: '归档'
        }
      },
      {
        name: 'Search',
        path: 'search',
        component: () => import('@/pages/search'),
        meta: {
          header: true,
          footer: true,
          keeyAlive: true,
          title: '搜索'
        }
      },
      {
        name: 'category',
        path: 'category/:id',
        component: () => import('@/pages/category'),
        meta: {
          header: true,
          footer: true,
          keeyAlive: true,
          title: '分类'
        }
      },
      {
        name: 'about',
        path: 'about',
        component: () => import('@/pages/article'),
        meta: {
          header: true,
          footer: true,
          keeyAlive: true,
          title: '关于'
        }
      }
    ]
  }
];

export default routes;
