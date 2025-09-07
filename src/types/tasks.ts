export type TaskStatus = 'backlog' | 'todo' | 'inprogress' | 'done'

export interface Task {
  id: string
  title: string
  description: string
  image: string
  status?: TaskStatus 
}

export interface NewTask {
  title: string
  description: string
  status?: TaskStatus
}