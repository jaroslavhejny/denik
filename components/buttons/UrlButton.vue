<template>
  <JH-Button class="grid" :text="text" @btn="enterUrlHandler" />
</template>
<script lang="ts">
    export default {
        name: "UrlButton",
        data(){
            return {
                text: "Vložit URL"
            }
        },
        methods: {
            enterUrlHandler(text: String){
                console.log("button-click", text)
            },
        }
    }
</script>
<style lang="scss" scoped>
  .grid {
    grid-area: url-button;
  }
</style>