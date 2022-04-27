import * as React from 'react'
import styled from 'styled-components'

const LoaderStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loader: React.FC = () => {
  return (
    <LoaderStyled>
      <h1>Cargando</h1>
    </LoaderStyled>
  )
}

export default Loader
