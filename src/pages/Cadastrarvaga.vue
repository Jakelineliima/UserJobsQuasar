<template>
  <div class="row justify-evenly cont">
    <div>
      <h6 class="text-primary" style="margin-bottom: 1em">
        Cadastre sua vaga
      </h6>
      <p class="text-subtitle1">
        Encontrar o seu funcionario é muito mais simples do que você imagina.
      </p>
      <q-img src="../assets/imagem/imagecadastrar.png" class="img" />
    </div>
    <div class="inputs">
      <h6 class="text-primary" style="margin-bottom: 1em">
        Dados da vaga
      </h6>
      <q-input
        filled
        color="deep-primary"
        class="bg-white"
        v-model="email"
        type="text"
        label="Nome do contratante"
      />
      <q-input
        filled
        color="deep-primary"
        class="bg-white phone"
        v-model="telefone"
        type="text"
        label="Telefone"
      />
      <q-input
        filled
        color="deep-primary"
        class="bg-white"
        v-model="endereco"
        type="text"
        label="Endereço"
      />
      <q-select
        filled
        v-model="model"
        :options="options"
        label="Escolaridade"
        class="btndrop"
      />

      <q-input
        filled
        color="deep-primary"
        class="bg-white"
        v-model="endereco"
        type="text"
        label="Cargo"
      />

      <q-select
        filled
        v-model="model"
        :options="exp"
        label="Experiencia"
        class="btndrop"
      />

      <q-btn
        unelevated
        rounded
        color="primary"
        class="btnenvia"
        label="Enviar"
      />
    </div>
  </div>
</template>
<style lang="stylus">
.img{
    width: 240px;
}
.inputs{
  width: 300px;
  text-align: center;

}
.btndrop{
  width: 100%;
  height: 11%;
  margin: 10px auto;
}
.phone{
  margin: 10px auto;
}
.cont{
  margin-bottom: 90px ;
}
.btnenvia{
  width: 65%;
}
</style>
<script>
export default {
  data() {
    return {
      resposta: true,

      model: null,
      options: [
        "Ensino fundamental completo",
        "Ensino fundamental incompleto",
        "Ensino medio completo",
        "Ensino medio incompleto",
        "Ensino medio completo",
        "Ensino superior completo",
        "Ensino superior incompleto"
      ],
      exp: [
        "Sim", "Não"
      ]
    };
  }
};
</script>
