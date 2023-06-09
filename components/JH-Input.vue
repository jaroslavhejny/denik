<template>
  <b-field  class="grid" :type="inputType">
    <b-input custom-class="jh-input" placeholder="url zde" v-model="value" @input="checkDenik" />
  </b-field>
</template>

<script>
import  Vue from "vue"

export default Vue.extend({
  name: 'JHInput',
  props: {
    isCorrect: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      value: "text",
    }
  },
  methods: {
    checkDenik(value){
      const isValid = value.indexOf("denik.cz") > -1;
      this.$emit("isValid", isValid);
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