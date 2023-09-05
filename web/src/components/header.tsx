'use client'

import styled from 'styled-components'
import { Saira_Stencil_One } from 'next/font/google'

import Input from './input'
import CartControl from './cart-control'

const sairaStencilOne = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
})

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
  background-color: #fff;

  > div {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`
const Logo = styled.a`
  font-size: 40px;
  font-weight: 400;
  line-height: 150%;
  color: var(--logo-color);
  cursor: pointer;
`

export default function Header() {
  return (
    <TagHeader>
      <Logo className={sairaStencilOne.className}>Capputeeno</Logo>
      <div>
        <Input />
        <CartControl />
      </div>
    </TagHeader>
  )
}
