<template>
    <div>
        <button v-for="tab in tabs" :key="tab" @click="setComponent(tab)" class="bg-slate-300 p-2 mx-2 rounded-xl active:bg-blue-600">
            {{ tab }}
        </button>
        <keep-alive>
            <component :is="component" />
        </keep-alive>
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
  
      const setComponent = (value) => {
        component.value = value
      }
  
      return {
        tabs,
        component,
        setComponent
      }
    }
  }
  </script>
  
  <style>
  
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