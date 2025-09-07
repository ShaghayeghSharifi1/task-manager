import '@/styles/App.css'
import { useGetAllTasksQuery } from '@/store/api/tasksApi';

function App() {
  const { data: tasks, error, isLoading } = useGetAllTasksQuery({ page: 1, limit: 10 });

  if (isLoading) return <div>Loading tasks...</div>;
  if (error) return <div>Error fetching tasks: {JSON.stringify(error)}</div>;
  
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks?.map((task) => (
        <div key={task.id} className="p-4 border rounded shadow">
          <h3 className="font-bold">{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  )
}

export default App
