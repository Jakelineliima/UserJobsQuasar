import { LocalStorage, Notify } from 'quasar'
import { api } from 'boot/axios'

const state = {
  token: '',
  Cadastrovaga: []
}

const mutations = {
  SET_TOKEN (state, token) {      
    state.token = token
  },
  
  ADICIONAR_VAGA (state, Cadastrovaga) {
    state.Cadastrovaga.push(Cadastrovaga)
  }
}

const actions = { 
  async login ({ commit }, usuario) {    
    let response = await api.post('/login', usuario, { headers: { 'Content-Type' : 'application/json' } })
    if (response) {
      await LocalStorage.set('token', response.data.token)
      await commit('SET_TOKEN', response.data.token)
      Notify.create({ color: 'positive', message: response.data.token })
    }
  },
  async logout ({ commit }) {    
    await LocalStorage.remove('token')
    await commit('SET_TOKEN', null)
  },
  async carregarToken ({ commit }) {
    let token = await LocalStorage.getItem('token')
    await commit('SET_TOKEN', token)
    api.interceptors.request.use((config) => {
      if (token) {
        config.headers['Authorization'] = `Bearer ${ token }`
        config.headers['Content-Type'] = 'application/json'
      }
      return config
    })
    api.interceptors.response.use((response) => {
      return response
    })    
  },
  adicionarVaga ({ commit }, cadastrarvaga) {
    api.post('/cadastrarvaga', cadastrarvaga)
    .then((response) => {
      commit('ADICIONAR_VAGA', response.data)
      Notify.create({ color: 'positive', position: 'top', message: 'Sua Vaga foi cadastrada com sucesso'})  
    })
  }
}

const getters = {
  token: (state) => state.token,
  cadastrarvaga: (state) => state.cadastrarvaga
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
