<template>
  <div class="sobre">
    <h6 class="text-primary" style="margin-bottom: 1em">
      Use Jobs é uma plataforma de vagas de empregos para mão de obra
      operacional 100% gratuita
    </h6>
    <p class="text-subtitle1">
      Nossa proposta é promover um encontro entre os melhores profissionais com
      as vagas mais relevantes do mercado, contribuindo para uma maior
      satisfação profissional
    </p>
    <img src="../assets/imagem/sobre.png" alt="Imagem de três conversando" />

    <h6 class="text-primary" style="margin-bottom: 1em">
      OPORTUNIDADES DO MERCADO PARA MÃO DE OBRA OPERACIONAL
    </h6>

    <ul class="text-subtitle1">
      <li>
        Muitos dos nossos candidatos conquistam o primeiro emprego ou mudam de
        área com as vagas cadastradas em nossa plataforma.
      </li>
      <li>
        Priorizamos vagas perto da casa do candidato, garantindo maior qualidade
        de vida e outros benefícios para tornar a rotina cada vez mais prática e
        otimizada.
      </li>
      <li>
        A candidatura e acompanhamento das vagas podem ser feitas através do
        nosso site e também pelo nosso aplicativo Use Jobs.
      </li>
    </ul>

    <hr>

    <q-text class="text-subtitle1"> Temos uma versão em inglês.
      <q-btn
          unelevated
          rounded
          color="primary"
          class="in"
          label="Clique aqui !"
          to="/sobrein"
        />
    </q-text>
        
  </div>
</template>
<style lang="stylus">
.sobre{
    text-align: center;
    margin: 70px auto;
    padding: 0 240px;
}
.in{
  text-align: center;
  margin: 25px auto;
}
p,li,h6{
  text-align: justify;
}
hr{
  margin: 25px auto;
}
@media screen and (max-width:800px) {
  .sobre{
    padding: 0;
    margin: 0 49px 0 49px;
  }
}
</style>
