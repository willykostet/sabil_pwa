<template>

<div class="main-page">
<div @click="showMenu=false" v-if="showModal || showMenu || showNots || showShare" style="z-index: 999;;position:absolute;display:inline;top:-20%; left:0;width:100%; height:200vh;opacity:0.3;background-color:black;overflow-y:hidden"></div>
<ul v-if="showMenu" style="z-index: 10000;position:fixed; width:70%; right:0; bottom: 0; top: 0;background: white;">
<li><router-link to="/news">Новости</router-link></li>
<li><router-link to="/tranz">Транзакции</router-link></li>
<li> <router-link to="/myconn">Моя связь</router-link> </li>
<li> <router-link to="/tariff">Мой тариф</router-link> </li>
<li><router-link to="/supportnav2">Техподдержка</router-link></li>
</ul>
<div v-if="showModal" class="ayat-modal" style="position:absolute; padding: 4%; box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px; top:0; left:5%; bottom: -40%; height:min-content; width:90%; background-color: white; z-index:1000; ">
<img @click="showModal=false" style="position:absolute; right:5%" src="../assets/X.svg" alt="">
<h1>Аят дня </h1>
<span>Сура Аль-Бакара (Корова), аят 256:</span>
<p>Nam felis odio, consequat vel efficitur nec, mattis eget quam. Phasellus sagittis enim at mollis laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur gravida, tortor quis condimentum auctor, sem felis gravida libero, quis iaculis sem tortor vitae odio. Mauris luctus turpis lectus, et ornare libero lobortis a. Nulla vitae pulvinar orci, sed vulputate sem. Ut est velit, convallis at est sed, fermentum lacinia ligula. Aliquam nisl lorem, condimentum eget maximus ac, ultricies at mauris. Fusce faucibus augue eget vestibulum gravida. Etiam a dignissim elit, vitae rhoncus sapien. Pellentesque magna leo, viverra vehicula mi eget, finibus semper massa. Donec mi leo, ultricies rutrum luctus a, auctor ac nunc. Vivamus sed est lorem. Integer hendrerit quis ipsum ut euismod. Praesent tincidunt finibus ante.
Nam mi velit, iaculis quis varius nec, porttitor a ipsum., euism.</p>

<div class="modal-controls"><img src="../assets/ReadMore.svg" alt=""><p>Открыть в Коране</p> 
<img src="../assets/SharePost.svg" alt="">
  <p>Поделиться</p>
  <img src="../assets/simple-like.svg" alt="">
</div>
</div>


<div v-if="showShare"  class="ayat-modal" style="position:absolute; box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px; top:20%; left:10%; bottom: 5%; height:min-content; width:80%; background-color: white; z-index:1000; padding: 5%; ">
<img @click="showShare=false" style="position:absolute; right:5%" src="../assets/X.svg" alt="">

<p style="color: #2DA9A1;font-weight: 700;
font-size: 12px;
line-height: 15px; text-transform:uppercase">Поделиться в соцсетях</p>

<img style="margin-top:10%" src="../assets/shareicons.svg" alt="">
</div>

<div v-if="showNots"  style="position:fixed; margin-top: 18.5%; z-index: 1000; box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
 top: 0; text-align: left; right: 0; bottom: 5%; height:min-content; width:80%; background-color: white; padding: 8% 5%; ">
<img @click="showNots=false" style="position:absolute; right:5%" src="../assets/X.svg" alt="">

<p style="
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;

color: #000000; margin-bottom: 5%;">Последние непрочитанные уведомления</p>
<div style="display:flex; border-bottom: 1px solid #DADADA; padding: 5% 0; gap:1%; z-index: 1000;">
<div>
  <p style="color: #2DA9A1; font-weight: 700;
font-size: 12px;
line-height: 14px;">Вопрос имаму</p>
  <p style="font-weight: 400;
font-size: 14px;
line-height: 17px;

color: #000000;">Получен ответ на вопрос имаму</p>
</div>

<p style="font-weight: 400;
font-size: 10px;
line-height: 14px;color: #363636;">15:30 - 02.03.2022</p>
</div>
<div style="display:flex; border-bottom: 1px solid #DADADA; padding: 5% 0; gap:1%; z-index: 1000;">
<div>
  <p style="color: #2DA9A1; font-weight: 700;
font-size: 12px;
line-height: 14px;">Вопрос имаму</p>
  <p style="font-weight: 400;
font-size: 14px;
line-height: 17px;

color: #000000;">Получен ответ на вопрос имаму</p>
</div>

<p style="font-weight: 400;
font-size: 10px;
line-height: 14px;color: #363636;">15:30 - 02.03.2022</p>
</div>
<router-link to="/nots"><p style="color:#39B2BA; text-align:right;font-size: 13px;
line-height: 16px; margin-top:3%">Посмотреть все уведомления</p></router-link>

</div>

<header >
  <div class="header-mask"></div>
  <div style="display: flex; justify-content:space-between;">  
  <router-link to="/profilenav">  <div class="user" style="display: flex">
    <img  :src="getUserIconPath()" alt="" class="user-icon">

    <p class="user-name">{{userName}}</p>
  </div></router-link>

  <div class="controls" style="display: flex">
    <img @click="showMenu=true" src="../assets/Gamburger.png" class="header-icon"/>
    <router-link to="/supportnav">
    <img @click="goSupport()" src="../assets/Gear.svg" alt="" class="header-icon"></router-link>
    <img @click="showNots=true" src="../assets/Bell.svg" alt="" class="header-icon">
  </div></div>
  
  <div class="namaz">
    <router-link to="/city">    <div class="namaz-header">Время намаза <img src="../assets/namazcitybig.svg" alt=""> 15 Раджаб 1443</div> 
</router-link>

    <div class="namaz-timeline">
      <ul style="list-style:none; padding:0; margin:0;">
      <li class="namaz-date">
        <p class="namaz-datename">Фадж</p>
        <p class="namaz-datetime">06:08</p>
        <!-- <img src="../assets/timelinecircle.svg" alt=""> -->
      </li>
      <li class="namaz-date ">
        <p class="namaz-datename">Фаджр</p>
        <p class="namaz-datetime">06:08</p>
      </li>
      <li class="namaz-date">
        <p class="namaz-datename">Фаджр</p>
        <p class="namaz-datetime">06:08</p>
      </li>
      <li class="namaz-date">
        <p class="namaz-datename">Фаджр</p>
        <p class="namaz-datetime">06:08</p>
      </li>
      <li class="namaz-date active">
        <p class="namaz-datename">Фаджр</p>
        <p class="namaz-datetime">06:08</p>
      </li>
        <li class="namaz-date">
        <p class="namaz-datename">Фаджр</p>
        <p class="namaz-datetime">06:08</p>
      </li>
      <li style="position:relative" class="namaz-date">
        <p class="namaz-datename">Фаджр</p>
        <!-- <img style="position:absolute; z-index: 1000; top:-5px;left:-8.5px" src="../assets/timelinecircle.svg" alt=""> -->
        <p class="namaz-datetime">06:08</p>
      </li>
          <li class="namaz-date ">
        <p class="namaz-datename">Фаджр</p>
        <p class="namaz-datetime">06:08</p>
      </li>
          <li class="namaz-date">
        <p class="namaz-datename">Фаджр</p>
        <p class="namaz-datetime">06:08</p>
      </li>
</ul>
    </div>
  </div>
</header>
<!-- <v-select :options="[{label: 'Canada', code: 'ca'}]"></v-select> -->
<div class="daily" >
  <h1>Аят дня</h1>
  <p class="daily-ayat">Сура Аль-Бакара (Корова), аят 256:</p>
  <p class="ayat-text">Нет принуждения в религии. Прямой путь уже отличился от заблуждения. Кто не верует в тагута, а верует в Аллаха, тот ухватился за самую надежную рукоять, которая...</p>
  <div class="buttons">
    <!-- <img src="../assets/ReadMore.svg" alt=""> -->
    <div @click="showModal=true" class="button read-button">Читать</div>
    <div @click="showShare=true"  class="button share-button">Поделиться</div>
    <img src="../assets/simple-like.svg" alt="">
  </div>
</div>
<div class="info-cards" style="display:flex">
  <div class="info-card">
    <img width="25" height="25" src="../assets/Vector.svg" alt="">
    <p class="ic-text">Главное о мобильном сервисе «Сабиль»</p>
  </div>
   <div class="info-card">
    <img width="25" height="25" src="../assets/mechet.svg" alt="">
    <p class="ic-text">Главное о мобильном сервисе «Сабиль»</p>
  </div>
   <div class="info-card">
    <img width="25" height="25" src="../assets/Vector.svg" alt="">
    <p class="ic-text">Главное о мобильном сервисе «Сабиль»</p>
  </div>
</div>


  <h2 class="heading">Новости и события</h2>
  <router-link to="/news"><div class="news">
  <div class="news-card">
    <img src="../assets/news-1_01-03.jpg" alt="">
    <div class="news-items">
    <p class="nc-text"> Священный месяц Рамадан начнется ...</p>
    <p class="nc-date">01.03.2022</p>
    <div class="like-btn"></div>
    </div>
  </div>
   <div class="news-card">
    <img src="../assets/news-1_01-03.jpg" alt="">
    <div class="news-items">
    <p class="nc-text"> Священный месяц Рамадан начнется ...</p>
    <p class="nc-date">01.03.2022</p>
    <div class="like-btn"></div>
    </div>
  </div>
    <div class="news-card">
    <img src="../assets/news-1_01-03.jpg" alt="">
    <div class="news-items">
    <p class="nc-text">Священный месяц Рамадан начнется ... </p>
    <p class="nc-date">01.03.2022</p>
    <div class="like-btn"></div>
    </div>
  </div>
    <div class="news-card">
    <img src="../assets/news-1_01-03.jpg" alt="">
    <div class="news-items">
    <p class="nc-text">Священный месяц Рамадан начнется ...</p>
    <p class="nc-date">01.03.2022</p>
    <div class="like-btn" @click="like()"> </div>
    </div>
  </div>
</div></router-link>


  <div> <h2 class="heading">Кошелек</h2>
  <div class="wallet"> <div class="info" style="display:flex; gap: 10px;">
  <div class="wallet-card wallet-info">
    <h3>Связь</h3>
    <p class="minutes">Остаток минут: <span> 50 из 300</span></p>
    <p class="traff">Остаток трафика: <span> 10 из 100гб</span></p>
    <p class="sms">Остаток СМС: <span> 200 из 500</span></p>
  </div>
   
  </div>
  <div class="info" style="display:flex; gap: 10px;">
  <div class="wallet-card wallet-info">
    <h3>Связь</h3>
    <p class="minutes">Остаток минут: <span> 50 из 300</span></p>
    <p class="traff">Остаток трафика: <span> 10 из 100гб</span></p>
    <p class="sms">Остаток СМС: <span> 200 из 500</span></p>
  </div>
   
  </div>
  <div class="info" style="display:flex; gap: 10px;">
  <div class="wallet-card wallet-info">
    <h3>Связь</h3>
    <p class="minutes">Остаток минут: <span> 50 из 300</span></p>
    <p class="traff">Остаток трафика: <span> 10 из 100гб</span></p>
    <p class="sms">Остаток СМС: <span> 200 из 500</span></p>
  </div>
   
  </div>
 </div>

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
      like(){
        console.log('liked')
        return
      },
      ask(){
         this.$emit('goAsk', false)
      },
      goSupport(){
         this.$emit('goSupport', false)
      },
      openCalend(){
         this.$emit('openCalend', false)
      }
    },
    computed: {
    items () {
      return this.options.filter(i => i.title !== this.selectedLang?.title)
    }
}
  }
</script>
<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css?family=Montserrat');




ul {
  list-style: none;
  padding: 5%;
  font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 16px;
color: black;
  text-align: left;
}
ul li {
  border-bottom: 0.5px solid #AFAFAF;
  padding: 7% 4%;
}
.ayat-modal {
  text-align: left;
  padding: 3%;
  font-family: 'Montserrat';
font-style: normal;
}
.ayat-modal h1 {
font-weight: 700;
font-size: 16px;
line-height: 20px;
padding: 0;
color: #39B2BA;
}
.ayat-modal span {
  font-weight: 500;
font-size: 10px;
line-height: 12px;
color: #636363;
}
.ayat-modal p {
  color: #676565;
font-weight: 400;
font-size: 14px;
line-height: 20px;

}
.modal-controls {
display: flex;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
align-items: center;
font-size: 9px;
line-height: 11px;
margin-top: 10%;
padding-top: 3%;
 margin-right: 10%;
gap: 10px;
border-top: 0.1px solid #DADADA;
justify-content: flex-end;
}
.modal-controls p {
vertical-align: middle;
color: #39B2BA ;
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
.main-page {
  padding:10px;
  margin-top: 40%;
  background: white;
  // background-image: linear-gradient(rgba(57, 178, 186, 0.68), rgba(57, 178, 186, 0.68)), url("../assets/Pattern.png");
<<<<<<< HEAD
  height: 150vh;
=======
  height: 130vh;
>>>>>>> 68c8f908c666aa2a8b8497237e6669265d989041
  background-repeat: repeat;
    position: relative;
}
header{
  background-color: #39B2BA;
  position: fixed;
  width: 100%;
  padding: 10px 20px;
  left: 0;
  filter: drop-shadow(0px -2px 4px rgba(0, 0, 0, 0.25));
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
.daily{
  position: static;
  top: -10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  border-radius: 10px;
  margin-top: 10%;
  display: flex;

  margin-bottom: 10%;
  flex-direction: column;
  padding: 10px;
  align-items: flex-start;
}
h1{
 font-weight: 700;
font-size: 16px;
line-height: 20px;
color: #39B2BA;
padding: 10px 20px;
}
.daily-ayat{
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #636363;
padding: 0 20px;
}
.ayat-text{
font-weight: 400;
font-size: 16px;
line-height: 20px;
padding:  10px 20px;
color: #676565;
text-align: left;
}
.buttons {
  display: flex;
  align-self: flex-end;
  padding: 0.5em
}
.button{
  color: #39B2BA;
  font-weight: 400;
font-size: 13px;
line-height: 16px;
padding-right: 4em;
}
.read-button {
  position: relative;
}
.read-button::before {
  position: absolute;
  content: '';

  width: 1.5em;
  height: 1.5em;
  background-image: url('../assets/ReadMore.svg');
  top: -0.3em;
  left: -1.9em;
}
.share-button {
  position: relative;
}
.share-button::before {
  position: absolute;
  content: '';
  width:2.5em;
  height: 2.5em;
    top: -0.2em;
  background-image: url('../assets/SharePost.svg');
  left: -2em;
}
.info-cards{
  justify-content: space-between;
  margin-top: 14px;
  gap: 3px;
}
.info-card{
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 7px;
  background-color: #39B2BA;
  border-radius: 5px;
  width: 100%;
height: 110px;
}
.ic-text{font-weight: 700;
padding:10%;
padding-left: 0;
font-size: 11px;
line-height: 15px;color: #FFFFFF; text-transform: uppercase; text-align: left;}
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
.heading{
font-weight: 700;
font-size: 18px;
line-height: 22px;
margin-bottom: 5%;

  padding-top: 10%;
  text-align: left;
line-height: 13px;
}

.news {
  padding-bottom: 10px;
   display: flex;
   gap: 10px;
   height: max-content;
   overflow-x: auto;
//    flex-grow: 1;
// flex-basis:0;
      // width: 1200px;
    flex-wrap: nowrap;
}
.news-items{
  // height: 20%;
  padding: 15%;
  padding-left: 5%;
  padding-bottom: 5%;
  padding-top: 5%;
}
.news-card{
  width: 46%;
  height: 90%;
  // height: 120px;
  flex: 0 0 auto;
  text-align: left;
 position: relative;  
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
}
.news::-webkit-scrollbar, .namaz-timeline ul::-webkit-scrollbar  {
    display: none;
}
.news-card img {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
width: 100%;
height: 50%;
}
.nc-text {
font-weight: 700;
font-size: 12px;
line-height: 16px;
color: #2DA9A1;
margin-bottom: 5%;
width: 90%;
}
.nc-date {
font-weight: 400;
font-size: 10px;
line-height: 12px;
color: #363636;
}
.like-btn{
  width: 15px;
  height: 15px;
  position: absolute;
  right: 5%;
  bottom: 5%;
  background-image: url('../assets/like.svg')
}
.wallet {
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: 1%;
}
.wallet::-webkit-scrollbar {
  display: none;
}
.wallet-card {
  text-align: left;
  padding: 12px 25px 16px 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
font-weight: 400;
font-size: 14px;
line-height: 20px;  
width: max-content;
}
.wallet-card h3{
color: #363636;
font-size: 14px;
line-height: 17px;
margin-bottom: 7px;
}
.wallet-card span {
font-weight: 400;
font-size: 14px;
line-height: 20px;
  color: #39B2BA;
  margin-left: 2px;
  font-weight: bold;
}
.namaz-header {
padding-top: 10px;
// text-align: center;
padding-bottom: 2%;
  font-family: 'Montserrat';
font-style: normal;
// border-bottom:  0.5px solid rgba(255, 255, 255, 0.5);;
font-weight: 700;
font-size: 12px;
position: relative;
line-height: 15px;
color: white;
}
.namaz-header::after{
  position: absolute;
  height: 100%px;
  content: '';
  width: 100vh;
  bottom: 0;
  left: -10%;
  border-bottom:  0.5px solid rgba(255, 255, 255, 0.5);
}
.namaz-header img {
<<<<<<< HEAD
 margin: 0 2%;
 width: 90px;
=======
 margin: 0 3%;
 width: 30%;
>>>>>>> 68c8f908c666aa2a8b8497237e6669265d989041
}

.namaz-timeline ul {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  justify-content: space-around;
  font-weight: 500;
font-size: 24px;
line-height: 17px;
margin:1% !important;
color: white;
text-align: center;
}
.namaz-timeline li {
  border-bottom: 0;
  position: relative;
  font-weight: 700;
font-size: 12px;
line-height: 16px;
}
.namaz-timeline li::before {
 position: absolute;
 content: '';
 width: 2px;
 height: 20%;
 background-color: #fff;
 top: 3%;
}
.active::after {
  content: '';
  position: absolute;
  background-image: url('../assets/timelinecircle.svg');
  background-position: center;
  width: 80px;
  height: 80px;
  top: -10%;
  left: -10%;
}
</style>
