import { AxiosFetchData } from "./components/FetchData"

export default function App() {
  return (
    <>
    <div className=
    "flex flex-col w-full h-screen items-center text-white bg-[#352F44] p-12 "
    >
      <div className="flex flex-col mb-4 justify-center items-center">
        <h1 className="text-5xl">SPACE
          <span className="text-[#b9aed6] hover:cursor-pointer hover:text-6xl">X</span>
        </h1>
        <h1>LATEST LAUNCH DETAILS</h1>
      </div>
      <AxiosFetchData />
    </div>
    </>
  )
}

