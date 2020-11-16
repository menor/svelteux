import { Writable, writable } from 'svelte/store'
import type { ITaskList } from './TaskList.types'

const taskLists: Writable<ITaskList[]> = writable([
  {
    id: '1',
    name: 'test',
    tasks: [
      {
        id: '1',
        name: 'task 1',
        completed: false,
      },
      {
        id: '2',
        name: 'task 2',
        completed: true,
      },
      {
        id: '3',
        name: 'task 3',
        completed: false,
      },
    ],
  },
])

const taskListsStore = {
  subscribe: taskLists.subscribe,

  createNewList: () => {
    const newList = {
      id: Math.random().toString(),
      name: '',
      tasks: [],
    }

    taskLists.update((lists) => {
      return [...lists, newList]
    })
  },

  deleteList: (id: string) => {
    taskLists.update((lists) => lists.filter((list) => list.id !== id))
  },
}

export default taskListsStore
