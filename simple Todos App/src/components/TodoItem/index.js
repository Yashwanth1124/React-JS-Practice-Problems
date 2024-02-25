// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoList, deleteTodoItem} = props
  const {title, id} = todoList

  const onDelteBtn = () => {
    deleteTodoItem(id)
  }

  return (
    <li className="list-item">
      <p className="item-description">{title}</p>
      <button type="button" className="button" onClick={onDelteBtn}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
