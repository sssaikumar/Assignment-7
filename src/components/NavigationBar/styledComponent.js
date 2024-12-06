import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.div`
  display: flex;
`
export const NavigationForLargeDevices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: fixed;
  top: 62px;
  width: 200px;
  min-height: 80vh;
  overflow-y: auto;
  padding-bottom: 20px;
  background-color: ${props => (props.isDarkTheme ? '#121211' : '#f2f2e9')};
  color: ${props => (props.isDarkTheme ? '#f2f2e9' : 'black')};

  @media (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 992px) {
    width: 250px;
  }
`
export const NavLinksContainer = styled.ul`
  width: 100%;
  padding-left: 0px;
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
export const NavLink = styled(Link)`
  text-decoration: none;
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
export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 10px;
  font-family: roboto;
`

export const ContactUsHeading = styled.p`
  font-weight: bold;
`

export const ContactAppsIconsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
export const IconImage = styled.img`
  margin-right: 8px;
  width: 23px;
`
export const ContactPara = styled.p`
  font-size: 14px;
`

export const NavigationForSmallDevices = styled.nav`
  width: 100%;
  height: 62px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 62px;
  background-color: ${props => (props.isDarkTheme ? '#121211' : '#f2f2e9')};
  color: ${props => (props.isDarkTheme ? '#f2f2e9' : 'black')};

  @media screen and (min-width: 768px) {
    display: none;
  }
`
