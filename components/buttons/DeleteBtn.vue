<template>
    <JH-Button :btn-type="'is-danger'" @btn="deleteHandler" class="delete-btn"><font-awesome-icon icon="fa-solid fa-trash-can" /></JH-Button>
</template>
<script lang="ts">
import  Vue from "vue"

export default Vue.extend({
    name: "DeleteBtn",
    methods: {
      deleteHandler(){
        this.$emit("deleteUrl")
      }
    }
})
</script>

<style lang="scss">
  .delete-btn {
    grid-area: delete;
  }
</style>