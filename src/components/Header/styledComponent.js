import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#1c1b1a' : '#fbfce1')};
  height: 11vh;
  padding-left: 10px;
  padding-right: 10px;
  color: ${props => (props.isDarkTheme ? '#fbfce1' : '#050505')};
  @media (min-width: 768px) {
    height: 10vh;
    padding-left: 20px;
    padding-right: 20px;
  }
`
export const ThemeAndLogoutAndProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LogoImage = styled.img`
  width: 70px;
  @media (min-width: 576px) {
    width: 90px;
  }
  @media (min-width: 768px) {
    width: 110px;
  }
  @media (min-width: 1200px) {
    width: 150px;
  }
`

export const ThemeButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  padding: 4px;
  @media (min-width: 768px) {
    padding: 7px;
  }
`

export const ProfileImage = styled.img`
  width: 15%;
  @media (max-width: 767px) {
    width: 11%;
  }
`
export const LogoutIconButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  padding: 4px;
  @media (min-width: 768px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
  width: 80px;
  height: 23px;
  text-align: center;
  background-color: transparent;
  border-radius: 4px;
  color: ${props => (props.isDarkTheme ? '#fbfce1' : 'blue')};
  border: 2px solid ${props => (props.isDarkTheme ? '#fbfce1' : 'blue')};

  @media (max-width: 767px) {
    display: none;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
  background-color: ${props => (props.isDarkTheme ? '#292626' : '#d9d1d0')};
  height: 130px;
  width: 250px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    height: 160px;
    width: 400px;
  }
`
export const ModalDescription = styled.p`
  font-family: roboto;
  font-weight: bold;
  margin: 0px;
  margin-bottom: 20px;
  text-align: center;
`
export const ButtonsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props => (props.isDarkTheme ? 'white' : 'black')};
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
  padding: 4px;
  border-radius: 4px;
  margin-right: 12px;
`
export const ConfirmButton = styled.button`
  background-color: blue;
  color: white;
  border-width: 0px;
  border-radius: 4px;
  padding: 5px;
`
