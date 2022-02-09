import './Room.css'

export default function Room({
  text,
  description,
  isDescriptionVisible,
  isClean,
}) {
  const statusClassName = `Room__status Room__status--${
    isClean ? 'clean' : 'dirty'
  }`
  return (
    <section className="Room">
      <header className="Room__header">
        {text}
        <div className={statusClassName}></div>
      </header>
      {isDescriptionVisible && (
        <p className="Room__description">{description}</p>
      )}
    </section>
  )
}
