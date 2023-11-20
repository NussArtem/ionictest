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
            datasets: [ { label: 'Coin value',
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 'rgb(54, 162, 235)',
                data: [7, 49, 46, 13, 25, 30, 22],
                fill: false,
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                pointHoverBackgroundColor: 'rgb(54, 162, 235)',
                pointHoverBorderColor: 'rgb(54, 162, 235)',},],

    },)
    const chartOptions = ref( {
        responsive: true,
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
    const fromDate = unixTimestamp - (days * 24 * 60 * 60);
    const params = {
        vs_currency: 'usd', // Замените на нужную валюту
        from: fromDate,
        to: unixTimestamp,
        interval: 'daily', // Интервал данных (daily, hourly и т. д.)
    };
    onMounted(()=> {
        let tokenId = 'bitcoin'
        axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin`, { params })
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