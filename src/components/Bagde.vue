<template>
  <div class="badge" :class="type">{{ value > 0 ? "+" : "-" }}{{ value }}%</div>
</template>
<script setup>
defineProps({
  type: {
    type: String,
    default: "success",
  },
  value: {
    type: String,
    default: "1000",
  },
});
</script>
<style scoped>
.badge {
  display: inline-flex;
  padding: 3px 6px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  font-family: "Poppins";
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
  width: fit-content;
}
.success {
  background: rgba(123, 255, 178, 0.3);
  color: #7bffb2;
}
.warning {
  background: rgba(123, 255, 178, 0.3);
  color: #7bffb2;
}
</style>
