import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from "./components";

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat"></div>
        <Navbar />
        <Hero />
      </div>
    </BrowserRouter>
  )
}

export default App
