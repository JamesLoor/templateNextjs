import * as React from 'react'
import styled from 'styled-components'

// Config
import { Wrapper } from '@config/themeConfig'

// Components
import { Logo, Navbar } from '@components/common'

// Icons
import { Menu } from '@components/icons'

// Hooks
import useUi from '@hooks/useUi'

const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  box-shadow: 0px 4px 4px 0px #00000040;
  z-index: ${({ theme }) => theme.positions.header};
  background: ${({ theme }) => theme.colors.secundaryLight};

  .header__mainContainer {
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
  }

  .header__button {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    background: none;
  }

  @media (min-width: 768px) {
    .header__button {
      display: none;
    }
  }
`

const Header: React.FC = () => {
  const { isSidebarOpen, toogleSidebar } = useUi()
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="header__mainContainer">
          <Logo />
          <button onClick={() => toogleSidebar(isSidebarOpen)} className="header__button">
            <Menu />
          </button>
          <Navbar />
        </div>
      </Wrapper>
    </HeaderStyled>
  )
}

export default Header