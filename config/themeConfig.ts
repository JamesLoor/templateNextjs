import styled from "styled-components";

export const defaultTheme = {
  colors: {
    primary: '#000000',
    secundaryLight: '#ffffff',
    secundaryDark: '#888888',
    black: '#000000',
    accent: '#000000',
    paragraph: '#5F5F5F',
    stroke: '#333333',
    shadow: '',
  },
  positions: {
    header: 1000,
    navbar: 900,
    controllers: 600,
    image: 500,
  }
}

export const Wrapper = styled.div`
  padding: 0 3%;
`

export const H2 = styled.h2`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secundaryDark};
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 1024px) {
    font-size: 40px;
  }
`

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.paragraph};
  line-height: 22px;
`