<template>
    <JH-Button  class="no-ads" :text="text" @btn="noAdsHandler" :btn-disabled="noAds" :btn-type="btnType"/>
</template>
<script lang="ts">
import  Vue from "vue"
export default Vue.extend({
    name: "NoAds",
    data(){
        return {
            noAds: false,
            text: "Bez reklam",
        }
    },
    computed: {
        btnType(): String{
            return this.noAds ? "is-info" : "is-danger"
        }
    },
    methods: {
        noAdsHandler(text: String){
            this.noAds = !this.noAds
        },
    }
})
</script>
<style lang="scss">
  .no-ads {
    grid-area: open-url;
  }
</style>