import DancingCat from './components/DancingCat.jsx'
import AnimationControls from './components/AnimationControls.jsx'
import useAnimation from './hooks/useAnimation.js'

function App() {
  const { isPlaying, autoStopped, toggle } = useAnimation()

  return (
    <main className="app">
      <h1 className="app__title">고양이가 춤춰요! 🐱</h1>
      <DancingCat isPlaying={isPlaying} onToggle={toggle} />
      <AnimationControls
        isPlaying={isPlaying}
        autoStopped={autoStopped}
        onToggle={toggle}
      />
    </main>
  )
}

export default App
