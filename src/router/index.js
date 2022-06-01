import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthStep2 from '../components/AuthStep2.vue'
import AuthStep3 from '../components/AuthStep3.vue'
import SupportNav from '../components/SupportNav.vue'
import HomePage from '../components/HomePage.vue'
import MainPage from '../components/MainPage.vue'
import NewsComponent from '../components/NewsComponent.vue'
import AskQuestion from '../components/AskQuestion.vue'
import AuthStep1 from '../components/AuthStep1.vue'
import VoteResult from '../components/VoteResult.vue'
import ProfileNav from '../components/ProfileNav.vue'
import ProfileSett from '../components/ProfileSett.vue'
import Calendar from '../components/Calendar.vue'
import MyTariff from '../components/MyTariff.vue'
import BlagoComp from '../components/BlagoComp.vue'

// import { publicPath } from 'vue.config'
import Imamcomponent from '../components/Imamcomponent.vue'
import KoranPage from '../components/KoranPage.vue'
import BlagoArticle from '../components/BlagoArticle.vue'
// import ConfComp from '../components/ConfComp.vue'
Vue.use(VueRouter)

const routes = [
 
  {

    name: 'home',
    path: '/',
    component: HomePage
  },
  {
    path: '/auth1',
    component: AuthStep1
  },
  {
    path: '/auth2',
    component: AuthStep2
  },
  {
    path: '/auth3',
    component: AuthStep3
  },
  {
    path: '/main',
    component: MainPage
  },
  {
    path: '/supportnav',
    component: SupportNav
  },
  {
    path: '/ask',
    component: AskQuestion
  },
  {
    path: '/profilenav',
    component: ProfileNav
  },
  {
    path: '/profilenav',
    component: ProfileNav
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
  base: process.env.NODE_ENV === 'production'
  ? '/sabil_pwa/'
  : '/' ,
  /* ... */
  routes
})

export default router
