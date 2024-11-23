import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  height: 100vh;
`
export const FormCart = styled.div`
  width: 90%;
  background-color: #f5f3ed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  @media (min-width: 768px) {
    width: 50%;
  }
`
export const FormImage = styled.img`
  width: 26%;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const FormContainer = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Label = styled.label`
  font-weight: 500;
  align-self: flex-start;
  margin-bottom: 4px;
  color: ${props => (props.isCheckboxLabel ? '#12100c' : '#635e4e')};
  font-size: ${props => (props.isCheckboxLabel ? '13px' : '11px')}; ;
`
export const Input = styled.input`
  width: ${props => (props.isCheckbox ? '14px' : '100%')};
  height: ${props => (props.isCheckbox ? '14px' : '30px')};
  border: 1px solid #cfccc4;
  margin-bottom: 13px;
  border-radius: 4px;
  padding-left: 10px;
`
export const ShowPasswordContainer = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
  align-self: flex-start;
`
export const Button = styled.button`
  background-color: blue;
  border-width: 0px;
  border-radius:5px;
  font-weight:500px
  text-align: center;
  color: white;
  height: 33px;
  align-self:stretch;  
`
export const ErrorMsg = styled.p`
  color: red;
  align-self: flex-start;
  margin: 0px;
`
