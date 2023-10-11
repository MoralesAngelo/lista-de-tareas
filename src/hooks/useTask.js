import  { useEffect, useState } from 'react'

export const useTask = () => {
    const [taskItems, setTaskItems] = useState([])

    useEffect(() => {
        let data = localStorage.getItem('task')
        if(data) {
          setTaskItems(JSON.parse(data))
        }
      }, [ ])

     
      useEffect(() => {
        localStorage.setItem('task', JSON.stringify(taskItems))
      }, [taskItems,])

    const addTask = (taskName) => {
        if (!taskItems.find((task) => task.name === taskName)){
          setTaskItems([...taskItems,{name: taskName, done: false}])
        }
      }

    const toggleTask = task => {
      setTaskItems (
        taskItems.map(t => (t.name === task.name) ? {...t, done: !t.done}: t)
      )
    }

  return {
    taskItems,
    addTask,
    toggleTask
  }
  
}
