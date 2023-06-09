<template>
<div class="main">
  <h1>{{ text }}</h1>
  <JH-Input :is-correct="inputIsValid" @isValid="isValid" />
  <url-button />
  <no-ads :isCorrect="inputIsValid" @openUrl="openUrl"/>
</div>
</template>

<script lang="ts">
import  Vue from "vue"

export default Vue.extend({
  name: 'IndexPage',
  data(){
        return {
          text: "Deník bez reklam",
          inputIsValid: false,
          noAdParam: "?demoseznam",
          url: ""
        }
      },
  methods: {
    isValid(isValid: boolean, url: string){
      
      this.inputIsValid = isValid
      if (isValid){
        const {origin, pathname} = new URL(encodeURI(url));
        this.url =`${origin}${pathname}${this.noAdParam}`
      }
    },
    openUrl(){
      window.open(this.url, "_blank")

    }
  }
})
</script>
<style lang="scss" scoped>
  .main {
    margin: 10px;
    display: grid;
    grid-template-areas: "header header" "input input" "url-button open-url";
    gap: 5px; 
  }

  h1 {
    grid-area: header;
    text-align: center;
  }
</style>
