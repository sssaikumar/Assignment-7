import styled from 'styled-components'

export const MainContainer = styled.div`
  margin-top: 124px;
  width: 100%;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 200px;
    margin-top: 62px;
  }
  @media screen and (min-width: 992px) {
    margin-left: 250px;
  }
  padding: 10px;
`
export const Title = styled.p`
  font-size: 15px;
  font-weight: 460;
  margin-top: 16px;
`
export const ActionsAndViewAndDateContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  color: ${props => (props.isDarkTheme ? 'white' : 'grey')};
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const ViewsAndDatePara = styled.p`
  font-size: 12px;
  font-weight: 500;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  margin-right: 15px;
  border-width: 0px;
  background-color: transparent;
`
export const ActionName = styled.span`
  margin-left: 2px;
  color: ${props => props.color};
`
export const Dot = styled.span`
  font-size: 8px;
  height: 20px;
  width: 30px;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
  color: ${props => (props.isDarkTheme ? 'white' : 'grey')};
  background-color: ${props => (props.isDarkTheme ? 'white' : 'grey')};
`
export const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid grey;
  color: ${props => (props.isDarkTheme ? 'white' : 'grey')};
  margin-top: 20px;
  margin-bottom: 20px;
`
export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.isDarkTheme ? 'white' : 'grey')};
  font-family: roboto;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`
export const ChannelProfile = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 12px;
`
export const ChannelDetailsContainer = styled.div`
  font-family: roboto;
`
export const ChannelName = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#d8db91' : 'black')};
  margin-top: 5px;
  margin-bottom: 2px;
`

export const Description = styled.p`
  font-size: 12px;
  font-weight: 450;
  font-family: roboto;
  margin-top: 20px;

  @media screen and (max-width: 767px) {
    display: ${props => props.displayForSmall};
  }
  @media screen and (min-width: 768px) {
    display: ${props => props.displayForLarge};
  }
`
export const Subscribers = styled.p`
  font-size: 12px;
  font-weight: 450;
  margin-top: 2px;
`
