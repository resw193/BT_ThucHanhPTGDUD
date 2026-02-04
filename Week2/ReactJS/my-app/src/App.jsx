import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Tuan02/Components/Bai1/Header'
import StudentInfo from './Tuan02/Components/Bai1/StudentInfo'
import Footer from './Tuan02/Components/Bai1/Footer'
import CounterApp from './Tuan02/Components/Bai2/CounterApp'
import ControlledForm from './Tuan02/Components/Bai3/ControlledForm'
import StatusBadge from './Tuan02/Components/Bai4/StatusBadge'
import TodoApp from './Tuan02/Components/Bai5/ToDoApp'


function App() {
  return (
    <div>
      {/* ====== Buổi 2 ======*/}
      {/* Bài 1 */}
      <div style={{ marginTop: '70px' }}>
        <Header></Header>
        <StudentInfo hoTen='Nguyễn Bảo Định' mssv='23731621' lop='DHKTPM19B'></StudentInfo>
        <Footer></Footer>
      </div>

      {/* Bài 2 */}
      <div style={{ marginTop: '70px' }}>
        <CounterApp></CounterApp>
      </div>

      {/* Bài 3 */}
      <div style={{ marginTop: '70px' }}>
        <ControlledForm></ControlledForm>
      </div>

      {/* Bài 4 */}
      <div style={{ marginTop: '70px' }}>
        <StatusBadge trangThai='offline'></StatusBadge>
      </div>

      {/* Bài 5 */}
      <div style={{ marginTop: '70px' }}>
        <TodoApp></TodoApp>
      </div>

    </div>

  )
}

export default App
