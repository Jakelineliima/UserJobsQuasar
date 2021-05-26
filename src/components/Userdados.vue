<template>
  <q-page>
    <q-card
      class="my-card"
      v-for="curriculo in Curriculocad"
      :key="curriculo.id"
    >
      <q-card-section>
        <div class="text-h6 text-primary" style="margin-bottom: 1em">
          {{ curriculo.nome }}
        </div>
        <p><strong>Endereço : </strong>{{ curriculo.endereco }}</p>
        <p><strong>Escolaridade : </strong> {{ curriculo.escolaridade }}</p>
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
              <q-item-section>
                <q-btn
                  unelevated
                  rounded
                  color="primary"
                  class="btncriar"
                  label="Editar"
                  @click="alterar(curriculo.id)"
                />
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
  name: "Userdados",

  methods: {
    ...mapActions("mainstore", [
      "obterCurriculo",
      "selecionarCurriculo",
      "removerCurriculo",
    ]),

    alterar(CurriculoId) {
      this.selecionarCurriculo(CurriculoId);
      this.$router.push("/dadosp");
    },
    remover (CurriculoId) {
      this.$q.dialog({
          title: "Confirma",
          message: "Tem certeza que deseja excluir o Curriculo ?",
          cancel: {
            label: "Cancelar",
          },
          ok: {
            label: "OK",
          },
          persistent: true,
        })
        .onOk(() => {
          this.removerCurriculo(CurriculoId);
          Notify.create({
            color: "positive",
            position: "top",
            message: "Curriculo Excluído!",
          });
        })
        .onCancel(() => {

        });
    },
  },
  computed: {
    ...mapGetters("mainstore", ["Curriculocad"]),
  },

  created() {
    this.obterCurriculo();
  },
};
</script>