import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.nav`
  height: 80px;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isDark ? '#212121' : '#f1f5f9')};
`
export const NxtLogo = styled.img`
  width: 100px;
  cursor: pointer;
`
export const MediumSizeNavIcons = styled.div`
  display: none;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const SmallSizeNavIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`

export const ToggleThemeButton = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const ProfileLogo = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`

export const LogOutButton = styled.button`
  width: 100px;
  background: transparent;
  padding: 5px 10px;
  border: 1px solid ${props => (props.isDark ? ' #ebebeb' : '#3b82f6')};
  border-radius: 5px;
  font-weight: 1000;
  color: ${props => (props.isDark ? ' #ebebeb' : '#3b82f6')};
  cursor: pointer;
`
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${props => (props.isDark ? '#231f20' : '#ffffff')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavLinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0;
  margin: 0;
  list-style-type: none;
  width: 80%;
  max-width: 300px;
`

export const NavLinkItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
  text-decoration: none;
  width: 100%;
  padding: 10px;
  border-radius: 8px;

  &:hover {
    background-color: ${props => (props.isDark ? '#383838' : '#f1f5f9')};
  }
`

export const NavLinkText = styled.span`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
`

export const ModalContainerLogout = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  border-radius: 8px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 400px;
  width: 90%;
`

export const ModalText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#00306e')};
  margin-bottom: 30px;
`

export const ModalButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;
`

export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid #7e858e;
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border: none;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`
