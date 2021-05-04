<template>
  <div
    :class="{ hidden: isHidden }"
    :style="{
      width: '0%'
    }"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: true
    }
  },
  methods: {
    start() {
      this.isHidden = false
    },
    finish() {}
  }
}
</script>

<style></style>
