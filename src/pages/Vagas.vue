<template>
  <div class="">
    <div class="card">
      <div class="card1">
        <h6 class="">
          Procure a melhor vaga pra você, tendo experiência ou não, aqui é sua
          change de conseguir aquele emprego dos sonhos.
        </h6>
        <img class="menina" src="../assets/imagem/vagas.png" />
      </div>
    </div>
    <div class="card">
      <q-card flat bordered class="my-card bg-grey-1">
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-subtitle2 titulo">
                Coordenador administrativo agrícola
              </div>
              <div class="text-subtitle2">Agrivitta - Agrotoxicos</div>
              <div>CENTRO - ITÁPOLIS - SP</div>
              <p>Horário: 12:00 as 18:00</p>
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
            to="/vervaga"
          />
        </q-card-actions>
      </q-card>
      <q-card flat bordered class="my-card bg-grey-1">
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-subtitle2 titulo">
                Coordenador administrativo agrícola
              </div>
              <div class="text-subtitle2">Agrivitta - Agrotoxicos</div>
              <div>CENTRO - ITÁPOLIS - SP</div>
              <p>Horário: 12:00 as 18:00</p>
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
            to="/vervaga"
          />
        </q-card-actions>
      </q-card>
      <q-card flat bordered class="my-card bg-grey-1">
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-subtitle2 titulo">
                Coordenador administrativo agrícola
              </div>
              <div class="text-subtitle2">Agrivitta - Agrotoxicos</div>
              <div>CENTRO - ITÁPOLIS - SP</div>
              <p>Horário: 12:00 as 18:00</p>
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
            to="/vervaga"
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
  margin: 35px auto;
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

.titulo {
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
}
h6{
  margin-left: 22px;
}
@media screen and (max-width: 800px) {
  .card{
    flex-direction: column;
  }
  .my-card{
    margin: 17px auto;
  }
  .card1{
    width 100%;
  }
  .menina{
    width: 50%;
    margin-right: 27px;
  }
  h6{
    margin: 40px 0 40px 40px;
  }
}

@media screen and (max-width: 360px) {
  .card1{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -41px; 
  }
  h6{
    margin-left: 22px;
  }
}
</style>
<script>
export default {
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    };
  }
};
</script>
