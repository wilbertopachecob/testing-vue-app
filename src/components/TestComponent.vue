<template>
  <div>
    Hello, World!
    <Child :testProp="123" />
    <a href="https://google.com">Link</a>
    <p style="color: red">Paragraph</p>
  </div>
</template>

<script>
import Child from './Child'
export default {
  components: {
    Child
  }
}
</script>

<style></style>
