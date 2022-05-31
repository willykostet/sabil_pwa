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
font-size: 9px;
line-height: 11px;

color: #000000;">До школьного возраста Севиля росла обычным ребенком, но с семи лет спинально-мышечная атрофия начала проявлять себя и быстро прогрессировать. Мышцы ослабли настолько, что не выполняют свою функцию, вследствие чего развился сколиоз.
Активный веселый ребенок перестал выходить на улицу, потому что стесняется и боится насмешек. В 15 лет она уже понимает, что ее жизнь не похожа на жизнь сверстников. От слабости мышц и быстрой утомляемости Севиля не в состоянии учиться, долго сидеть или ходить, не говоря уже о более сложных вещах. Конечно же, это сказывается на психологическом состоянии девочки.
Сейчас позвоночник сильно искривился, и Севиле необходима операция по установке титановых имплантов, которые выровняют ось позвоночника. Это поможет девочке держать спину, а значит, и вернуться к прежним увлечениям и учебе.
Каждый из вас может принять участие в благом деле и поддержать молодую девушку в ее нелегком испытании. Операция — это шанс снизить деформацию позвоночника и устранить сопутствующие боли. Давайте подарим Севиле эту надежду!</p>
</div>




<a href="/voteresult">
<button>Проголосовать за проект</button>
</a>
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
