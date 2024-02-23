import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { Header } from "~/components/Header";
import Hero from "~/components/Hero";
import { api } from "~/trpc/server";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
