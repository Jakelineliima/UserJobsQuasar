<template>
  <div class="q-pa-md cont">
    <div>
      <div class="col">
        <q-text class="text-h6 text-primary"> {{ verVaga.nome }}</q-text>
        <br />
        <q-text class="text-h6">{{verVaga.cargo}}</q-text>
        <p class="text-weight-light">
          {{verVaga.endereco}}
        </p>
        <p class="text-subtitle2"> {{ verVaga.telefone }}</p>
      </div>
      <div class="">
        <q-text class="text-h6 text-primary">Sobre essa vaga</q-text>
        <div class="row justify-around cardsobre">
          <q-text class="text-subtitle2">Precisa ter experiencia - {{verVaga.experiencia}}</q-text>
          <q-text class="text-subtitle2 txt"
            >Nivel de escolaridade -  {{verVaga.escolaridade}}</q-text
          >
        </div>
        <!---
        <q-card
          class="my-card text-dark"
          style="width: 100%"
        >
          <q-card-section>
            <div class="text-h6">Mensagem ao canditato</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ lorem }}
          </q-card-section>
        </q-card> --->
        <div class="row justify-around">
           <q-btn
            unelevated
            rounded
            color="primary"
            class="btn"
            label="Voltar"
            to="/vagas"
          />
           <q-btn
            unelevated
            rounded
            color="primary"
            class="btn"
            label="Canditadar"
            to="/interessado"
          />
        </div>
        
      </div>
    </div>
  </div>
</template>

<style>
.cardsobre{
  margin: 33px auto;
}
.btn{
  margin: 35px auto;
  width: 20%;
}
.cont{
  margin: 20px 90px;
}
@media screen and (max-width: 800px) {
  .cont{
    margin: 0;
  }
  .cardsobre{
    justify-content: normal;
  }
  .txt{
    margin-top: 14px;
  }
  
  .btn{
    width: 47%;
  }
}
</style>
<script>
import {  mapGetters } from "vuex";

export default {
  name: "PageVervagas",


  computed: {
    ...mapGetters('mainstore', ['verVaga'])
  },

  created() {
    this.obterCadastrovaga();
  }
};
</script>
