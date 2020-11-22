import { LOCAL_STORAGE_KEY } from './constants'

const saveToLocalStorage = (key: string) => (value: Object) => {
  console.log('Saving', Math.random(), value)
  localStorage.setItem(key, JSON.stringify(value))
}

export const updateLocalStorage = saveToLocalStorage(LOCAL_STORAGE_KEY)

export const getFromLocalStorage = (key: string = LOCAL_STORAGE_KEY) => {
  const retrieved = JSON.parse(localStorage.getItem(key))
  console.log('Retrieved', retrieved)
  return retrieved
}
