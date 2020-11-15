<script lang="ts">
  import Header from "./UI/Header.svelte";
  import ListsSection from "./UI/ListsSection.svelte";
  import TaskList from "./Lists/TaskList.svelte";
  import type { ITaskList } from "./Lists/Tasks.types";

  // id: user-timehash?-counter00 to 99
  // 725-881-99
  // 72566940
  // 72555941
  // 72588189
  // 72588192
  let lists: ITaskList[] = [
    {
      id: "1",
      name: "test",
      tasks: [
        {
          id: "1",
          name: "task 1",
          completed: false,
        },
        {
          id: "2",
          name: "task 2",
          completed: true,
        },
        {
          id: "3",
          name: "task 3",
          completed: false,
        },
      ],
    },
  ];

  function createNewList() {
    lists = lists.concat({
      id: Math.random().toString(),
      name: "",
      tasks: [],
    });
  }

  function deleteList(e: Event) {
    console.log(e.detail)
    lists = lists.filter(l => l.id !== e.detail)
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
    <button slot="header" on:click={createNewList}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>
      Create new list
    </title>
    <use xlink:href="#delete-icon" /></svg></button>
    {#each lists as list}
      <TaskList {list} on:delete={deleteList} />
    {/each}
  </ListsSection>
</main>
