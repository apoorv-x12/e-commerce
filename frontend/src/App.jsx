import Header from "./components/Header"
import Footer from "./components/Footer"
import {Container} from 'react-bootstrap'
import {Outlet} from "react-router-dom"

const App = () => {
  return (
    <>
      <Header/>
      <main className="py-4">
        <Container>
            <Outlet/>
        </Container>
      </main>
      <Footer/>
    </>
  )
}

export default App