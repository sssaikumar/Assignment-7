import styled from 'styled-components'

export const VideoItemCard = styled.li`
  width: 100%;
  list-style-type: none;
  margin-bottom: 10px;
  padding-right: 20px;

  @media screen and (min-width: 576px) {
    display: flex;
    justify-content: space-between;
  }
`
export const VideoThumbNailContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`

export const VideoThumbNailImage = styled.img`
  width: 100%;
`
export const AboutVideoDetailsContainer = styled.div`
  font-family: roboto;
  width: 58%;
  @media screen and (max-width: 575px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`
export const ChannelProfileImage = styled.img`
  width: 14%;
  height: 50px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const TitleAndViewsChannelNameAndDateBgContainer = styled.div`
  width: 83%;
  @media screen and (min-width: 576px) {
    width: 100%;
  }
`
export const Title = styled.p`
  margin-top: 1px;
  margin-bottom: 3px;
  font-weight: 500;
  font-size: 14px;
`
export const ChannelNameViewsAndPublishedDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 575px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ChannelName = styled.p`
  margin-top: 3px;
  margin-bottom: 3px;
  font-size: 12px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f5f7f7' : 'grey')};
`
export const ViewsAndDatePara = styled.p`
  margin-top: 3px;
  margin-bottom: 3px;
  font-size: 12px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f5f7f7' : 'grey')};
`
export const Dot = styled.span`
  height: 15px;
  width: 19px;
  font-size: 6px;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
  color: ${props => (props.isDarkTheme ? '#f5f7f7' : 'grey')};
  background-color: ${props => (props.isDarkTheme ? 'white' : 'grey')};
`
