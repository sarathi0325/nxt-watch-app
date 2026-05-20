import styled from 'styled-components'

export const LoginContainerBg = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#181818' : '#f1f1f1')};
`

export const ResponsiveForm = styled.form`
  width: 90%;
  border-radius: 20px;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  gap: 16px;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  box-shadow: ${props =>
    props.isDark
      ? '0px 4px 20px rgba(0, 0, 0, 0.5)' // Dark mode: deep shadow
      : '0px 0px 30px 5px rgba(0, 0, 0, 0.15)'};

  @media (min-width: 768px) {
    padding: 60px 50px;
  }
`
export const Image = styled.img`
  width: 150px;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Input = styled.input`
  padding: 10px 10px;
  border: 1px solid ${props => (props.isDark ? '#475569' : '#cbd5e1')};
  width: 100%;
  border-radius: 5px;
`

export const Label = styled.label`
  font-size: 12px;
  color: ${props => (props.isDark ? '#fff' : '#000')}
  cursor: pointer;
`

export const LabelShowPassword = styled.label`
  font-size: 14px;
  cursor: pointer;
  color: ${props => (props.isDark ? '#fff' : '#000')};
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 4px;
`

export const CheckBox = styled.input`
  width: 15px;
  height: 15px;
  cursor: pointer;
`

export const LoginButton = styled.button`
  width: 100%;
  background-color: #3b82f6;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-weight: 1000px;
  color: #ffffff;
  cursor: pointer;
`

export const LoginFailureText = styled.p`
  color: #ff0000;
  font-size: 16px;
  align-self: flex-start;
`
