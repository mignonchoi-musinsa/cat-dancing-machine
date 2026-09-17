import CatSVG from './CatSVG.jsx'

function DancingCat({ isPlaying, onToggle }) {
  return (
    <button
      type="button"
      className={`dancing-cat${isPlaying ? ' dancing-cat--playing' : ''}`}
      onClick={onToggle}
      aria-pressed={isPlaying}
      aria-label={isPlaying ? '고양이 춤 멈추기' : '고양이 춤 시작하기'}
    >
      <CatSVG className="dancing-cat__svg" />
    </button>
  )
}

export default DancingCat
