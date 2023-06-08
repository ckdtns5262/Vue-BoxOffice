import { createStore } from "vuex";


const store = createStore({
    state(){
        return{
            like : [0,0,0,0,0,0,0,0,0,0],
            

        }
    },
    mutations : {
        likes(state,payload){
            state.like[payload]++
        }
    }
})

export default store