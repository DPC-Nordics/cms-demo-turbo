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

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl"
          href={homeNav.navigateTo}
        >
          {homeNav.label}
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {items.map((item) => {
            return (
              <li key={item.navigateTo}>
                <a href={item.navigateTo}>{item.label}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
