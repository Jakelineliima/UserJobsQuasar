
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'criarconta', component: () => import('src/pages/Criarconta.vue') },
      { path: 'interessado', component:() => import('pages/Interessado.vue') }
     /* { path: 'cadastrarvaga', component: () => import('pages/cadastrarvaga.vue') },
      { path: 'curriculo', component: () => import('pages/curriculo.vue') },
      { path: 'login', component: () => import('pages/login.vue') },
      { path: 'conta', component: () => import('pages/conta.vue') }*/
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },

]

export default routes