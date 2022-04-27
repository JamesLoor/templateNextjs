import * as React from 'react'
import styled from 'styled-components'

import { Header, Footer } from '@components/common'

type Props = {
  children: React.ReactNode,
}

const LayoutStyles = styled.div`
`

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutStyles>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutStyles>
  )
}

export default Layout
