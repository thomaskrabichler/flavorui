"use client";
import { Container } from "./Container";

export function CodeDemo() {
  return (
    <section
      id="code-demo"
      aria-label="Demo for copy and pasting a block."
      className="relative overflow-hidden pb-28 pt-24 sm:py-32"
    >
      <div className=""></div>
      <Container className="relative">
        <div className="mx-auto mb-12 text-center">
          <h2 className="text-3xl font-extrabold  ">Simply copy and paste.</h2>
          <p className="mt-2 px-14 text-lg">
            Copy and paste the components and blocks you want.
          </p>
        </div>
        <div className="lg:max-w-none mx-auto max-w-2xl flex justify-between  bg-slate-200">
          <p className="text-base font-semibold">Sign-in Block</p>
          <p className="text-base font-semibold">Sign-in Block</p>
          {/* <p>Sign-in Block</p> */}
        </div>
        <div className="lg:max-w-none mx-auto max-w-2xl lg:flex justify-between">

          <div className="lg:w-2/3 h-100 rounded-xl bg-slate-900"></div>
          <div className="bg-blue-300 lg:w-1/3">
            <p className="text-center">Preview</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
