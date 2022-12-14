<template>
    <div class="w-full h-full bg-blue-200 sm:bg-white grid place-content-evenly place-items-center">
        
        
        <div v-for="i in body" :key="i.id" class="bg-blue-200 p-5 mt-5 rounded-xl w-3/4 sm:w-4/5 shadow-md">
            <h1 class="text-center text-xl font-bold">{{ i.title }}</h1>
            <p>{{ i.content}}</p>
        </div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
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