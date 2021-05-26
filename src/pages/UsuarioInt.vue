<template>
  <q-page>
   <Userdados/>
    <q-separator class="hr" />
    <h6 class="tituloo">Vagas que você enviou currículo</h6>
    <div class="cards">
      <div v-for="cadastrarvaga in Cadastrovaga" :key="cadastrarvaga.id">
        <q-card class="my-card bg-grey-4 text-dark cardcurriculo">
          <q-card-section>
            <div class="text-h6" style="text-align: center">
              {{ cadastrarvaga.nome }}
            </div>
            <hr />
            <div class="text-subtitle">
              <strong>Telefone: </strong> {{ cadastrarvaga.telefone }}
            </div>
            <div class="text-subtitle">
              <strong>Cargo: </strong> {{ cadastrarvaga.cargo }}
            </div>
            <div class="text-subtitle">
              <strong>Experiência: </strong>{{ cadastrarvaga.experiencia }}
            </div>
            <div class="text-subtitle">
              <strong>Escolaridade: </strong> {{ cadastrarvaga.escolaridade }}
            </div>
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
.tituloo {
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
import Userdados from 'src/components/Userdados.vue';
import { mapActions, mapGetters } from "vuex";

export default {
  components: { Userdados },
  name: "PageUsuarioint",
 
  methods: {
    ...mapActions("mainstore", [

      "obterCadastrovaga",
      "selecionarVaga",
     

    ])
    },
  computed: {
    ...mapGetters("mainstore", ["Cadastrovaga"]),
  },

  created() {
    this.obterCadastrovaga()
  },
};
</script>
