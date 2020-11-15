<script lang="ts">

</script>

<style>
    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: var(--secondary-background);
    }

    header {
        box-sizing: border-box;
        height: 2rem;
        background: lightgray;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 1rem;
    }

    main {
        display: flex;
        flex-direction: row;
    }
</style>

<section>
    <header><slot name="header"></slot></header>
    <main>
    <slot>Create a list</slot>
</main>
</section>