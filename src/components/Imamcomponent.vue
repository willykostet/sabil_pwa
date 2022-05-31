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
  

</header>

<a href="#" onClick="history.go(-1)"><div  class="back" @click="back()">
Вопрос имаму
</div></a>
    <div class="daily" style="margin-top: 2%">
        <div class="daily-left">
            <img src="../assets/muftiyOdin.jpg" alt="">
            <p>Ильдар Аляутдинов <br>(Муфтий Москвы, главный имам Московской соборной мечети)</p>
        </div>
         <div class="daily-right">
            <h1 style="font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
text-transform: uppercase;

color: #2DA9A1;">Совет дня от имама:</h1>
           <p style="font-family: 'Montserrat';
font-style: italic;
font-weight: 400;
font-size: 11.5px;
line-height: 14px;

color: #000000;">И знайте, что самым чистым ликованием для души и сердца человека является душевное наслаждение, происходящее от любви к Всевышнему</p>
        </div>
        </div>
       
         <p style="font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 12px;
text-align: center;
text-transform: uppercase;

color: #2DA9A1; padding:20px 0
">Если вы не нашли ответ на свой вопрос в Популярных вопросах, то можете его задать кому-нибудь из имамов, сотрудничающих с Сабиль.</p>
            <div style="position:relative;" class="buttons" >
                
                <button >Задать вопрос</button>
                <img style="position:absolute; left: 20%; top: 3px;" src="../assets/mini-vopros.svg" alt="">
                <button>Звонок имаму</button>
            </div>
            <button style="font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 9px;
line-height: 11px;
display: flex;
align-items: center;
text-align: center;
text-transform: uppercase;
border: 0.5px solid #39B2BA;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 5px;
padding: 0 20%;
margin: 3% auto;
color: #39B2BA;
">Оформить подписку</button>
   
 <tabs :mode="mode">
      <tab title="Популярные вопросы">
        <PopularQuestion/>
      </tab>
      <tab title="Мои вопросы">Мои вопросы</tab>
    </tabs>



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
import Tabs from "./NewsTabs.vue";
import Tab from "./NewsTab.vue";
import PopularQuestion from "./PopularQuestion.vue";
  export default {
    components: { Tab, Tabs, PopularQuestion },
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
.buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
}
.buttons button {

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 9px;
line-height: 11px;
width: 30%;
height: 20px;
background: rgba(57, 178, 186, 0.2);
color: #39B2BA;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
}

.daily-right h1 {
 padding-top: 5px;
    position: relative;
}
.daily-right h1::before{ 
    content: '';
    position: absolute;
    width: 2em;
    height: 2em;
    top: -1.5em;
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
    right: -0.2em;
    bottom:  -2.5em;
    background-image: url('../assets/quotes2.svg');
}
.daily { 
    align-items: center;
}
.daily-right {
    width: 50%;
}
.daily-left {
    width: 50%;
}
.daily-left img {
    background: #FFFFFF;
border: 0.5px solid #DFDFDF;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
border-radius: 50%;
}
.daily-left p {

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 9px;
line-height: 11px;
text-align: center;
text-transform: capitalize;

color: #878787;
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
