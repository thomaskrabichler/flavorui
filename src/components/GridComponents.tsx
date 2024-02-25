const components = [
  {
    title: "Tables",
    count: 9,
    img: "img table",
  },
  {
    title: "Layout Groups",
    count: 7,
    img: "img table",
  },
  {
    title: "Alerts",
    count: 6,
    img: "img table",
  },
  {
    title: "Avatar",
    count: 9,
    img: "img table",
  },
  {
    title: "Tables2",
    count: 9,
    img: "img table",
  },
  {
    title: "Tables3",
    count: 9,
    img: "img table",
  },
  {
    title: "Table4s",
    count: 9,
    img: "img table",
  },
  {
    title: "Table5s",
    count: 9,
    img: "img table",
  },
]

const overlayClass = "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center";
//wenn 2, dann zeige 4 + 2 hidden (show more)
//wenn 3, dann zeige 6 + 2 hidden (show more)
export default function GridComponents() {
  return (
    <div className="relative">
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        {components.map((component, index) => (


          <li
            key={component.title}
            className={`
              ${index >= 4 ? "hidden" : ""} 
              ${index >= 4 ? "sm:hidden" : "sm:block"} 
              ${index >= 6 ? "lg:hidden" : "lg:block"}
              ${index >= 8 ? "xl:hidden" : "xl:block"}
            `}
          >
            <div className="group relative cursor-pointer before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
              <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10"></div>
              <p className="pointer-events-none relative z-10 mt-2 block truncate text-sm font-medium text-gray-900 group-hover:text-blue-600">
                {component.title}
              </p>
              <p className="pointer-events-none relative z-10 block text-sm font-medium text-gray-500">
                {component.count} components
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
// export default function GridComponents() {
//   return (
//     <div className="relative">
//       <ul
//         role="list"
//         className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
//       >
//         {components.map((component) => (
//           <li key={component.title}>
//             <div className="group relative cursor-pointer before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
//               <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10"></div>
//               <p className="pointer-events-none relative z-10 mt-2 block truncate text-sm font-medium text-gray-900 group-hover:text-blue-600">
//                 {component.title}
//               </p>
//               <p className="pointer-events-none relative z-10 block text-sm font-medium text-gray-500">
//                 {component.count} components
//               </p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
