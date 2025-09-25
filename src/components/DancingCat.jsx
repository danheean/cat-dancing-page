import catSvg from '../assets/images/cat.svg'
import useAnimation from '../hooks/useAnimation'
import AnimationControls from './AnimationControls'
import '../styles/animations.css'

const DancingCat = () => {
  const {
    isDancing,
    animationSpeed,
    preferReducedMotion,
    toggleDancing,
    changeSpeed
  } = useAnimation()

  const animationStyle = {
    animationDuration: isDancing ? `${2 / animationSpeed}s, ${4 / animationSpeed}s, ${1.5 / animationSpeed}s` : 'initial'
  }

  return (
    <div className="dancing-cat-container">
      <div className="cat-stage">
        <img
          src={catSvg}
          alt="Dancing Cat"
          className={`dancing-cat ${isDancing ? 'dancing' : ''}`}
          style={animationStyle}
          onClick={toggleDancing}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              toggleDancing()
            }
          }}
          role="button"
          aria-label={`춤추는 고양이 - 현재 ${isDancing ? '춤추는 중' : '정지 상태'}`}
        />
      </div>

      <AnimationControls
        isDancing={isDancing}
        onToggle={toggleDancing}
        animationSpeed={animationSpeed}
        onSpeedChange={changeSpeed}
        preferReducedMotion={preferReducedMotion}
      />

      <div className="instructions">
        <p>🐱 고양이를 클릭하거나 컨트롤을 사용해서 춤을 제어할 수 있어요!</p>
      </div>
    </div>
  )
}

export default DancingCat