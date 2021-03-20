<template>
  <q-layout view="hHh LpR fFf">
    <q-header
      class="menu  text-dark"
      height-hint="98"
    >
      <q-toolbar style="height: 86px">
        <q-toolbar-title class="logoimg">
          <a href="">
          <img class="logo" src="../assets/imagem/logo.png" />
          </a>
        </q-toolbar-title>
        <q-tabs  class="links">
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
.logo{
  width: 120px;
}
.menu{
  background-color: #fff;
}
.paginas{
  background-color: #f8f9fa;
}
.logoimg, {
  margin-left : 120px ;
}
.links{
  margin-right 120px;
}
.btns{
  margin-left: 10px;
}
.menuburgue{
  background-color: #000;
}
</style>