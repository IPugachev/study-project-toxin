import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.header`
  padding: 0 140px;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
`
export const Wrapper = styled.div`
  max-width: 1440px;
  min-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  & a {
    height: 40px;
  }
`
export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`
export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  width: fit-content;
`
export const HeaderLink = styled.a`
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.darkShade50};
  text-decoration: none;
  margin-right: 20px;
  &:first-child {
    font-weight: bold;
  }
`
export const ButtonBox = styled.div``
export const User = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 17px;
  padding-left: 20px;
  height: 30px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkShade50};
  border-left: 1px solid rgba(31, 32, 65, 0.1);
`
export const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  width: fit-content;
  text-decoration: none;
`