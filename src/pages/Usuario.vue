<template>
  <q-page>
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6 text-primary" style="margin-bottom: 1em">
          Ester Nundes Line
        </div>
        <p>
          <strong>Endereço : </strong> Rua Jose Tutyli N° 120 Jardim Paumas
          Itápolis
        </p>
        <p><strong>Escolaridade : </strong> Ensino Superior incompleto</p>
        <p><strong>Telefone : </strong> 16 996789685</p>
      </q-card-section>

      <div class="q-pa-md">
        <q-btn-dropdown
          v-model="menu"
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

            <q-item clickable v-close-popup @click="excluir">
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

    <h6 class="titulo">Curriculos enviados</h6>
    <div class="cards">
      <div v-for="cadastrarvaga in Cadastrovaga" :key="cadastrarvaga.id">
        <q-card class="my-card bg-grey-4  text-dark cardcurriculo">
          <q-card-section>
            <div class="text-h6" style="text-align:center;">{{ cadastrarvaga.nome }}</div>
            <hr>
            <div class="text-subtitle"><strong>Cargo:  </strong> {{ cadastrarvaga.cargo }}</div>
            <div class="text-subtitle"><strong>Experiência:  </strong>{{ cadastrarvaga.experiencia }}</div>
            <div class="text-subtitle"><strong>Escolaridade:  </strong> {{ cadastrarvaga.escolaridade }}</div>
          </q-card-section>
          <q-card-actions>
            <q-separator />
          <q-btn
            unelevated
            rounded
            color="primary"
            class="btncriar"
            label="Editar"
            @click="alterar(cadastrarvaga.id)"
          />
          <q-btn
            unelevated
            rounded
            color="red"
            class="btncriar"
            label="Excluir"
            @click="ver(cadastrarvaga.id)"
          />
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
  name: "PageVagas",

  methods: {
    ...mapActions("mainstore", ["obterCadastrovaga", "selecionarVaga"]),

    alterar (CadastrovagaId){
      this.selecionarVaga(CadastrovagaId)
      this.$router.push('/vagaalteracao')
    }
  },
  computed: {
    ...mapGetters("mainstore", ["Cadastrovaga"])
  },

  created() {
    this.obterCadastrovaga();
  }
};
</script>
