<template>
<q-page>
     <q-card class="my-card">
      <q-card-section>
        <div class="text-h6 text-primary"  style="margin-bottom: 1em">Ester Nundes Line</div>
        <p><strong>Endereço : </strong> Rua Jose Tutyli  N° 120 Jardim Paumas Itápolis</p>
        <p><strong>Escolaridade : </strong> Ensino Superior incompleto</p>
         <p><strong>Telefone : </strong> 16 996789685</p>
      </q-card-section>

      <q-separator />
      
      <div class="row justify-around btns">
        <q-btn unelevated
              rounded
              class="btn"
              label="Excluir"
              type="submit"
              color="red"
              icon="delete"/>
        <q-btn unelevated
              rounded
              class="btn"
              label="Editar"
              type="submit"
              color="primary"
              icon="edit"
              />
      </div>
    </q-card>
    
</q-page>
</template>
<style>
.btns{
  padding: 14px;
}
</style>