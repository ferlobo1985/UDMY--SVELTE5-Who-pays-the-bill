<script>
    import store from './store/app.store'
    import Names from "./lib/components/names.svelte";
    import Result from "./lib/components/result.svelte";
</script>

{#if $store.state}
  <Names {store}/>
{:else}
  <Result {store}/>
{/if}