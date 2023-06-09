import { createStore } from "vuex";


const store = createStore({
    state: {
            like : [0,0,0,0,0,0,0,0,0,0],
            누른거 : ''

        
    },
    mutations : {
        likes(state,payload){
            state.like[payload]++
        },
        select(state,payload){
            state.누른거 = payload
            
        },
       
    },


    
   
})

export default store