import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
  id: string,
  name: string,
  url: string,
  className?: string,
  isSidebarOpen: boolean
  toggleSidebar(isSidebarOpen: boolean): void
}

const Navlink: React.FC<Props> = ({ id, name, url, toggleSidebar, isSidebarOpen, ...props }) => {
  return (
    <li id={id} onClick={() => toggleSidebar(isSidebarOpen)} {...props}>
      <Link href={url}>
        <a aria-label={name}>
          {name}
        </a>
      </Link>
    </li>
  )
}

export default Navlink
