<template>
  <q-page class="flex flex-center container">
    <div class="cards card2">
      <div class="card">
      <div><p class="text-h5 titulo" >Conheça sua nova vida profissional na Use Jobs,<br> temos vagas para todas as áreas.</p></div>
      <div><img class="img" src="../assets/imagem/Group 148.png" alt="mulher na cadeira de rodas e um homen em pe"></div>
    </div>
      <div class="card card2">
      <div><p class="text-h5 titulo" >Fique por dentro das novidades do seu setor</p>
      <p>Desde vagas com experiência, até pra você que está iniciando no mercado de trabalho,<br>Use Jobs oferece espaço para todos em todas as areas.</p></div>
      <div><img class="img" src="../assets/imagem/Group 146.png" alt="mulher na cadeira de rodas e um homen em pe"></div>
    </div>
    </div>
  </q-page>
</template>
<script>
export default {
  name: 'PageIndex'
}
</script>
<style lang="stylus">
.titulo{
  color: rgb(25, 118, 210);
  font-weight: bold;
  margin: 0 176px 0 0;
}
.card2{
  margin: 140px auto;
}
.card{
  display: flex;
  justify-content: center;
}
.cards{
  display: flex;
  flex-direction: column;
}
.img{
  width: 302px;
}
.tese{
  padding:10px;
}
</style>