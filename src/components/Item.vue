<template>
  <div>
    {{item.url}}
    {{item.score}}
    {{item.author}}
    <a :href="item.url">{{item.title}}</a>
  </div>
</template>
<script>
export default {
  props: ['item']
}
</script>
