<template>
  <div class="q-pa-md cont">
    <div class="">
      <div class="col">
        <q-text class="text-h6 text-primary">Andressa Moura Nenis</q-text>
        <br />
        <q-text class="text-h6">Endereço:</q-text>
        <p class="text-weight-light">
          Avenida Neiriere N°445 Centro - ITÁPOLIS-SP
        </p>
        <p class="text-subtitle2">Numero de contato: 016 996018696</p>
      </div>
      <div class="">
        <q-text class="text-h6 text-primary">Sobre o candidato</q-text>
        <div class="row justify-around cardsobre">
          <q-text class="text-subtitle2">Tem experiência - Sim</q-text>
          <q-text class="text-subtitle2"
            >Nivel de escolaridade - Ensino Superior completo</q-text
          >
        </div>
        <!----
        <q-card
          class="my-card text-dark"
          style=""
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
            label="Não aceito"
          />
           <q-btn
            unelevated
            rounded
            color="primary"
            class="btn"
            label="Entrevistar"
          />
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lorem:
        "O Candidato pode estar cursando faculdade, porem é nescessario ter conhecimento em administração"
    };
  }
};
</script>
<style lang="stylus">
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
</style>