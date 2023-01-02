<template>
    <div>
      <div>
          <h1>Complaints</h1>
          <button @click="num++" class="p-2 bg-blue-500 mx-auto block">{{ num }}</button>
          <h1>Form Validation</h1>
          <FormKit type="text"
          :classes="formkitClassess" 
          />
          <FormKitSchema :schema="biodataSchemaArray"
          :classes="formkitClassess" 
          />
      </div>
    </div>
  </template>
 
  <script setup>
  import { ref } from "vue";
  import { FormKitSchema } from '@formkit/vue'
  const formkitClassess = ref(
    {
      label : 'block mb-1 font-bold text-sm',
      outer : 'mb-12 bg-red-200',
      input : 'w-full shadow h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
      inner : 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hiddenfocus-within:border-blue-500',
      help : 'text-xs text-gray-500 bg-green-100'
    } 
  )
  const biodataSchemaArray = ref(
    [
  {
    $el: 'h1',
    children: 'Register'
  },
  {
    $formkit: 'text',
    name: 'email',
    label: 'Email',
    help: 'This will be used for your account.',
    validation: 'required|email'
  },
  {
    $formkit: 'password',
    name: 'password',
    label: 'Password',
    help: 'Enter your new password.',
    validation: 'required|length:5,16'
  },
  {
    $formkit: 'password',
    name: 'password_confirm',
    label: 'Confirm password',
    help: 'Enter your new password again to confirm it.',
    validation: 'required|confirm',
    validationLabel: 'password confirmation',
  },
  {
    $cmp: 'FormKit',
    props: {
      name: 'eu_citizen',
      type: 'checkbox',
      id: 'eu',
      label: 'Are you a european citizen?',
    }
  },
  {
    $formkit: 'select',
    if: '$get(eu).value', // 👀 Oooo, conditionals!
    name: 'cookie_notice',
    label: 'Cookie notice frequency',
    options: {
      refresh: 'Every page load',
      hourly: 'Ever hour',
      daily: 'Every day'
    },
    help: 'How often should we display a cookie notice?'
  }
]
  )

 
  
  
  const num = ref(0)
  </script>
  
  <style>

  </style>