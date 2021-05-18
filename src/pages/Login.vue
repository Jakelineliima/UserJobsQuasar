<template>
  <q-page padding class="row justify-center">
    <div class="q-pa-md" style="width: 400px">
      <q-form class="q-gutter-md text-center">
        <h3 class="q-mb-xs text-primary">Entrar</h3>
        <p class="q-mb-lg ">Mantenha-se por dentro do seu mundo profissional</p>
        <q-input
          filled
          class="bg-white"
          v-model="usuario"
          type="text"
          label="Digite seu e-mail*"
        />
        <q-input
          filled
          class="bg-white"
          v-model="senha"
          type="password"
          label="Digite sua senha*"
        />
        <div class="q-pb-md">
          <q-btn
            outlined
            rounded
            class="q-px-xl"
            label="Entrar"
            color="primary"
            @click="efetuarLogin()"
          />
        </div>
        <p class="text-blue-grey-12">
          Novo no User Jobs?
          <router-link
            to="/criarconta"
            style="text-decoration: none"
            class="text-primary"
            >Cadastre-se</router-link
          >
        </p>
      </q-form>
    </div>
  </q-page>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      usuario: '',
      senha: ''
    }
  },
  methods: {
    ...mapActions('mainstore', ['login','logout','carregarToken']),    
    async efetuarLogin () {
      await this.login({ username: this.usuario, password: this.senha })
      await this.carregarToken()
      if (this.token) {
        this.$router.push('/usuariolog')
      }
    },
    efetuarLogout () {
      this.logout()
    }
  },
  computed: {
    ...mapGetters('mainstore', ['token'])
  }
}
</script>
