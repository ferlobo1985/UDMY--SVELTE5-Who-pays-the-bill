<script>
    import { onMount } from "svelte";
    import { fade } from 'svelte/transition';
    let {store} = $props();

    const getRandomName = () => {
        return $store.names[Math.floor(Math.random() * $store.names.length)]
    }

    const generateResult = () => {
        let rand = getRandomName();

        if($store.result !== ''){
            while(rand === $store.result){
                rand = getRandomName();
            }
        }

        $store.result = rand;
    }

    onMount(()=>{
        generateResult()
    })

    const getNewResult = () => {
        generateResult()
    }

    const resetApp = () => {
        store.set({
            state:true,
            inputName:'',
            names:[],
            error:'',
            showError:false,
            result:'' 
        })
    }

</script>

<div class="container" in:fade={{duration:500}}>
    <div class="result_container">
        <h1>The looser is:</h1>
        <div class="result_value" in:fade={{delay:1000,duration:500}}>
            {$store.result}
        </div>

        <button class="action_button"
            onclick={resetApp}
        >
            Start over
        </button>
        <br/>
        <button class="action_button btn2"
            onclick={getNewResult}
        >
            Get a new name
        </button>

    </div>
</div>