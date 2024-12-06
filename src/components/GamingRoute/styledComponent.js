import styled from 'styled-components'

export const GamingBgContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: ${props => (props.isDarkTheme ? '#050505' : '#f2f7f7')};
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
export const MainContainer = styled.div`
  min-height: 100vh;
  margin-top: 124px;
  @media screen and (min-width: 768px) {
    margin-top: 62px;
    margin-left: 200px;
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

export const GamingHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0e' : '#f7f3ed')};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 26px;
`

export const GamingIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  border-radius: 50%;
  background-color: #e1eded;
  margin: 0px;
`

export const Heading = styled.h1`
  font-family: roboto;
  font-size: 23px;
  font-weight: 550;
  margin-left: 13px;
`

export const ListOfGamingVideos = styled.ul`
  width: 100%;
  padding-left: 26px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-right: 10px;
`
