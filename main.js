const addNewTask = document.querySelector('#submit')
const taskText = document.querySelector('#textInput')
const tasksContainer = document.querySelector('#tasksContainer')
const taskObject = {
  taskId: 0,
  taskName: null
}

tasksContainer.textContent = '*no tasks to display'

let taskCounter = 0
let tasksArray = []

const createTask = () => {
  if (taskText) {
    let task = Object.create(taskObject)
    let taskContentValue = taskText.value
    task.taskId = taskCounter
    task.taskName = taskContentValue
    taskCounter++
    tasksArray.push(task)
    console.log(tasksArray)
  }
}
const displayTasks = array => {
  const taskFragment = document.createDocumentFragment()
  const taskList = document.createElement('ul')
  array.forEach(elem => {
    const taskLi = document.createElement('li')
    const taskSpan = document.createElement('span')
    const editButton = document.createElement('button')
    const eraseButton = document.createElement('button')
    const taskComplete = document.createElement('button')
    editButton.textContent = 'Edit Task'
    eraseButton.textContent = 'Erase Task'
    taskComplete.textContent = 'Task complete!'
    taskComplete.setAttribute('class', 'button-54')
    editButton.setAttribute('class', 'button-54')
    eraseButton.setAttribute('class', 'button-54')
    taskSpan.setAttribute('id', elem.taskId)
    taskSpan.textContent = elem.taskName
    taskLi.appendChild(taskSpan)
    taskLi.appendChild(taskComplete)
    taskLi.appendChild(editButton)
    taskLi.appendChild(eraseButton)
    taskFragment.appendChild(taskLi)
  })
  taskList.appendChild(taskFragment)
  tasksContainer.appendChild(taskList)
  taskText.value = ''
}

tasksContainer.addEventListener('click', e => {
    if (e.target.matches('button')) {
      let text = e.target.previousSibling
      if (e.target.textContent === 'Task complete!' && text.className === '' ) {
        text.classList.add('strokeText')
      } else if (e.target.textContent === 'Task complete!' && text.className === 'strokeText') {
        text.classList.remove('strokeText')
      } else if (e.target.textContent === 'Edit Task') {
          const spanId = text.previousSibling.id
          tasksArray[spanId].taskName = taskText.value
          text.previousSibling.textContent = taskText.value
          taskText.value = ''
      } else if (e.target.textContent === 'Erase Task') {
          const taskSpanId = text.previousSibling.previousSibling.id
          const filteredArray = tasksArray.filter(task => task.taskId !== parseInt(taskSpanId))
          tasksArray = filteredArray
          tasksContainer.textContent = ''
          displayTasks(tasksArray)
      }
    }
})

addNewTask.addEventListener('click', () => {
  tasksContainer.textContent = ''
  createTask()
  displayTasks(tasksArray)
})

taskText.addEventListener ('keypress', e => {
  if (e.key === 'Enter') {
    tasksContainer.textContent = ''
    createTask()
    displayTasks(tasksArray)
  }
})



