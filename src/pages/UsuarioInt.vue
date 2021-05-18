<template>
  <q-page>
    <q-card class="my-card" v-for="curriculo in Curriculocad" :key="curriculo.id">
      <q-card-section>
        <div class="text-h6 text-primary" style="margin-bottom: 1em">
         {{ curriculo.nome }}
        </div>
        <p>
          <strong>Endereço : </strong>{{ curriculo.endereco }}
        </p>
        <p><strong>Escolaridade : </strong> {{ curriculo.escolaridade}}</p>
        <p><strong>Telefone : </strong> {{ curriculo.telefone }}</p>
      </q-card-section>

      <div class="q-pa-md">
        <q-btn-dropdown
          class="q-ml-lg btnconf"
          color="primary"
          icon="settings"
          label="Configurações"
        >
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar icon="edit" color="primary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <router-link to="/dadosp" class="edit"
                  >Editar dados</router-link
                >
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup >
              <q-item-section avatar>
                <q-avatar icon="delete" color="red" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Excluir conta</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </q-card>

    <q-separator class="hr" />

    <h6 class="titulo">Vagas que você envio curriculo</h6>
    <div class="cards">
      <div v-for="cadastrarvaga in Cadastrovaga" :key="cadastrarvaga.id">
        <q-card class="my-card bg-grey-4  text-dark cardcurriculo">
          <q-card-section>
            <div class="text-h6" style="text-align:center;">{{ cadastrarvaga.nome }}</div>
            <hr>
             <div class="text-subtitle"><strong>Telefone:  </strong> {{ cadastrarvaga.telefone }}</div>
            <div class="text-subtitle"><strong>Cargo:  </strong> {{ cadastrarvaga.cargo }}</div>
            <div class="text-subtitle"><strong>Experiência:  </strong>{{ cadastrarvaga.experiencia }}</div>
            <div class="text-subtitle"><strong>Escolaridade:  </strong> {{ cadastrarvaga.escolaridade }}</div>

          </q-card-section>
          <q-card-actions>
            <q-separator />
          
        </q-card-actions>
        
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<style>
.cards {
  flex-wrap: wrap;
  margin: 35px 35px;
  display: flex;
  justify-content: space-between;
}
.btns {
  padding: 14px;
  max-width: 350px;
}
.cardcurriculo {
  max-width: 300px;
  margin: 52px auto;
  padding: 35px;
}
.hr {
  width: 35%;
}
.titulo {
  color: rgb(25, 118, 210);
  font-weight: bold;
  text-align: center;
}
.btnconf {
  margin: -3px auto;
}
.edit {
  text-decoration: none;
  color: #000;
}
.my-card {
  padding: 12px;
}
</style>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PageUsuarioint",
  methods: {
    ...mapActions('mainstore', ['obterCurriculo', 'selecionarCurriculo','obterCadastrovaga','selecionarVaga']),

  },
  computed: {
    ...mapGetters('mainstore', ['Curriculocad', 'Cadastrovaga'])
  },

  created() {
    this.obterCurriculo(),
    this.obterCadastrovaga()
  }
};
</script>
