import styled from 'styled-components'

export const SavedVideosBgContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0e' : '#f2f7f7')};
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
  margin: 0px;
`
export const MainContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 100%;
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
  width: 80%;
`
