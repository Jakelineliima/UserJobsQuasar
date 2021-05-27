const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "criarconta", component: () => import("pages/Criarconta.vue") },
      { path: "vervaga", component: () => import("pages/Vervaga.vue") },
      { path: "sobre", component: () => import("pages/Sobre.vue") },
      { path: "sobrein", component: () => import("pages/SobreIn.vue") },
      { path: "/vagas", component: () => import("pages/Vagas.vue")},
      {
        path: "vizualizarcurriculo",
        component: () => import("pages/Vizualizarcurriculo.vue")
      },
      { path: "dadosp", component: () => import("pages/Dadosp.vue") }
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
    path: "/loginadm",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Loginadm.vue") }]
  },
 
  {
    path: "/vagaalteracao",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/VagaAlteracao.vue") }],
    meta: { autenticar: true }
  },
  {
    path: "/usuarioint",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/UsuarioInt.vue") }],
    meta: { autenticar: true }
  },
  {
    path: "/usuariolog",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Usuario.vue") }],
    meta: { autenticar: true }
  },
  {
    path: "/userdados",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("components/Userdados.vue") }
    ],
    meta: { autenticar: true }
  },
  {
    path: "/interessado",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Interessado.vue") }],
    meta: { autenticar: true }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
