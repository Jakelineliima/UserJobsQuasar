<template>
  <div class="q-pa-md formulario" style="max-width: 400px">
    <div class="absolute-center">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <h5 class="titulo">Criar Conta</h5>
        <p>Aproveite sua vida profissional ao máximo</p>
        <q-input
          filled
          v-model="email"
          label="Digite seu email*"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="password"
          v-model="senha"
          label="Crie uma senha *"
          lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Digite uma senha']"
        />

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
  data() {
    return {
      empresa: true,
      candidato: false,
    };
  },
};
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
}
</style>