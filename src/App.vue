<template>
  <div class="container">
    <VacationPicker/>
    <OpdrachtH3/>
  </div>
</template>

<script>
import VacationPicker from './components/VacationPicker.vue'
import OpdrachtH3 from "./components/OpdrachtH3";

export default {
  name: 'app',
  components: {
    OpdrachtH3,
    VacationPicker
  }
}
</script>


