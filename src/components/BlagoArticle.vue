<template>
<div class="support-page">
  <div @click="showMenu=false" v-if="showModal || showMenu || showNots || showShare" style="z-index: 999;;position:absolute;display:inline;top:-20%; left:0;width:100%; height:120vh;opacity:0.3;background-color:black;overflow-y:hidden"></div>
<ul v-if="showMenu" style="z-index: 10000;position:fixed; width:70%; right:0; bottom: 0; top: 0;background: white;">
<li><router-link to="/news">Новости</router-link></li>
<li><router-link to="/tranz">Транзакции</router-link></li>
<li> <router-link to="/myconn">Моя связь</router-link> </li>

<li><router-link to="/supportnav">Техподдержка</router-link></li>
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
Благодеяния
</div></a>
<div class="root">

        <p class="date">17:51, 03 марта 2022</p>
        <h1>Проект Установка имплантов в позвоночник Севиле</h1>
        <div class="sub" style="display:flex; justify-content: space-between">
        <p>Регион: Москва</p>
        <!-- <p>Фото: Пресс-служба ДУМ РФ</p> -->
        </div>
    <img src="../assets/blagofull.jpg" alt="">
    <p style="
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 21px;

color: #000000;">До школьного возраста Севиля росла обычным ребенком, но с семи лет спинально-мышечная атрофия начала проявлять себя и быстро прогрессировать. Мышцы ослабли настолько, что не выполняют свою функцию, вследствие чего развился сколиоз.
Активный веселый ребенок перестал выходить на улицу, потому что стесняется</p>
</div>



<div><router-link to="/voteresult">
<button>Проголосовать за проект</button>
</router-link></div>

<footer style="display: flex; justify-content: space-between; padding: 5px 10px 10px 25px">
<div class="left"> 
  <router-link to="/koran"><img src="../assets/koran-black.svg" alt="" class="footer-koran footer-icon"></router-link>
 <router-link to="/imam"><img src="../assets/imam-footer.svg" alt="" class="footer-question footer-icon"></router-link> 
 </div>
 <router-link to="/main">
 <img src="../assets/menu-logo.svg" width="40" height="40" alt=""></router-link>
<div class="right">  
 <router-link to="/calend"><img src="../assets/Icon3.svg" alt="" class="footer-calend footer-icon" @click="openCalend()"></router-link>
 <router-link to="/blago"><img src="../assets/blago-active.svg" alt="" class="footer-blagos footer-icon"></router-link> 
  </div>

</footer>
</div>
</template>

<script>
import Vue from "vue";
import vSelect from "vue-select";

Vue.component("v-select", vSelect);
import "vue-select/dist/vue-select.css";
  export default {
   
    name: 'HelloWorld',
    data: () => ({
       showMenu: false,
      showModal:false,
      showShare: false,
      showNots:false,
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
  margin: 0;
}
button {
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
background: rgba(57, 178, 186, 0.2);
mix-blend-mode: normal;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 7px;
padding: 3% 7%;
text-align: center;
position: relative;
color: #39B2BA;

}
button::before{ 
    position: absolute;
    content: '';
    top: 40%;
    left: 5%;
    width: 20px;
    height: 20px;
    background-image: url('../assets/check.svg');
}
.root { 
    padding: 5%;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.date{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 9px;
line-height: 11px;

color: #363636;
}
h1 { 
    font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;

color: #2DA9A1;
}
.sub p { 

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 9px;
line-height: 11px;

color: #363636;
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
.root { 
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 10px;
    // margin-bottom: 30%;
}
.date{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 9px;
line-height: 11px;

color: #363636;
}
h1 { 
    font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;

color: #2DA9A1;
}
.sub p { 

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 9px;
line-height: 11px;

color: #363636;
}
</style>
