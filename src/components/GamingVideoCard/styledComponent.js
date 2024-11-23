import styled from 'styled-components'

export const VideoItemCard = styled.li`
  width: 48%;
  @media screen and (min-width: 576px) {
    width: 32%;
  }
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 33px;
`
export const VideoThumbNailContainer = styled.div`
  width: 100%;
`
export const VideoThumbNailImage = styled.img`
  width: 100%;
`

export const Title = styled.p`
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
  font-size: 12px;
  font-weight: 500;
  font-family: roboto;
  margin-top: 11px;
  margin-bottom: 4px;
`
export const Views = styled.p`
  color: ${props => (props.isDarkTheme ? '#e6dfd3' : '#33322f')};
  font-size: 11px;
  font-weight: 490;
  font-family: roboto;
  margin: 0px;
`
