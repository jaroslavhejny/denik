<template>
<div class="main">
  <h1>{{ text }}</h1>
  <JH-Input :is-correct="inputIsValid" @inputValue="clipboard" :fromClipboard="fromClipboard" />
  <delete-btn @deleteUrl="deleteUrl"/>
  <url-button @clipboard="clipboard"/>
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
    deleteUrl(){
      this.clipboard("")
    }
  }
})
</script>
<style lang="scss" scoped>
  .main {
    display: grid;
    grid-template-areas: "header header header header header header header header" 
    "input input input input input input input input" 
    "delete url-button url-button url-button open-url open-url open-url open-url";
    gap: 5px; 
    max-width: 700px;
    margin: 10px auto;
  }

  h1 {
    grid-area: header;
    text-align: center;
  }
</style>
