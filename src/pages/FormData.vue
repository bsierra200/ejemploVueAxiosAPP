<template>
  <div>
    <h3>A&ntilde;adir invitados</h3>

    <div class="card" style="width: 35rem">
      <div class="card-body">
        <h5 class="card-title">Datos Invitado</h5>

        <div class="form-group">
          <label for="formGroupExampleInput">Nombre</label>
          <input
            v-model="nombre"
            type="text"
            class="form-control"
            placeholder="Armando Agudelo"
            :readonly="mensaje"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">E-mail</label>
          <input
            v-model="email"
            type="text"
            class="form-control"
            placeholder="aagudelo@elemail.com"
            :readonly="mensaje"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Aporta</label>
          <input
            v-model="aporte"
            type="text"
            class="form-control"
            placeholder="cer-ve-za ?"
             :readonly="mensaje"
          />
        </div>
        <button class="btn btn-primary" @click="addPersona">
          A&ntilde;adir
        </button>
        <div :class="`alert alert-${colorsms} mt-3`" role="alert" v-if="mensaje">
         {{feedBackMsm}}
        </div>
      </div>
    </div>
  </div>
</template>


<script>
/* eslint-disable  */
import {ref} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
  setup(){
    const store = useStore()
    const router = useRouter()
    const nombre = ref("")
    const email = ref("")
    const aporte = ref("")
    const mensaje = ref(false)
    const colorsms = ref("success")
    const feedBackMsm = ref("El invitado ha sido guardado")
    
    function addPersona(){
      if(nombre.value != '' && email.value != ""){
        const persona = {
          nombre:nombre.value,
          email:email.value,
          aporte:aporte.value
        }
      store.dispatch("addPersona", persona)
      .then(() => {
        feeeBack("El invitado ha sido guardado","success")
      })
      .catch(() => {
        feeeBack("Lo sentimos no se pudo guardar el registro", "danger")
      })
             
       
      }
    }

    function feeeBack(m,c){
      feedBackMsm.value = m
      colorsms.value = c
    mensaje.value = true
      setTimeout(() => {
        mensaje.value = false
        nombre.value = ""
            email.value = ""
           aporte.value = ""
        },4000);
    }

    return{nombre, email, aporte, addPersona, mensaje, colorsms, feedBackMsm }
  }
  // data() {
  //   return {
  //     nombre: "",
  //     email: "",
  //     aporte: "",
  //   };
  // },
  // methods: {
  //   addPersona() {
  //     if (this.nombre != "" && this.email != "") {
  //       const persona = {
  //         nombre: this.nombre,
  //         email: this.email,
  //         aporte: this.aporte,
  //       };
  //       this.$store.dispatch("addPersona", persona);
  //       this.$router.push('/print')
  //     }
  //   },
  // },
};
</script>