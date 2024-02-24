import { unstable_noStore as noStore } from "next/cache";

import { Header } from "~/components/Header";
import Hero from "~/components/Hero";

export default async function Home() {
  noStore();

  return (
    <>
      <Header />
      <main>
      <Hero />
      </main>
    </>
  );
}
