<template>
<div class="support-page">

<header style="display: flex; justify-content:space-between;">
  <div class="header-mask"></div>
    <a href="/profilenav">  <div class="user" style="display: flex">
    <img  :src="getUserIconPath()" alt="" class="user-icon">

    <p class="user-name">{{userName}}</p>
  </div></a>
  <div class="controls" style="display: flex">
    <img src="../assets/Gamburger.png" class="header-icon"/>
        <a href="/supportnav">
    <img @click="goSupport()" src="../assets/Gear.svg" alt="" class="header-icon"></a>
    <img src="../assets/Bell.svg" alt="" class="header-icon">
  </div>
</header>

<a href="#" onClick="history.go(-1)"><div  class="back" @click="back()">
Новости
</div></a>
 <tabs :mode="mode">
      <tab title="Актуальное">
        <ArticleComponent/>
      </tab>
      <tab title="События"></tab>

      <tab title="Мультимедиа"></tab>
    </tabs>








<footer style="display: flex; justify-content: space-between; padding: 5px 10px 10px 25px">
<div class="left"> 
  <a href="/koran"><img src="../assets/koran-black.svg" alt="" class="footer-koran footer-icon"></a>
 <a href="/imam"><img src="../assets/ask-active.svg" alt="" class="footer-question footer-icon"></a> 
 </div>
 <a href="/main">
 <img src="../assets/menu-logo.svg" width="40" height="40" alt=""></a>
<div class="right">  
 <a href="/calend"><img src="../assets/Icon3.svg" alt="" class="footer-calend footer-icon" @click="openCalend()"></a>
 <a href="/blago"><img src="../assets/Icon4.svg" alt="" class="footer-blagos footer-icon"></a> 
  </div>

</footer>
</div>
</template>

<script>
import Vue from "vue";
import vSelect from "vue-select";

import Tabs from "./NewsTabs.vue";
import Tab from "./NewsTab.vue";
Vue.component("v-select", vSelect);
import "vue-select/dist/vue-select.css";
import ArticleComponent from "./ArticleComponent.vue";
  export default {
   components:{ Tabs, Tab, ArticleComponent },
    name: 'HelloWorld',
    data: () => ({

      userName: 'Булат',
      userIconPath: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
     
    }),
    methods: {
      getUserIconPath(){
        return this.userIconPath
      },
      back(){
         this.$emit('back', false)
      }
    },
  
  }
</script>
<style scoped lang="scss">
.back {
    background-color: #F9F9F9;
    font-weight: 400;
font-size: 10px;
line-height: 12px;
padding: 10px 40px;
text-align: left;
position: relative;

}
.back::before {
    position: absolute;
    content: '';
    width: 15px;
    height: 15px;
    background-image: url('../assets/back-arrow.svg');
    left: 20px;

}



.user {
  display: flex;
  align-items: flex-end;
}
.user-icon, .header-icon{

  width: 25px;
  background-repeat: no-repeat;
  height: 25px;
  color: black;
}
.user-name {font-weight: 700;
font-size: 14px; margin-left: 5px;
line-height: 17px; color: white;}
.header-icon{
  margin-right: 10px;
}
.support-page {
  margin-top: 12%;
  background: white;
  // background-image: linear-gradient(rgba(57, 178, 186, 0.68), rgba(57, 178, 186, 0.68)), url("../assets/Pattern.png");
  height: 100vh;
  background-repeat: repeat;
    position: relative;
}
header{
  background-color: #39B2BA;
  position: fixed;
  width: 100%;
  padding: 10px 20px;
  left: 0;
  top: 0;
}
.header-mask{
  
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0.15;
  height: 100%;
    z-index: -1;
  background-image: url('../assets/Pattern.png');
  content: '';
}
.user, .controls {
  width: min-content;
  margin: 0;
}

footer{
  position: fixed;
  height: 55px;
  bottom: 0;
  width: 375px;
   left: 0;
  //  background-image: url('../assets/menu-logo.svg');
   background-position: center;
   box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.2);
}
.footer-icon{
  padding: 10px;
}

</style>
