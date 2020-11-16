<script lang="ts">

	import { createEventDispatcher } from 'svelte';

  import type { ITaskList } from "./TaskList.types";
  import Task from "./Task.svelte";
  import { onMount } from "svelte";

  export let list: ITaskList;
  let isEditingTitle = false;
  let currentItem = "";
  let listNameInput;

  $: edited = currentItem !== "";

  const dispatch = createEventDispatcher();

  onMount(() => {
    if (list.name === "") {
      listNameInput.focus();
    }
  });

  function handleEditingTitle() {
    isEditingTitle = !isEditingTitle;
  }

  function handleAddTask(ev: Event) {
    if (edited)
      list.tasks = list.tasks.concat({
        id: "as",
        name: currentItem,
        completed: false,
      });
    currentItem = "";
  }
</script>

<style>
  article {
    width: 100%;
    border-left: 1px solid var(--gray-500);
    border-right: 1px solid var(--gray-500);
    padding: 0 0.5rem;
    min-height: 24rem;
  }

  .isEditingTitle {
  }

  .todo__actions {
    height: 1.5rem;
    opacity: 0;
  }

  .todo__actions-button {
    color: var(--actions-color);
    width: 0.6rem;
  }

  .todo__actions-button:hover {
    fill: var(--accent-color);
  }

  article:hover .todo__actions {
    opacity: 1;
  }

  input {
    background-color: var(--secondary-background);
    width: 100%;
    border: 0;
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
  }

  input:hover {
    background-color: var(--secondary-background-accent);
    cursor: text;
  }

  input:focus {
    outline: none;
    box-shadow: 0 1px 0 0 var(--list-border-color);
    background-color: var(--secondary-background-accent);
  }

  @media (min-width: 48rem) {
    article {
      width: 12rem;
    }
  }
</style>

<article>
  <div class="todo__actions">
    <button on:click={() => dispatch('delete', {id: list.id})} class="todo__actions-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>Delete Me</title>
        <use xlink:href="#delete-icon" /></svg>
    </button>
  </div>
  <header>
    <label for={list.name}>
      <input
        bind:this={listNameInput}
        name={list.name}
        class:isEditingTitle
        on:focus={handleEditingTitle}
        on:blur={handleEditingTitle}
        type="text"
        bind:value={list.name} />
    </label>
  </header>
  <ol>
    {#each list.tasks as task}
      <li>
        <Task {task} />
      </li>
    {/each}
  </ol>
  <input bind:value={currentItem} type="text" />
  <button on:click={handleAddTask} disabled={!edited}>+</button>
</article>
