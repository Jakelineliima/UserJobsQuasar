<template>
  <q-layout view="hHh LpR fFf">
    <q-header class="menu text-dark" height-hint="98">
      <q-toolbar style="height: 86px">
        <q-toolbar-title class="logoimg">
          <a href="">
            <img class="logo" src="../assets/imagem/logo.png" />
          </a>
        </q-toolbar-title>
        <q-tabs class="links">
          <q-btn flat rounded color="primary" label="Ver vagas" />
          <p>|</p>
          <q-btn flat rounded color="primary" label="Cadastre sua vaga" />
          <q-btn unelevated rounded color="primary" label="Fazer login" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container class="paginas" style="background: #f8f9fa">
      <router-view />
    </q-page-container>

    <q-footer class="text-white rodape">
      <div class="teste">
        <div class="text-h6 sobre">
          <q-btn flat no-caps label="Sobre a UseJobs" />
        </div>

        <div class="text-right">
          <p class="text-h6">Contato</p>
          <p>userjobs@gmail.com</p>
        </div>
      </div>
      <div>
        <p class="text-subtitle2 text-dark bg-white direitos">
          2021 / Todos os direitos reservados
        </p>
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

.menu {
  background-color: #fff;
  position: fixed;
}

.paginas {
  background-color: #f8f9fa;
}

.logoimg {
  margin-left: 85px;
}

.links {
  margin-right: 120px;
}

.btns {
  margin-left: 10px;
}

.menuburgue {
  background-color: #000;
}

.rodape {
  position: relative;
}

.direitos {
  text-align: center;
}

.container {
  width: 1126px !important;
}

.teste {
  display: flex;
  justify-content: space-between;
}

</style>