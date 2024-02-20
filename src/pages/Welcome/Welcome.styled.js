import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';
import start1xDesktop from '../../images/welcomePage/start-desc@1x.jpg';
import start2xDesktop from '../../images/welcomePage/start-desc@2x.jpg';
import start1xTablet from '../../images/welcomePage/start-tabl@1x.jpg';
import start2xTablet from '../../images/welcomePage/start-tabl@2x.jpg';
import start1xMobile from '../../images/welcomePage/start-mob@1x.jpg';
import start2xMobile from '../../images/welcomePage/start-mob@2x.jpg';
import welcome1x from '../../images/welcomePage/bg-welcome-desc@1x.jpg';
import welcome2x from '../../images/welcomePage/bg-welcome-desc@2x.jpg';

export const WelcomePageWrapper = styled.div`
  color: ${(props) => props.theme.startPageTxtColor};
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  font-family: 'Manrope', sans-serif;

  @media (max-width: 768px) {
    background-position: center;
    background-image: url(${start1xMobile});
    @supports (-webkit-image-set: url()) {
      background-image: -webkit-image-set(
        url(${start1xMobile}) 1x,
        url(${start2xMobile}) 2x
      );
    }
    background-position: center;
    & section {
      width: 335px;
      margin: auto auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: column;
    }

    & div:first-of-type {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: column;
    }
    & h2 {
      display: flex;
      flex-wrap: wrap;
      font-weight: 600;
      font-size: 28px;
      line-height: 1.14;
      letter-spacing: -0.02em;
      padding-bottom: 14px;
      margin-block-end: 0;
      margin-block-start: 0;
    }

    & p {
      padding-left: 18px;
      padding-right: 18px;
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
      flex-wrap: wrap;
      margin-block-end: 0;
      margin-block-start: 0;
      font-weight: 400;
      font-size: clamp(14px, 2vw, 18px);
      line-height: 1.29;
      letter-spacing: -0.02em;
    }

    & div:last-of-type {
      display: flex;
      padding-top: 40px;
      flex-direction: row;
      flex-wrap: nowrap;
      column-gap: 14px;
    }
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    background-position: center;
    background-image: url(${start1xTablet});
    @supports (-webkit-image-set: url()) {
      background-image: -webkit-image-set(
        url(${start1xTablet}) 1x,
        url(${start2xTablet}) 2x
      );
    }

    & section {
      width: 470px;
      margin: 39.06vh 30.47vw 39.06vh 8.33vw;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      flex-direction: column;
    }

    & div:first-of-type {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      justify-content: flex-start;
      height: 130px;
    }
    & h2 {
      display: flex;
      flex-wrap: wrap;
      font-weight: 600;
      font-size: 40px;
      line-height: 1.1;
      letter-spacing: -0.02em;
      padding-bottom: 14px;
      margin-block-end: 0;
      margin-block-start: 0;
    }

    & p {
      display: flex;
      flex-wrap: wrap;
      margin-block-end: 0;
      margin-block-start: 0;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.33;
      letter-spacing: -0.02em;
    }

    & div:last-of-type {
      display: flex;
      padding-top: 40px;
      flex-direction: row;
      flex-wrap: nowrap;
      column-gap: 14px;
    }
  }

  @media (min-width: 1440px) {
    position: relative;
  }

  @media (min-width: 1440px) {
    background-image: url(${start1xDesktop});
    background-position: top left;
    background-repeat: no-repeat;
    @supports (-webkit-image-set: url()) {
      background-image: -webkit-image-set(
        url(${start1xDesktop}) 1x,
        url(${start2xDesktop}) 2x
      );
    }
    & section {
      width: 485px;
      margin: 35.45vh 10.417vw 35.45vh 6.944vw;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      flex-direction: column;
    }

    & div:first-of-type {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: flex-start;
      height: 130px;
    }

    & h2 {
      display: flex;
      flex-wrap: wrap;
      font-weight: 600;
      font-size: 40px;
      line-height: 1.1;
      letter-spacing: -0.02em;
      padding-bottom: 14px;
      margin-block-end: 0;
      margin-block-start: 0;
    }

    & p {
      display: flex;
      flex-wrap: wrap;
      margin-block-end: 0;
      margin-block-start: 0;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.33;
      letter-spacing: -0.02em;
    }

    & div:last-of-type {
      display: flex;
      padding-top: 40px;
      flex-direction: row;
      flex-wrap: nowrap;
      column-gap: 14px;
    }
  }

  @media (min-width: 1440px) {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: url(${welcome1x});
      background-repeat: no-repeat;
      background-position: right;
      background-size: 703px 100vh;

      z-index: 1;
    }
    @supports (-webkit-image-set: url()) {
      &:before {
        background-image: -webkit-image-set(
          url(${welcome1x}) 1x,
          url(${welcome2x}) 2x
        );
      }
    }
  }
`;

export const NavLink = styled(BaseNavLink)`
  border-radius: 42px;
  border: 1px solid ${(props) => props.theme.whiteColor};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 14px;

  &:first-of-type {
    background: ${(props) => props.theme.whiteColor};
    color: ${(props) => props.theme.darkBlueColor};

    &:active,
    &:hover,
    &:focus {
      background: transparent;
      color: ${(props) => props.theme.whiteColor};
    }
  }
  &:last-of-type {
    background: transparent;
    color: ${(props) => props.theme.whiteColor};

    &:active,
    &:hover,
    &:focus {
      background: ${(props) => props.theme.whiteColor};
      color: ${(props) => props.theme.darkBlueColor};
    }
  }

  @media (max-width: 768px) {
    width: 129px;
    height: 46px;
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    font-size: 16px;
    width: 144px;
    height: 54px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    width: 144px;
    height: 54px;
  }
`;
