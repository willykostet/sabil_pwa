import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthStep2 from '../components/AuthStep2.vue'
import AuthStep3 from '../components/AuthStep3.vue'
import SupportNav from '../components/SupportNav.vue'
import SupportNav2 from '../components/SupportNav2.vue'
import HomePage from '../components/HomePage.vue'
import MainPage from '../components/MainPage.vue'
import NewsComponent from '../components/NewsComponent.vue'
import AskQuestion from '../components/AskQuestion.vue'
import AuthStep1 from '../components/AuthStep1.vue'
import VoteResult from '../components/VoteResult.vue'
// import ProfileNav from '../components/ProfileNav.vue'
import ProfileSett from '../components/ProfileSett.vue'
import Calendar from '../components/Calendar.vue'
import MyTariff from '../components/MyTariff.vue'
import BlagoComp from '../components/BlagoComp.vue'
import Imamcomponent from '../components/Imamcomponent.vue'
import KoranPage from '../components/KoranPage.vue'
import BlagoArticle from '../components/BlagoArticle.vue'
import NotsComponent from '../components/NotsComponent.vue'
import VoteStats from '../components/VoteStats.vue'
import TranzPage from '../components/TranzPage.vue'
import TranzFilter from '../components/TranzFilter.vue'
import MyConnection from '../components/MyConnection.vue'
import UslugiPage from '../components/UslugiPage.vue'
import ChangeTariff from '../components/ChangeTariff.vue'
import ChooseCity from '../components/ChooseCity.vue'
import KoranFull from '../components/KoranFull.vue'
import AboutPage from '../components/AboutPage.vue'
import RulesPage from '../components/RulesPage.vue'
import RuleFull from '../components/RuleFull.vue'
import ChooseNotis from '../components/ChooseNotis.vue'
import ConfidPage from '../components/ConfidPage.vue'
import store from '../store/index.js'
Vue.use(VueRouter)

const routes = [
  {
    path: '/confid',
    component: ConfidPage
  },
  {
    path: '/choosenotis',
    component: ChooseNotis
  },
  {
    path: '/rulefull',
    component: RuleFull
  },
  {
    path: '/rules',
    component: RulesPage  
  },
  {
    path: '/about',
    component: AboutPage  
  },
  {
    path: '/fullkoran',
    component: KoranFull
  },
  {
    path: '/city',
    component: ChooseCity
  },
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/changetariff',
    component: ChangeTariff
  },
  {
    path: '/uslugi',
    component: UslugiPage
  },
  {
    path: '/myconn',
    component: MyConnection
  },
  {
    path: '/tranzfilter',
    component: TranzFilter
  },
  {
    path: '/tranz',
    component: TranzPage
  },
  {
    path: '/stats',
    component: VoteStats
  },
  {
    path: '/nots',
    component: NotsComponent
  },
  {
    path: '/auth1',
    component: AuthStep1
  },
  {
    path: '/auth2',
    component: AuthStep2,
    beforeEnter: (to, from, next) => {
     if (store.getters.getNumberOk == false) {return false} else {next()}
    }
  },
  {
    path: '/auth3',
    component: AuthStep3,
    beforeEnter: (to, from, next) => {
     if (store.getters.getLogined == false) {return false} else {next()}
    }
  },
  {
    path: '/main',
    component: MainPage,
    beforeEnter: (to, from, next) => {
     if (store.getters.getPin == false) {return false} else {next()}
    }
  },
  {
    path: '/supportnav',
    component: SupportNav
  },
  {
    path: '/supportnav2',
    component: SupportNav2
  },
  {
    path: '/ask',
    component: AskQuestion
  },
  {
    path: '/profilenav',
    component: ProfileSett
  },

  {
    path: '/profilesett',
    component: ProfileSett
  },
  {
    path: '/koran',
    component: KoranPage
  },
  {
    path: '/news',
    component: NewsComponent
  },
  {
    path: '/imam',
    component: Imamcomponent
  },
  {
    path: '/calend',
    component: Calendar
  },
  {
    path: '/blago',
    component: BlagoComp
  },
  {
    path: '/tariff',
    component: MyTariff
  },
  {
    path: '/blagofull',
    component: BlagoArticle
  },
  {
    path: '/voteresult',
    component: VoteResult
  },
  // {
  //   path: '/conf',
  //   component: ConfComp
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
