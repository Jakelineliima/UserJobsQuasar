<template>
  <q-page
  padding
  class="row justify-around">

    <div style="padding: 0 auto">
      <h3 style="margin-bottom: .2em" class="text-primary">Cadastre seu curriculo</h3>
      <p style="margin-top: 0">
      Envie seu
      <a href="#"
      style="text-decoration: none"
      class="text-primary">curriculo</a>
      para a empresa analisar. <br>Boa Sorte!</p>
      <img class="self-end" src="../assets/imagem/Group 147.png" alt="">
    </div>

    <div style="padding: 0 auto">
      <h3 class="text-center text-primary">Informe seus dados</h3>
      <q-form
      @submit="onSubmit"
      class="q-col-gutter-md"
      ref="myform"
      >
        <q-input
          outlined
          clearable
          rounded-radios
          v-model="form.nome"
          color="deep-purple"
          label="Nome completo"
          class="col-md-12 col-sm-12 col-xs-12"
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
          v-model="form.endereco"
          color="deep-purple"
          label="Endereco"
          class="col-md-12 col-sm-12 col-xs-12"
          :rules="[
            val => val && val.length > 0 || 'Endereco obrigatório'
          ]"
        >
          <template v-slot:prepend>
            <q-icon name="home" />
          </template>
        </q-input>
        <q-input
        outlined
        clearable
        color="deep-purple"
        v-model="form.telefone"
        label="Telefone"
        mask="(##) #####-####"
        unmasked-value
        class="col-md-12 col-sm-12 col-xs-12"
        :rules="[
          val => val && val.length > 0 || 'Telefone obrigatório',
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
      color="deep-purple"
      class="col-md-12 col-sm-12 col-xs-12"
      :rules="[
            val => val && val.length > 0 || 'Campo obrigatório'
          ]"
      v-model="form.escolaridade"
      :options="form.options1"
      label="Escolaridade">
        <template v-slot:prepend>
          <q-icon name="school" />
        </template>
      </q-select>

      <q-select
      outlined
      clearable
      color="deep-purple"
      class="col-md-12 col-sm-12 col-xs-12"
      :rules="[
            val => val && val.length > 0 || 'Campo obrigatório'
          ]"
      v-model="form.experiencia"
      :options="form.options2"
      label="Experiencia">
        <template v-slot:prepend>
          <q-icon name="work" />
        </template>
      </q-select>

        <div class="col-12 text-center">
          <q-btn
          outlined
          rounded
          color="primary"
          type="submit"
          label="Enviar"
          class="q-px-lg q-py-xm"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Interessado',
  data () {
    return {
      form: {
        nome: '',
        endereco: '',
        telefone: '',
        escolaridade: null,
        options1: [
        'Google', 'Facebook', 'Apple', 'Oracle'
        ],
        experiencia: null,
        options2: [
        'Google', 'Facebook', 'Apple', 'Oracle'
        ],
      }
    }
  },
  methods: {
    onSubmit () {
      this.$q.notify({
        message: 'Cadastro realizado com sucesso',
        color: 'positive',
        icon: 'check_circle_outline'
      })
      this.onReset()
    },
    async onReset () {
      await this.resetForm()
      this.$refs.myform.resetValidation()
    },
    async resetForm () {
      this.form = {
        nome: '',
        endereco: '',
        telefone: '',
        escolaridade: null,
        experiencia: null
      }
    }
  }
}
</script>
