<template>
  <div class="q-pa-md formulario">
    <div class="">
      <q-form @submit="onSubmit"  class="q-gutter-md justify-center">
        <h5 class="titulo">Criar Conta</h5>
        <p>Aproveite sua vida profissional ao máximo</p>
        <div class="justify-center">
        <q-input
        class="input"
          filled
          v-model="email"
          label="Digite seu email*"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
        class="input"
          filled
          type="password"
          v-model="senha"
          label="Crie uma senha *"
          lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Digite uma senha']"
        />
        </div>
        <div class="q-gutter-sm">
          <q-checkbox v-model="empresa" label="Empresa" />
          <q-checkbox v-model="candidato" label="Candidato" />
        </div>

        <div>
          <q-btn unelevated rounded color="primary" label="Criar conta" />
        </div>
      </q-form>
      <p class="entrar">
        Já se cadastrou no Use Jobs? <a href="#">Entre agora</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Criarconta",
  data() {
    return {
      empresa: true,
      candidato: false,
      email: null,
      senha: null
    };
  },
  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },
}
}
</script>
<style lang="stylus">
.titulo {
  color: rgb(25, 118, 210);
  font-weight: bold;
}

.entrar {
  margin: 30px auto;
}

.formulario {
  text-align: center;
  display: contents;
}
.input{
  width: 23%;
}
.form{
  display block-ruby;
}
</style>
