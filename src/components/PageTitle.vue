<template>
  <div>
    <p>{{ title }}</p>
  </div>
</template>
<script setup>
const props = defineProps(["title"]);
</script>
<style scoped>
div {
  padding: 32px 16px;
}
p {
  color: #fff;
  font-family: "Poppins";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.48px;
}
</style>
