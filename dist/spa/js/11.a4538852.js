(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"37f9":function(e,o,n){"use strict";n.r(o);var t=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("q-page",{staticClass:"flex flex-center"},[n("q-card",{staticClass:"q-pa-md",staticStyle:{width:"800px"}},[n("div",[n("div",[n("h6",{staticClass:"q-mb-xs text-primary"},[e._v("Dados pessoais")]),n("p",{staticClass:"q-mb-lg text-blue-grey-12"},[e._v("\n          Mantenha seus dados sempre atualizados.\n        ")]),n("q-input",{staticClass:"bg-white",attrs:{outlined:"",vclearable:"","rounded-radios":"",type:"text",label:"Seu nome completo",rules:[function(e){return e&&e.length>0||"Digite seu nome completo"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"person"}})]},proxy:!0}]),model:{value:e.curriculoSelecionado.nome,callback:function(o){e.$set(e.curriculoSelecionado,"nome",o)},expression:"curriculoSelecionado.nome"}}),n("q-input",{staticClass:"bg-white",attrs:{outlined:"",vclearable:"","rounded-radios":"",type:"email",label:"E-mail",rules:[function(e){return e&&e.length>0||"Digite seu email"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"email"}})]},proxy:!0}])}),n("q-input",{staticClass:"bg-white",attrs:{outlined:"",vclearable:"","rounded-radios":"",type:"text",label:"Endereço",rules:[function(e){return e&&e.length>0||"Digite seu endereço"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"home"}})]},proxy:!0}]),model:{value:e.curriculoSelecionado.endereco,callback:function(o){e.$set(e.curriculoSelecionado,"endereco",o)},expression:"curriculoSelecionado.endereco"}}),n("q-select",{staticClass:"btndrop",attrs:{outlined:"",clearable:"","rounded-radios":"",options:e.options,label:"Escolaridade",rules:[function(e){return e&&e.length>0||"Selecione o nível escolar"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"school"}})]},proxy:!0}]),model:{value:e.curriculoSelecionado.escolaridade,callback:function(o){e.$set(e.curriculoSelecionado,"escolaridade",o)},expression:"curriculoSelecionado.escolaridade"}}),n("q-input",{staticClass:"bg-white",attrs:{outlined:"",vclearable:"","rounded-radios":"",type:"text",mask:"(##) #####-####",label:"Telefone",rules:[function(e){return e&&e.length>0||"Telefone é obrigatório"},function(e){return 15===e.length||"Coloque um telefone real"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"phone"}})]},proxy:!0}]),model:{value:e.curriculoSelecionado.telefone,callback:function(o){e.$set(e.curriculoSelecionado,"telefone",e._n(o))},expression:"curriculoSelecionado.telefone"}}),n("div",{staticClass:"q-pb-md"},[n("q-btn",{staticClass:"q-px-xl btn",attrs:{unelevated:"",rounded:"",label:"Salvar",color:"primary"},on:{click:function(o){return e.alterar()}}})],1)],1)])])],1)},l=[],r=n("ded3"),a=n.n(r),i=(n("e6cf"),n("2f62")),c={name:"Dadosp",data(){return{nome:"",telefone:"",endereco:"",escolaridade:"",options:["Ensino fundamental completo","Ensino fundamental incompleto","Ensino médio completo","Ensino médio incompleto","Ensino médio completo","Ensino superior completo","Ensino superior incompleto"],exp:["Sim","Não"]}},methods:a()(a()({},Object(i["b"])("mainstore",["alterarCurriculo"])),{},{async alterar(){await this.alterarCurriculo(this.curriculoSelecionado),this.$router.push("/usuarioint")}}),computed:a()({},Object(i["c"])("mainstore",["curriculoSelecionado"]))},s=c,u=(n("e904"),n("2877")),d=n("9989"),p=n("f09f"),m=n("27f9"),f=n("0016"),b=n("ddd8"),S=n("9c40"),h=n("eebe"),x=n.n(h),q=Object(u["a"])(s,t,l,!1,null,null,null);o["default"]=q.exports;x()(q,"components",{QPage:d["a"],QCard:p["a"],QInput:m["a"],QIcon:f["a"],QSelect:b["a"],QBtn:S["a"]})},e577:function(e,o,n){},e904:function(e,o,n){"use strict";n("e577")}}]);