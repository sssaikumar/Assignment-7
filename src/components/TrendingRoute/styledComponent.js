import styled from 'styled-components'

export const TrendingVideosBgContainer = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  background-color: ${props => (props.isDarkTheme ? '#050505' : '#f2f7f7')};
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
export const MainContainer = styled.div`
  width: 100%;
  margin-top: 124px;
  @media screen and (min-width: 768px) {
    margin-left: 200px;
    margin-top: 62px;
  }
  @media screen and (min-width: 992px) {
    margin-left: 250px;
  }
`
export const LoadSpinnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 40px;
`

export const TrendingVideosHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0e' : '#f7f3ed')};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 26px;
`

export const FireIconContainer = styled.div`
  padding: 14px;
  border-radius: 50%;
  background-color: #e1eded;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: roboto;
  font-size: 23px;
  font-weight: 550;
  margin-left: 13px;
`

export const ListOfTrendingVideos = styled.ul`
  width: 100%;
  padding-left: 26px;
  list-style-type: none;
`
