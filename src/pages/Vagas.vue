<template>
  <div class="">
    <div class="card">
      <div class="card1">
        <h6 class="">
          Encontre a melhor vaga pra você, com experiência ou não, aqui é sua
          chance de conseguir aquele emprego dos sonhos.

        </h6>
        <img class="menina" src="../assets/imagem/vagas.png" />
      </div>
    </div>
    <div class="card cards">
      <q-card
        flat
        bordered
        class="my-card bg-grey-1"
        v-for="cadastrarvaga in Cadastrovaga"
        :key="cadastrarvaga.id"
      >
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-subtitle2 tituloo">
                {{ cadastrarvaga.nome }}
              </div>
              <div> <strong>Cargo:  </strong>{{ cadastrarvaga.cargo }}</div>
              <div><strong>Endereço:  </strong>{{ cadastrarvaga.endereco }}</div>
            </div>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-actions>
          <q-btn
            unelevated
            rounded
            color="primary"
            class="btncriar"
            label="Ver vaga"
            @click="ver(cadastrarvaga.id)"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>
<style lang="stylus">
.container {
  width: 1126px !important;
}

.menina {
  width: 9%;
  margin: 24px 0 -62px;
}

.card {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 35px 25px;
}

.card1 {
  background: #1976d2;
  color: #fff;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 40px auto;
}

.cards {
  flex-wrap: wrap;
  margin: 35px 35px;
}

.tituloo {
  color: rgb(25, 118, 210);
  font-weight: bold;
}

.btncriar {
  margin: 12px auto;
  width: 100%;
}

.my-card {
  width: 100%;
  max-width: 250px;
  margin: 12px auto;
  
}

h6 {
  margin-left: 22px;
}

@media screen and (max-width: 800px) {
  .card {
    flex-direction: column;
  }

  .my-card {
    margin: 17px auto;
  }

  .card1 {
    width: 100%;
  }

  .menina {
    width: 50%;
    margin-right: 27px;
  }

  h6 {
    margin: 40px 0 40px 40px;
  }
}

@media screen and (max-width: 360px) {
  .card1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -41px;
  }

  h6 {
    margin-left: 22px;
  }
}
</style>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PageVagas",

  methods: {
    ...mapActions("mainstore", ["obterCadastrovaga", "verVaga",'selecionarVaga']),

    ver(CadastrovagaId) {
      this.selecionarVaga(CadastrovagaId);
      this.$router.push("/vervaga");
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
