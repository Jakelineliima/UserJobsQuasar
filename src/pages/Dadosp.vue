<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 800px">
      <div>
        <div>
         
          <h6 class="q-mb-xs text-primary">Dados pessoais</h6>
          <p class="q-mb-lg text-blue-grey-12">
            Mantenha seus dados sempre atualizados.
          </p>
          <q-input
            outlined
            vclearable
            rounded-radios
            class="bg-white"
            v-model="curriculoSelecionado.nome"
            type="text"
            label="Seu nome completo"
            :rules="[
              val => (val && val.length > 0) || 'Digite seu nome completo'
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>
         
          <q-input
            outlined
            vclearable
            rounded-radios
            class="bg-white"
            v-model="curriculoSelecionado.endereco"
            type="text"
            label="Endereço"
            :rules="[val => (val && val.length > 0) || 'Digite seu endereço']"
          >
            <template v-slot:prepend>
              <q-icon name="home" />
            </template>
          </q-input>
          <q-select
            outlined
            clearable
            rounded-radios
            v-model="curriculoSelecionado.escolaridade"
            :options="options"
            label="Escolaridade"
            class="btndrop"
            :rules="[
              val => (val && val.length > 0) || 'Selecione o nível escolar'
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="school" />
            </template>
          </q-select>
          <q-input
            outlined
            vclearable
            rounded-radios
            class="bg-white"
            v-model.number="curriculoSelecionado.telefone"
            type="text"
            mask="(##) #####-####"
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
          <div class="q-pb-md">
            <q-btn
              unelevated
              rounded
              class="q-px-xl btn"
              label="Salvar"
              color="primary"
              @click="alterar()"
            />
          </div>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'Dadosp',
  data() {
    return {
      nome: '',
      telefone: '',
      endereco: '',
      escolaridade: "",
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
    ...mapActions('mainstore', ['alterarCurriculo']),
    async alterar() {
      await this.alterarCurriculo(this.curriculoSelecionado);
      this.$router.push('/usuarioint');
    }
  },
  computed: {
    ...mapGetters('mainstore', ['curriculoSelecionado'])
  }
  
};
</script>
<style>
.btn{
  float: right;
  margin: 28px auto 28px;
}
@media screen and (max-width: 400px) {
  .btn{
    width: 100%;
  }
}
</style>