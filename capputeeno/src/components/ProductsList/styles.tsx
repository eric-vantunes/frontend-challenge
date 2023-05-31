import { styled } from "styled-components"

export const Card = styled.div`
  width: 256px;
  display: flex;
  background: rgba(255, 255, 255, 0.4);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  border-radius: 0px 0px 4px 4px;
  backdrop-filter: blur(10px);

  img {
    width: 256px;
    height: 300px;
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-strong);
  }

  p{
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
  }

  div {
    display: flex;
    justify-content: start;
    flex-direction: column;
    padding: 8px 0;

      > div {
      width: 228px;
      height: 1px;
      margin: 8px 0;
      padding: 0px;
      background: var(--shapes);
    } 
  }
`

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 32px;
  max-width: 100%;

  margin-top: 32px;
`