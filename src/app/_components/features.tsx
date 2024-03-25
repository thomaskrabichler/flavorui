import {
  ClipboardDocumentIcon,
  ArrowsPointingOutIcon,
  Square3Stack3DIcon
} from "@heroicons/react/24/outline";
import { Container } from "./container";

const features = [
  {
    name: "400+ Components & Blocks",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: Square3Stack3DIcon,
  },
  {
    name: "Customizable",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: ClipboardDocumentIcon,
  },
  {
    name: "Fully responsive",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowsPointingOutIcon,
  },
];

export default function Features() {
  return (
    <Container>
      <div className="mx-auto mt-20 lg:mt-28 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-screen-2xl lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.name} className="flex">
            <div>
              <div className="rounded-lg bg-blue-700/[.2] p-2">
                <feature.icon
                  className="h-6 w-6 text-blue-700"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="ml-6">
              <h2 className="text-sm font-semibold leading-6 text-slate-900">
                {feature.name}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {feature.description}
              </p>
            </div>
          </div>
        ))}

        {/* <div className="flex">
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
          </div> */}
      </div>
    </Container>
  );
}
