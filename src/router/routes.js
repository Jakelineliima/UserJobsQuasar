
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'criarconta', component: () => import('pages/Criarconta.vue') },
      { path: 'interessado', component: () => import('pages/Interessado.vue') },
      { path: 'login', component: () => import('pages/Login.vue')},
      { path: 'vagas', component: () => import('pages/Vagas.vue')},
      { path: 'vervaga', component: () => import('src/pages/Vervaga.vue') },
      { path: 'cadastrarvaga', component: () => import('pages/Cadastrarvaga.vue')}
    
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