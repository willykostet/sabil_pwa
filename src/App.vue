<template>
  <div id="app">
<!-- 
<Transition name="fade">
<HomePage @eventname="updateparent" v-if="showHomePage"/>
</Transition>
<Transition>
<AskQuestion  @back="back" @goSupport="support" @openCalend="showCalend" v-if="showAskQuestion"/>
</Transition>
<Transition>
<AuthStep1 @goToAuth2="goToAuth2" v-if="showAuthStep1"/>
</Transition>
<Transition>
<AuthStep2 @goToAuth3="goToAuth3" v-if="showAuthStep2"/>
<AuthStep3 @showMain="showMain" v-if="showAuthStep3"/>
<MainPage @goAsk="ask" @goSupport="support" @openCalend="showCalend" v-if="showMainPage"/>
<SupportNav @goAsk="ask" @goSupport="support" @back="back" v-if="showSupportNav"/>
<Calendar @goAsk="ask" @goSupport="support" @back="back"  v-if="showCalendar"/>
<ProfileSett v-if="showProfileSett"/>
<NewsComponent v-if="showNews"/>
<ProfileNav v-if="showProfileNav"/>
<BlagoComp v-if="showBlago"/>
</Transition>
<MyTariff v-if="showMyTariff"/>
<Imamcomponent v-if="showImam"/>
<KoranPage v-if="showKoran"/> -->
<router-view></router-view>
</div>
</template>


<script>
// import AuthStep2 from './components/AuthStep2.vue'
// import AuthStep3 from './components/AuthStep3.vue'
// import SupportNav from './components/SupportNav.vue'
// import HomePage from './components/HomePage.vue'
// import MainPage from './components/MainPage.vue'
// import NewsComponent from './components/NewsComponent.vue'
// import AskQuestion from './components/AskQuestion.vue'
// import AuthStep1 from './components/AuthStep1.vue'

// import ProfileNav from './components/ProfileNav.vue'
// import ProfileSett from './components/ProfileSett.vue'
// import Calendar from './components/Calendar.vue'
// import MyTariff from './components/MyTariff.vue'
// import BlagoComp from './components/BlagoComp.vue'
// import Imamcomponent from './components/Imamcomponent.vue'
// import KoranPage from './components/KoranPage.vue'
  export default {
  
    //  components: { HomePage, AskQuestion, AuthStep2, AuthStep3, AuthStep1, MainPage, SupportNav, Calendar, ProfileSett, NewsComponent, ProfileNav, MyTariff, BlagoComp, Imamcomponent, KoranPage },
    data: () => ({
      showImam:false,
      showBlago: false,
      showHomePage: false,
      showAuthStep1: false,
      showAuthStep2: false,
      showProfileNav: false,
      showAuthStep3: false,
      showMainPage: false,
      showMyTariff : false,
      showNews: false,
      showAskQuestion: false,
      showSupportNav:  false,
      showKoran: true,
      showCalendar: false,
      showProfileSett: false,
      rules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 20 || 'Max 20 characters',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      ],
    }),
   methods: {
    updateparent(variable) {
        this.showHomePage = variable
        this.showAuthStep1 = true
    },
    goToAuth2(variable) {
      this.showAuthStep1 = variable
        this.showAuthStep2 = true
    },
      goToAuth3(variable) {
      this.showAuthStep2 = variable
        this.showAuthStep3 = true
    },
    showMain(v) {
      this.showAuthStep3 = v
        this.showMainPage= true
    },
    ask(v) {
      this.showMainPage = v
        this.showAskQuestion= true
    },
       support(v) {
      this.showMainPage = v
        this.showSupportNav= true
    },
     back(v) {
      this.showSupportNav = v
      this.showCalendar = false
      this.showAskQuestion = false
        this.showMainPage= true
    },
    showCalend(v){
        this.showMainPage= v
        this.showCalendar = true
        this.showAskQuestion = false
    }
}
  }
</script>

<style>
a {
  text-decoration: none;
  color: inherit;
}
footer {
  background: white;
  background-repeat: no-repeat;
  position: relative;
}

header {
  z-index: 100 !important;
}
@import url('https://fonts.googleapis.com/css?family=Montserrat');

#app {
  font-family: 'Montserrat'; 
  -webkit-font-smoothing: antialiased;
  height: 100vh;
  background-size: cover;
  width: 100%;
  background-image: url("./assets/Pattern.png");
  /* padding: 10px; */
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.tel {
  padding: 40px 60px !important;
  padding-right: 0 !important;
  outline: 0;
  color: #39B2BA;
  font-size: 23px !important;

}
.auth-desc{
  padding: 10px;
  font-size: 14px;
  color: #CCB282; 
}
#get-password {
  background: rgba(57, 178, 186, 0.2);
  padding: 12px;
  margin-top: 50px;
  width: 300px;
  color: #39B2BA;
  font-size: 15px;
  border-radius: 7px;
}
.agree-check {
    color: #39B2BA;
}
.policy {
  display: flex;
  flex-direction: column;
  padding: 20px 20% 0 20px; 
  text-align: left;
}

.checkbox {
  margin-right: 10px;
  
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.back {
  font-size: 15px !important;
  padding: 5% 12% !important;
}
.support-page ul li {
  font-size: 15px !important;
  padding: 5% !important;
}
</style>
