import Link from 'next/link'
import { HTMLAttributeAnchorTarget, MouseEventHandler, ReactNode } from 'react'

import { StyledLinkButton, StyledSubmitButton, Wrapper } from './style'

export type Colors =
  | 'blue'
  | 'orange'
  | 'whiteGreen'
  | 'whiteYellow'
  | 'whiteOrange'

type SubmitButtonProps = {
  color: Colors
  onClick?: MouseEventHandler<HTMLButtonElement>
  block?: boolean
  children: ReactNode
}

type LinkButtonProps = {
  href: string
  color: Colors
  block?: boolean
  target?: HTMLAttributeAnchorTarget
  children: ReactNode
}

export const LinkButton = ({
  href,
  color,
  block = false,
  target = '',
  children,
}: LinkButtonProps) => (
  <Wrapper>
    <Link href={href} passHref>
      <StyledLinkButton
        target={target}
        rel="noreferrer"
        color={color}
        block={block}
      >
        {children}
      </StyledLinkButton>
    </Link>
  </Wrapper>
)

export const SubmitButton = ({
  onClick,
  color,
  block = false,
  children,
}: SubmitButtonProps) => (
  <Wrapper>
    <StyledSubmitButton
      block={block}
      onClick={onClick}
      color={color}
      type="submit"
      className="button button-orange"
    >
      {children}
    </StyledSubmitButton>
  </Wrapper>
)
