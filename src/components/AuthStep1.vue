<template>
<div style="padding-top:50px">
    <img src="../assets/Logo.svg" alt="">
    <p class="auth-desc" style="font-size:15px;color: #CCB282;">Шаг 1 из 3</p>
    <p class="auth-desc" style="font-size:14px; color:#39B2BA; width:350px; margin: 0 auto">Для регистрации в приложении 
введите ваш номер мобильного телефона:</p>

<the-mask mask="+# (###)-(###)-(##)-(##)" value="7#######" type="tel" class="tel" masked="true" placeholder="+7 (___) ___-__-__   "></the-mask>
<div class="policy">
<div class="policy-text">
  
  <input class="checkbox" type="checkbox" id="myCheckbox1">
  <label for="myCheckbox1"></label>
   <span class="agree-check">Согласен с </span>политикой конфиденциальности</div>

<div  class="policy-text">
  <input class="checkbox" type="checkbox" id="myCheckbox2">
  <label for="myCheckbox2"></label>
  <span class="agree-check">Согласен с </span> политикой обработки персональных данных</div>
</div>
<a href="/auth2">
<button @click="nextStep()" id="get-password">Получить пароль по смс</button></a>
</div>
</template>

<script>
import {TheMask} from 'vue-the-mask'
  export default {
     components: {TheMask},
    data: () => ({
    
         rules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 20 || 'Max 20 characters',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      ],
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
    methods: {
     nextStep() {
            this.$emit('goToAuth2', false)
        }
    }
  }
</script>
<style scoped>
input.checkbox{ 
  opacity: 0;
  /* margin: 5px; */
}
label{
  width: 50px;
  height: 50px;
  position: relative;
}
label::before {
  left: -25px;
  position: absolute;
  content: '' ;
  width: 50px;
  height: 50px;
    background-image: url('../assets/unchecked.svg');
}
:checked + label::before {
    position: absolute;
  content: '' ;
  width: 50px;
  height: 50px;
    background-image: url('../assets/checked.svg');
}
.policy{
  margin-left: 20px;
}
.policy-text{
  color: #CCB282;

  margin-bottom: 10px;
  width: 300px;
}
</style>