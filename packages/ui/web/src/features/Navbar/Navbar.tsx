import clsx from 'clsx'
import { useState } from 'react'

export interface INavbarProps {
  homeNav: {
    label: string
    navigateTo: string
  }
  items: Array<{
    label: string
    navigateTo: string
  }>
}

export const Navbar = (props: INavbarProps) => {
  const { homeNav, items } = props
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuClick = () => {
    setIsOpen((prev) => !prev)
  }

  let menuClassNames = clsx(
    isOpen ? 'block' : 'hidden',
    'w-full',
    'md:flex',
    'md:items-center',
    'md:w-auto',
  )

  return (
    <header>
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
      >
        <div>
          <a
            className="normal-case text-xl text-white hover:underline"
            href={homeNav.navigateTo}
          >
            🚀
          </a>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={handleMenuClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className={menuClassNames}
          id="menu"
        >
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            {items.map((item) => {
              return (
                <li key={item.navigateTo}>
                  <a
                    className="md:p-4 py-2 block hover:text-purple-400"
                    href={item.navigateTo}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}
