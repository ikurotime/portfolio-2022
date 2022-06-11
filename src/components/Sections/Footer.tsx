export default function Footer() {

  const date: Date = new Date()
  return (
    <footer className='grid grid-cols-1 gap-3 py-6 h-30 bg-slate-100 dark:bg-slate-800 place-content-end place-items-center'>
      <p className="font-bold">davidhuertas.dev | {date.getFullYear()}</p>
      <div>
        Made with ❤️ by
        <a href='https://www.github.com/ikurotime' target='_blank'>
          {' '}
          David Huertas
        </a>
      </div>
    </footer>
  )
}
