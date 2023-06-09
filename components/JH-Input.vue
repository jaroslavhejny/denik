<template>
  <b-field  class="grid" :type="inputType" >
    <b-input custom-class="jh-input" placeholder="url zde" :value="fromClipboard" @input="checkDenik"/>
  </b-field>
</template>

<script lang="ts">
import  Vue from "vue"

export default Vue.extend({
  name: 'JHInput',
  props: {
    isCorrect: {
      type: Boolean,
      default: false
    },
    fromClipboard: {
      type: String,
      default: ""
    }
  },
  data(){
    return {
    }
  },
  methods: {
    checkDenik(value: string){
      this.$emit("inputValue", value);
    }
  },
  computed: {
    inputType() {
      return this.isCorrect ? "is-success" : "is-danger"
    }
  }
})
</script>
<style lang="scss">
  .grid {
    grid-area: input;
  }
  .jh-input {
    text-align: center;
  }
</style>