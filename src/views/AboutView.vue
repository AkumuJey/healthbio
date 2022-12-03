<template>
    <div class="">
     <div v-for="i in body" :key="i.id" class="bg-blue-200 p-5 mt-5 rounded-xl w-2/3 mx-auto shadow-md">
       <h1 class="text-center font-bold">{{ i.title }}</h1>
       <p>{{ i.content}}</p>
     </div>
    </div>
   </template>
   
   <script setup>
   import { ref } from 'vue';
   
   const body = ref([
       {
           id: 23,
           title: 'When The Sun Goes Down',
           content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque error distinctio ratione deserunt magnam cumque autem unde, nam, voluptatibus consequuntur aut tenetur amet adipisci. Ratione inventore eligendi nulla voluptate sunt dolor cupiditate quis voluptas aliquam eveniet, doloribus architecto doloremque ad ipsam ipsum perspiciatis sapiente voluptatem illum ab, reprehenderit tempora? Adipisci ullam necessitatibus dolor dolorum. Ex quisquam quae distinctio dignissimos nisi tenetur asperiores suscipit deleniti alias libero explicabo, ducimus sunt odio sapiente voluptate quas, ut deserunt non commodi debitis nesciunt cumque repudiandae unde! Velit officia nisi reiciendis ea ad earum, facere et animi similique enim voluptates, explicabo voluptatibus repellendus officiis eaque!'
       },
       {
           id: 24,
           title: 'The River and the Source',
           content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque error distinctio ratione deserunt magnam cumque autem unde, nam, voluptatibus consequuntur aut tenetur amet adipisci. Ratione inventore eligendi nulla voluptate sunt dolor cupiditate quis voluptas aliquam eveniet, doloribus architecto doloremque ad ipsam ipsum perspiciatis sapiente voluptatem illum ab, reprehenderit tempora? Adipisci ullam necessitatibus dolor dolorum. Ex quisquam quae distinctio dignissimos nisi tenetur asperiores suscipit deleniti alias libero explicabo, ducimus sunt odio sapiente voluptate quas, ut deserunt non commodi debitis nesciunt cumque repudiandae unde! Velit officia nisi reiciendis ea ad earum, facere et animi similique enim voluptates, explicabo voluptatibus repellendus officiis eaque!'
       }
   ])
   
   </script>
   
   <style>
   
   </style>