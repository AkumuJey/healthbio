<template>
    <div>
        <button v-for="tab in tabs" :key="tab" @click="setComponent(tab)" class="bg-slate-300 p-2 mx-2 mt-3 rounded-xl active:bg-blue-600">
            {{ tab }}
        </button>
              <transition name="component">
                <keep-alive>
                  <component :is="component" />
                </keep-alive>
              </transition>
    </div>
  </template>
  
  <script>
  import { ref, computed, defineComponent } from 'vue'
  import Vitals from '@/components/patientDetails/Vitals.vue';
  import AdditionalHistory from '@/components/patientDetails/AdditionalHistory.vue';
  import Biodata from '@/components/patientDetails/Biodata.vue';
  import Complaints from '@/components/patientDetails/Complaints.vue';
  import TreatmentPlan from '@/components/patientDetails/TreatmentPlan.vue';
  
  export default {
    components: { 
        AdditionalHistory,
        Vitals,
        TreatmentPlan,
        Biodata,
        Complaints
    },
    setup() {
      const tabs = [
        'Biodata',
        'Complaints',
        'Vitals',
        'AdditionalHistory',
        'TreatmentPlan'
      ]
      const component = ref('Biodata')
      const show = ref(false)
  
      const setComponent = (value) => {
        component.value = value
      }
  
      return {
        tabs,
        component,
        setComponent,
        show
      }
    }
  }
  </script>
  
  <style>
  .component-enter-from {
    @apply opacity-0 transform translate-x-[-60px]
   
  }
  .component-enter-to {
   @apply opacity-100 transform translate-x-0
  }
  .component-enter-active {
    @apply transition duration-500 ease-in
  }
  .component-leave-from {
    @apply opacity-100 transform translate-x-0
  }
  .component-leave-to {
    @apply opacity-0 transform translate-x-[100px]
  }
  .component-leave-active {
    @apply transition duration-500 ease-out
  }
  
  </style>





  <!-- <script>
    import AdditionalHistory from '@/components/patientDetails/AdditionalHistory.vue';
    import Vitals from '@/components/patientDetails/Vitals.vue';
    import TreatmentPlan from '@/components/patientDetails/TreatmentPlan.vue';
    import Biodata from '@/components/patientDetails/Biodata.vue';
    import Complaints from '@/components/patientDetails/Complaints.vue';

export default {
    components: {
        AdditionalHistory,
        Vitals,
        TreatmentPlan,
        Biodata,
        Complaints
    },
    data () {
        return {
            tabs: [
                'Biodata',
                'Complaints',
                'AdditionalHistory',
                'Vitals',
                'TreatmentPlan'
            ],
            component: 'Biodata',
            name: 34
        }
    }
}
  </script> -->
  <!-- <template>
    <div>
      <button v-for="tab in tabs" :key="tab" @click="setComponent(tab)">
        {{tab}}
      </button>
      <component :is="component" />
    </div>
  </template> -->