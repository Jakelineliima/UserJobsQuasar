<template>
  <div class="q-pa-md cont">
    <div>
      <div class="col">
        <q-text class="text-h6 text-primary"><strong>Nome da empresa: </strong>{{vagaSelecionado.nome}}</q-text>
        <br />
        <q-text class=""><strong>Cargo: </strong>{{vagaSelecionado.cargo}}</q-text>
        <p class=""><strong>Endereço: </strong>
          {{vagaSelecionado.endereco}}
        </p>
        <p class="text-subtitle"> <strong>Telefone: </strong> {{ vagaSelecionado.telefone }}</p>
      </div>
      <div class="">
        <q-text class="text-h6 text-primary">Sobre essa vaga</q-text>
        <div class="row justify-around cardsobre">
          <q-text class="text-subtitle"><strong>Precisa ter experiencia</strong> - {{vagaSelecionado.experiencia}}</q-text>
          <q-text class="text-subtitle txt"
            ><strong>Nivel de escolaridade</strong> -  {{vagaSelecionado.escolaridade}}</q-text
          >
        </div>

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

p{
  margin: 0;
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
    ...mapGetters('mainstore', ['Cadastrovaga','vagaSelecionado'])
  },

  created() {
    this.obterCadastrovaga();
  }
};
</script>
