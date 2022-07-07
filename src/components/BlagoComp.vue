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


<div class="help">
    <img src="../assets/help.svg" alt="">
    <p >Благотворительность. Рассказываем как помочь</p>
</div>
<router-link to="/stats"><p class="stats">Статистика голосований</p>
</router-link>


<p style="font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
text-align: center;
text-transform: uppercase;

color: #2DA9A1;">вы можете проголосовать за один из этих
проектов кликнув на сердечко:</p>


<router-link to="/blagofull"><div class="projects" style="padding: 1%;">

<div class="project-card">
    <img src="../assets/envaleed.jpg" alt="">
    <div style="padding: 0 10px">
    <h1>Проект Установка имплантов в позвоночник Севиле</h1>
    <p>Проект «Установка имплантов в позвоночник Севиле». У 15-летней Севили неизлечимое…
</p>

<h2>Проголосовали: 654<img style="width: 10px;  margin-left: 5px;
" src="../assets/like-project.svg"  alt=""></h2>

</div>
</div>

<div class="project-card">
    <img src="../assets/envaleed.jpg" alt="">
    <div style="padding: 0 10px">
    <div class="fond-label">
        ФОНД ЗАКЯТ</div>
    <h1>Проект Установка имплантов в позвоночник Севиле</h1>
    <p>Проект «Установка имплантов в позвоночник Севиле». У 15-летней Севили неизлечимое…
</p>

<h2>Проголосовали: 654<img style="width: 10px; margin-left: 5px;
" src="../assets/like-project.svg"  alt=""></h2>

</div>
</div>
<div class="project-card">
    <img src="../assets/envaleed.jpg" alt="">
    <div style="padding: 0 10px">
    <div class="fond-label">
        ФОНД ЗАКЯТ</div>
    <h1>Проект Установка имплантов в позвоночник Севиле</h1>
    <p>Проект «Установка имплантов в позвоночник Севиле». У 15-летней Севили неизлечимое…
</p>

<h2>Проголосовали: 654<img style="width: 10px; margin-left: 5px;
" src="../assets/like-project.svg"  alt=""></h2>

</div>
</div>
<div class="project-card">
    <img src="../assets/envaleed.jpg" alt="">
    <div style="padding: 0 10px">
    <div class="fond-label">
        ФОНД ЗАКЯТ</div>
    <h1>Проект Установка имплантов в позвоночник Севиле</h1>
    <p>Проект «Установка имплантов в позвоночник Севиле». У 15-летней Севили неизлечимое…
</p>

<h2>Проголосовали: 654<img style="width: 10px; margin-left: 5px;
" src="../assets/like-project.svg"  alt=""></h2>

</div>
</div>
</div></router-link>












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
}
.stats {
  text-transform: uppercase;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 9px;
line-height: 11px;
border-radius: 5px;
border: 0.5px solid #39B2BA;
margin: 3% 10%;
padding: 1%;
color: #39B2BA;

}
.project-card{ 
    position: relative;
    text-align: left;
    display: inline-block;
    margin: 2%;
    padding-bottom:2%;
    object-fit: cover;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
width: 10em;
overflow: hidden;
}

.fond-label {
    position: absolute;
    top: 0;
    left: 0;
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;

font-size: 8px;
line-height: 10px;
background: white;
padding: 5px;
padding-left: 25px;
padding-right: 15px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
text-transform: uppercase;

color: #000000;
}
.fond-label::before{ 
    position: absolute;
    content: '';
    width: 30px;
    z-index: 100;
    left: 5px;
    top: 2px;
    height: 30px;
    background-image: url('../assets/zakyat.svg');
}

.project-card img {

   width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
}
.project-card h1 { 
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;
line-height: 11px;
padding: 1%;
text-align: left;
padding-left: 0;
color: #2DA9A1;}
.project-card p { font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
padding: 2%;
padding-left: 0;
font-size: 10px;
line-height: 12px;

color: #363636;}
.project-card h2 {
    font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
white-space: nowrap;
font-weight: 400;
font-size: 10px;
line-height: 12px;

color: #2DA9A1;
 }
.help {
    display: flex;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    margin: 10px;
    border-radius: 5px;
    padding: 7px;
    font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 16px;
text-transform: uppercase;

color: #2DA9A1;
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
.project-card img:last-child {
  margin-left: 15% !important;
  width: 15px !important;
  height: 15px !important;
}
.footer-icon{
  padding: 10px;
}
// ul{
//     text-align: left;
//     margin: 15px;
//     list-style: none;
// }
// ul li {
//     display: flex;
//     padding: 17px 0;
//     align-items: center;
//     border-bottom: 1px solid #DADADA;
// }
// ul li:first-child {
//     padding-top: 0;
// }
// ul li img {
//     padding:  0 10px;
// }
</style>
