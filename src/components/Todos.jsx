import TodoItem from './TodoItem'

// Menerima function toggleCompleted sebagai sebuah prop
const Todos = ({todos, toggleCompleted, deleteTodo}) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        // Teruskan function toggleCompleted ke component TodoItem
        return <TodoItem key={todo.id} todo={todo} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
      })}
    </div>
  )
}

const styles = {
  container: {
    width: '40%',
    margin: '0 auto'
  },
}

export default Todos