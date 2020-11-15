export interface ITask {
  id: string,
  name: string
  completed: boolean
}

export interface ITaskList {
  id: string,
  name: string
  tasks: ITask[]
}