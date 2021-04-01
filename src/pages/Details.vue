<template>
  <div>
    <div class="card" v-if="persona != undefined">
      <div v-if="isEdit">
        <h5 class="card-header">{{ persona.nombre }}</h5>
        <div class="card-body">
          <div class="card-text">
            <p>Mail : {{ persona.email }}</p>
            <p>Aporte : {{ persona.aporte }}</p>
          </div>
          <button class="btn btn-info" @click="isEdit = false">Editar</button>
        </div>
      </div>

      <div v-else>
        <h5 class="card-header">
          <input type="text" v-model="persona.nombre" />
        </h5>
        <div class="card-body">
          <div class="card-text">
            <p>
              Mail :<input type="text" v-model="persona.email" />
              {{ persona.email }}
            </p>
            <p>
              Aporte : <input type="text" v-model="persona.aporte" />
              {{ persona.aporte }}
            </p>
          </div>
           <button class="btn btn-info mr-2" @click="actualizaData">Guardar</button>
            <button class="btn btn-danger" @click="deletePerson">Eliminar</button>
        </div>
      </div>
    </div>

    <div v-else class="alert alert-danger" role="alert">
      No hay datos disponibles
    </div>
    <router-link to="/print" class="btn btn-primary mt-3">Volver</router-link>
  </div>
</template>

<script>
/* tslint:disable:no-unused-variable */
import { ref, computed } from "vue";
import { useRoute,useRouter } from "vue-router";
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore()
    const isEdit = ref(true);
    const route = useRoute();
    const router = useRouter();
 
    const index = route.params.index;
    const persona = computed(()=>{
      return store.getters.getPersona(index);
    })



    /* axios({
          method: "GET",
          url: "/invitados/" +
          index +
          ".json",
       })
        .then(res => {
           persona.value = res.data;
        
        });*/

      function actualizaData(){
     
      if (persona.value.nombre != "" && persona.value.email != "") {
        const payload = {
          id:index,
          value:persona.value
        }
      store.dispatch("updateData",payload)
      .then(()=>{
        isEdit.value = false
      })
     
      }
    }

  function deletePerson(){
    if(confirm("Quieres eliminar a " + persona.value.nombre + "?")){
      const payload ={
        id:index,
        ruta:router
      }
      store.dispatch("deletePerson",payload)
    }
  }

    return { persona,isEdit, actualizaData, deletePerson };
  },
};
</script>