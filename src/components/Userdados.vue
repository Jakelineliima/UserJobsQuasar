<template>
  <q-page>
    <q-card class="my-card" v-for="curriculo in Curriculocad" :key="curriculo.id">
      <q-card-section>
        <div class="text-h6 text-primary" style="margin-bottom: 1em">
         {{ curriculo.nome }}
        </div>
        <p>
          <strong>Endereço : </strong>{{ curriculo.endereço }}
        </p>
        <p><strong>Escolaridade : </strong> {{ curriculo.escolaridade}}</p>
        <p><strong>Telefone : </strong> {{ curriculo.telefone }}</p>
      </q-card-section>

      <div class="q-pa-md">
        <q-btn-dropdown
          class="q-ml-lg btnconf"
          color="primary"
          icon="settings"
          label="Configurações"
        >
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar icon="edit" color="primary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <router-link to="/dadosp" class="edit"
                  >Editar dados</router-link
                >
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup >
              <q-item-section avatar>
                <q-avatar icon="delete" color="red" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Excluir conta</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'Userdados',

  methods: {
    ...mapActions('mainstore', ['obterCurriculo', 'selecionarCurriculo']),

    alterar (CurriculoId){
      this.selecionarCurriculo(CurriculoId)
      this.$router.push('/dadosp')
    }
  },
  computed: {
    ...mapGetters('mainstore', ['Curriculocad'])
  },

  created() {
    this.obterCurriculo()
  }
};
</script>