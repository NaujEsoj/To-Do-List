let taskText = document.querySelector('#textInput')
const addNewTask = document.querySelector('#submit')
let tasksContainer = document.querySelector('#tasksContainer')
let tasks = []

const createTask = (element) => {
  const tasksList = document.createElement('ul')
  const taskItem = document.createElement('li')
  const taskSpan = document.createElement('span')
  const editButton = document.createElement('button')
  const eraseButton = document.createElement('button')
  editButton.textContent = 'Edit Task'
  eraseButton.textContent = 'Erase Task'
  taskSpan.textContent = element
  taskItem.appendChild(taskSpan)
  taskSpan.appendChild(editButton)
  taskSpan.appendChild(eraseButton)
  tasksList.appendChild(taskItem)
  tasksContainer.appendChild(tasksList)
  taskText.value = ''

  taskSpan.addEventListener('click', e => {
    if (e.target.matches('button')) {
      if (e.target.textContent === 'Edit Task') {
        e.target.parentNode.innerHTML = `<span>${ taskText.value }<button>Edit Task</button><button>Erase Task</button></span>`
        taskText.value = ''
      }else if (e.target.textContent === 'Erase Task') {
        console.log('erase');
        console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.remove()
      }
    }
})
}

addNewTask.addEventListener('click', () => {
    tasks = taskText.value
    createTask(tasks)
})

taskText.addEventListener ('keypress', e => {
  if (e.key === 'Enter') {
    tasks = taskText.value
    createTask(tasks)
  }
})



