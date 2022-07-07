<template>
<div class="suport-page">
<!-- <div @click="showMenu=false; showMenu2=false" v-if="showMenu" style="position:absolute;display:inline;top:-30%; left:0;width:100%; height:150vh;opacity:0.3;background-color:black; z-index: 1000"></div> -->
<ul v-if="showMenu" style="z-index:1000;position:fixed; width:70%; right:0; bottom: 0; top: 0;background: white;">

<li><router-link to="">Избранное</router-link></li>
<li> <router-link to="">Актуальное</router-link> </li>
<li><router-link to="">События  </router-link> </li>
<li>Мультимедиа</li>
</ul>



<div v-if="showNots"  style="position:fixed; margin-top: 20%; z-index: 1000; box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
 top: 0; text-align: left; right: 0; bottom: 5%; height:min-content; width:80%; background-color: white; padding: 8% 5%; ">
<img @click="showNots=false" style="position:absolute; right:5%" src="../assets/X.svg" alt="">

<p style="
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;

color: #000000; margin-bottom: 5%;">Последние непрочитанные уведомления</p>
<div style="display:flex; border-bottom: 1px solid #DADADA; padding: 5% 0; gap:1%; z-index: 1000;">
<div>
  <p style="color: #2DA9A1; font-weight: 700;
font-size: 9px;
line-height: 11px;">Вопрос имаму</p>
  <p style="font-weight: 400;
font-size: 11px;
line-height: 13px;

color: #000000;">Получен ответ на вопрос имаму</p>
</div>

<p style="font-weight: 400;
font-size: 9px;
line-height: 11px;color: #363636;">15:30 - 02.03.2022</p>
</div>
<div style="display:flex; border-bottom: 1px solid #DADADA; padding: 5% 0; gap:1%; z-index: 1000;">
<div>
  <p style="color: #2DA9A1; font-weight: 700;
font-size: 9px;
line-height: 11px;">Вопрос имаму</p>
  <p style="font-weight: 400;
font-size: 11px;
line-height: 13px;

color: #000000;">Получен ответ на вопрос имаму</p>
</div>

<p style="font-weight: 400;
font-size: 9px;
line-height: 11px;color: #363636;">15:30 - 02.03.2022</p>
</div>
<router-link to="/nots"><p style="color:#39B2BA; text-align:right;font-size: 9px;
line-height: 11px; margin-top:3%">Посмотреть все уведомления</p></router-link>

</div>
<div @click="showMenu=false; showMenu2=false" v-if="showModal || showMenu || showNots || showShare || showMenu2" style="z-index: 999;;position:absolute;display:inline;top:-20%; left:0;width:100%; height:120vh;opacity:0.3;background-color:black;overflow-y:hidden"></div>
<ul v-if="showMenu2" style="z-index: 10000;position:fixed; width:70%; right:0; bottom: 0; top: 0;background: white;">
<li><router-link to="/news">Новости</router-link></li>
<li><router-link to="/tranz">Транзакции</router-link></li>
<li> <router-link to="/myconn">Моя связь</router-link> </li>

<li><router-link to="/supportnav">Техподдержка</router-link></li>
</ul>
<header style="display: flex; justify-content:space-between;">
  <div class="header-mask"></div>
    <router-link to ="/profilenav">  <div class="user" style="display: flex">
    <img  :src="getUserIconPath()" alt="" class="user-icon">

    <p class="user-name">{{userName}}</p>
  </div></router-link>
  <div class="controls" style="display: flex">
    <img @click="showMenu2=true" src="../assets/Gamburger.png" class="header-icon"/>
    <router-link to="/supportnav">
    <img @click="goSupport()" src="../assets/Gear.svg" alt="" class="header-icon"></router-link>
    <img @click="showNots=true" src="../assets/Bell.svg" alt="" class="header-icon">
  </div>
</header>

<a href="#" onClick="javascript:history.go(-1); return false"><div  class="back" @click="back()">
Новости
</div></a>
<div style="position:relative;" class="searchbar">
    <input placeholder="Поиск" type="text">
    <img style="position:absolute; top: 20%; right: 20%" src="../assets/loopa.svg" alt="">
    <img @click="showMenu=true" style="margin-left: 10px" src="../assets/morearrow.svg" alt=""> 
  
</div>
 <tabs :mode="mode">
       <div style="padding: 0 5%">
         <p style="font-weight: 500;
font-size: 9px;
line-height: 11px; padding: 1%;
text-align: center;color: #A8A8A8;border-bottom: 0.1px solid #A8A8A8;">Сортировать</p>
         <div style="display: flex; justify-content: center; width: 100%;">
          <div style="text-align: center;">
            <p class="sort-item">Источник</p>
          </div>
           <div>
            <p class="sort-item">Регион</p>
          </div>
           <div>
            <p class="sort-item">Дата</p>
          </div>
         </div>
       </div>
      <tab title="Актуальное">
        <ArticleComponent/>
      </tab>
      <tab title="События"></tab>

      <tab title="Мультимедиа"></tab>
     
    </tabs>








<footer style="display: flex; justify-content: space-between; padding: 5px 10px 10px 25px">
<div class="left"> 
  <router-link to="/koran"><img src="../assets/koran-black.svg" alt="" class="footer-koran footer-icon"></router-link>
 <router-link to="/imam"><img src="../assets/imam-footer.svg" alt="" class="footer-question footer-icon"></router-link> 
 </div>
 <router-link to="/main">
 <img src="../assets/menu-logo.svg" width="40" height="40" alt=""></router-link>
<div class="right">  
 <router-link to="/calend"><img src="../assets/Icon3.svg" alt="" class="footer-calend footer-icon" @click="openCalend()"></router-link>
 <router-link to="/blago"><img src="../assets/Icon4.svg" alt="" class="footer-blagos footer-icon"></router-link> 
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
      showMenu: false,
      showModal:false,
      showShare: false,
      showNots:false,
      showMenu2: false,
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
ul {
  list-style: none;
  padding: 5%;
  font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 11px;
color: black;
  text-align: left;
}
ul li {
  border-bottom: 0.5px solid #AFAFAF;
  padding: 3%;
  font-size: 12px !important;
}
.searchbar input {
    background: #FFFFFF;
box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
width: 70%;
padding: 3px;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #A8A8A8;
// position: relative;
}
.searchbar {
    position: relative;
    margin-top: 2%;
}
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
.suport-page {
  margin-top: 12%;
  background: white;
  // background-image: linear-gradient(rgba(57, 178, 186, 0.68), rgba(57, 178, 186, 0.68)), url("../assets/Pattern.png");
  height: 140vh;
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
  width: 100%;
   left: 0;
  //  background-image: url('../assets/menu-logo.svg');
   background-position: center;
   box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.2);
}
.footer-icon{
  padding: 10px;
}
.sort-item {
font-weight: 500;
font-size: 13px;
line-height: 16px;
color: #39B2BA;
border: 0.5px solid #39B2BA;
border-radius: 3px;
padding: 5%;
width: 80px;
margin:10px 2px;
display: block;
text-align: center;
}
li{
  border-bottom: 0.5px solid #AFAFAF;
  padding: 3%;
  font-size: 12px !important;
}
</style>
