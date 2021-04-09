<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 800px">
      <div class="card">
        <div>
            <p class="text-h5 titulo text-primary"> Teste de cabeçalho</p>
            <h3 class="q-mb-xs text-primary">Dados pessoais</h3>
            <p class="q-mb-lg text-blue-grey-12">Mantenha seus dados sempre atualizados.</p>
            <q-input
            filled
            color="deep-purple"
            class="bg-white"
            v-model="nome"
            type="text"
            label="Seu nome completo" 
            />
            <q-input
            filled
            color="deep-purple"
            class="bg-white"
            v-model="email"
            type="password"
            label="E-mail" 
            />
            <q-input
            filled
            color="deep-purple"
            class="bg-white"
            v-model="endereco"
            type="password"
            label="Endereço" 
            />
            <q-input
            filled
            color="deep-purple"
            class="bg-white"
            v-model="formacao"
            type="password"
            label="Formação" 
            />
            <q-input
            filled
            color="deep-purple"
            class="bg-white"
            v-model="telefone"
            type="password"
            label="Telefone" 
            />
            <div class="q-pb-md">
                <q-btn outlined rounded class="q-px-xl" label="Editar dados" type="submit" color="primary"/> <br>
                <q-btn outlined rounded class="q-px-xl" label="Salvar" type="submit" color="red"/>
            </div>
            </div>
        </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'login',
  data (){
    return{
        nome: null,
        email: null,
        endereco: null,
        formacao: null,
        telefone: null
    }
  }
}
</script>