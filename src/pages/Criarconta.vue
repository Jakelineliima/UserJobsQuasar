<template>
  <div class="q-pa-md formulario">
    <div class="">
      <q-form  class="q-gutter-md justify-center">
        <h5 class="titulo">Criar Conta</h5>
        <p>Aproveite sua vida profissional ao máximo</p>
        <div class="form">
          <q-input
            class="input"
            filled
            v-model="username"
            label="Digite seu email*"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Digite um email valido!',
            ]"
          />

          <q-input
            class="input"
            filled
            type="password"
            v-model="password"
            label="Crie uma senha *"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Digite uma senha!',
            ]"
          />
        </div>
<!---
        <div class="q-gutter-sm">
          <p class="text-subtitle2">Qual seu interesse ?</p>
          <q-checkbox v-model="empresa" label="Empresa" />
          <q-checkbox v-model="candidato" label="Candidato" />
        </div>
-->
        <div>
          <q-btn
            unelevated
            rounded
            color="primary"
            class="btncriar"
            label="Criar conta"
            @click="efetuarCadastro()"
          />
        </div>
      </q-form>
      <p class="entrar">
        Já se cadastrou no Use Jobs? <router-link style="text-decoration: none" class="text-primary" to="/login">Entre agora</router-link>
      </p>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      
    }
  },
  methods: {
    ...mapActions('mainstore', ['adicionarConta']),    
    async efetuarCadastro() {
       await this.adicionarConta({
        username: this.username,
        password: this.password,
        
      });
    }
  },

}
</script>
<style lang="stylus">
.titulo {
  color: rgb(25, 118, 210);
  font-weight: bold;
  margin: 69px 0 14px;
}

.btncriar {
  width: 16%;
}

.entrar {
  margin: 30px auto 65px;
}

.formulario {
  text-align: center;
  display: contents;
}

.input {
  width: 345px;
  border-radius: 12px;
  margin: 9px auto;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
