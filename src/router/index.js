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
import Imamcomponent from '../components/Imamcomponent.vue'
import KoranPage from '../components/KoranPage.vue'
import BlagoArticle from '../components/BlagoArticle.vue'
// import ConfComp from '../components/ConfComp.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {name: 'home'}
  },
  {

    name: 'home',
    path: '/sabil_pwa/',
    component: HomePage
  },
  {
    path: '/sabil_pwa/auth1',
    component: AuthStep1
  },
  {
    path: '/sabil_pwa/auth2',
    component: AuthStep2
  },
  {
    path: '/sabil_pwa/auth3',
    component: AuthStep3
  },
  {
    path: '/sabil_pwa/main',
    component: MainPage
  },
  {
    path: '/sabil_pwa/supportnav',
    component: SupportNav
  },
  {
    path: '/sabil_pwa/ask',
    component: AskQuestion
  },
  {
    path: '/sabil_pwa/profilenav',
    component: ProfileNav
  },
  {
    path: '/sabil_pwa/profilenav',
    component: ProfileNav
  },
  {
    path: '/sabil_pwa/profilesett',
    component: ProfileSett
  },
  {
    path: '/sabil_pwa/koran',
    component: KoranPage
  },
  {
    path: '/sabil_pwa/news',
    component: NewsComponent
  },
  {
    path: '/sabil_pwa/imam',
    component: Imamcomponent
  },
  {
    path: '/sabil_pwacalend',
    component: Calendar
  },
  {
    path: '/sabil_pwa/blago',
    component: BlagoComp
  },
  {
    path: '/sabil_pwa/tariff',
    component: MyTariff
  },
  {
    path: '/sabil_pwa/blagofull',
    component: BlagoArticle
  },
  {
    path: '/sabil_pwa/voteresult',
    component: VoteResult
  },
  // {
  //   path: '/conf',
  //   component: ConfComp
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
