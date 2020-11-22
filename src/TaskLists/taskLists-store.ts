import { Writable, writable } from 'svelte/store'
import { INITIAL_STATE, LOCAL_STORAGE_KEY } from '../utils/constants'
import { getFromLocalStorage, updateLocalStorage} from '../utils/localStorage'
import type { ITask, ITaskList } from './TaskList.types'


const taskLists: Writable<ITaskList[]> = writable(
  getFromLocalStorage() || INITIAL_STATE,
)

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

  createTask: (listId: string, task: ITask) => {
    taskLists.update(lists => {
      const targetList = lists.find(list => list.id === listId)
      targetList.tasks.push(task)
      return [...lists, targetList]
    })
  },

  deleteTask: (listId: string, taskId: string) => {
    // const updatedList = taskLists.find((list) => (list.id = listId))
  },
}

taskLists.subscribe(val => {
  console.log('subscription', val)
  updateLocalStorage(val)
})

export default taskListsStore
