<template>
  <q-page class="flex flex-center">
    <div class="cards card2 container">
      <div class="card">
        <div>
          <p class="text-h5 titulo">
            Conheça sua nova vida profissional na Use Jobs,<br />
            temos vagas para todas as áreas.
          </p>
        </div>
        <div>
          <img
            class="img"
            src="../assets/imagem/Group 148.png"
            alt="mulher na cadeira de rodas e um homen em pe"
          />
        </div>
      </div>
      <div class="card card2">
        <div>
          <p class="text-h5 titulo">
            Fique por dentro das novidades do seu setor
          </p>
          <p class="subtitilu">
            Desde vagas com experiência, até pra você que está iniciando <br/> no
            mercado de trabalho, Use Jobs oferece espaço para <br/>todos em
            todas as areas.
          </p>
        </div>
        <div>
          <img
            class="img"
            src="../assets/imagem/Group 146.png"
            alt="mulher na cadeira de rodas e um homen em pe"
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
.container{
   width:1126px  !important;
}
</style>