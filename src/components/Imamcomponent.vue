<template>
<div class="main-page">
<div @click="showMenu=false" v-if="showModal || showMenu || showNots || showShare" style="z-index: 999;;position:absolute;display:inline;top:-20%; left:0;width:100%; height:120vh;opacity:0.3;background-color:black;overflow-y:hidden"></div>
<ul v-if="showMenu" style="z-index: 10000;position:fixed; font-size: 15px !important;
  padding: 5% !important;width:70%; right:0; bottom: 0; top: 0;background: white;">
<li><router-link to="/news">Новости</router-link></li>
<li><router-link to="/tranz">Транзакции</router-link></li>
<li> <router-link to="/myconn">Моя связь</router-link> </li>

<li><router-link to="/supportnav">Техподдержка</router-link></li>
</ul>
<div @click="showMenu=false; showAsk=false" v-if="showModal || showAsk" style="z-index: 999;;position:absolute;display:inline;top:-20vh; left:0;width:100%; height:120vh;opacity:0.3;background-color:black;overflow-y:hidden"></div>
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
<div v-if="showModal" class="subModal" style="position:absolute; box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px; top:25%; left:10%; bottom: 5%; height:min-content; width:80%; text-align: left; background-color: white; z-index:1000; padding: 8%; ">
<img @click="showModal=false" style="position:absolute; right:5%; top:5%;" src="../assets/X.svg" alt="">
<h1>Оформить подписку </h1>
<p>Оформите подписку, чтобы задавать вопросы и звонить имаму без ограничений</p>
<div>
  <p>Стоимость услуги</p>
  <p style="font-weight:bold"> 150 ₽/мес</p>
</div>
<button>Оформить подписку</button>
</div>
<div v-if="showAsk" class="subModal" style="position:absolute; box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px; top:15%; left:10%; bottom: 5%; height:min-content; width:80%; text-align: left; background-color: white; z-index:1000; padding: 8%; ">
<img @click="showAsk=false" style="position:absolute; right:5%; top:5%;" src="../assets/X.svg" alt="">

  <h1 style="margin:4%">Тема вопроса</h1>
   <select name="" id="">
                    <option value="lorem">lorem</option>
                    <option value="lorem">ipsumm</option>
                    <option value="lorem">sitamet</option>
                </select>
  <h1 style="margin:4%">Ваш вопрос</h1>
<textarea name="" id="" cols="30" rows="10"></textarea>
<button>Отравить вопрос</button>
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
Вопрос имаму
</div></a>
    <div class="daily" style="margin-top: 2%">
        <div class="daily-left">
            <img src="../assets/muftiyOdin.jpg" alt="">
            <p> <b> Ильдар Аляутдинов</b> <br>(Муфтий Москвы, главный имам Московской соборной мечети)</p>
        </div>
         <div class="daily-right">
            <h1 style="font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
margin-top: 10%;
line-height: 17px;
text-transform: uppercase;

color: #2DA9A1;">Совет дня от имама:</h1>
           <p style="font-family: 'Montserrat';
font-style: italic;
font-weight: 400;
font-size: 13px;
line-height: 16px;

color: #000000;">И знайте, что самым чистым ликованием для души и сердца человека является душевное наслаждение, происходящее от любви к Всевышнему</p>
        </div>
        </div>
       
         <p style="font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
text-align: center;

color: #2DA9A1; padding:20px
">Если вы не нашли ответ на свой вопрос в Популярных вопросах, то можете его задать кому-нибудь из имамов, сотрудничающих с Сабиль.</p>
            <div style="position:relative;" class="buttons" >
                
                <button @click="showAsk=true" >Задать вопрос</button>
                <img style="position:absolute; left: 11%; top: 10px;" src="../assets/mini-vopros.svg" alt="">
                <button>Звонок имаму</button>
            </div>
            <button @click="showModal=true"  style="font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
border: 0.5px solid #39B2BA;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 5px;
padding: 2% 20%;
margin: 3% auto;
color: #39B2BA;
">Оформить подписку</button>
   
 <tabs :mode="mode">
      <tab title="Мои вопросы">
        <PopularQuestion/>
      </tab>
      <tab title="Мои вопросы">Мои вопросы</tab>
    </tabs>



<footer style="display: flex; justify-content: space-between; padding: 5px 10px 10px 25px">
<div class="left"> 
  <router-link to="/koran"><img src="../assets/koran-black.svg" alt="" class="footer-koran footer-icon"></router-link>
 <router-link to="/imam"><img src="../assets/ask-active.svg" alt="" class="footer-question footer-icon"></router-link> 
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
import Tabs from "./NewsTabs.vue";
import Tab from "./NewsTab.vue";
import PopularQuestion from "./PopularQuestion.vue";
  export default {
    components: { Tab, Tabs, PopularQuestion },
    name: 'HelloWorld',
    data: () => ({
     showMenu: false,
     showAsk:false,
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
      },
      back(){
         this.$emit('back', false)
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
textarea {
      margin:7px 0;
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.25);
border-radius: 5px;
height: 27px;
height: 100%;
width: 100%;
resize: none;
}
.select {
    margin: 10%;
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
.subModal h1 {
  font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;
color: #2DA9A1;
text-transform: uppercase;
}
.subModal p {
  font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 12px;
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


.buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
}
.buttons button {

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 16px;
width: 40%;
height: 30px;
background: rgba(57, 178, 186, 0.2);
color: #39B2BA;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
}

.daily-right h1 {
//  padding-top: 5px;
// padding-right: 15%;
  margin-bottom: 5%;
    position: relative;
}
.daily-right h1::before{ 
    content: '';
    position: absolute;
    width: 2em;
    height: 2em;
    top: 1.5em;
    left: -2em; 
    background-image: url('../assets/quotes.svg');
}
.daily-right p {
    position: relative;
}
.daily-right p::after{ 
    content: '';
    position: absolute;
    width: 3em;
    height: 3em;
    right: -1em;
    bottom:  -2.5em;
    background-image: url('../assets/quotes2.svg');
}
// .daily { 
//     // align-items: center;

// }
.daily-right {
    width: 50%;
}
.daily-left {
    width: 50%;

}
.daily-left img {
    background: #FFFFFF;
border: 0.5px solid #DFDFDF;
margin-right: 10%;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
border-radius: 50%;
}
.daily-left p {
margin-top: 5%;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
text-align: left;
font-size: 14px;
line-height: 17px;

color: #878787;;
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

@import url('https://fonts.googleapis.com/css?family=Montserrat');
.daily { 
  padding: 10px;
    display: flex;
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
  // padding:10px;
  margin-top: 12%;
  margin-bottom: 50%;
  background: white;
  // background-image: linear-gradient(rgba(57, 178, 186, 0.68), rgba(57, 178, 186, 0.68)), url("../assets/Pattern.png");
  height: 120vh;
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
.tabs__header  {
  font-size: 15px !important;
}
</style>
