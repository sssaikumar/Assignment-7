import { TiHome } from 'react-icons/ti'
import { MdPlaylistAdd } from 'react-icons/md'
import { HiFire } from 'react-icons/hi'
import { SiYoutubegaming } from 'react-icons/si'
import ContextComponent from '../../context/ContextComponent'

import {
    MainContainer,
    NavLink,
    NavLinksContainer,
    NavItemContainer,
    NavText,
} from './styledComponent'

const NavigationLinks = () => (
    <ContextComponent.Consumer>
        {value => {
            const { isDarkTheme, changeActiveNavigationStyling, activeTab } = value
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
                <MainContainer isDarkTheme={isDarkTheme}>
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
                                    activeTab === 'savedVideos' ? activeTabBgColor : 'transparent'
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
                        <p>Contact</p>
                    </ContactUsContainer>
                </MainContainer>
            )
        }}
    </ContextComponent.Consumer>
)

export default NavigationLinks
