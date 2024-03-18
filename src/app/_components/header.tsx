"use client"

import { Fragment} from "react"
import Link from "next/link"
import { Popover, Transition } from "@headlessui/react"
import clsx from "clsx"
import { Container } from "./container"
import { Logo } from "./logo"
import { NavLink } from "./nav-link"
import { Button } from "./button"
import { createClient } from "~/lib/supabase/client"

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0",
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0",
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="ui-not-focus-visible:outline-none relative z-10 flex h-8 w-8 items-center justify-center"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/login">Sign in</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  const isLoggedIn = true
  const handleLogout = async () => {
    const supabaseClient = createClient()
    await supabaseClient.auth.signOut()
  }
  return (
    <header className="pt-10">
      <Container>
        <nav className="relative z-50 flex items-center justify-between">
          {/* Logo*/}
          <div className="flex justify-start">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>

          {/* Navigation links */}
          <div className="hidden flex-grow items-center justify-center gap-x-6 text-sm font-semibold md:flex">
            <NavLink href="/components">Components</NavLink>
            <NavLink href="/blocks">Blocks</NavLink>
            <NavLink href="/templates">Templates</NavLink>
            {/* <NavLink href="#demo">Demo</NavLink> */}
          </div>

          {/* Sign in/Register container */}
          <div className="flex items-center justify-end gap-x-5 md:gap-x-8">
            {!isLoggedIn ? (
              <>
                <div className="hidden text-sm font-semibold md:block">
                  <NavLink href="/login">Sign in</NavLink>
                </div>
                <Button href="/register" color="slate">
                  Get all-access
                </Button>
              </>
            ) : (
              <Button onClick={handleLogout} color="slate">
                Logout
              </Button>
            )}
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
