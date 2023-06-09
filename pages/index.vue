<template>
<div class="main">
  <h1>{{ text }}</h1>
  <JH-Input :is-correct="true" />
  <url-button />
  <no-ads />
</div>
</template>

<script lang="ts">
export default{
  name: 'IndexPage',
  data(){
        return {
          text: "Deník bez reklam",
        }
      },
  methods: {
    
  }
}
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
