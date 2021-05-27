<template>
  <q-layout view="hHh LpR fFf">
    <q-header class="text-dark bg-white fixed" height-hint="98">
      <q-toolbar class="q-mt-mdquas menu">
        <q-toolbar-title>
          <a href="">
            <img class="logo" src="../assets/imagem/logo.png" />
          </a>
        </q-toolbar-title>

        <q-btn-dropdown icon="menu" color="primary" class="menuburgue">

              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <router-link class="text-primary links q-mx-sm btn" to="/vagas"
                    >Ver vagas</router-link>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <router-link class="text-primary links q-mx-sm btn" to="/cadastrarvaga"
                    >Cadastrar vaga</router-link>
                  </q-item-section>
                </q-item>   
                <hr class="q-py"/>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <router-link class="text-primary links q-mx-sm btn" to="/usuarioint"
                    >Candidato</router-link>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <router-link class="text-primary links q-mx-sm btn" to="/usuariolog"
                    >Empregador</router-link>
                  </q-item-section>
                </q-item>    
              </q-list>
            </q-btn-dropdown>     
       <!---   <q-list>
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
                  <router-link class="btn" to="/cadastrarvaga"
                    >Cadastrar sua vaga</router-link
                  ></q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label
                  ><router-link class="btn" to="/login"
                    >Login</router-link
                  ></q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>--->
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
            />
            <q-btn-dropdown color="primary" label="Login" rounded>
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-route-tab
                      class="text-primary links q-mx-sm"
                      to="/login"
                      label="Candidato"
                    />
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-route-tab
                      class="text-primary links q-mx-sm"
                      to="/loginadm"
                      label="Empregador"
                    />
                  </q-item-section>
                </q-item>       
              </q-list>
            </q-btn-dropdown>
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
          class="text-dark text-center align-center text-weight-bold text-blue-grey-7"
          style="margin: 0"
        >
          2021 / Todos os direitos reservados.
        </p>
      </div>
    </q-footer>
  </q-layout>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PageUsuariolog",

  methods: {
    ...mapActions("mainstore", ["logout", "carregarToken"]),
     efetuarLogout() {
      this.logout();
    },
  },
  computed: {
    ...mapGetters("mainstore", ["token"]),
  },
};
</script>

<style lang="stylus">
.logo {
  width: 120px;
}

.links:hover {
  border-radius: 50px;
}

.link {
  text-decoration: none;
  color: #fff;
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
hr{
  color: #536dfe;
}

@css {
*
}

.menuburgue {
  display: none;
}

.direitos {
  text-align: center;
}

.container {
  width: 1126px !important;
}

.menu {
  margin: 13px auto;
}

@media screen and (max-width: 470px) {
  .menuburgue {
    display: block;
  }
}
</style>
