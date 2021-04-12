<template>
<q-page>
     <q-card class="my-card">
      <q-card-section>
        <div class="text-h6 text-primary"  style="margin-bottom: 1em">Ester Nundes Line</div>
        <p>Endereço: Rua Jose Tutyli N° 120 Jardim Paumas Itápolis</p>
        <p>Escolaridade: Ensino Superior incompleto</p>
      </q-card-section>

      <q-separator />

      <q-card-actions row justify-around>
        <q-btn unelevated
              rounded
              class="q-px-xl btn"
              label="Excluir conta"
              type="submit"
              color="red"
              icon="delete"/>
        <q-btn unelevated
              rounded
              class="q-px-xl btn"
              label="Editar dados"
              type="submit"
              color="primary"
              icon="edit"
              />
      </q-card-actions>
    </q-card>
</q-page>
</template>
<style>

</style>