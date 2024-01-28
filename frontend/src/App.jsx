import Header from "./components/Header"
import Footer from "./components/Footer"
import {Container} from 'react-bootstrap'

const App = () => {
  return (
    <>
      <Header/>
      <main className="py-4">
        <Container>
             <h1 className="text-center">Welcome to Ecom</h1>
        </Container>
      </main>
      <Footer/>
    </>
  )
}

export default App