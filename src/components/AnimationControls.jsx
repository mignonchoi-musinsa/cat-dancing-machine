function AnimationControls({ isPlaying, autoStopped, onToggle }) {
  const hint = isPlaying
    ? '5분 후 자동으로 멈춰요'
    : autoStopped
      ? '5분이 지나 자동으로 멈췄어요. 다시 눌러보세요!'
      : '클릭하거나 고양이를 눌러보세요'

  return (
    <div className="animation-controls">
      <button
        type="button"
        className="animation-controls__button"
        onClick={onToggle}
        aria-pressed={isPlaying}
      >
        {isPlaying ? '⏸ 정지' : '▶ 시작'}
      </button>
      <p className="animation-controls__hint" role="status">
        {hint}
      </p>
    </div>
  )
}

export default AnimationControls
