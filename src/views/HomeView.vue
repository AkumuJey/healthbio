<template>
 <div class="w-full h-full">
    <div class="bg-blue-200 w-1/3 mx-auto p-3" @submit.prevent="bodyMassIndex" v-if="!patientDetails">
        <form class="">
            <fieldset class="p-2">
                <legend class="top-0 left-40 border border-l-2 border-l-black border-r-2 border-r-black p-1 bg-white rounded">Body Mass Index</legend>
                    <label for="weight">Weight (Kg)</label>
                    <input type="number" name="weight" id="weight" v-model="weight" min="30" max="350" step="0.1" required class="w-full">
                    <label for="height">Height (m)</label>
                    <input type="number" name="height" min="0.6" max="2.5" step="0.01" id="height" v-model="height"  required class="w-full">
            </fieldset>
            <fieldset class="p-2">
                <legend class="top-0 left-40 border border-l-2 border-l-black border-r-2 border-r-black p-1 bg-white rounded">Vitals</legend>
                    <label class="" for="temp">Temprature (°C)</label>
                    <input v-model="temp" type="number" name="temp" id="temp" min="30" max="45" step="0.1" required class="w-full p-2 rounded">
                    <label class="" for="systolic">Systolic Blood Pressure</label>
                    <input v-model="systolic" type="number" name="systolic" min="40" max="250" step="1" id="systolic" required class="w-full p-2 rounded">
                    <label class="" for="diastolic">Diastolic Blood Pressure</label>
                    <input v-model="diastolic" type="number" name="diastolic" min="30" max="150" step="1" id="diastolic" required class="w-full p-2 rounded">
                    <label class="" for="breathingRate">Breathing Rate</label>
                    <input v-model="breathingRate" type="number" name="breathingRate" min="0" max="100" step="1" id="breathingRate"  required class="w-full p-2 rounded">
            </fieldset>
            <input type="submit" :value="fBmi" class="bg-blue-600 py-1 px-2 rounded block mx-auto">
        </form>
    </div>
    <div v-if="patientDetails" class="bg-slate-200 p-4 mx-auto">
        <p>Body Mass Index: {{ BMI }} kg/m<sup>2</sup></p>
        <p>Temprature - {{ temp }} °C</p>
        <p>Breathing Rate - {{ breathingRate }} bpm</p>
        <p>Blood Pressure is - {{ systolic }}/{{ diastolic }} mmHg</p>
        <button @click="(patientDetails = false)" class="bg-blue-800 p-2 rounded-xl">Update Details</button>
    </div>
 </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
/*
Form out put data 
*/
const patientDetails = ref(false)


const weight = ref(null)
const height = ref(null)
const temp = ref(null)
const breathingRate = ref(null)
const systolic = ref(null)
const diasolic = ref(null)


const BMI = ref(0)


const bodyMassIndex = () => {
    BMI.value = (weight.value/(height.value * height.value)).toFixed(2)
    patientDetails.value = true
}




</script>

<style>
* {
    box-sizing: border-box;
}
</style>