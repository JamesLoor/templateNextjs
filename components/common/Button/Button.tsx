import * as React from 'react'
import styled from 'styled-components'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  className?: string
  variant?: 'flat' | 'slim' | 'ghost' | 'naked'
  active?: boolean
  type?: 'submit' | 'reset' | 'button'
  width?: string | number
  loading?: boolean
  disabled?: boolean,
  onClick: () => void
}

const ButtonStyled = styled.button<ButtonProps>`
  font-size: 18px;
  font-weight: 500;
  padding: 12px 30px;
  outline: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secundaryLight};
  width: ${({ width }) => width ? `${width}px` : 'max-content'};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: background-color .2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secundaryDark};
  }
`

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  className,
  active,
  type,
  width,
  loading,
  disabled,
  onClick,
}) => {
  return (
    <ButtonStyled
      aria-pressed={active}
      className={className}
      disabled={disabled}
      width={width}
      type={type}
      loading={loading}
      href={href}
      onClick={onClick}
    >
      {children}
      {loading &&
        <span>Cargando</span>
      }
    </ButtonStyled>
  )
}

export default Button
