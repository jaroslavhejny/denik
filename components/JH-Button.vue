<template>
    <b-button @click="buttonClick" :type="[btnType, 'is-light']" :disabled="btnDisabled">{{ text }}</b-button>
</template>
<script>
    export default {
      name: 'JHButton',
      props: {
        text: {
          type: String,
          default: "button"
        },
        btnDisabled: {
          type: Boolean,
          default: false
        },
        btnType: {
          type: String,
          default: "is-info"
        },
      },
      data(){
        return {}
      },
      methods: {
        buttonClick(){
          this.$emit("btn", this.text)
        }
      },
      emits: ['btn']
    }
</script>