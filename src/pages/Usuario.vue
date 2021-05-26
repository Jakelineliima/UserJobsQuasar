<template>
  <q-page>
   <!---- <q-card
      class="my-card"
      v-for="cadastrarvaga in Cadastrovaga"
      :key="cadastrarvaga.id"
    >
      <q-card-section>
        <div class="text-h6 text-primary" style="margin-bottom: 1em">
          {{ cadastrarvaga.nome }}
        </div>
        <p><strong>Endereço : </strong>{{ cadastrarvaga.endereco }}</p>
        <p><strong>Telefone : </strong> {{ cadastrarvaga.telefone }}</p>
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
              <q-btn
                unelevated
                rounded
                color="primary"
                class="btncriar"
                label="Sair"
                @click="efetuarLogout()"
              />
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </q-card>-->

    <q-separator class="hr" />

    <h6 class="titulo">Suas vagas disponíveis</h6>
    <div class="cards">
      <div v-for="cadastrarvaga in Cadastrovaga" :key="cadastrarvaga.id">
        <q-card class="my-card bg-grey-4 text-dark cardcurriculo">
          <q-card-section>
            <div class="text-h6" style="text-align: center">
              {{ cadastrarvaga.nome }}
            </div>
            <hr />
            <div class="text-subtitle">
              <strong>Telefone: </strong> {{ cadastrarvaga.telefone }}
            </div>
            <div class="text-subtitle">
              <strong>Cargo: </strong> {{ cadastrarvaga.cargo }}
            </div>
            <div class="text-subtitle">
              <strong>Experiência: </strong>{{ cadastrarvaga.experiencia }}
            </div>
            <div class="text-subtitle">
              <strong>Escolaridade: </strong> {{ cadastrarvaga.escolaridade }}
            </div>
          </q-card-section>
          <q-card-actions>
            <q-separator />
            <q-btn
              unelevated
              rounded
              color="primary"
              class="btncriar"
              label="Editar"
              @click="alterar(cadastrarvaga.id)"
            />
            <q-btn
              unelevated
              rounded
              color="red"
              class="btncriar"
              label="Excluir"
              @click="remover(cadastrarvaga.id)"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<style>
.cards {
  flex-wrap: wrap;
  margin: 35px 35px;
  display: flex;
  justify-content: space-between;
}
.btns {
  padding: 14px;
  max-width: 350px;
}
.cardcurriculo {
  max-width: 300px;
  margin: 52px auto;
  padding: 35px;
}
.hr {
  width: 35%;
}
.titulo {
  color: rgb(25, 118, 210);
  font-weight: bold;
  text-align: center;
  margin: 25px auto;
}
.btnconf {
  margin: -3px auto;
}
.edit {
  text-decoration: none;
  color: #000;
}
.my-card {
  padding: 12px;
}
.btncriar {
  width: 50%;
  flex: 1;
}
</style>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PageUsuariolog",

  methods: {
    ...mapActions("mainstore", [
      "obterCadastrovaga",
      "selecionarVaga",
      "removerVaga",
      "logout",
      "carregarToken",
    ]),
    efetuarLogout() {
      this.logout();
    },
    alterar(CadastrovagaId) {
      this.selecionarVaga(CadastrovagaId);
      this.$router.push("/vagaalteracao");
    },
    remover(CadastrovagaId) {
      this.$q
        .dialog({
          title: "Confirma",
          message: "Tem certeza que deseja excluir o vaga?",
          cancel: {
            label: "Cancelar",
          },
          ok: {
            label: "OK",
          },
          persistent: true,
        })
        .onOk(() => {
          this.removerVaga(CadastrovagaId);
          Notify.create({
            color: "positive",
            position: "top",
            message: "Produto Excluído!",
          });
        })
        .onCancel(() => {});
    },
  },
  computed: {
    ...mapGetters("mainstore", ["Cadastrovaga"]),
  },

  created() {
    this.obterCadastrovaga();
  },
};
</script>
