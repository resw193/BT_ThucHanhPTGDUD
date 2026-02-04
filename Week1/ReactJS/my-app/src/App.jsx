import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './Tuan01/components/Bai1/ProductCard'
import Button from './Tuan01/components/Bai2/Button'
import Alert from './Tuan01/components/Bai3/Alert'
import LoginForm from './Tuan01/components/Bai4/LoginForm'
import ProductList from './Tuan01/components/Bai5/ProductList'
import Header from './Tuan02/Components/Bai1/Header'
import StudentInfo from './Tuan02/Components/Bai1/StudentInfo'
import Footer from './Tuan02/Components/Bai1/Footer'
import CounterApp from './Tuan02/Components/Bai2/CounterApp'
import ControlledForm from './Tuan02/Components/Bai3/ControlledForm'
import StatusBadge from './Tuan02/Components/Bai4/StatusBadge'
import TodoApp from './Tuan02/Components/Bai5/ToDoApp'


function App() {
  // ======= Buổi 1 ======
  // Bài 3 - style theo state
  const [type, setType] = useState('success'); // trạng thái mặc định = success

  // Bài 4 - Login Form
  const [typeForm, setTypeForm] = useState('success');
  const [show, setShow] = useState(false);

  // Bài 5 - Product List
  const data = [
    { name: "Ipad", price: "120.000", image: "https://picsum.photos/200?1" },
    { name: "PC", price: "200.000", image: "https://picsum.photos/200?2" },
    { name: "Tablet12", price: "350.000", image: "https://picsum.photos/200?3" },
    { name: "PC2", price: "90.000", image: "https://picsum.photos/200?4" },
    { name: "Laptop", price: "150.000", image: "https://picsum.photos/200?5" },
    { name: "Monitor", price: "80.000", image: "https://picsum.photos/200?6" }
  ];


  // ====== Buổi 2 ======

  return (

    <div>

      {/* ====== Buổi 1 ======*/}
      {/* Bài 1 */}
      <div>
        <ProductCard></ProductCard>
      </div>

      {/* Bài 2 */}
      <div style={{ marginTop: '40px' }}>
        <Button type='primary' text='Primary Button'></Button>
        <Button type='danger' text='Danger Button'></Button>
        <Button type='success' text='Success Button'></Button>
      </div>

      {/* Bài 3 */}
      <div style={{ marginTop: '40px' }}>
        <Alert
          message="Thông báo"
          type={type}>
        </Alert>

        <button onClick={() => setType('success')}>Success</button>
        <button onClick={() => setType('warning')}>Warning</button>
        <button onClick={() => setType('error')}>Error</button>
      </div>

      {/* Bài 4 */}
      <div style={{ marginTop: '70px' }}>
        <LoginForm
          show={show}
          type={typeForm}
          onClose={() => setShow(false)}
        >
        </LoginForm>

        <button onClick={() => { setShow(true); setTypeForm('success') }}>Success Form</button>
        <button onClick={() => { setShow(true); setTypeForm('warning') }}>Warning Form</button>
        <button onClick={() => { setShow(true); setTypeForm('error') }}>Error Form</button>
      </div>

      {/* Bài 5 */}

      <div style={{ marginTop: '70px' }}>
        <ProductList
          product={data}
        ></ProductList>
      </div>




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
