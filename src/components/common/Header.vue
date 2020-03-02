<template>
  <header :class="{login: isLogin, 'no-login': !isLogin}">
    <template v-if="!isLogin">
      <router-link to="/"><h1>Let's share</h1></router-link>
      <p>精品博客汇聚</p>
      <div class="btns">
        <router-link to="/login"><el-button >立即登录</el-button></router-link>
        <router-link to="/register"><el-button>注册账号</el-button></router-link>
      </div> 
    </template>
    <template v-if="isLogin">
      <router-link to="/"><h1>Let's share</h1></router-link>
      <div class="wrap">
        <router-link to="/create"><i class="edit el-icon-edit"></i></router-link>
        <div class="user">
          <router-link :to="`/user/${user.id}`"><img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username"></router-link>
          
          <ul>
            <li><router-link to="/my">my</router-link></li>
            <li><a href="#" @click="onLogout">注销</a></li>
          </ul>
        </div>
      </div>         
    </template>
  </header>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

import auth from "@/api/auth.js";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["user", "isLogin"])
  },
  created() {
    this.checkLogin();
  },
  methods: {
    ...mapActions(["checkLogin", "logout"]),
    onLogout() {
      this.logout();
    }
  }
};
</script>


<style lang="less">
ul {
  margin: 0;
  padding: 0;
}
@import "../../assets/base.less";

header.no-login {
  padding: 0 12% 30px 12%;
  background: @bgColor;
  display: grid;
  justify-items: center;

  h1 {
    color: #fff;
    font-size: 40px;
    margin: 60px 0 0 0;
    text-transform: uppercase;
  }

  p {
    margin: 15px 0 0 0;
    color: #fff;
  }

  .btns {
    margin-top: 20px;
  }

  button {
    margin: 20px 5px 0;
    background: #fff;
  }
}

header.login {
  display: flex;
  align-items: center;
  background: @bgColor;
  justify-content: space-between;
  h1 {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 40px;
    text-transform: uppercase;
    flex: 1;
  }

  .edit {
    color: #fff;
    font-size: 30px;
  }
  .wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    }
  .user {
    position: relative;
    
    .avatar {
      width: 40px;
      height: 40px;
      border: 1px solid #fff;
      border-radius: 50%;
      margin-left: 15px;
    }
    ul {
      transition: all 0.5S;
      display: none;
      position: absolute;
      top: 42px;
      left: 14px;
      list-style: none;
      background: #fff;
      width: 80%;
      li {
        text-align: center;
        padding: 3px 5px;
      }
      li:hover {
        background: #ccc;
      }
      a {
        text-decoration: none;
        color:#000;
      }
    }
    &:hover > ul {
      display: block;
    }
  }
}
</style>