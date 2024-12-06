import styled from 'styled-components'

export const FetchFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: roboto;
  background-color: ${props => (props.isDarkTheme ? '#050505' : '#f7fafa')};
  color: ${props => (props.isDarkTheme ? 'white' : 'black')};
  padding-top: 30px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
`
export const FailureImage = styled.img`
  width: 34%;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const FailureHeading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 4px;
  text-align: center;
`
export const FailureText = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 4px;
  text-align: center;
`
export const TryAgainButton = styled.button`
  background-color: blue;
  border-width: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: bold;
  border-radius: 4px;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
`
