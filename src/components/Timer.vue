<template>
  <section style="display: flex; flex-direction: column; align-items: center">
    <div v-for="event in events" :key="event.date" style="display: flex; align-items: center">
      <iframe id="online-alarm-kur-iframe"
              :src="`https://embed-countdown.onlinealarmkur.com/pt/#${event.date}T00:00:00@America%2FSao_Paulo`"
              height="60"
              style="border: 0px;" width="60"></iframe>
      <h6>
        {{ event.name }} - {{ event.date }}
      </h6>

    </div>
  </section>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const events = ref([
  {name: 'Sebrae Oboticario', date: '2024-10-04'},
  {name: 'Viagem Potenciar', date: '2024-10-14'},
  {
    name: 'Noite dos mitos',
    date: '2024-10-24'
  },
  {
    name: 'Robotica ',
    date: '2024-11-09'
  },
])


</script>

<style scoped>

</style>
