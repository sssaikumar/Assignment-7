import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {BsBrightnessHigh} from 'react-icons/bs'
import {FaMoon} from 'react-icons/fa'

import {FiLogOut} from 'react-icons/fi'

import ContextComponent from '../../context/ContextComponent'
import {
  NavContainer,
  LogoImage,
  ThemeAndLogoutAndProfileContainer,
  ThemeButton,
  ProfileImage,
  ModalContainer,
  ModalDescription,
  ButtonsContainer,
  ConfirmButton,
  CancelButton,
  LogoutIconButton,
  LogoutButton,
} from './styledComponent'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('a7_token')
    const {history} = props
    history.replace('/')
  }

  return (
    <ContextComponent.Consumer>
      {value => {
        const {isDarkTheme, changeTheme} = value
        const LogoutIconColor = isDarkTheme ? '#f7fafa' : '#232424'
        const logo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const onClickChangeTheme = () => {
          changeTheme()
        }

        return (
          <NavContainer isDarkTheme={isDarkTheme}>
            <Link to="/">
              <LogoImage src={logo} alt="website logo" />
            </Link>
            <ThemeAndLogoutAndProfileContainer>
              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={onClickChangeTheme}
              >
                {isDarkTheme ? (
                  <BsBrightnessHigh color="#fcfafa" size={22} />
                ) : (
                  <FaMoon size={22} />
                )}
              </ThemeButton>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <LogoutButton
                    onClick={onClickLogout}
                    isDarkTheme={isDarkTheme}
                  >
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <ModalContainer isDarkTheme={isDarkTheme}>
                    <ModalDescription>
                      Are you sure, you want to logout?
                    </ModalDescription>
                    <ButtonsContainer>
                      <CancelButton
                        isDarkTheme={isDarkTheme}
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </CancelButton>
                      <ConfirmButton
                        isDarkTheme={isDarkTheme}
                        type="button"
                        onClick={onClickLogout}
                      >
                        Confirm
                      </ConfirmButton>
                    </ButtonsContainer>
                  </ModalContainer>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <LogoutIconButton onClick={onClickLogout}>
                    <FiLogOut color={LogoutIconColor} size={22} />
                  </LogoutIconButton>
                }
              >
                {close => (
                  <ModalContainer isDarkTheme={isDarkTheme}>
                    <ModalDescription>
                      Are you sure, you want to logout?
                    </ModalDescription>
                    <ButtonsContainer>
                      <CancelButton
                        isDarkTheme={isDarkTheme}
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </CancelButton>
                      <ConfirmButton
                        isDarkTheme={isDarkTheme}
                        type="button"
                        onClick={onClickLogout}
                      >
                        Confirm
                      </ConfirmButton>
                    </ButtonsContainer>
                  </ModalContainer>
                )}
              </Popup>
            </ThemeAndLogoutAndProfileContainer>
          </NavContainer>
        )
      }}
    </ContextComponent.Consumer>
  )
}

export default withRouter(Header)
