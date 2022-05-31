<template>
<div class="header">
  <img class="logo" src="../assets/homeLogo.svg" alt="">

  <img class="sabil" src="../assets/sabi.svg" alt="">
  <img class="dsid" src="../assets/dlyaslov.svg" alt="">
  
  <a href="/auth1">
    <button @click="login()" id="login" style="display: block">Войти в приложение</button></a>
    <p style="font-size: 13px;
line-height: 15px;color:white; margin-top:30px">Пройти регистрацию по номеру телефона</p>
    <div class="header-mask"></div>
    <p style="font-size: 14px;
line-height: 12px; margin-top: 72px; font-size: 15px;
line-height: 12px; color:white">Заказать сим-карту</p>
</div> 
</template>

<script>
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
      login(){
           this.$emit('eventname', false)
      }
      
    },
  
  }
</script>
<style scoped lang="scss"> 
img {
  margin: 0 auto;
}
.header{

  height: 100%;
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
  opacity: 0.1;
  height: 100%;
  background-size: cover;
    z-index: -1;
  background-image: url('../assets/Pattern.png');
  content: '';
}
.logo {
  margin-top: 90px;

}
.sabil{
  margin-top: 26px;
  margin-bottom: 8px;
}
.dsid {
  margin-bottom: 20%;
}
#login {
  margin: 0 auto;
   background: white;
  padding: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 50px;
  width: 274px;
  color: black;
  font-weight: 400;
  font-size: 16apx;
  line-height: 17px;
  border-radius: 7px;

}

</style>
