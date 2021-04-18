<template>
  <q-page>
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6 text-primary" style="margin-bottom: 1em">
          Ester Nundes Line
        </div>
        <p>
          <strong>Endereço : </strong> Rua Jose Tutyli N° 120 Jardim Paumas
          Itápolis
        </p>
        <p><strong>Escolaridade : </strong> Ensino Superior incompleto</p>
        <p><strong>Telefone : </strong> 16 996789685</p>
      </q-card-section>

      <div class="q-pa-md">
        <q-btn-dropdown
          v-model="menu"
          class="q-ml-lg btnconf"
          color="primary"
          icon="settings"
          label="Configurações"
        >
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section avatar>
                <q-avatar icon="edit" color="primary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <router-link to="/dadosp" class="edit">Editar dados</router-link>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="excluir">
              <q-item-section avatar>
                <q-avatar icon="delete" color="red" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Excluir conta</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </q-card>

    <q-separator class="hr" />

    <h6 class="titulo">Curriculos enviados</h6>
    <div class="row ">
      <q-card class="my-card bg-grey-4  text-dark cardcurriculo">
        <q-card-section>
          <div class="text-h6">Agrivitta</div>
          <div class="text-subtitle2">Coordenador Administrativo</div>
        </q-card-section>
      </q-card>

      <q-card class="my-card bg-grey-4  text-dark cardcurriculo">
        <q-card-section>
          <div class="text-h6">Padaria Pannes</div>
          <div class="text-subtitle2">Doceiro(a) chefe</div>
        </q-card-section>
      </q-card>
      
      <q-card class="my-card bg-grey-4  text-dark cardcurriculo">
        <q-card-section>
          <div class="text-h6">Agrivitta</div>
          <div class="text-subtitle2">Coordenador Administrativo</div>
        </q-card-section>
      </q-card>

      <q-card class="my-card bg-grey-4  text-dark cardcurriculo">
        <q-card-section>
          <div class="text-h6">Padaria Pannes</div>
          <div class="text-subtitle2">Doceiro(a) chefe</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<style>
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
}
.btnconf{
  margin: -3px auto
}
.edit{
  text-decoration: none;
  color: #000;
}
.my-card{
  padding: 12px;
}

</style>
<script>
export default {
  data() {
    return {
      excluir: false,
      methods: {
        onItemClick() {
          // console.log('Clicked on an Item')
        },
        excluir() {
          this.$q
            .dialog({
              message: "Deseja excluir?",
              cancel: true,
              persistent: true
            })
            .onOk(() => {
              this.listaCompromisso.splice(index, 1);
              this.$q.notify({
                message: "Tarefa excluida",
                color: "green"
              });
            })
            .onCancel(() => {});
        }
      }
    };
  }
};
</script>
