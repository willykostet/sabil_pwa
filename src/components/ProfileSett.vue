<template>
<div class="support-page">
  <div @click="showModal=false" v-if="showModal" style=" z-index: 999;;position:absolute;display:inline;top:-20vh; left:0;width:100%; height:150vh;opacity:0.3;background-color:black;overflow-y:hidden"></div>

<div v-if="showModal" class="subModal" style="position:absolute; box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px; top:35%; left:10%; bottom: 5%; height:min-content; width:80%; text-align: left; background-color: white; z-index:1000; padding: 8%; ">
<img @click="showModal=false" style="position:absolute; right:5%; top:5%;" src="../assets/X.svg" alt="">
<h1>Оформить подписку </h1>
<p>Оформите подписку, чтобы задавать вопросы и звонить имаму без ограничений</p>
<div>
  <p>Стоимость услуги</p>
  <p style="font-weight:bold"> 150 ₽/мес</p>
</div>
<button @click="showModal=false">Оформить подписку</button>
</div>


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
<!-- <div @click="showMenu=false" v-if="showModal || showMenu || showNots || showShare" style="z-index: 999;;position:absolute;display:inline;top:-20%; left:0;width:100%; height:120vh;opacity:0.3;background-color:black;overflow-y:hidden"></div> -->
<ul class="menu" v-if="showMenu" style="z-index: 10000;position:fixed; width:70%; right:0; bottom: 0; top: 0;background: white;">
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
    <img @click="showMenu=true" src="../assets/Gamburger.png" class="header-icon"/>
    <router-link to="/supportnav">
    <img @click="goSupport()" src="../assets/Gear.svg" alt="" class="header-icon"></router-link>
    <img @click="showNots=true" src="../assets/Bell.svg" alt="" class="header-icon">
  </div>
</header>

<a href="#" onClick="javascript:history.go(-1); return false"><div  class="back" @click="back()">
Профиль
</div></a>

 <img src="../assets/Avatar.svg" alt="">
<p style="font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
display: flex;
align-items: flex-end;

color: #39B2BA; display: block;  text-align: center;">Изменить фото профиля</p>
<div style="margin: 20px">
    <v-text-field
      label="Username"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
 <v-text-field
      label="+7***-***-**01"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
     <v-text-field
      label="Город"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
         <v-text-field
      label="Email"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>

<div style="display: flex; gap: 0.3em">
    <!-- <SwitchBtn/>   -->
    <p style="font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
display: flex;
align-items: flex-end;

color: #000000;">Уведомления приложения</p>

</div>

<ul style="list-style-type: none; border-bottom: 0.5px solid #AFAFAF; margin-top: 20px; padding: 10px 0">
      <h1 style="font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
text-align: left;

color: #818181;
font-size: 14px;
line-height: 20px;">

        Мой тариф
         </h1>
  <li>
        <p></p>
        <div style="display:flex; justify-content: space-between;" >
          <p style="font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;color: #000000;">Абонентская плата</p>
          <p style="font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 20px;">200 руб за 30 дней</p>
        </div>
 
  </li>
    <li>


        <p></p>
        <div style="display:flex; justify-content: space-between;" >
          <p style="font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;color: #000000;">Дата следующего списания</p>
          <p style="font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 20px;">20.07.2022</p>
        </div>
     
  </li>
</ul>
<ul style="list-style-type: none; border-bottom: 0.5px solid #AFAFAF; margin-top: 20px; padding: 10px 0">
      <h1 style="font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
text-align: left;
font-size: 9px;
color: #818181;
font-size: 14px;
line-height: 20px;">

        Мои подписки
         </h1>
  <li>
        <p></p>
        <div style="display:flex; justify-content: space-between;" >
          <p style="font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;color: #000000;">Вопросы имаму <b>150 р/мес</b></p>
          <p @click="showModal=true" style="font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 16px;
text-align: right;
text-transform: uppercase;

color: #2DA9A1;">Подключить</p>
        </div>
 
  </li>

</ul>
</div>


<div class="tariff">
<div><img src="../assets/trubka.svg" alt=""> <p>50 минут</p></div> 
<div><img src="../assets/trubka.svg" alt=""> <p>10 Гб</p></div> 
<div><img src="../assets/trubka.svg" alt=""> <p>200 СМС</p></div> 
</div>



<div style="display:flex; margin: 0 15%; gap: 5%">
    <button>Сохранить Изменения</button>
        <button>Сбросить изменения</button>
</div>








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
// import SwitchBtn from "./SwitchBtn.vue";
Vue.component("v-select", vSelect);
import "vue-select/dist/vue-select.css";
  export default {
   
    name: 'HelloWorld',
    // components:{ SwitchBtn},
    data: () => ({
      showMenu: false,
      showModal:false,
      showShare: false,
      showNots:false,
            rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],

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
ul.menu li {
  border-bottom: 0.5px solid #AFAFAF;
  padding: 3%;
}
.subModal h1 {
  font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 20px;
color: #2DA9A1;
text-transform: uppercase;
}
.subModal p {
  font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #636363;
margin-top: 8px;
}
.subModal div {
  display: flex;
  justify-content: space-between;
  font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
border-bottom: 0.5px solid #AFAFAF;
color: #000000;
padding-bottom: 5px;
}
.subModal button {
  color: #39B2BA;
background: rgba(57, 178, 186, 0.2);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 7px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
width: 100%;
height: 40px;
margin: 5% auto;
margin-bottom: 0;
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
  height: 130vh;
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
header ul{
    text-align: left;
    margin: 15px;
    list-style: none;
}
.tariff p {
  font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;

color: #000000;
margin-bottom: 16px;
}
.tariff {
  margin: 20px;
   border-bottom: 0.5px solid #AFAFAF;
}
.tariff div {
  display: flex;
 align-items: flex-start;
 gap: 5px;
}

button {
      background: rgba(57, 178, 186, 0.2);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 12px;
  width: 10em;
  color: #39B2BA;
  font-size: 15px;
  border-radius: 7px;
}
</style>
