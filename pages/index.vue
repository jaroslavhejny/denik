<template>
<div class="main">
  <h1>{{ text }}</h1>
  <JH-Input :is-correct="inputIsValid" @inputValue="clipboard" :fromClipboard="fromClipboard" />
  <url-button @clipboard="clipboard"/>
  <no-ads :isCorrect="inputIsValid" @openUrl="openUrl"/>
</div>
</template>

<script lang="ts">
import { match } from "assert";
import  Vue from "vue"

export default Vue.extend({
  name: 'IndexPage',
  data(){
        return {
          text: "Deník bez reklam",
          inputIsValid: false,
          noAdParam: "?demoseznam",
          url: "",
          fromClipboard: "",
          inputText: ""
        }
      },
  methods: {
    isValid( url: string){
      const match = url.match(/https:\/\/.*denik/)
      this.inputIsValid = !!match
      if (this.inputIsValid){
        const {origin, pathname} = new URL(encodeURI(url), "https://www.denik.cz");
        this.url =`${origin}${pathname}${this.noAdParam}`
      }
    },
    openUrl(){
      window.open(this.url, "_blank")
    },
    clipboard(value: string){
      this.inputIsValid = false;
      this.fromClipboard = value;
      this.isValid(value);
    },
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
