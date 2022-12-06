<template>
 <div class="w-full h-full">
    <div class="bg-blue-200 w-72 p-5" @submit.prevent="bodyMassIndex">
        <form>
            <fieldset>
                <legend>Body Mass Index</legend>
                <label for="weight">Weight (Kg)</label>
                <input type="number" name="weight" id="weight" v-model="weight" min="30" max="350" step="0.1" class="w-full" required>
                <label for="height">Height (m)</label>
                <input type="number" name="height" min="0.6" max="2.5" step="0.1" id="weight" v-model="height" class="w-full" required>
            </fieldset>
            <input type="submit" :value="fBmi" class="bg-blue-600 py-2 px-1 rounded">
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