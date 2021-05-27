<template>
  <q-page class="flex flex-center">
    <div class="cards card2 container">
      <div class="card">
        <div>
          <p class="text-h5 titulo title">
            Conheça sua nova vida profissional.<br />
            Na Use Jobs temos vagas para todas as áreas.
          </p>
        </div>
        <div>
          <img
            class="img"
            src="../assets/imagem/Group 148.png"
            alt="mulher na cadeira de rodas e um homem em pé"
          />
        </div>
      </div>
      <div class="card card2">
        <div>
          <p class="text-h5 titulo title2">
            Fique por dentro das novidades do seu setor
          </p>
          <p class="subtitilu title3">
            Oferecemos vagas para você que tem experiência profissional ou que
            está ingressando no mercado de trabalho.
          </p>
        </div>
        <div>
          <img
            class="img"
            src="../assets/imagem/Group 146.png"
            alt="mulher na cadeira de rodas e um homem em pé"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  name: "PageIndex",
};
</script>
<style lang="stylus">
.titulo {
  color: rgb(25, 118, 210);
  font-weight: bold;
  margin: 0 176px 0 0;
}

.subtitilu {
  margin: 25px auto;
  font-size: 20px;
  color: #606060;
}

.card2 {
  margin: 140px auto;
}

.card {
  display: flex;
  justify-content: center;
}

.cards {
  display: flex;
  flex-direction: column;
}

.img {
  width: 302px;
}

.tese {
  padding: 10px;
}

.container {
  width: 1126px !important;
}

@media screen and (max-width: 800px) {
  .titulo {
    margin: auto;
  }

  .card {
    flex-direction: column;
    align-items: center;
  }

  .title {
    margin: -90px 12px 0 12px;
  }

  .title2 {
    margin: -36px 12px 0 12px;
  }

  .title3 {
    margin: 29px 12px auto;
  }
}
</style>