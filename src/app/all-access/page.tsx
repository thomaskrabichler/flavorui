import Link from "next/link"
import { Header } from "../_components/header"
import Footer from "../_components/footer"
import { Container } from "../_components/container"

export default function AllAccess() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>All Access</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}
