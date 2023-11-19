<template>
  <div id="container">
    <span>Portfolio Value</span>
    <span class="price">$ 4,562.52</span>
    <Bagde value="1000" type="success"></Bagde>
  </div>
</template>

<script setup lang="ts">
import Bagde from "@/components/Bagde.vue";

defineProps({
  name: String,
});
</script>

<style scoped>
#container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

#container span {
  color: #fff;
  text-align: center;
  font-family: "Poppins";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
}

#container .price {
  color: #fff;
  text-align: center;
  font-family: "Poppins";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.64px;
}
</style>
