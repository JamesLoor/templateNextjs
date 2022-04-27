import * as React from 'react'
import styled from 'styled-components'

// Data
import { homeData } from '@data/home.data'

// Components
import { Button, Section } from '@components/common'

const HomeStyled = styled.div`
  .hero {
    width: 100%;
    height: 100vh;
    display: grid;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};

    .hero__content {
      display: grid;
      gap: 15px;
    }

    .hero__title {
      font-size: 32px;
      color: ${({ theme }) => theme.colors.secundaryLight};
    }

    .hero__description {
      max-width: 500px;
      color: ${({ theme }) => theme.colors.secundaryDark};
    }

    @media (min-width: 768px) {
      .hero__title {
        font-size: 45px;
      }

      .hero__description {
        font-size: 20px;
      }
    }

    @media (min-width: 1024px) {
      .hero__title {
        font-size: 60px;
      }
    }
  }
  `

const Home: React.FC = () => {
  return (
    <HomeStyled>
      <Section className="hero">
        <div className="hero__content">
          <h2 className='hero__title'>{homeData.hero.headline}</h2>
          <p className='hero__description'>{homeData.hero.description}</p>
        </div>
      </Section>
    </HomeStyled>
  )
}

export default Home