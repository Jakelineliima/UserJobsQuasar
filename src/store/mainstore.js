import { LocalStorage, Notify } from "quasar";
import { api } from "boot/axios";

const state = {
  token: '',
  Cadastrovaga: [],
  Curriculocad: [],
  Contacriar: [],
  vagaSelecionado: '',
  verVaga: ''
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
  SELECIONAR_VAGA(state, CadastrovagaId) {
    const index = state.Cadastrovaga.findIndex(p => p.id === CadastrovagaId);
    state.vagaSelecionado = state.Cadastrovaga[index];
  },
  VER_VAGA(state, CadastrovagaId) {
    const index = state.Cadastrovaga.findIndex(p => p.id === CadastrovagaId);
    state.verVaga = state.Cadastrovaga[index];
  },
  ALTERAR_VAGA(state, Cadastrovaga) {
    const index = state.Cadastrovaga.findIndex(p => p.id === Cadastrovaga.id);
    state.Cadastrovaga.set(index, Cadastrovaga);
  },

  //CURRICUlO
  ADICIONAR_CURRICULO(state, Curriculo) {
    state.Curriculocad.push(Curriculo);
  },

  //CONTA
  ADICIONAR_CONTA(state, Conta) {
    state.Contacriar.push(Conta);
  }
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
    api.put('/cadastrarvaga/' + cadastrarvaga.id, cadastrarvaga)
      .then(response => {
        commit("ALTERAR_VAGA", response.data);
      });
  },

  /* verVaga({ commit }, Cadastrovaga) {
    api.put('/vervagas/' + Cadastrovaga.id, Cadastrarvaga)
    .then((response) => {
      commit('VER_VAGA', response.data)
    })
  },*/

  //CURRICULO
  adicionarCurriculo({ commit }, Curriculo) {
    api.post("/interessado", Curriculo).then(response => {
      commit("ADICIONAR_CURRICULO", response.data);
      Notify.create({
        color: "positive",
        position: "top",
        message: "Seu curriculo foi enviado com sucesso."
      });
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
  }
};

const getters = {
  token: state => state.token,
  Cadastrovaga: state => state.Cadastrovaga,
  Curriculocad: state => state.Curriculocad,
  Contacriar: state => state.Contacriar,
  vagaSelecionado: state => state.vagaSelecionado,
  verVaga: state => state.verVaga
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
