<template>
    <q-page padding class="row justify-center">
      <div class="q-pa-md" style="width: 400px">
        <q-form
            @submit="onSubmit"
            class="q-gutter-md text-center"
        >
            <h3 class="q-mb-xs text-primary">Entrar</h3>
            <p class="q-mb-lg text-blue-grey-12">Mantenha-se por dentro do seu mundo profissional</p>
            <q-input
            filled
            color="deep-purple"
            class="bg-white"
            v-model="email"
            type="text"
            label="Insira seu e-mail" 
            />
            <q-input
            filled
            color="deep-purple"
            class="bg-white"
            v-model="senha"
            type="password"
            label="Insira sua senha" 
            />
            <div class="q-pb-md">
                <q-btn outlined rounded class="q-px-xl" label="Entrar" type="submit" color="primary"/>
            </div>
            <p class="text-blue-grey-12">Novo no User Jobs? <router-link to="/criarconta" style="text-decoration: none" class="text-primary">Cadastre-se</router-link></p>
        </q-form>
        </div>
    </q-page>
</template>

<script>
export default {
  name: 'login',
  data (){
    return{
      email: null,
      senha: null
    }
  }
}
</script>
