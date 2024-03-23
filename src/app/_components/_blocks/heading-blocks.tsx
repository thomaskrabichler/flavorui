import Breadcrumbs from "../breadcrumbs"
import { Container } from "../container"

const pages = [
  { name: 'Blocks', href: '/blocks', current: true },
];


export default function HeadingBlocks() {
  return (

    <Container className="pt-20">
      <Breadcrumbs pages={pages} />
      <br />
      <h1 className="mb-2 text-3xl font-extrabold">
        Flavor Blocks - Flutter UI components
      </h1>
      <p className="mb-6 max-w-2xl text-lg text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      </p>
    </Container>
  )
}
