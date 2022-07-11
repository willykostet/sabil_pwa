<template>
<div class="support-page">
  <div @click="showMenu=false" v-if="showModal || showMenu || showNots || showShare" style="z-index: 999;;position:absolute;display:inline;top:-20%; left:0;width:100%; height:120vh;opacity:0.3;background-color:black;overflow-y:hidden"></div>
<ul class="menu" v-if="showMenu" style="z-index: 10000;position:fixed; width:70%; right:0; bottom: 0; top: 0;background: white;">
<li><router-link to="/news">Новости</router-link></li>
<li><router-link to="/tranz">Транзакции</router-link></li>
<li> <router-link to="/myconn">Моя связь</router-link> </li>

<li><router-link to="/supportnav">Техподдержка</router-link></li>
</ul>

<div @click="showSelect=false" v-if="showSelect" style="z-index: 500;position:absolute;display:inline;top:-20%; left:0;width:100%; height:120vh;opacity:0.3;background-color:black;overflow-y:hidden"></div>
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
<header style="display: flex; justify-content:space-between;">
  <div class="header-mask"></div>
    <router-link to ="/profilenav">  <div class="user" style="display: flex">
    <img  :src="getUserIconPath()" alt="" class="user-icon">

    <p class="user-name">{{userName}}</p>
  </div></router-link>
  <div class="controls" style="display: flex">
    <img @click="showMenu=true" src="../assets/Gamburger.png" class="header-icon"/>
    <router-link to="/supportnav">
    <img @click="goSupport()" src="../assets/Gear.svg" alt="" class="header-icon"></router-link>
    <img @click="showNots=true" src="../assets/Bell.svg" alt="" class="header-icon">
  </div>
</header>

<a href="#" onClick="javascript:history.go(-1); return false"><div  class="back" @click="back()">
Коран
</div></a>
<div style="position:relative;" class="searchbar">
    <input placeholder="Поиск" type="text">
    <img style="position:absolute; top: 30%; right: 20%" src="../assets/loopa.svg" alt="">
    <!-- <img @click="showSelect=true" style="margin-left: 10px" src="../assets/koranSettings.svg" alt=""> -->
</div>



    <div style="z-index: 1000; background-color: #fff; " v-if="showSelect" class="select">
        <img @click="showSelect=false" src="../assets/X.svg" width="10" style="position:absolute; right:20px" alt="">
        <div class="select-item">
            <img src="../assets/reader.svg" alt="">
            <label for="">Выбор чтеца
                <select name="" id="">
                    <option value="lorem">lorem</option>
                </select>
            </label>
        </div>
           <div class="select-item">
            <img src="../assets/reader.svg" alt="">
            <label for="">Выбор чтеца
                <select name="" id="">
                    <option value="lorem">lorem</option>
                </select>
            </label>
        </div>
           <div class="select-item">
            <img src="../assets/reader.svg" alt="">
            <label for="">Выбор чтеца
                <select name="" id="">
                    <option value="lorem">lorem</option>
                </select>
            </label>
        </div>
        <button>Сохранить</button>
    </div>


 <tabs :mode="mode">
      <tab title="Содержание">
        <router-link to="/fullkoran">      <ul>
              <li><p>1. Аль-Фатиха <span style="font-size: 10px;
line-height: 10px;color: #2DA9A1;">Открывающая (7)</span> </p> <img src="../assets/like.svg" alt=""></li>
<li><p>1. Аль-Фатиха <span style="font-size: 10px;
line-height: 10px;color: #2DA9A1;">Открывающая (7)</span> </p> <img src="../assets/like.svg" alt=""></li>
<li><p>1. Аль-Фатиха <span style="font-size: 10px;
line-height: 10px;color: #2DA9A1;">Открывающая (7)</span> </p> <img src="../assets/like.svg" alt=""></li>
          </ul></router-link>
    

      </tab>
      <tab title="Избранное">


      </tab>

    </tabs>






<footer style="display: flex; justify-content: space-between; padding: 5px 10px 10px 25px">
<div class="left"> 
  <router-link to="/koran"><img src="../assets/koran-active.svg" alt="" class="footer-koran footer-icon"></router-link>
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
  export default {
    components:{Tabs, Tab},
    name: 'HelloWorld',
    data: () => ({
       showMenu: false,
      showModal:false,
      showShare: false,
      showNots:false,
      showSelect: false,
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
ul.menu {
  list-style: none;
  padding: 5%;
  font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 11px;
color: black;
  text-align: left;
}
ul.menu  li {
  border-bottom: 0.5px solid #AFAFAF;
  padding: 3%;
}
img {
  justify-self: flex-end;
}
button {
    background: rgba(57, 178, 186, 0.2);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3px;
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 9px;
line-height: 11px;
align-items: center;
text-align: center;
width: 80%;
padding: 10px;
margin: 0 auto;
color: #39B2BA;
}
.select {
    margin: 30% 10%;
    //  margin-top: 5%;
  position: absolute;
    padding: 30px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
    display: flex;
    flex-direction: column;

position: relative;
    height: min-content;
}
select {
    box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.25);
border-radius: 5px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 8px;
line-height: 10px;
text-transform: capitalize;
color: #000000;
width: 100%
}
.select-item {
    display: inline-flex;
    margin: 5% auto;
}
label {
    text-align: left;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-transform: uppercase;

color: #2DA9A1;
}
ul {
    padding: 10px;
}
ul li {
    display: flex;
    padding: 2% 0;
    border-bottom: 1px solid #DADADA;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    gap: 5%;

}
ul li p {
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;

color: #000000;
}
.searchbar input {
   background: #FFFFFF;
box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
width: 70%;
padding: 3px;
font-weight: 400;
font-size: 12px;
padding: 3%;
line-height: 15px;
color: #A8A8A8;
// position: relative;
}
.searchbar {
    position: relative;
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

.select {
  z-index: 1000;
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
  width: 100%;
   left: 0;
  //  background-image: url('../assets/menu-logo.svg');
   background-position: center;
   box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.2);
}
.footer-icon{
  padding: 10px;
}

</style>
