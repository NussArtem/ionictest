<template>
    <div class="container">
        <div style="width: 24px; height: 24px; background: darkgoldenrod; border-radius: 50px"></div>
        <div class="container-coin">
            <div class="container-coin-name">Bitcoin</div>
            <div class="container-coin-pare">BTC·USD</div>
        </div>
        <div style="width: 100px; height: 50px">
        <LineChart/>
        </div>
        <div class="container-coin">
            <div class="container-coin-name">${{coinRate}}</div>
            <Bagde value="1000" type="success"></Bagde>
        </div>
    </div>
</template>

<script setup>
    import LineChart from "@/components/LineChart.vue"
    import Bagde from "@/components/Bagde.vue";

    import axios from "axios";
    import {onMounted, ref} from "@vue/runtime-core";

    const coinSymbol = ref('')
    const coinRate = ref('')
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

<style scoped lang="scss">
    .container{
        background: #212246;
        padding: 10px 12px;
        height: 67px;
        width: 100%;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        gap: 10px;
        &-coin{
            display: flex;
            flex-direction: column;
            gap: 10px;
            &-name{
                color: #ffffff;
                font-size: 16px;
                font-weight: 600;
            }
            &-pare{
                color: #838C9E;
                font-size: 12px;
                font-weight: 400;
            }
        }
    }

</style>