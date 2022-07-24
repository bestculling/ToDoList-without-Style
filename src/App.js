import React, { useState } from 'react'

import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'

import data from "./data.json"

function App() {
  const [toDoList, setToDoList] = useState(data)

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => (
      task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task }
    ))
    // อธิบาย mapped จะเปลี่ยนสถานะของ complete เป็นตรงข้ามโดยการนำ task.id มาเปรียบเทียบกับ id ที่รับเข้ามา หากตรงกันให้เปลี่ยนสถานะ complete เเต่ข้อมูลส่วนอื่นยังคงเดิม
    setToDoList(mapped)
  }

  const handleFilter = () => {
    let filter = toDoList.filter((task) => (
      task.complete === false
    ))
    // อธิบาย handleFilter เมื่อมีการเรียกใช้ function จะ return เฉพาะ object ที่ค่าของ complete เท่ากับ false
    // เหตุผลเพราะเราจะ filter เเค่ task ที่ยังไม่ได้ complete
    setToDoList(filter)
  }

    // เพิ่ม task จาก Component ToDoForm ลงใน toDoList
  const addTask = (task) => {
    let newTask = [...toDoList, {id: toDoList.length + 1, complete: false, task: task}]
    // อธิบาย newTask = [...toDoList คือ ToDoList เก่า, {
    // id: ความยาวของ array toDoList + 1 เพราะเราจะให้มันไปอยู่ตำเเหน่งสุดท้าย, complete: false, task: task คือ ความความที่เรารับเข้ามา
    // }]
    setToDoList(newTask)
  }

  return (
    <div className="App">
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>

    </div>
  )
}

export default App
