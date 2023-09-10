/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'

interface CardProps {
  image: string;
  title: string;
  price: number;
}

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 8px;
  overflow: hidden;

  > img {
    width: 100%;
    object-fit: cover;
    height: 300px;
    border-radius: 8px;
  }

  > div {
    padding: 8px 12px;

    > h3 {
      font-size: 16px;
      font-weight: 300;
      line-height: 24px;
      letter-spacing: 0;
      color: var(--text-dark);
    }

    > span {
      font-size: 14px;
      font-weight: 600;
      line-height: 21px;
      letter-spacing: 0;
      color: var(--text-black);
    }
  }
`

export default function ProductCard(props: CardProps) {
  return (
    <CardContainer>
      <img src={props.image} title={props.title} />
      <div>
        <h3>{props.title}</h3>
        <span>{props.price}</span>
      </div>
    </CardContainer>
  )
}