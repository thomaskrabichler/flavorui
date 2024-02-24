import { Container } from "./Container";

export default function Hero() {
  return (
    <div className="">
      {/* <svg */}
      {/*   className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" */}
      {/*   aria-hidden="true" */}
      {/* > */}
      {/*   <defs> */}
      {/*     <pattern */}
      {/*       id="0787a7c5-978c-4f66-83c7-11c213f99cb7" */}
      {/*       width={200} */}
      {/*       height={200} */}
      {/*       x="50%" */}
      {/*       y={-1} */}
      {/*       patternUnits="userSpaceOnUse" */}
      {/*     > */}
      {/*       <path d="M.5 200V.5H200" fill="none" /> */}
      {/*     </pattern> */}
      {/*   </defs> */}
      {/*   <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" /> */}
      {/* </svg>  */}
      <Container className="pb-24 pt-16 sm:pb-32 lg:flex lg:pb-0">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:mt-24 lg:flex-shrink-0">
          <h1 className="text-4xl font-extrabold  text-gray-900 sm:text-7xl">
            Build <span className="text-blue-600">Flutter</span> apps even
            faster with Flavor UI.
          </h1>
          <p className="mt-6 w-auto text-lg leading-8 text-gray-600">
            Move faster with beautiful, responsive UI components, blocks and
            templates hand crafted in modern design.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span>Browse Components</span>
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Explore Blocks <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        {/* Screenshot */}
        {/* <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"> */}
        {/*   <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none"> */}
        {/*     <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"> */}
        {/*       <img */}
        {/*         src="https://tailwindui.com/img/component-images/project-app-screenshot.png" */}
        {/*         alt="App screenshot" */}
        {/*         width={2432} */}
        {/*         height={1442} */}
        {/*         className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10" */}
        {/*       /> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* </div> */}
      </Container>
      <Container>
        <div className="mx-auto mt-28 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-screen-2xl lg:grid-cols-3">
          <div className="flex">
            <div className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7 text-blue-600" 
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                />
              </svg>
            </div>
            <div className="ml-6">
              <h2 className="text-sm font-semibold leading-6 text-slate-900">
                +400 Components & Blocks
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Beautifully designed, expertly crafted components that follow
                all accessibility best practices and are easy to customize.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="p-2">icon</div>
            <div className="ml-6">
              <h2 className="text-sm font-semibold leading-6 text-slate-900">
                +400 Components & Blocks
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Beautifully designed, expertly crafted components that follow
                all accessibility best practices and are easy to customize.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="p-2">icon</div>
            <div className="ml-6">
              <h2 className="text-sm font-semibold leading-6 text-slate-900">
                +400 Components & Blocks
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Beautifully designed, expertly crafted components that follow
                all accessibility best practices and are easy to customize.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
