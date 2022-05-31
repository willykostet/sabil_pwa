<template>
<div>
<input type="checkbox" id="switch" /><label for="switch">Toggle</label>
</div>
</template>

<script>
  export default {
   
    name: 'HelloWorld',
    data: () => ({

    }),
    
    
  
  }
</script>
<style scoped lang="scss">
input[type=checkbox]{
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 20px;
  height: 7px;
  background: white;
  box-shadow: inset 0.5px 0.5px 30px rgba(0, 0, 0, 0.25);
  display: block;
  border-radius: 100px;
  position: relative;
}

label:after {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  width: 10px;
  height: 10px;
  background: #4ED7E0;
  border-radius: 10px;
  transition: 0.3s;
}

input:checked + label {
  background: #39B2BA;;
}

input:checked + label:after {
  left: calc(100% - 0.01px);
  transform: translateX(-100%);
}

label:active:after {
  width: 0.01px;
}


</style>
