import {defineStore} from 'pinia'
import { ref } from 'vue'


export const useUserTokenStore = defineStore('userToken', () => {
    const token = ref('')

    const getToken = () =>{
        return localStorage.getItem('TOKEN')
    }
    const setToken = (val:any) =>{
        token.value = val;
        localStorage.setItem('TOKEN', val)
    }
    return {token, setToken, getToken}
})