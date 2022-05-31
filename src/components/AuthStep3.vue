<template>
<div style="padding-top:50px">
    <img src="../assets/Logo.svg" alt="">
    <p class="auth-desc" style="font-size:15px;color: #CCB282;">Шаг 3 из 3</p>
    <p class="auth-desc" style="font-size:14px; color:#39B2BA; padding: 10px 15px;">Придумайте 4-х значный цифровой
пароль для быстрого входа в приложение:</p>

<input v-model="myModel" maxlength='4' />

<a href="/main">
<button @click="showMain()" id="delete-pin">Удалить пароль</button></a>
</div>
</template>

<script>
  export default {
     
    name: 'HelloWorld',
    
    data: () => ({
      myModel: '9560'
    }),
    methods: {
      showMain(){
        this.$emit('showMain', false)
      }
    }
  }
</script>
<style scoped lang="scss">
$char-w: 1ch;
$gap: .5*$char-w;
$n-char: 4;
$in-w: $n-char*($char-w + $gap);
*{
    color: #39B2BA
}
input {
    font-family: 'Montserrat';
	display: block;
	margin: 0 auto;
	border: none;
	padding: 0;
	width: $in-w;
	background: repeating-linear-gradient(90deg, 
		#39B2BA 0, #39B2BA $char-w, 
		transparent 0, transparent $char-w + $gap) 
		0 100%/ #{$in-w - $gap} 2px no-repeat;
	font: 30px normal sans mono, consolas, 
Montserrat;
	letter-spacing: $gap;
	
	&:focus {
		outline: none;
		color: #39B2BA;
	}
}
strong {
    
    color: #CCB282;
}
span {
    margin-top: 60px !important;
    display: block;
}
#delete-pin {
  background: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 12px;
  margin-top: 50px;
  width: 300px;
  color: #39B2BA;
font-weight: 400;
font-size: 15px;
  border-radius: 7px;
}
</style>
