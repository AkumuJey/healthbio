<template>
 <div class="w-full h-full">
    <div class="bg-blue-200 w-72 p-3" @submit.prevent="bodyMassIndex">
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
                    <input type="number" name="temp" id="temp" v-model="temp" min="30" max="45" step="0.1" required class="w-full p-2 rounded">
                    <label class="" for="systolic">Systolic Blood Pressure</label>
                    <input type="number" name="systolic" min="40" max="250" step="10" id="systolic" v-model="systolic"  required class="w-full p-2 rounded">
                    <label class="" for="diastolic">Diastolic Blood Pressure</label>
                    <input type="number" name="diastolic" min="30" max="150" step="10" id="diastolic" v-model="diastolic"  required class="w-full p-2 rounded">
                    <label class="" for="breathingRate">Breathing Rate</label>
                    <input type="number" name="breathingRate" min="30" max="150" step="10" id="breathingRate" v-model="breathingRate"  required class="w-full p-2 rounded">
            </fieldset>
            <input type="submit" :value="fBmi" class="bg-blue-600 py-1 px-2 rounded block mx-auto">
        </form>
    </div>
    <div v-if="patientDetails">
        <p>Body Mass Index: {{ BMI }} kg/m<sup>2</sup></p>
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