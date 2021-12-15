import loadable from '@loadable/component';

export default [
  {
    path: '/',
    exact: true,
    component: './pages/App/index'
  },
  {
    path: '/page1',
    component: './pages/Page1/index'
  },
  {
    path: '/page2',
    component: './pages/Page2/index'
  },
]