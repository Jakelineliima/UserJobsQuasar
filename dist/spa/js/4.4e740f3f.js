(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{1005:function(e,n,t){"use strict";t("57db")},"34b9":function(e,n,t){e.exports=t.p+"img/imagecadastrar.5dace3ee.png"},"57db":function(e,n,t){},ef35:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"row justify-evenly cont"},[o("div",{staticStyle:{"text-align":"center"}},[o("h6",{staticClass:"text-primary",staticStyle:{"margin-bottom":"1em"}},[e._v("\n      Cadastre sua vaga\n    ")]),o("p",{staticClass:"text-subtitle1"},[e._v("\n      Encontrar o seu funcionario é muito mais simples do que você imagina.\n    ")]),o("q-img",{staticClass:"img",attrs:{src:t("34b9")}})],1),o("div",{staticClass:"inputs"},[o("h6",{staticClass:"text-primary",staticStyle:{"margin-bottom":"1em"}},[e._v("\n      Dados da vaga\n    ")]),o("q-input",{staticClass:"bg-white",attrs:{outlined:"",vclearable:"","rounded-radios":"",color:"deep-primary",type:"text",label:"Nome da empresa",rules:[function(e){return e&&e.length>0||"Nome obrigatório"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[o("q-icon",{attrs:{name:"person"}})]},proxy:!0}]),model:{value:e.nome,callback:function(n){e.nome=n},expression:"nome"}}),o("q-input",{staticClass:"bg-white phone",attrs:{outlined:"",clearable:"","rounded-radios":"",color:"deep-primary",type:"text",label:"Telefone",rules:[function(e){return e&&e.length>0||"Telefone obrigatório"},function(e){return 11===e.length||"Coloque um telefone real"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[o("q-icon",{attrs:{name:"phone"}})]},proxy:!0}]),model:{value:e.telefone,callback:function(n){e.telefone=n},expression:"telefone"}}),o("q-input",{staticClass:"bg-white",attrs:{outlined:"",clearable:"","rounded-radios":"",color:"deep-primary",type:"text",label:"Endereço",rules:[function(e){return e&&e.length>0||"Endereço obrigatório"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[o("q-icon",{attrs:{name:"home"}})]},proxy:!0}]),model:{value:e.endereco,callback:function(n){e.endereco=n},expression:"endereco"}}),o("q-select",{staticClass:"btndrop",attrs:{outlined:"",clearable:"","rounded-radios":"",options:e.options,label:"Escolaridade",rules:[function(e){return e&&e.length>0||"Selecione o nivel escolar"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[o("q-icon",{attrs:{name:"school"}})]},proxy:!0}]),model:{value:e.escolaridade,callback:function(n){e.escolaridade=n},expression:"escolaridade"}}),o("q-input",{staticClass:"bg-white",attrs:{outlined:"",clearable:"","rounded-radios":"",color:"deep-primary",type:"text",label:"Cargo",rules:[function(e){return e&&e.length>0||"Digite o cargo predentido"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[o("q-icon",{attrs:{name:"badge"}})]},proxy:!0}]),model:{value:e.cargo,callback:function(n){e.cargo=n},expression:"cargo"}}),o("q-select",{staticClass:"btndrop",attrs:{outlined:"",clearable:"","rounded-radios":"",options:e.exp,label:"Experiencia",rules:[function(e){return e&&e.length>0||"Selecione a experiencia"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[o("q-icon",{attrs:{name:"work"}})]},proxy:!0}]),model:{value:e.experiencia,callback:function(n){e.experiencia=n},expression:"experiencia"}}),o("q-btn",{staticClass:"btnenvia",attrs:{unelevated:"",rounded:"",color:"primary",label:"Enviar"},on:{click:function(n){return e.cadastrarVaga()}}})],1)])},a=[],r=t("ded3"),i=t.n(r),s=(t("e6cf"),t("2f62")),l={data(){return{nome:"",telefone:"",endereco:"",cargo:"",escolaridade:"",experiencia:"",resposta:!0,options:["Ensino fundamental completo","Ensino fundamental incompleto","Ensino medio completo","Ensino medio incompleto","Ensino medio completo","Ensino superior completo","Ensino superior incompleto"],exp:["Sim","Não"]}},methods:i()(i()({},Object(s["b"])("mainstore",["adicionarVaga"])),{},{async cadastrarVaga(){await this.adicionarVaga({nome:this.nome,telefone:this.telefone,endereco:this.endereco,cargo:this.cargo,escolaridade:this.escolaridade,experiencia:this.experiencia})}})},c=l,d=(t("1005"),t("2877")),u=t("068f"),p=t("27f9"),m=t("0016"),f=t("ddd8"),b=t("9c40"),g=t("eebe"),x=t.n(g),y=Object(d["a"])(c,o,a,!1,null,null,null);n["default"]=y.exports;x()(y,"components",{QImg:u["a"],QInput:p["a"],QIcon:m["a"],QSelect:f["a"],QBtn:b["a"]})}}]);