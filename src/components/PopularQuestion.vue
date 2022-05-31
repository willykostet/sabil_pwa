<template lang="html">
  <div>
  <div style="display: flex; justify-content: center;">
    <p class="category">Молитва</p>

    <p class="category">Молитва</p>
    <p class="category">Молитва</p>

    <p class="category">Молитва</p>

    <p class="category">Молитва</p>
  </div>
<div>
  
</div>
<div style="display: flex; flex-direction: column; justify-content: left;">
<app-accordion class="mb-4">
      <template v-slot:title>
        <span class="">Nullam ac felis laoreet?</span>
        <p class="heading-desc">Nullam ac felis laoreet, tempus nisl nec, vehicula orci. Nulla id turpis vestibulum, feugiat nibh vitae, malesuada justo. </p>
      </template>
      <template v-slot:content>
        <p class="inner-text">
         Nullam ac felis laoreet, tempus nisl nec, vehicula orci. Nulla id turpis vestibulum, feugiat nibh vitae, malesuada justo. 
        </p>
         <p class="heading-desc"></p>
      </template>
    </app-accordion>

    <app-accordion class="mb-8">
      <template v-slot:title>
        <span >Nullam ac felis laoreet?</span>
                <p class="heading-desc">Nullam ac felis laoreet, tempus nisl nec, vehicula orci. Nulla id turpis vestibulum, feugiat nibh vitae, malesuada justo. </p>

      </template>
      <template v-slot:content>
        <p class="inner-text">
         Nullam ac felis laoreet, tempus nisl nec, vehicula orci. Nulla id turpis vestibulum, feugiat nibh vitae, malesuada justo. 
        </p>
      </template>
    </app-accordion>
</div>
  </div>
  
</template>

<script>
import AppAccordion from "./AppAccordion.vue";

  export default {
     components: {

    AppAccordion,
  },
    data () {
      return {

      }
    }
  }
</script>

<style scoped lang="css">
.mb-4{ 
  position: relative;
}
.category { 
font-family: 'Monserrat';
font-style: normal;
font-weight: 400;
font-size: 9px;
line-height: 9px;
margin: 0.3em;
color: #39B2BA;
border: 0.5px solid #39B2BA;
border-radius: 3px;
width: 5em;
padding: 2px;
}
span {
  font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
text-transform: uppercase;

color: #2DA9A1;
}
.inner-text{ 
padding: 20px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 8px;
line-height: 10px;
text-transform: capitalize;

color: #000000;
}
.heading-desc {
  font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
position: relative;
font-size: 8px;
line-height: 10px;
text-transform: uppercase;

color: #000000;
}

</style>
