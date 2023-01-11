<script setup>
import { ref, watch } from "vue";

const biodata = ref({
  // name: "",
  // age: 0,
  // admissionDate: '',
  // residence: ''
})
const enterForm = (data) => {
  console.log(data)
  biodata.value = data
  console.log(biodata);
}


</script>
<template>
    <div>
      <div>
          <FormKit type="form" submit-label="Save Details" :value="biodata" @submit="enterForm">
            <h1>Patient information</h1>
            <FormKit
              name="id"
              type="number"
              label="Patient Number"
              validation="required|length:9"
              min="0"
              validation-visibility="live"
            />
            <FormKit
              type="text"
              label="Full Names"
              validation="required|text"
              validation-visibility="live"
              name="name"
            />
            <FormKit
            name="age"
            type="number"
            label="Age"
            min="0"
            max="120"
            validation="required|number"
            validation-visibility="live"
            />
            <FormKit
            name="admissionDate"
            type="date"
            label="Date of Admission"
            help="Please key in the date"
            validation="required|date"
            validation-visibility="live"
          />
          <FormKit
          type="date"
          label="Date of Birth"
          validation="required|date_before:2023-01-11"
          validation-visibility="live"
          name="date of birth"
          />
          <FormKit
          type="select"
          label="Gender"
          placeholder="Gender"
          :options="{
            male: 'Male',
            female: 'Female'
          }"
          validation="required"
          validation-visibility="live"
          name="gender"
          />
          <FormKit
            type="text"
            label="Residence"
            validation="required"
            validation-visibility="live"
            name="residence"
          />
        </FormKit>
      </div>
    </div>
  </template>
 
  
  <style>

  </style>