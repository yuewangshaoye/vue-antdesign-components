<template>
<div>
    <div v-for="item in items" :key="item.message"> <!--简单 v-for使用 -->
    {{ item.message }}
    </div>
</div>
</template>
<script>
export default {
    data() {
    return{
       items: [
        { message: 'Foo' },
        { message: 'Bar' }
    ]
  }}
}
</script>