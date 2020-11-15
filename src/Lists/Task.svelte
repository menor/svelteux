<script lang="ts">
  // https://vimeo.com/183058558
  // Click to mark it done
  // Double click to edit
  // Hover to reveal
  // Drag to reorder
  // *italics*
  // **bold**
  // [link](http://url)
  // url <http://teuxdeux.com>

  import type { ITask } from "./Tasks.types";

  export let task: ITask;
  let isEditing = false;

  function enterEdit(ev: Event) {
    isEditing = true;
  }

  function exitEdit() {
    isEditing = !isEditing
  }

  function toggleCompleted() {
    task.completed = !task.completed;
  }

  //     <li class="todo__list-item draggable" data-todo-id="72566940" tabindex="-1">
  //         <div class="todo-content">
  //             <label class="todo__label"></label>
  //             <div class="todo-content__text">
  //                 Double click this todo to edit it
  //             </div>
  //         </div>
  //         <div class="todo-buttons">
  //             <button class="todo-buttons__button todo-buttons__button--edit" data-on-static-click="editTodo" tabindex="-1">
  //                 <svg width="16" height="16"><use xlink:href="#edit-icon"></use></svg>
  //              </button>
  //              <button class="todo-buttons__button todo-buttons__button--delete" data-on-static-click="deleteTodo" tabindex="-1">
  //                 <svg width="16" height="16">
  //                     <title>Click to delete this todo</title>
  //                     <use xlink:href="#x-icon"></use>
  //                 </svg>
  //              </button>
  //         </div>
  //    </li>
</script>

<style>
  .completed {
    color: gray;
    text-decoration: line-through;
  }
  input {
    border: 0;
  }

  .isEditing {
    border: 1px solid cornflowerblue;
  }
</style>

<label for={`task-${task.id}`}>
  {#if isEditing}
    <input
      class:isEditing
      name={`task-${task.id}`}
      on:blur={exitEdit}
      bind:value={task.name} />
  {:else}
    <span
      class:completed={task.completed}
      on:click|capture={toggleCompleted}
      on:dblclick={enterEdit}>
      {task.name}
</span>
  {/if}
</label>
