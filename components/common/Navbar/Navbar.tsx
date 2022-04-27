import * as React from 'react'
import styled from 'styled-components'

// Data
import { navLinks } from '@data/navLinks.data'

// Hooks
import useUi from '@hooks/useUi'

// Components
import Navlink from '@components/common/Navlink'

type StyledProps = {
  isOpen: boolean
}

const NavbarStyled = styled.nav<StyledProps>`
  display: ${({ isOpen }) => isOpen ? 'grid' : 'none'};
  position: fixed;
  top: 64px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.primary};

  .navbar__list {
    display: grid;
    grid-auto-rows: max-content;
    gap: 15px;
    text-align: center;
    align-self: center;
  }

  .navbar__list__item {
    a {
      color: ${({ theme }) => theme.colors.secundaryLight};
    }
  }

  @media (min-width: 768px) {
    width: 100%;
    display: grid;
    position: static;
    background-color: transparent;
    z-index: 0;

    .navbar__list {
      grid-auto-flow: column;
      grid-auto-columns: max-content;
    }

    .navbar__list__item {
      a {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`

const Navbar: React.FC= () => {
  const { isSidebarOpen, toogleSidebar } = useUi()

  return (
    <NavbarStyled isOpen={isSidebarOpen}>
      <ul className="navbar__list">
        {navLinks.map((link) => {
          return (
            <Navlink
              key={link.id}
              id={link.id}
              name={link.name}
              url={link.url}
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toogleSidebar}
              className="navbar__list__item"
            />
          )
        })}
      </ul>
    </NavbarStyled>
  )
}

export default Navbar
