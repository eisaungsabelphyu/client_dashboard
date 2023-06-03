import { createStore } from 'vuex'


export default createStore({
  state: {
    categoryList: {},
    itemList:{}
  },

  getters: {
    getCategoryList: state => state.categoryList,
    getItemList: state => state.itemList,
    
  },

  mutations: {
    
  },

  actions: {
    setCategoryList: ({ state }, value) => state.categoryList = value,
    setItemList: ({ state }, value) => state.itemList = value,
   
    
  },
  modules: {
  }
  });
