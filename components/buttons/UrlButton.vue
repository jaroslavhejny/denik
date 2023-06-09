<template>
  <JH-Button class="grid" :text="text" @btn="enterUrlHandler" />
</template>
<script lang="ts">
import  Vue from "vue"

export default Vue.extend({
        name: "UrlButton",
        data(){
            return {
                text: "Vložit URL",
                clipboard: ""
            }
        },
        methods: {
            async enterUrlHandler(){
                try {
                    this.clipboard = await navigator.clipboard.readText();
                    this.$emit("clipboard", this.clipboard)
                }
                catch(e){
                    console.log("e",e)
                }
            },
        }
    })
</script>
<style lang="scss" scoped>
  .grid {
    grid-area: url-button;
  }
</style>