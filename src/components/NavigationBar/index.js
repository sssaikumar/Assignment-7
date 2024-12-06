import {TiHome} from 'react-icons/ti'
import {MdPlaylistAdd} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import ContextComponent from '../../context/ContextComponent'

import {
  NavBar,
  NavigationForLargeDevices,
  NavigationForSmallDevices,
  NavLink,
  NavLinksContainer,
  NavItemContainer,
  NavText,
  ContactUsContainer,
  ContactUsHeading,
  ContactAppsIconsContainer,
  IconImage,
  ContactPara,
} from './styledComponent'

const NavigationLinks = () => (
  <ContextComponent.Consumer>
    {value => {
      const {isDarkTheme, changeActiveNavigationStyling, activeTab} = value
      const onClickHome = () => {
        changeActiveNavigationStyling('home')
      }

      const onClickTrending = () => {
        changeActiveNavigationStyling('trending')
      }

      const onClickGaming = () => {
        changeActiveNavigationStyling('gaming')
      }

      const onClickSavedVideos = () => {
        changeActiveNavigationStyling('savedVideos')
      }

      const activeTabBgColor = isDarkTheme ? '#3d3d3d' : '#d5dce6'

      return (
        <NavBar>
          <NavigationForLargeDevices isDarkTheme={isDarkTheme}>
            <NavLinksContainer isDarkTheme={isDarkTheme}>
              <NavLink to="/">
                <NavItemContainer
                  bgColor={
                    activeTab === 'home' ? activeTabBgColor : 'transparent'
                  }
                  onClick={onClickHome}
                  key="home"
                >
                  <TiHome
                    color={activeTab === 'home' ? 'red' : 'grey'}
                    size={18}
                  />
                  <NavText
                    isDarkTheme={isDarkTheme}
                    isTabActive={activeTab === 'home'}
                  >
                    Home
                  </NavText>
                </NavItemContainer>
              </NavLink>
              <NavLink to="/trending">
                <NavItemContainer
                  bgColor={
                    activeTab === 'trending' ? activeTabBgColor : 'transparent'
                  }
                  onClick={onClickTrending}
                  key="trending"
                >
                  <HiFire
                    color={activeTab === 'trending' ? 'red' : 'grey'}
                    size={18}
                  />
                  <NavText
                    isDarkTheme={isDarkTheme}
                    isTabActive={activeTab === 'trending'}
                  >
                    Trending
                  </NavText>
                </NavItemContainer>
              </NavLink>

              <NavLink to="/gaming">
                <NavItemContainer
                  bgColor={
                    activeTab === 'gaming' ? activeTabBgColor : 'transparent'
                  }
                  onClick={onClickGaming}
                  key="gaming"
                >
                  <SiYoutubegaming
                    color={activeTab === 'gaming' ? 'red' : 'grey'}
                    size={18}
                  />
                  <NavText
                    isDarkTheme={isDarkTheme}
                    isTabActive={activeTab === 'gaming'}
                  >
                    Gaming
                  </NavText>
                </NavItemContainer>
              </NavLink>

              <NavLink to="/saved-videos">
                <NavItemContainer
                  bgColor={
                    activeTab === 'savedVideos'
                      ? activeTabBgColor
                      : 'transparent'
                  }
                  onClick={onClickSavedVideos}
                  key="savedVideos"
                >
                  <MdPlaylistAdd
                    color={activeTab === 'savedVideos' ? 'red' : 'grey'}
                    size={18}
                  />
                  <NavText
                    isDarkTheme={isDarkTheme}
                    isTabActive={activeTab === 'savedVideos'}
                  >
                    Saved videos
                  </NavText>
                </NavItemContainer>
              </NavLink>
            </NavLinksContainer>

            <ContactUsContainer>
              <ContactUsHeading>Contact us</ContactUsHeading>
              <ContactAppsIconsContainer>
                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />

                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ContactAppsIconsContainer>
              <ContactPara>
                Enjoy! Now to see your channels and recommendations!
              </ContactPara>
            </ContactUsContainer>
          </NavigationForLargeDevices>

          <NavigationForSmallDevices isDarkTheme={isDarkTheme}>
            <NavLink to="/">
              <TiHome
                onClick={onClickHome}
                color={activeTab === 'home' ? 'red' : 'grey'}
                size={24}
              />
            </NavLink>

            <NavLink to="/trending">
              <HiFire
                onClick={onClickTrending}
                color={activeTab === 'trending' ? 'red' : 'grey'}
                size={24}
              />
            </NavLink>

            <NavLink to="/gaming">
              <SiYoutubegaming
                onClick={onClickGaming}
                color={activeTab === 'gaming' ? 'red' : 'grey'}
                size={24}
              />
            </NavLink>

            <NavLink to="/saved-videos">
              <MdPlaylistAdd
                onClick={onClickSavedVideos}
                color={activeTab === 'savedVideos' ? 'red' : 'grey'}
                size={24}
              />
            </NavLink>
          </NavigationForSmallDevices>
        </NavBar>
      )
    }}
  </ContextComponent.Consumer>
)

export default NavigationLinks
