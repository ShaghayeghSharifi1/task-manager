import { baseApi } from './baseApi';
import type {Task , NewTask} from '@/types/tasks'

export const tasksApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createTask: builder.mutation<Task, NewTask>({
            query: (newTask) => ({
                url: '/tasks',
                method: 'POST',
                body: newTask,
            }),
            invalidatesTags: [{ type: 'Tasks', id: 'LIST' }]
        }),
        getAllTasks: builder.query<Task[], { page?: number; limit?: number }>({
            query: ({ page = 1, limit = 50 }) => `/tasks?page=${page}&limit=${limit}`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Tasks' as const, id })),
                        { type: 'Tasks', id: 'LIST' }
                        ]
                    : [{ type: 'Tasks', id: 'LIST' }],
        }),
        getTask: builder.query<Task, string>({
            query: (id) => `/tasks/${id}`,
            providesTags: (result, _error, id) =>
                result ? [{ type: 'Tasks', id }] : [] ,
        }),
        updateTask: builder.mutation<Task, { id: string; body: NewTask}>({
            query: ({ id, ...body }) => ({
                url: `/tasks/${id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: (_result, _error, { id }) => [{ type: 'Tasks', id }],
        }),
        deleteTask: builder.mutation<{ success: boolean; id: string }, string>({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (_result, _error, id) => [{ type: 'Tasks', id }]
        }),
    }),
});

export const {
    useCreateTaskMutation,
    useDeleteTaskMutation,
    useGetAllTasksQuery,
    useGetTaskQuery,
    useUpdateTaskMutation,
} = tasksApi;
