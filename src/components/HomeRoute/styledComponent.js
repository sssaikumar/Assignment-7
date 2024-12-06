import styled from 'styled-components'

export const NavigationAndHomeContainers = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f7fafa')};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 124px;
  padding: 12px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f7fafa')};

  color: ${props => (props.isDarkTheme ? '#f7fafa' : '#181818')};
  @media screen and (min-width: 768px) {
    margin-left: 200px;
    margin-top: 62px;
  }
  @media screen and (min-width: 992px) {
    margin-left: 250px;
  }
`

export const BannerContainer = styled.div`
  display: ${props => props.display};
  justify-content: space-between;
  width: 100%;
  height: 200px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 11px;
  color: black;
`

export const BannerLeftPartContainer = styled.div`
  font-family: roboto;
`
export const BannerLogo = styled.img`
  width: 80px;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
`
export const BannerText = styled.p`
  font-size: 13px;
  font-weight: 500;
`
export const BannerGetItNowBtn = styled.button`
  border: 1px solid grey;
  padding: 5px;
  background-color: transparent;
`
export const BannerRightPartContainer = styled.div``
export const BannerCloseButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  cursor: pointer;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 28px;
  border: 1px solid #d7e0e0;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f7fafa')};
  color: ${props => (props.isDarkTheme ? 'white' : '#181818')};

  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 70%;
    height: 28px;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 28px;
  }
`
export const SearchInput = styled.input`
  width: 85%;
  height: 100%;
  border-width: 0px;
  padding-left: 6px;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? 'white' : '#181818')};
`
export const SearchButton = styled.button`
  width: 15%;
  height: 100%;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 2px;
  border-style: solid;
  border-color: #d7e0e0;
  text-align: center;
  background-color: transparent;
`
export const LoadSpinnerContainer = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  padding-top: 30px;
`
export const VideoListContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
export const NoSearchResultsFoundContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: roboto;
  padding-top: 50px;
`
export const NoResultsImage = styled.img`
  margin: 0px;
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 32%;
  }
`
export const NoResultsHeading = styled.h1`
  font-weight: bold;
  font-size: 18px;
`
export const TryDiffKeyWordsText = styled.p`
  font-size: 14px;
`
