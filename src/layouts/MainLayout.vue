<template>
  <q-layout view="hHh LpR fFf">
    <q-header class="text-dark bg-white fixed " height-hint="98">
      <q-toolbar class="q-mt-mdquas menu">
        <q-toolbar-title>
          <a href="">
            <img class="logo" src="../assets/imagem/logo.png" />
          </a>
        </q-toolbar-title>

        <q-btn-dropdown icon="menu" class="menuburgue">
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>
                  <router-link class="btn" to="/vagas"
                    >Ver vagas</router-link
                  ></q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>
                  <router-link class="btn " to="/cadastrarvaga"
                    >Cadastrar sua vaga</router-link
                  ></q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label
                  ><router-link class="btn " to="/login"
                    >Login</router-link
                  ></q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <!-----
        <q-btn  icon="menu" class="menuburgue">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <router-link class="btn" to="/vagas">Ver vagas</router-link>
            </q-item>
            <q-item clickable v-close-popup>
              <router-link class="btn " to="/cadastrarvaga">Cadastrar sua vaga</router-link>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <router-link class="btn " to="/login">Login</router-link>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      --->
        <div class="q-gutter-y-md menubtns">
          <q-tabs>
            <!--Codigo Novo-->
            <q-route-tab
              class="text-primary links q-mx-sm"
              to="/vagas"
              label="VER VAGAS"
            />
            <hr class="q-py-sm" />
            <q-route-tab
              class="text-primary links q-mx-sm"
              to="/cadastrarvaga"
              label="CADASTRE SUA VAGA"
            /> <q-btn
              unelevated
              rounded
              color="primary"
              label="FAZER LOGIN"
              to="/login"
            />
          </q-tabs>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="paginas">
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
      </transition>
      <router-view />
    </q-page-container>

    <q-footer class="absolute">
      <div class="bg-primary row justify-between q-py-md">
        <div class="q-px-xl sobre">
          <router-link class="text-weight-bold link" to="/sobre"
            >Sobre a UseJobs</router-link
          >
        </div>

        <div class="q-px-xl">
          <p class="text-weight-bold">Contato</p>
          <a href="#" class="text-white">usejobs@gmail.com</a>
        </div>
      </div>
      <div class="bg-white" style="padding: 15px">
        <p
          class="text-dark text-center align-center text-weight-bold text-blue-grey-7 "
          style="margin: 0"
        >
          2021 / Todos os direitos reservados.
        </p>
      </div>
    </q-footer>
  </q-layout>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="stylus">
.logo {
  width: 120px;
}

.links:hover{
  border-radius 50px;
}
.link{
  text-decoration: none;
  color: #fff
}
.paginas {
  background-color: #f8f9fa;
}

.logoimg {
  margin-left: 85px;
}

.btns {
  margin-left: 10px;
}
*/
.menuburgue {
  display: none;
}

.direitos {
  text-align: center;
}

.container {
  width: 1126px !important;
}
.menu{
  margin: 13px auto;
}
@media screen and (max-width:470px) {
  .menuburgue {
    display:block
  }
 
}
</style>
