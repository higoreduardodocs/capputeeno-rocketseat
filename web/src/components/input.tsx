import styled from 'styled-components'

import SearchIcon from './icons/search-icon'

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  width: 352px;

  > svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`
const InputField = styled.input`
  padding: 10px 16px;
  background-color: var(--bg-secondary);
  border: none;
  border-radius: 8px;
  width: 100%;

  &::placeholder {
    color: var(--text-dark);
  }
`

export default function Input() {
  return (
    <InputContainer>
      <InputField placeholder="Procurando por algo específico?" />
      <SearchIcon />
    </InputContainer>
  )
}