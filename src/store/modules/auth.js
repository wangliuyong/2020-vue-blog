import auth from '../../api/auth'
import { Message } from 'element-ui'

const state={
  user:null,
  isLogin:false
}
const getters={
  user(state){return state.user},
  isLogin(state){return state.isLogin}
}
const mutations={
  setUser(state,payload){
    state.user=payload.user;
  },
  setLogin(state,payload){
    state.isLogin=payload.isLogin;
  }
}
const actions={
  login({commit},{username,password}){
    return auth.login({username,password}).then((res)=>{
      commit('setUser',{user:res.data});
      commit('setLogin',{isLogin:true});
      Message.success(`欢迎您${res.data.username}`)
    })
  },
  logout({commit}){
    auth.logout().then(()=>{
      commit('setUser',{user:null});
      commit('setLogin',{isLogin:false});
    })
  },

  register({commit},{username,password}){
    return auth.register({username,password}).then((res)=>{
      commit('setUser',{user:null});
      commit('setLogin',{isLogin:false});
      Message.success('注册成功，请登录')
    })
    
  },
  checkLogin({commit}){
    return auth.getInfo().then((res)=>{
      if(res.isLogin){
        commit('setUser',{user:res.data});
        commit('setLogin',{isLogin:true});
        return true;
      }else{
        commit('setUser',{user:null});
        commit('setLogin',{isLogin:false});
        return false;
      }
    })
  }
  /*
  this.logout().then((isLogin)=>{})
  */
}



export default {
  state,   
  getters,
  mutations,
  actions
}