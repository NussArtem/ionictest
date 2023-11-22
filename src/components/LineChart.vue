<template>
    <div>
    <Line :data="chartData" :options="chartOptions" />
    </div>
</template>

<script setup>
    import { Line } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
    import {ref} from 'vue'
    import {onMounted} from "@vue/runtime-core";
    import axios from 'axios';

    ChartJS.register(Title, Tooltip, Legend, PointElement, CategoryScale, LinearScale, LineElement)

    const chartData = ref( {
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
            datasets: [ { label: '',
                borderColor: '#0695FF',
                backgroundColor: '#0695FF',
                data: [7, 49, 46, 13, 25, 30, 22],
                fill: false,
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                pointHoverBackgroundColor: '#0695FF',
                borderWidth: 1,
                pointHoverBorderColor: '#0695FF',},],


    },)
    const chartOptions = ref( {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Скрыть легенду (название датасета)
            },
        },

        scales: {
                x: {
                    display: false, // Скрыть нижнюю шкалу (x-ось)
                },
                y: {
                    display: false, // Скрыть левую шкалу (y-ось)
                },
            },
    })
    const days = 7;
    const unixTimestamp = Math.floor(Date.now() / 1000);
    onMounted(()=> {
        let tokenId = 'bitcoin'
        axios.get(`https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd`)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.error('Error fetching historical data:', error);
            });

    })
</script>

<style scoped>

</style>