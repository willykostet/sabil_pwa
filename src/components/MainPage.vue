<template>
<div class="main-page">

<header >
  <div class="header-mask"></div>
  <div style="display: flex; justify-content:space-between;">  
  <a href="/profilenav">  <div class="user" style="display: flex">
    <img  :src="getUserIconPath()" alt="" class="user-icon">

    <p class="user-name">{{userName}}</p>
  </div></a>

  <div class="controls" style="display: flex">
    <img src="../assets/Gamburger.png" class="header-icon"/>
    <a href="/supportnav">
    <img @click="goSupport()" src="../assets/Gear.svg" alt="" class="header-icon"></a>
    <img src="../assets/Bell.svg" alt="" class="header-icon">
  </div></div>
  
  <div class="namaz">
    <div class="namaz-header">Время намаза <img src="../assets/namazCity.svg" alt=""> 15 Раджаб 1443</div> 

    <div class="namaz-timeline">
      <ul style="list-style:none; padding:0; margin:0;">
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
    <div class="button read-button">Читать</div>
    <div class="button share-button">Поделиться</div>
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
  <a href="/news"><div class="news">
  <div class="news-card">
    <img src="../assets/news-1_01-03.jpg" alt="">
    <div class="news-items">
    <p class="nc-text"> Рамадан начнется 2 апреля</p>
    <p class="nc-date">01.03.2022</p>
    <div class="like-btn"></div>
    </div>
  </div>
    <div class="news-card">
    <img src="../assets/news-1_01-03.jpg" alt="">
    <div class="news-items">
    <p class="nc-text">Священный месяц Рамадан начнется 2 апреля</p>
    <p class="nc-date">01.03.2022</p>
    <div class="like-btn"></div>
    </div>
  </div>
    <div class="news-card">
    <img src="../assets/news-1_01-03.jpg" alt="">
    <div class="news-items">
    <p class="nc-text">Священный месяц Рамадан начнется 2 апреля</p>
    <p class="nc-date">01.03.2022</p>
    <div class="like-btn" @click="like()"> </div>
    </div>
  </div>
</div></a>


  <div> <h2 class="heading">Кошелек</h2>
 <div class="info" style="display:flex; gap: 10px;">
  <div class="wallet-card wallet-info">
    <h3>Связь</h3>
    <p class="minutes">Остаток минут: <span> 50 из 300</span></p>
    <p class="traff">Остаток трафика: <span> 10 из 100гб</span></p>
    <p class="sms">Остаток СМС: <span> 200 из 500</span></p>
  </div>
   
  </div>
 
 </div>






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
  margin-top: 15%;
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
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  border-radius: 20px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: flex-start;
}
h1{
  font-weight: 700;
font-size: 12px;
line-height: 15px;
color: #39B2BA;
padding: 10px 20px;
}
.daily-ayat{
  font-weight: 500;
font-size: 10px;
line-height: 12px;
color: #636363;
padding: 0 20px;
}
.ayat-text{
  font-weight: 400;
font-size: 10px;
line-height: 12px;
padding:  10px 20px;
color: #676565;
text-align: left;
}
.buttons {
  display: flex;
  align-self: flex-end;
}
.button{
  color: #39B2BA;
  font-weight: 400;
font-size: 10px;
line-height: 10px;
padding-right: 25px;
}
.read-button {
  position: relative;
}
.read-button::before {
  position: absolute;
  content: '';
  width: 10px;
  height: 10px;
  background-image: url('../assets/logo.svg');
  left: -15px;
}
.share-button {
  position: relative;
}
.share-button::before {
  position: absolute;
  content: '';
  width: 10px;
  height: 10px;
  background-image: url('../assets/logo.svg');
  left: -15px;
}
.info-cards{
  justify-content: space-between;
  margin-top: 14px;
}
.info-card{
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 7px;
  background-color: #39B2BA;
  border-radius: 5px;
  width: 111px;
height: 84px;
}
.ic-text{font-weight: 500;
font-size: 8px;
line-height: 10px;color: #FFFFFF; text-transform: uppercase; text-align: right;}
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
font-size: 11px;
margin-bottom: 8px;

  padding-top: 15px;
  text-align: left;
line-height: 13px;
}
.news {
  padding-bottom: 10px;
   display: flex;
   gap: 10px;
   overflow-x: scroll;
}
.news-items{
  padding: 7px;
  padding-top: 0;
}
.news-card{
  width: 40%;
  position: relative;
  text-align: left;
  height: 105px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
}
.news-card img {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
width: 100%;
height: 60px;
}
.nc-text {
  font-weight: 700;
font-size: 8px;
color: #2DA9A1;
margin-bottom: 3px;
line-height: 8px;
width: 80%;
}
.nc-date {
  font-weight: 400;
font-size: 8px;
line-height: 10px;
color: #363636;
}
.like-btn{
  width: 10px;
  height: 10px;
  position: absolute;
  right: 5px;
  bottom: 5px;
  background-image: url('../assets/like.svg')
}
.wallet-card {
  text-align: left;
  padding: 12px 25px 16px 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
font-weight: 400;
font-size: 10px;
line-height: 10px;
font-size: 9px;
width: max-content;
}
.wallet-card h3{
  font-weight: 500;
font-size: 11px;
margin-bottom: 7px;
line-height: 13px;
}
.wallet-card span {
  font-size: 12px;
  color: #39B2BA;
  margin-left: 2px;
  font-weight: bold;
}
.namaz-header {
padding-top: 10px;
  font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 13px;
color: white;
}
.namaz-header img {
 margin: 0 10px
}
</style>
