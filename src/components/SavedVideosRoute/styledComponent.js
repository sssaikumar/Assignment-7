import styled from 'styled-components'

export const SavedVideosBgContainer = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  background-color: ${props => (props.isDarkTheme ? '#0f0f0e' : '#f2f7f7')};
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
  margin: 0px;
`
export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 124px;
  @media screen and (min-width: 768px) {
    margin-left: 200px;
    margin-top: 62px;
  }
  @media screen and (min-width: 992px) {
    margin-left: 250px;
  }
`

export const SavedVideosHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0e' : '#f7f3ed')};
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
`

export const AddToPlayListIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  border-radius: 50%;
  background-color: #e1eded;
`

export const Heading = styled.h1`
  font-family: roboto;
  font-size: 23px;
  font-weight: 550;
  margin-left: 10px;
`

export const ListOfSavedVideos = styled.ul`
  width: 100%;
  padding-left: 20px;
  list-style-type: none;
`

export const NoVideosImage = styled.img`
  width: 45%;
  margin-bottom: 15px;
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 20px;
  padding-left: 11px;
  padding-right: 11px;
  font-family: roboto;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0e' : '#f2f7f7')};
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
`
export const NoVideosHeading = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin: 5px;
  text-align: center;
`
export const NoVideosPara = styled.p`
  font-size: 13px;
  font-weight: 500;
  margin: 5px;
  text-align: center;
`
