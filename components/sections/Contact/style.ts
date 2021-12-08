import styled from 'styled-components'

export const Background = styled.section`
  padding: 0 2rem;

  gap: 3rem;
  display: flex;
  flex-direction: column;

  border: none;
  border: 2px solid #144cdb;
  background: #144cdb;

  @media (min-width: 768px) {
    padding: 0 4rem;
  }
  @media (min-width: 1024px) {
    padding: 0 6rem;
  }
`

export const Heading = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;

  h2 {
    font: 400 min(calc(1.475rem + 2.7vw), 3.5rem) / 1.1 'BoldenVan', sans-serif;
    letter-spacing: 1.5px;

    span {
      color: #fcd700;
    }
  }
  p {
    font-weight: 700;
  }
  @media (min-width: 1024px) {
    width: 90%;
  }
  @media (min-width: 1280px) {
    width: 70%;
  }
`

export const Form = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 1280px) {
    width: 40%;
  }
`

export const Checkbox = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  label {
    line-height: 1.2;
  }
`
