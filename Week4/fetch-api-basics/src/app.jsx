import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import FetchApiBasic from './components/FetchApiBasic'
import FetchLoadingError from './components/FetchLoadingError'

export function App() {

  return (
    <>
      {/* Bài 1 */}
      <div style={{ marginTop: '40px' }}>
        <FetchApiBasic></FetchApiBasic>
      </div>

      {/* Bài 2 */}
      <div style={{ marginTop: '80px' }}>
        <FetchLoadingError></FetchLoadingError>
      </div>

      {/* Bài 3 */}
      <div style={{ marginTop: '80px' }}>

      </div>

      {/* Bài 4 */}
      <div style={{ marginTop: '80px' }}>
        
      </div>

      {/* Bài 5 */}
      <div style={{ marginTop: '80px' }}>
        
      </div>
    </>
  )
}
