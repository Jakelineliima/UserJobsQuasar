<template>
  <q-layout view="hHh LpR fFf">
    <q-header class="text-dark bg-white fixed" height-hint="98">
      <q-toolbar class="q-mt-md q-px-xl">
        <q-toolbar-title>
          <a href="">
            <img class="logo" src="../assets/imagem/logo.png" />
          </a>
        </q-toolbar-title>
        <q-tabs>
          <!--Codigo Novo-->
          <q-route-tab to="/" label="Ver vagas" />
          <hr class="q-py-sm">
          <q-route-tab to="/" label="Cadastre sua vaga" />
          <q-btn class="text-weight-bold" outline rounded color="primary" label="Fazer login" />

          <!-- <q-btn flat rounded color="primary" label="Ver vagas" />
          <hr class="q-py-sm">
          <q-btn flat rounded color="primary" label="Cadastre sua vaga" />
          <q-btn unelevated rounded color="primary" label="Fazer login" />
          -->
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container class="paginas">
      <router-view />
    </q-page-container>

    <q-footer class="absolute">
      <div class="bg-primary row justify-between q-py-md">

        <div class="q-px-xl">
          <p class="text-weight-bold">Sobre a Use Jobs</p>
        </div>

        <div class="q-px-xl">
          <p class="text-weight-bold">Contato</p>
          <a href="#" class="text-white">usejobs@gmail.com</a>
        </div>

      </div>
      <div class="bg-white" style="padding: 15px">
        <p class="text-dark text-center align-center text-weight-bold text-blue-grey-7 " style="margin: 0">2021 / Todos os direitos reservados.</p>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="stylus">
.logo {
  width: 120px;
}

.paginas {
  background-color: #f8f9fa;
}

/*.logoimg {
  margin-left: 85px;
}

.links {
  margin-right: 120px;
}

.btns {
  margin-left: 10px;
}
*/
.menuburgue {
  background-color: #000;
}

.direitos {
  text-align: center;
}

.container {
  width: 1126px !important;
}

</style>