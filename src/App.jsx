import { AxiosFetchData } from "./components/FetchData"

export default function App() {
  return (
    <>
    <div className=
    "flex flex-col w-full h-full items-center text-white bg-[#352F44] p-12 "
    >
      <h1 className="text-5xl">SPACE
        <span className="text-[#b9aed6] hover:cursor-pointer hover:text-6xl">X</span>
      </h1>
      <AxiosFetchData />
    </div>
    </>
  )
}

