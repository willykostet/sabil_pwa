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
Благодеяния
</div></a>


<div class="help">
    <img src="../assets/help.svg" alt="">
    <p >Благотворительность. Рассказываем как помочь</p>
</div>

<p style="font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
text-align: center;
text-transform: uppercase;

color: #2DA9A1;">вы можете проголосовать за один из этих
проектов кликнув на сердечко:</p>


<a href="/blagofull"><div class="projects" style="padding: 20px;">

<div class="project-card">
    <img src="../assets/envaleed.jpg" alt="">
    <div style="padding: 0 10px">
    <h1>Проект Установка имплантов в позвоночник Севиле</h1>
    <p>Проект «Установка имплантов в позвоночник Севиле». У 15-летней Севили неизлечимое…
</p>

<h2>Проголосовали 654 человека<img style="width: 10px;  margin-left: 5px;
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

<h2>Проголосовали 654 человека<img style="width: 10px; margin-left: 5px;
" src="../assets/like-project.svg"  alt=""></h2>

</div>
</div>


</div></a>












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

Vue.component("v-select", vSelect);
import "vue-select/dist/vue-select.css";
  export default {
   
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

.project-card{ 
    position: relative;
    text-align: left;
    display: inline-block;
    margin-right: 5px;
    object-fit: cover;
    padding-bottom: 10px;
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

padding-bottom: 10px;
font-size: 9px;
line-height: 11px;

color: #2DA9A1;}
.project-card p { font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
padding-bottom: 10px;
font-size: 8px;
line-height: 10px;

color: #363636;}
.project-card h2 {
    font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 8px;

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
  width: 375px;
   left: 0;
  //  background-image: url('../assets/menu-logo.svg');
   background-position: center;
   box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.2);
}
.footer-icon{
  padding: 10px;
}
ul{
    text-align: left;
    margin: 15px;
    list-style: none;
}
ul li {
    display: flex;
    padding: 17px 0;
    align-items: center;
    border-bottom: 1px solid #DADADA;
}
ul li:first-child {
    padding-top: 0;
}
ul li img {
    padding:  0 10px;
}
</style>
