import './styles/global.css'
import DancingCat from './components/DancingCat'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>고양이 댄싱 페이지</h1>
        <p>귀여운 고양이의 춤을 감상해보세요! 🐱</p>
      </header>

      <main className="main">
        <DancingCat />
      </main>
    </div>
  )
}

export default App
