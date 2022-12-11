<template>
    <div>
        <button v-for="tab in tabs" :key="tab" @click="component = tab" class="bg-blue-600 p-2 mx-2 rounded-xl">
            {{ tab }}
        </button>
        <keep-alive>
            <component :is="component" />
        </keep-alive>
    </div>
  </template>
  

  <script>
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
  </script>
  
  <style>
  
  </style>