import styled from 'styled-components'

import theme from '@/components/_settings/theme'

export const Background = styled.footer`
  padding: 12rem 2rem 3rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  position: relative;
  background: linear-gradient(348deg, #f53955 90%, #144cdb 90%);

  @media (min-width: 768px) {
    background: linear-gradient(350deg, #f53955 85%, #144cdb 85%);
    padding: 12rem 4rem 3rem;
  }
  @media (min-width: 1024px) {
    background: linear-gradient(350deg, #f53955 75%, #144cdb 75%);
    padding: 12rem 6rem 3rem;
  }
  @media (min-width: 1280px) {
    background: linear-gradient(350deg, #f53955 70%, #144cdb 70%);
  }
  @media (min-width: 1366px) {
    background: linear-gradient(350deg, #f53955 67%, #144cdb 67%);
  }
`

export const Body = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 1024px) {
    gap: 4rem;
    flex-direction: row;
    padding-top: 2rem;

    .logo {
      display: none;
    }

    & > ul:nth-child(2) {
      width: 20%;
    }
  }

  @media (min-width: 1280px) {
    width: 70%;

    padding-top: 4rem;

    gap: 1rem;
    flex-direction: row;

    & > ul:nth-child(2) {
      width: 35%;
    }
  }

  @media (min-width: 1366px) {
    gap: 4rem;

    & > ul:nth-child(2) {
      width: 30%;
    }
  }

  @media (min-width: 1600px) {
    padding-top: 6rem;
  }

  ul {
    list-style: none;
  }

  & > ul {
    gap: 0.7rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.15rem;
    font-weight: 900;
    margin-bottom: 0.7rem;
  }

  h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
  }

  a {
    color: #fff;
    font-weight: 700;
  }

  address {
    font-style: normal;
    margin-bottom: 0.7rem;
    line-height: 1.2;
  }
`

export const SocialIcons = styled.ul`
  margin-top: 0.7rem;

  gap: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Copyright = styled.div`
  width: 90%;
  margin: 0 auto;
  font-size: ${theme.font.size[0]};
  text-align: center;
  font-weight: 700;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1280px) {
    gap: 0.5rem;

    div {
      display: none;
    }
  }

  div {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 2rem;
  }

  a {
    color: #fff;
    font-weight: 900;
  }
`
