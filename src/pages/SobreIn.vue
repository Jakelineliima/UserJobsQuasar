<template>
  <div class="sobree">
    <h6 class="text-primary" style="margin-bottom: 1em">
      UseJobs is a job vacancy platform for 100% free operational labor.
    </h6>
    <p class="text-subtitle1">
      Our proposal is to promote a meeting between the best professionals and
      the most relevant vacancies in the market, contributing to greater
      professional satisfaction
    </p>
    <img src="../assets/imagem/sobre.png" alt="Imagem de três conversando" />

    <h6 class="text-primary" style="margin-bottom: 1em">
      MARKET OPPORTUNITIES FOR OPERATING LABOR
    </h6>

    <ul class="text-subtitle1">
      <li>
        Many of the candidates get their first job or change areas with the
        vacancies registered on our platform.
      </li>
      <li>
        We prioritize vacancies close to the candidate's home, ensuring greater
        quality of life and other benefits to make the routine more and more
        practical and optimized.
      </li>
      <li>
        Application and monitoring of vacancies can be made through our website
        and also through our UseJobs mobile app.
      </li>
    </ul>

    <hr />

    <q-btn
      unelevated
      rounded
      color="primary"
      class="in"
      label="Back - Voltar"
      to="/sobre"
    />
  </div>
</template>
<style lang="stylus">
.sobree {
  text-align: center;
  margin: 70px auto;
  padding: 0 12px;
}

p, li, h6 {
  text-align: justify;
}

.in {
  text-align: center;
}

@media screen and (max-width: 800px) {
  .sobre {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
  }
}
</style>
