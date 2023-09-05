import styled from 'styled-components'

import CartIcon from './icons/cart-icon'

const CartContainer = styled.div`
  position: relative;
`

const CountSpan = styled.span`
  position: absolute;
  right: -10px;
  top: 15px;
  width: 20px;
  height: 20px;
  background-color: var(--delete-color);
  border-radius: 50%;

  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  color: #fff;
`

export default function CartControl() {
  return (
    <CartContainer>
      <CartIcon />
      <CountSpan>2</CountSpan>
    </CartContainer>
  )
}