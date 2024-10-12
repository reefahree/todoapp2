// Menerima function toggleCompleted sebagai sebuah prop
const TodoItem = ({ todo, toggleCompleted }) => {
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: 'line-through' }
    } else {
      return { textDecoration: 'none' }
    }
  }

  // Hapus toggeleCompleted di sini

  return (
    <div style={styles.title}>
      <input
        type="checkbox"
        style={styles.checkbox}
        onChange={() => toggleCompleted(todo.id)} // Memberikan id dari todo sebagai argument
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
    </div>
  )
}

const styles = {
  title: {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
    // Tambahkan styles di bawah ini
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Tambahkan styles di bawah ini
  checkbox: {
    marginRight: '10px',
    height: '18px',
    width: '18px',
  },
}

export default TodoItem