<template>
  <div class="row justify-evenly cont">
    <div style="text-align: center">
      <h6 class="text-primary" style="margin-bottom: 1em">
        Cadastre sua vaga
      </h6>
      <p class="text-subtitle1">
        Encontrar o seu funcionário é muito mais simples do que você imagina.
      </p>
      <q-img src="../assets/imagem/imagecadastrar.png" class="img" />
    </div>
    <div class="inputs" >
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
        label="Nome da empresa"
        :rules="[val => (val && val.length > 0) || 'Nome obrigatório']"
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
        mask="(##) #####-####"
        type="text"
        label="Telefone"
        :rules="[
          val => (val && val.length > 0) || 'Telefone é obrigatório',
          val => val.length === 15 || 'Coloque um telefone real'
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
        :rules="[val => (val && val.length > 0) || 'Endereço é obrigatório']"
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
        :rules="[val => (val && val.length > 0) || 'Selecione o nível escolar']"
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
        :rules="[val => (val && val.length > 0) || 'Digite o cargo pretendido']"
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
        :rules="[val => (val && val.length > 0) || 'Selecione a experiência']"
      >
        <template v-slot:prepend>
          <q-icon name="work" />
        </template>
      </q-select>

      <q-btn
        @click="cadastrarVaga()"
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
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      nome: '',
      telefone: '',
      endereco: '',
      cargo: '',
      escolaridade: '',
      experiencia: '',
      options: [
        "Ensino fundamental completo",
        "Ensino fundamental incompleto",
        "Ensino médio completo",
        "Ensino médio incompleto",
        "Ensino médio completo",
        "Ensino superior completo",
        "Ensino superior incompleto"
      ],
      exp: ["Sim", "Não"]
    };
  },
  methods: {
    ...mapActions("mainstore", ["adicionarVaga"]),
    async cadastrarVaga() {
      await this.adicionarVaga({
        nome: this.nome,
        telefone: this.telefone,
        endereco: this.endereco,
        cargo: this.cargo,
        escolaridade: this.escolaridade,
        experiencia: this.experiencia,
      });
    }
  },
  
  
};
</script>