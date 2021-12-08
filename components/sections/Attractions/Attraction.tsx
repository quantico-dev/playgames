import Image from 'next/image'
import styled from 'styled-components'

type AttractionProps = {
  imageWhite: string | StaticImageData
  imageOrange: string | StaticImageData
  name: string
}

const Attraction = ({ imageWhite, imageOrange, name }: AttractionProps) => (
  <StyledAttraction>
    <div>
      <Image src={imageWhite} alt="" />
    </div>
    <div>
      <Image src={imageOrange} alt="" />
    </div>
    <h3>{name}</h3>
  </StyledAttraction>
)

const StyledAttraction = styled.li`
  width: 100%;

  text-align: center;
  margin-bottom: 3%;
  border: 2px solid #fff;
  border-radius: 30px 30px 0 30px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  transition: all 300ms;

  @media (min-width: 768px) {
    width: calc(90% / 3);
  }

  @media (min-width: 1024px) {
    width: calc(90% / 4);
  }

  img {
    max-height: 70px;
  }

  & > div {
    &:first-child {
      display: inline;
    }
    &:nth-child(2) {
      display: none;
    }
  }

  &:hover {
    cursor: pointer;
    background-color: #fff;
    border-color: #ff8800;
    color: #ff8800;

    & > div {
      &:first-child {
        display: none;
      }
      &:nth-child(2) {
        display: inline;
      }
    }
  }
`

export default Attraction
