(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{1148:function(t,a,e){},6638:function(t,a,e){"use strict";e("1148")},c221:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",[e("q-card",{staticClass:"my-card"},[e("q-card-section",[e("div",{staticClass:"text-h6 text-primary",staticStyle:{"margin-bottom":"1em"}},[t._v("\n        Ester Nundes Line\n      ")]),e("p",[e("strong",[t._v("Endereço : ")]),t._v(" Rua Jose Tutyli N° 120 Jardim Paumas\n        Itápolis\n      ")]),e("p",[e("strong",[t._v("Escolaridade : ")]),t._v(" Ensino Superior incompleto")]),e("p",[e("strong",[t._v("Telefone : ")]),t._v(" 16 996789685")])]),e("div",{staticClass:"q-pa-md"},[e("q-btn-dropdown",{staticClass:"q-ml-lg btnconf",attrs:{color:"primary",icon:"settings",label:"Configurações"}},[e("q-list",[e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[e("q-item-section",{attrs:{avatar:""}},[e("q-avatar",{attrs:{icon:"edit",color:"primary","text-color":"white"}})],1),e("q-item-section",[e("router-link",{staticClass:"edit",attrs:{to:"/dadosp"}},[t._v("Editar dados")])],1)],1),e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[e("q-item-section",{attrs:{avatar:""}},[e("q-avatar",{attrs:{icon:"delete",color:"red","text-color":"white"}})],1),e("q-item-section",[e("q-item-label",[t._v("Excluir conta")])],1)],1)],1)],1)],1)],1),e("q-separator",{staticClass:"hr"}),e("h6",{staticClass:"titulo"},[t._v("Suas vagas")]),e("div",{staticClass:"cards"},t._l(t.Cadastrovaga,(function(a){return e("div",{key:a.id},[e("q-card",{staticClass:"my-card bg-grey-4  text-dark cardcurriculo"},[e("q-card-section",[e("div",{staticClass:"text-h6",staticStyle:{"text-align":"center"}},[t._v(t._s(a.nome))]),e("hr"),e("div",{staticClass:"text-subtitle"},[e("strong",[t._v("Telefone:  ")]),t._v(" "+t._s(a.telefone))]),e("div",{staticClass:"text-subtitle"},[e("strong",[t._v("Cargo:  ")]),t._v(" "+t._s(a.cargo))]),e("div",{staticClass:"text-subtitle"},[e("strong",[t._v("Experiência:  ")]),t._v(t._s(a.experiencia))]),e("div",{staticClass:"text-subtitle"},[e("strong",[t._v("Escolaridade:  ")]),t._v(" "+t._s(a.escolaridade))])]),e("q-card-actions",[e("q-separator"),e("q-btn",{staticClass:"btncriar",attrs:{unelevated:"",rounded:"",color:"primary",label:"Editar"},on:{click:function(e){return t.alterar(a.id)}}}),e("q-btn",{staticClass:"btncriar",attrs:{unelevated:"",rounded:"",color:"red",label:"Excluir"},on:{click:function(e){return t.remover(a.id)}}})],1)],1)],1)})),0)],1)},r=[],i=e("ded3"),o=e.n(i),c=e("2f62"),n={name:"PageUsuariolog",methods:o()(o()({},Object(c["b"])("mainstore",["obterCadastrovaga","selecionarVaga","removerVaga"])),{},{alterar(t){this.selecionarVaga(t),this.$router.push("/vagaalteracao")},remover(t){this.$q.dialog({title:"Confirma",message:"Tem certeza que deseja excluir o vaga?",cancel:{label:"Cancelar"},ok:{label:"OK"},persistent:!0}).onOk((()=>{this.removerVaga(t),Notify.create({color:"positive",position:"top",message:"Produto Excluído!"})})).onCancel((()=>{}))}}),computed:o()({},Object(c["c"])("mainstore",["Cadastrovaga"])),created(){this.obterCadastrovaga()}},l=n,d=(e("6638"),e("2877")),v=e("9989"),u=e("f09f"),p=e("a370"),m=e("f20b"),b=e("1c1c"),g=e("66e5"),C=e("4074"),_=e("cb32"),q=e("0170"),f=e("eb85"),x=e("4b7e"),h=e("9c40"),w=e("7f67"),y=e("eebe"),E=e.n(y),Q=Object(d["a"])(l,s,r,!1,null,null,null);a["default"]=Q.exports;E()(Q,"components",{QPage:v["a"],QCard:u["a"],QCardSection:p["a"],QBtnDropdown:m["a"],QList:b["a"],QItem:g["a"],QItemSection:C["a"],QAvatar:_["a"],QItemLabel:q["a"],QSeparator:f["a"],QCardActions:x["a"],QBtn:h["a"]}),E()(Q,"directives",{ClosePopup:w["a"]})}}]);