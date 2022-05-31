<template lang="html">
    <div style="margin-top:10px"
        :class='{"tabs__light": mode === "light", "tabs__dark": mode === "dark"}'
  >
    <ul class="tabs__header">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.title"
        @click="selectTab(index)"
        :class='{"tab__selected": (index == selectedIndex)}'
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      mode: {
        type: String,
        default: 'light'
      }
    },
    data () {
      return {
        selectedIndex: 0, // the index of the selected tab,
        tabs: []         // all of the tabs
      }
    },
    created () {
      this.tabs = this.$children
    },
    mounted () {
      this.selectTab(0)
    },
    methods: {
      selectTab (i) {
        this.selectedIndex = i

        // loop over all the tabs
        this.tabs.forEach((tab, index) => {
          tab.isActive = (index === i)
        })
      }
    }
  }
</script>

<style lang="css">

  ul.tabs__header {
    display: flex;
    width: 300px;
    list-style: none;
    margin: 0 auto;
    position: relative;
    padding: 0;
  }

  ul.tabs__header > li {
    /* padding: 15px 30px; */
    width: 170px;
    font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 11px;
color: #2DA9A1;
    height: 20px;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 2px;
    display: inline-block;
    cursor: pointer;
  }

  ul.tabs__header > li.tab__selected {
    font-weight: bold;
    border-radius: 10px 10px 0 0;
    border-bottom: 8px solid transparent;
  }

  .tab {    
    display: inline-block;
    color: black;
    padding: 0 20px;
    padding-top: 1%;
    padding-left: 9%;
    min-width: 300px;
    border-radius: 10px;
    /* min-height: 400px; */
  }

  .tabs__light .tab{
    background-color: #fff;
  }

  .tabs__light li {

    color: #2DA9A1;;
  }

  .tabs__light li.tab__selected {
    background-color: #D2FCFF; 
  }

  .tabs__dark .tab{
    color: #eee;
  }

  .tabs__dark li {
    background-color: #ddd;
    color: #aaa;
  }

  .tabs__dark li.tab__selected {
    background-color: #555;
    color: white;

  }
</style>
