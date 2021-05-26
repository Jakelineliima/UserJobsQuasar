<template>
  <q-page padding class="row justify-around">
    <div style="padding: 0 auto" class="int">
      <h6 style="margin-bottom: 1em" class="text-primary">
        Envie seu currículo
      </h6>
      <p style="margin-top: 0">
        Envie seu
        <a href="#" style="text-decoration: none" class="text-primary"
          >currículo</a
        >
        para a empresa analisar. <br />Boa Sorte !
      </p>
      <img
        class="self-end menina"
        src="../assets/imagem/Group 147.png"
        alt=""
      />
    </div>

    <div style="padding: 0 auto">
      <h6 class="text-center text-primary">Informe seus dados</h6>
      <q-form class="q-col-gutter-md form">
        <q-input
          outlined
          clearable
          rounded-radios
          v-model="nome"
          color="primary"
          label="Nome completo"
          class="col-md-12 col-sm-12 col-xs-12"
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
          v-model="endereco"
          color="primary"
          label="Endereço"
          class="col-md-12 col-sm-12 col-xs-12"
          :rules="[val => (val && val.length > 0) || 'Endereco é obrigatório']"
        >
          <template v-slot:prepend>
            <q-icon name="home" />
          </template>
        </q-input>
        <q-input
          outlined
          clearable
          color="primary"
          v-model="telefone"
          label="Telefone"
          mask="(##) #####-####"
          unmasked-value
          class="col-md-12 col-sm-12 col-xs-12"
          :rules="[
            val => (val && val.length > 0) || 'Telefone é obrigatório',
            val => val.length === 11 || 'Coloque um telefone real'
          ]"
        >
          <template v-slot:prepend>
            <q-icon name="phone" />
          </template>
        </q-input>

        <q-select
          outlined
          clearable
          color="primary"
          class="col-md-12 col-sm-12 col-xs-12"
          :rules="[val => (val && val.length > 0) || 'Escolaridade é obrigatório']"
          v-model="escolaridade"
          :options="options"
          label="Escolaridade"
        >
          <template v-slot:prepend>
            <q-icon name="school" />
          </template>
        </q-select>

        <q-select
          outlined
          clearable
          color="primary"
          class="col-md-12 col-sm-12 col-xs-12"
          :rules="[val => (val && val.length > 0) || 'Campo obrigatório']"
          v-model="experiencia"
          :options="exp"
          label="Experiencia"
        >
          <template v-slot:prepend>
            <q-icon name="work" />
          </template>
        </q-select>

        <div class="col-12 text-center">
          <q-btn
            @click="cadastrarCurriculo()"
            unelevated
            rounded
            color="primary"
            class="q-px-lg q-py-xm"
            label="Enviar"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      nome: '',
      endereco: '',
      telefone: '',
      escolaridade: '',
      experiencia: '',
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
  methods: {
    ...mapActions("mainstore", ["adicionarCurriculo"]),
    async cadastrarCurriculo() {
      await this.adicionarCurriculo({
        nome: this.nome,
        endereco: this.endereco,
        telefone: this.telefone,
        escolaridade: this.escolaridade,
        experiencia: this.experiencia
      })
      
    }
  }
};
</script>
<style>
.form {
  width: 280px;
}
.menina {
  width: 70%;
}
@media screen and (max-width: 800px) {
  .int {
    text-align: center;
  }
  .menina {
    width: 240px;
  }
}
</style>
