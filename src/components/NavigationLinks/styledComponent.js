import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MainContainer = styled.div`
  width: 28vw;
  height: 95vh;
  background-color: ${props => (props.isDarkTheme ? '#121211' : '#f2f2e9')};
  color: ${props => (props.isDarkTheme ? '#f2f2e9' : 'black')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 767px) {
    display: none;
  }
`
export const NavLinksContainer = styled.ul`
  width: 100%;
  padding-left: 0px;
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
export const NavLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`
export const NavItemContainer = styled.li`
  width: 100%;
  height: 34px;
  border-radius: 2px;
  list-style-type: none;
  padding-left: 10px;
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
`
export const NavText = styled.p`
  margin-left: 15px;
  font-family: roboto;
  color: ${props => (props.isDarkTheme ? '#f2f2e9' : 'black')};
  font-weight: ${props => (props.isTabActive ? '500' : '400')};
`
