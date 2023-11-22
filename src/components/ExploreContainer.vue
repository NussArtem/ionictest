<template>
  <div id="container">
    <span>Portfolio Value</span>
    <span class="price">$ {{coinRate}}</span>
    <Bagde background value="1000" type="success"></Bagde>
  </div>
</template>

<script setup>
import Bagde from "@/components/Bagde.vue";
import axios from "axios";
import {onMounted, ref} from "@vue/runtime-core";

const coinSymbol = ref('')
const coinRate = ref('')

defineProps({
  name: String,
});

onMounted(async () => {
  coinSymbol.value = 'BTC'
  try {
    let response = await axios.get(`https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd`)
    let tokenInfo = response.data.data.filter((i) => i.symbol === coinSymbol.value)[0]
    console.log(response.data.data.filter((i) => i.symbol === coinSymbol.value))
    coinRate.value = tokenInfo.metrics.market_data.price_usd.toFixed(2)
    console.log(coinRate.value)
  } catch (e) {
      console.error('Error fetching historical data:', e);
  }


})
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
