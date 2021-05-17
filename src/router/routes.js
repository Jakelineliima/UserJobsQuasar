
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "criarconta", component: () => import("pages/Criarconta.vue") },
      { path: "interessado", component: () => import("pages/Interessado.vue") },
      // { path: 'login', component: () => import('pages/Login.vue')},
      //{ path: 'vagas', component: () => import('pages/Vagas.vue')},
      { path: "vervaga", component: () => import("pages/Vervaga.vue") },
      // { path: 'cadastrarvaga', component: () => import('pages/Cadastrarvaga') },
      { path: "sobre", component: () => import("pages/Sobre.vue") },
      { path: "sobrein", component: () => import("pages/SobreIn.vue") },
      {
        path: "vizualizarcurriculo",
        component: () => import("pages/Vizualizarcurriculo.vue")
      },
      { path: "dadosp", component: () => import("pages/Dadosp.vue") },
      { path: "usuariolog", component: () => import("pages/Usuario.vue") }
    ]
  },
  {
    path: "/cadastrarvaga",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Cadastrarvaga.vue") }
    ],
    meta: { autenticar: true }
  },
  {
    path: "/login",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Login.vue") }]
  },
  {
    path: "/vagas",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Vagas.vue") }]
  },
  {
    path: "/vagaalteracao",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/VagaAlteracao.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes