import styled from 'styled-components'

export const GamingBgContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isDarkTheme ? '#050505' : '#f2f7f7')};
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
export const MainContainer = styled.div`
  width: 100%;
`
export const LoadSpinnerContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GamingHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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
