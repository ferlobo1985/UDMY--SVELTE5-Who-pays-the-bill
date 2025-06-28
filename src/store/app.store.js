import { writable } from "svelte/store";

const store = writable({
    state:true,
    inputName:'',
    names:[],
    error:'',
    showError:false,
    result:''
})

export default store;