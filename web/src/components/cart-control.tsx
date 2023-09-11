import styled from 'styled-components'

import CartIcon from './icons/cart-icon'
import useLocalStorage from '@/hooks/use-localStorage'

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
  const { value } = useLocalStorage('cart-items', [])

  return (
    <CartContainer>
      <CartIcon />
      <CountSpan>{value?.length}</CountSpan>
    </CartContainer>
  )
}