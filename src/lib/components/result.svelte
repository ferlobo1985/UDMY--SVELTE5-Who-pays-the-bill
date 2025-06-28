<script>
    import { onMount } from "svelte";
    let {store} = $props();

    const getRandomName = () => {
        return $store.names[Math.floor(Math.random() * $store.names.length)]
    }

    const generateResult = () => {
        let rand = getRandomName();

            /// CODE

        $store.result = rand;
    }

    onMount(()=>{
        generateResult()
    })
</script>

<div class="container">
    <div class="result_container">
        <h1>The looser is:</h1>
        <div class="result_value">
            {$store.result}
        </div>

        <button class="action_button">
            Start over
        </button>
        <br/>
        <button class="action_button btn2">
            Get a new name
        </button>

    </div>
</div>