import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isDarkTheme ? '#050505' : '#f7fafa')};
  color: ${props => (props.isDarkTheme ? '#f7fafa' : '#050505')};
`
export const MainContainer = styled.div`
  width: 100%;
  padding: 10px;
  color: ${props => (props.isDarkTheme ? 'white' : 'grey')};
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
  background-color: ${props => (props.isDarkTheme ? '#050505' : '#f7fafa')};
  color: ${props => (props.isDarkTheme ? 'white' : '#050505')};

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
  color: ${props => (props.isDarkTheme ? 'white' : '#050505')};
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
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const VideoListContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
