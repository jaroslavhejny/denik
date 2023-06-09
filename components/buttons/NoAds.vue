<template>
    <JH-Button  class="no-ads" :text="text" @btn="noAdsHandler" :btn-disabled="!isCorrect" :btn-type="btnType"/>
</template>
<script lang="ts">
import  Vue from "vue"
export default Vue.extend({
    name: "NoAds",
    props: {
    isCorrect: {
      type: Boolean,
      default: false
    }
  },
    data(){
        return {
            text: "Bez reklam",
        }
    },
    computed: {
        btnType(): String{
            return this.isCorrect ? "is-success" : "is-danger"
        }
    },
    methods: {
        noAdsHandler() {
            console.log("click")
        }
    }
})
</script>
<style lang="scss">
  .no-ads {
    grid-area: open-url;
  }
</style>