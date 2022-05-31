<template>
<div style="padding-top:50px">
    <img src="../assets/Logo.svg" alt="">
    <p class="auth-desc" style="font-size:15px;color: #CCB282;">Шаг 2 из 3</p>
    <p class="auth-desc" style="font-size:14px; color:#39B2BA; padding: 0 80px;">Введите код, отправленный на Ваш номер</p>

<input  
 v-model="myInput" maxlength='4' />
<span>Повторная отправка кода возможна через <strong>{{time}}</strong> секунд</span>
<a href="/auth3">
<button @click="nextStep1()" id="get-password">Отправить код повторно</button></a>
</div>
</template>
<script>
  export default {
    data: () => ({
	time: '0:30',
	myInput: '7878'
    }),
	methods: {
	updateValue(value) {
      console.log(value)
      },
	nextStep1() {
        this.$emit('goToAuth3', false)
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
	margin-top: 50px;
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
    margin-top: 80px !important;
	margin: auto;
	width: 300px;
    display: block;
	
}
</style>
