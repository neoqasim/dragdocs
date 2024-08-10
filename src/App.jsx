import Bg from "./components/Bg"
import Foreground from "./components/Foreground"

const App = () => {
  return (
    <>
      <div className="w-full h-screen bg-zinc-800">
        <Bg />
        <Foreground />
      </div>
    </>
  )
}

export default App