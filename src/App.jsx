import { useState } from 'react'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Join Ready Set Code!',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React fundamentals',
      completed: false,
    }
  ])

  console.log(todos)

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) =>
      todo.id !== todoId
    )
    setTodos(updatedTodos)
    console.log(todoId)
    console.log('deleteTodo function is called')
  }

  const addTodo = (todoTitle) => {
    // Tambahkan validasi jika ternyata tidak ada yang diketikkan sebagai title
    if (todoTitle === '') {
      return
    }

    // Buat data newTodo menggunakan nilai dari todoTitle
    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }

    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)
  }

  return (
    <div style={styles.container}>
    <h1 style={styles.header}>My Todo List</h1>
    {/* Teruskan function toggleCompleted ke component Todos */}
    <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
    <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
)
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px'
  },
  header: {
    fontSize: '36px'
  }
}

export default App