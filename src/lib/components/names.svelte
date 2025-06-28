<script>
    let {store} = $props();

    const addNamesToList = () => {
        const userName = $store.inputName;

        $store.names.push(userName)
        $store.inputName = '';
    }

</script>

<div class="container">
    <div class="logo">
        <h1>Who pays the bill</h1>
    </div>

    <div class="input_container">
        <input type="text" bind:value={$store.inputName}/>
        <button onclick={addNamesToList}>Add</button>
    </div>


    <div class="list_of_names">
        {#each $store.names as name, index(name) }
            <button>
                {name}
            </button>
        {/each}
    </div>

</div>