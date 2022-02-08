import './Room.css'

export default function Room({ text, isClean }) {
  const statusClassName = `Room__status Room__status--${
    isClean ? 'clean' : 'dirty'
  }`
  return (
    <section className="Room">
      {text} <div className={statusClassName}></div>
    </section>
  )
}
