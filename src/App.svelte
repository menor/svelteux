<script lang="ts">
  import { updateLocalStorage } from './utils/localStorage'
  import Header from "./UI/Header.svelte";
  import ListsSection from "./UI/ListsSection.svelte";
  import taskLists from "./TaskLists/taskLists-store";
  import TaskList from "./TaskLists/TaskList.svelte";

  function createNewList(): void {
    taskLists.createNewList();
  }

  function deleteList(e: CustomEvent): void {
    taskLists.deleteList(e.detail.id);
  }
</script>

<style>
  button {
    border: 0;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
    transform: rotateZ(45deg);
    fill: var(--action-color);
    width: 0.8rem;
  }

  button:hover {
    fill: var(--accent-color);
  }
</style>

<main>
  <Header />
  <ListsSection>
    <button slot="header" on:click={createNewList}><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"><title>Create new list</title>
        <use xlink:href="#delete-icon" /></svg></button>
    {#each $taskLists as list}
      <TaskList {list} on:delete={deleteList} />
    {/each}
  </ListsSection>
</main>
