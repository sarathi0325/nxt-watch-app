import {useState} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  LoginContainerBg,
  ResponsiveForm,
  Image,
  InputContainer,
  Label,
  Input,
  CheckBox,
  CheckBoxContainer,
  LoginButton,
  LabelShowPassword,
  LoginFailureText,
} from './styledComponents'

const Login = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken) {
    return <Redirect to="/" />
  }

  const onChangeUserName = event => {
    setUsername(event.target.value)
  }
  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onChangeShowPassword = () => {
    setShowPassword(prev => !prev)
  }

  const submitLogin = async event => {
    event.preventDefault()
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const token = data.jwt_token
      Cookies.set('jwt_token', token, {expires: 30})
      const {history} = props
      history.replace('/')
    } else {
      setErrorMsg(data.error_msg)
      setShowError(true)
    }
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <LoginContainerBg isDark={isDark}>
            <ResponsiveForm onSubmit={submitLogin} isDark={isDark}>
              <Image
                alt="website logo"
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
              />
              <InputContainer>
                <Label htmlFor="username" isDark={isDark}>
                  Username
                </Label>
                <Input
                  value={username}
                  onChange={onChangeUserName}
                  id="username"
                  isDark={isDark}
                  placeholder="Username"
                  type="text"
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="password" isDark={isDark}>
                  Password
                </Label>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  isDark={isDark}
                  onChange={onChangePassword}
                  id="password"
                  placeholder="Password"
                />
              </InputContainer>
              <CheckBoxContainer>
                <CheckBox
                  id="showpassword"
                  type="checkbox"
                  checked={showPassword}
                  onChange={onChangeShowPassword}
                />
                <LabelShowPassword htmlFor="showpassword" isDark={isDark}>
                  Show Password
                </LabelShowPassword>
              </CheckBoxContainer>
              <LoginButton type="submit">Login</LoginButton>
              {showError && <LoginFailureText>*{errorMsg}</LoginFailureText>}
            </ResponsiveForm>
          </LoginContainerBg>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default Login
