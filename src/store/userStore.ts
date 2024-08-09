import {defineStore} from 'pinia'
import { ref } from 'vue'


export const useUserStore = defineStore('user', () => {
    const state = ref({})

    const getState = () =>{
        return state.value
    }
    const setState = (val:any) =>{
        state.value = val;
    }
    return {state, getState, setState}
})