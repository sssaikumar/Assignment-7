import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  MainContainer,
  FormCart,
  FormImage,
  FormContainer,
  Label,
  Input,
  ShowPasswordContainer,
  Button,
  ErrorMsg,
} from './styledComponent'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('a7_token', jwtToken, {expires: 10, path: '/'})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitFormDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onCheckShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const jwtToken = Cookies.get('a7_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {
      username,
      password,
      errorMsg,
      showSubmitError,
      showPassword,
    } = this.state
    const passwordType = showPassword ? 'text' : 'password'
    return (
      <MainContainer>
        <FormCart>
          <FormImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <FormContainer onSubmit={this.onSubmitFormDetails}>
            <Label htmlFor="username">USER NAME</Label>
            <Input
              id="username"
              onChange={this.onChangeUserName}
              value={username}
              placeholder="Username"
              type="text"
            />
            <Label htmlFor="password">PASSWORD</Label>
            <Input
              id="password"
              onChange={this.onChangePassword}
              value={password}
              placeholder="Password"
              type={passwordType}
            />
            <ShowPasswordContainer>
              <Input
                onChange={this.onCheckShowPassword}
                id="checkbox"
                isCheckbox
                type="checkbox"
                checked={showPassword}
              />
              <Label htmlFor="checkbox" isCheckboxLabel>
                Show Password
              </Label>
            </ShowPasswordContainer>
            <Button type="submit">Login</Button>
            {showSubmitError && <ErrorMsg>{errorMsg}</ErrorMsg>}
          </FormContainer>
        </FormCart>
      </MainContainer>
    )
  }
}
export default Login
