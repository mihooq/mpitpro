import { createContext } from "react"

interface Task {
  name: string
  description: string
  price: number
  status: string
  visible: boolean
}

interface User {
  id: number
  firstname: string
  lastname: string
  email: string
  balance: number
  tasks: Task[]
}
export interface Data {
  data?: User
}

export const userContext = createContext<Data>({ data: {
  id: 1,
  firstname: 'Igor',
  lastname: 'Igorevich',
  email: 'igor@yandex.ru',
  balance: 18,
  tasks: [
    {
      name: 'task1',
      description: 'just a first task',
      price: 10,
      status: 'in_process',
      visible: true
    },
    {
      name: 'task2',
      description: 'just a second task',
      price: 15,
      status: 'in_process',
      visible: true
    },
    {
      name: 'task3',
      description: 'just a third task',
      price: 20,
      status: 'in_process',
      visible: true
    }
  ]
}})