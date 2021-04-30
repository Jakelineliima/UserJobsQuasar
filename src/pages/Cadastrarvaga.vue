<template>
  <div class="row justify-evenly cont">
    <div style="text-align: center">
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
        outlined
        vclearable
        rounded-radios
        color="deep-primary"
        class="bg-white"
        v-model="nome"
        type="text"
        label="Nome do contratante"
        :rules="[
            val => val && val.length > 0 || 'Nome obrigatório'
          ]"
      >
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>

      <q-input
        outlined
        clearable
        rounded-radios
        color="deep-primary"
        class="bg-white phone"
        v-model="telefone"
        type="text"
        label="Telefone"
         :rules="[
          val => val && val.length > 0 || 'Telefone obrigatório',
          val => val.length === 11 || 'Coloque um telefone real'
        ]"
      >
        <template v-slot:prepend>
          <q-icon name="phone" />
        </template>
      </q-input>

      <q-input
        outlined
        clearable
        rounded-radios
        color="deep-primary"
        class="bg-white"
        v-model="endereco"
        type="text"
        label="Endereço"
        :rules="[
            val => val && val.length > 0 || 'Endereço obrigatório'
          ]"
      >
        <template v-slot:prepend>
          <q-icon name="home" />
        </template>
      </q-input>

      <q-select
        outlined
        clearable
        rounded-radios
        v-model="escolaridade"
        :options="options"
        label="Escolaridade"
        class="btndrop"
        :rules="[
            val => val && val.length > 0 || 'Selecione o nivel escolar'
          ]"
      >
        <template v-slot:prepend>
          <q-icon name="school" />
        </template>
      </q-select>

      <q-input
        outlined
        clearable
        rounded-radios
        color="deep-primary"
        class="bg-white"
        v-model="cargo"
        type="text"
        label="Cargo"
        :rules="[
            val => val && val.length > 0 || 'Digite o cargo predentido'
          ]"
      >
        <template v-slot:prepend>
          <q-icon name="badge" />
        </template>
      </q-input>

      <q-select
        outlined
        clearable
        rounded-radios
        v-model="experiencia"
        :options="exp"
        label="Experiencia"
        class="btndrop"
        :rules="[
            val => val && val.length > 0 || 'Selecione a experiencia'
          ]"
      >
      <template v-slot:prepend>
          <q-icon name="work" />
        </template>
      </q-select>

      <q-btn
        @click="cadastrarVaga"
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
      nome: "",
      telefone: "",
      endereco: "",
      cargo: "",
      escolaridade: "",
      experiencia: "",
      listaVaga: [],
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
      exp: ["Sim", "Não"]
    };
  },
  /*methods: {
    cadastrarVaga() {
      this.listaVaga
        .push({
          nome: this.nome,
          telefone: this.telefone,
          endereco: this.endereco,
          escolaridade: this.escolaridade,
          cargo: this.cargo,
          experiencia: this.experiencia
        })
        .onOk(() => {
          this.listaVaga.splice(index, 1);
          this.$q.notify({
            message: "Sua vaga foi cadastrada",
            color: "green"
          });
        });
    }
  }*/
};
</script>
