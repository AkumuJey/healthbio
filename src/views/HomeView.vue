<template>
 <div class="w-full h-full">
    <div class="bg-blue-200 w-72 p-5" @submit.prevent="bodyMassIndex">
        <form>
            <label for="weight">Weight (Kg)</label>
            <input type="number" name="weight" id="weight" :v-model="weight" min="40" max="200" class="w-full" required>
            <label for="height">Height (m)</label>
            <input type="number" name="height" id="weight" :v-model="height" class="w-full" required>
            <button type="submit" class="bg-blue-600 p-2">Calculate BMI</button>
        </form>
    </div>
    <div>
        <p>Body Mass Index: {{ BMI }} kg/m<sup>2</sup></p>
    </div>
 </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const weight = ref(null)
const height = ref(null)

const BMI = ref(0)

const bodyMassIndex = () => {
    return BMI = weight/(height * height)
}

</script>

<style>
* {
    box-sizing: border-box;
}
</style>