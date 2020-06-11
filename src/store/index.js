import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 全局可使用的状态管理
  state: {
    tabState:false
  },
  mutations: {
    changeTabState(state,value){
      state.tabState = value
    }
  },
  actions: {},
  modules: {}
});
