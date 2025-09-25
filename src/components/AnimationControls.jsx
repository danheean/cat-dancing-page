const AnimationControls = ({
  isDancing,
  onToggle,
  animationSpeed,
  onSpeedChange,
  preferReducedMotion
}) => {
  const speeds = [
    { value: 0.5, label: '느리게 🐌', class: 'slow' },
    { value: 1, label: '보통 🐱', class: 'normal' },
    { value: 1.5, label: '빠르게 ⚡', class: 'fast' },
    { value: 2, label: '매우 빠르게 🚀', class: 'ultra-fast' }
  ]

  return (
    <div className="animation-controls">
      <div className="primary-controls">
        <button
          className={`dance-button ${isDancing ? 'stop' : 'start'}`}
          onClick={onToggle}
          aria-label={isDancing ? '춤 멈추기' : '춤 시작하기'}
          tabIndex={0}
        >
          {isDancing ? '춤 멈추기 🛑' : '춤 시작하기 💃'}
        </button>
      </div>

      {!preferReducedMotion && (
        <div className="speed-controls">
          <label className="speed-label">애니메이션 속도:</label>
          <div className="speed-buttons">
            {speeds.map((speed) => (
              <button
                key={speed.value}
                className={`speed-button ${speed.class} ${
                  animationSpeed === speed.value ? 'active' : ''
                }`}
                onClick={() => onSpeedChange(speed.value)}
                aria-label={`속도 ${speed.label}`}
                disabled={!isDancing}
              >
                {speed.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="keyboard-hints">
        <p>
          <kbd>스페이스바</kbd> 춤 시작/정지 | <kbd>ESC</kbd> 춤 멈추기
        </p>
      </div>

      {preferReducedMotion && (
        <div className="accessibility-notice">
          <p>⚠️ 모션 감소 설정이 활성화되어 있어 부드러운 애니메이션으로 표시됩니다.</p>
        </div>
      )}
    </div>
  )
}

export default AnimationControls