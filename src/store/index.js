import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
    state: {
        personas: []
    },
    getters: {
        getPersonas: state => {
            return state.personas
        },
        getPersona: (state) => (index) => {
            return state.personas.find(persona => persona.id == index)
        }
    },
    mutations: {
        addPersona(state, payload) {
            state.personas.push(payload)
        },
        addPersonas(state, payload) {
            state.personas = payload
        }
    },
    actions: {
        addPersona(context, payload) {
            console.log(context)

            return new Promise((resolve, reject) => {
                axios({
                    method: "POST",
                    url: "/invitados.json",
                    data: payload
                })
                    .then(res => {
                        console.log(res)
                        resolve()
                    })
                    .catch(error => console.log(error, ` `, reject()))
            })


        },

        async initData(context) {
            await axios.get("/invitados.json")
                .then(res => {
                    const personas = []
                    for (const id in res.data) {

                        console.log(id)
                        personas.push({
                            id: id,
                            nombre: res.data[id].nombre,
                            email: res.data[id].email,
                            aporte: res.data[id].aporte

                        })
                    }
                    context.commit("addPersonas", personas)
                })
        },
        updateData(context, payload) {
            console.log(context)
            return new Promise((resolve, reject) => {
                axios({
                    method: "PUT",
                    url: "/invitados/" + payload.id + ".json",
                    data: payload.value
                })
                    .then(res => {
                        console.log(res)
                        resolve()
                    })
                    .catch(() => { reject() })
            })

        },
        deletePerson(context, payload) {
            console.log(context)
            axios.delete("/invitados/" + payload.id + ".json")
                .then(res => {
                    console.log(res)
                    payload.ruta.push("/print")
                })
        }
    }
})