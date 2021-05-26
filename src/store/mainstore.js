import { LocalStorage, Notify } from "quasar";
import { api } from "boot/axios";

const state = {
  token: "",
  Cadastrovaga: [],
  Curriculocad: [],
  Contacriar: [],

  vagaSelecionado: "",
  verVaga: "",

  verCurriculo: "",
  curriculoSelecionado: "",

  usuarioSelecionado: '',
  verUsuario:''
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },

  //VAGA
  ADICIONAR_VAGA(state, Cadastrovaga) {
    state.Cadastrovaga.push(Cadastrovaga);
  },
  SET_CADASTROVAGA(state, Cadastrovaga) {
    state.Cadastrovaga = Cadastrovaga;
  },
  VER_VAGA(state, CadastrovagaId) {
    const index = state.Cadastrovaga.findIndex((p) => p.id === CadastrovagaId);
    state.verVaga = state.Cadastrovaga[index];
  },
  SELECIONAR_VAGA(state, CadastrovagaId) {
    const index = state.Cadastrovaga.findIndex((p) => p.id === CadastrovagaId);
    state.vagaSelecionado = state.Cadastrovaga[index];
  },
  ALTERAR_VAGA(state, cadastrovaga) {
    const index = state.Cadastrovaga.findIndex((p) => p.id === cadastrovaga.id);
    state.Cadastrovaga.set(index, cadastrovaga);
  },
  REMOVER_VAGA (state, CadastrovagaId) {
    const index = state.Cadastrovaga.findIndex((p) => p.id === CadastrovagaId)
    state.Cadastrovaga.splice(index, 1)
  },

  //CURRICUlO
  ADICIONAR_CURRICULO(state, Curriculo) {
    state.Curriculocad.push(Curriculo);
  },
  SET_CURRICULO(state, Curriculocad) {
    state.Curriculocad = Curriculocad;
  },
  VER_CURRICULO(state, CurriculoId) {
    const index = state.Curriculocad.findIndex((p) => p.id === CurriculoId);
    state.verCurriculo = state.Curriculocad[index];
  },
  SELECIONAR_CURRICULO(state, CurriculoId) {
    const index = state.Curriculocad.findIndex((p) => p.id === CurriculoId);
    state.curriculoSelecionado = state.Curriculocad[index];
  },
  ALTERAR_CURRICULO(state, curriculo) {
    const index = state.Curriculocad.findIndex((p) => p.id === curriculo.id);
    state.Curriculocad.set(index, curriculo);
  },
  REMOVER_CURRICULO(state, CurriculoId) {
    const index = state.Curriculocad.findIndex((p) => p.id === CurriculoId);
    state.Curriculocad.splice(index, 1);
  },

  //CONTA
  ADICIONAR_CONTA(state, Usuario) {
    state.Contacriar.push(Usuario);
  },
  SET_CONTA(state, Contacriar) {
    state.Contacriar = Contacriar;
  },
  VER_CONTA(state, UsuarioId) {
    const index = state.Contacriar.findIndex((p) => p.id === UsuarioId);
    state.verUsuario = state.Contacriar[index];
  },
  SELECIONAR_CONTA(state, UsuarioId) {
    const index = state.Contacriar.findIndex((p) => p.id === UsuarioId);
    state.usuarioSelecionado = state.Contacriar[index];
  },
  ALTERAR_CONTA(state, usuario) {
    const index = state.Contacriar.findIndex((p) => p.id === usuario.id);
    state.Contacriar.set(index, usuario);
  },
  REMOVER_CONTA(state, UsuarioId) {
    const index = state.Contacriar.findIndex((p) => p.id === UsuarioId);
    state.Contacriar.splice(index, 1);
  },
};

const actions = {
  async login({ commit }, usuario) {
    let response = await api.post("/login", usuario, {
      headers: { "Content-Type": "application/json" }
    });
    if (response) {
      await LocalStorage.set("token", response.data.token);
      await commit("SET_TOKEN", response.data.token);
      Notify.create({
        color: "positive",
        message: "Login efetuado com sucesso"
      });
    }
  },
  async loginadm({ commit }, usuario) {
    let response = await api.post("/loginadm", usuario, {
      headers: { "Content-Type": "application/json" }
    });
    if (response) {
      await LocalStorage.set("token", response.data.token);
      await commit("SET_TOKEN", response.data.token);
      Notify.create({
        color: "positive",
        message: "Login efetuado com sucesso"
      });
    }


  },
  async logout({ commit }) {
    await LocalStorage.remove("token");
    await commit("SET_TOKEN", null);
  },

  
  async carregarToken({ commit }) {
    let token = await LocalStorage.getItem("token");
    await commit("SET_TOKEN", token);
    api.interceptors.request.use(config => {
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
        config.headers["Content-Type"] = "application/json";
      }
      return config;
    });
    api.interceptors.response.use(response => {
      return response;
    });
  },

  //VAGA
  adicionarVaga({ commit }, cadastrarvaga) {
    api.post("/cadastrarvaga", cadastrarvaga).then(response => {
      commit("ADICIONAR_VAGA", response.data);
      Notify.create({
        color: "positive",
        position: "top",
        message: "Sua Vaga foi cadastrada com sucesso"
      });
    });
  },
  obterCadastrovaga({ commit }) {
    api.get("/vagas").then(response => {
      commit("SET_CADASTROVAGA", response.data);
    });
  },
  verVaga({ commit }, CadastrovagaId) {
    commit("VER_VAGA", CadastrovagaId);
  },

  selecionarVaga({ commit }, CadastrovagaId) {
    commit("SELECIONAR_VAGA", CadastrovagaId);
  },
  alterarVaga({ commit }, cadastrarvaga) {
    api.put("/usuariolog/" + cadastrarvaga.id, cadastrarvaga)
    .then(response => {
      commit("ALTERAR_VAGA", response.data);
    });
  },
  removerVaga({ commit }, CadastrovagaId) {
    api.delete('/usuariolog/'+ CadastrovagaId)
    .then((response) => {
      commit('REMOVER_VAGA', CadastrovagaId);
    });
  },

  //CURRICULO
  adicionarCurriculo({ commit }, Curriculo) {
    api.post("/interessado", Curriculo).then(response => {
      commit("ADICIONAR_CURRICULO", response.data);
      Notify.create({
        color: "positive",
        position: "top",
        message: "Seu curriculo foi enviado com sucesso."
      });
      if (this.token) {
        this.$router.push('/usuarioint')
      }
    });
  },

  obterCurriculo({ commit }) {
    api.get("/interessado").then(response => {
      commit("SET_CURRICULO", response.data);
    });
  },
  verCurriculo({ commit }, CurriculoId) {
    commit("VER_CURRICULO", CurriculoId);
  },
  selecionarCurriculo({ commit }, CurriculoId) {
    commit("SELECIONAR_CURRICULO", CurriculoId);
  },
  alterarCurriculo({ commit }, curriculo) {
    api.put('/usuarioint/' + curriculo.id, curriculo)
      .then((response) => {
      commit("ALTERAR_CURRICULO", response.data);
    });
  },
  removerCurriculo({ commit }, CurriculoId) {
    api.delete('/usuarioint/' + CurriculoId)
    .then((response) => {
      commit("REMOVER_CURRICULO", CurriculoId);
    });
  },

  //CONTA
  adicionarConta({ commit }, Conta) {
    api.post("/criarconta", Conta).then(response => {
      commit("ADICIONAR_CONTA", response.data);
      Notify.create({
        color: "positive",
        position: "top",
        message: "Seu conta foi criada com sucesso."
      });
    });
  },
  obterUsuario({ commit }) {
    api.get("/vagas").then(response => {
      commit("SET_CONTA", response.data);
    });
  },
  verVaga({ commit }, UsuarioId) {
    commit("VER_CONTA", UsuarioId);
  },

  selecionarUsuario({ commit }, UsuarioId) {
    commit("SELECIONAR_CONTA", UsuarioId);
  },
  alterarUsuario({ commit }, usuario) {
    api.put("/usuariolog/" + usuario.id, usuario)
    .then(response => {
      commit("ALTERAR_CONTA", response.data);
    });
  },
  removerUsuario({ commit }, UsuarioId) {
    api.delete('/usuariolog/'+ UsuarioId)
    .then((response) => {
      commit('REMOVER_CONTA', UsuarioId);
    });
  },
};

const getters = {
  token: state => state.token,
  Cadastrovaga: state => state.Cadastrovaga,
  Curriculocad: state => state.Curriculocad,
  Contacriar: state => state.Contacriar,
  vagaSelecionado: state => state.vagaSelecionado,
  verVaga: state => state.verVaga,
  verCurriculo: state => state.verCurriculo,
  curriculoSelecionado: state => state.curriculoSelecionado
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
