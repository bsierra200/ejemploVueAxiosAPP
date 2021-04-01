<template>
  <div>
    <h3>Lista de invitados</h3>

    <ul class="list-group">
      <li v-for="(persona, i) in personas" :key="i"  class="list-group-item">
        <router-link :to="`/details/${persona.id}`">{{
          persona.nombre
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>



export default {

  computed: {
    personas() {
      return this.$store.getters.getPersonas;
    },
  },
   mounted() {
     this.$store.dispatch("initData")
   }
};
</script>