export default function App() {
  return (
    <>
    <div className=
    "flex flex-col w-screen h-screen justify-center items-center text-white bg-[#352F44]"
    >
      <p className="text-9xl mb-6 animate-spin">8</p>
      <h1 className="text-5xl">K
        <span className="text-[#b9aed6] hover:cursor-pointer hover:text-6xl">KORYA</span>
        X</h1>
      <h2 className="text-2xl text-w font-bold w-50 mb-4">React App Starter</h2>
      <div className="flex flex-col text-white justify-center items-center w-50">
        <h2 className="font-semibold">Tech Stack</h2>
        <ul className="flex flex-col justify-center items-center">
          <li>Vite</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>Tailwind</li>
        </ul>
      </div>
    </div>
    </>
  )
}

