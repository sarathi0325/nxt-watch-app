import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    width: 25%;
    margin: 0px;
    flex-shrink: 0;
    padding: 40px 0px;
    background-color: ${props => (props.isDark ? '#212121' : '#f1f5f9')};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const NavLinkContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const NavlinkList = styled.li`
  list-style: none;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${props => {
    const {isDark, isActive} = props
    if (isActive) {
      return isDark ? '#383838' : '#d7dfe9'
    }
    return 'transparent'
  }};
  cursor: pointer;
`
export const NavlinkImage = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`
export const NavlinkButton = styled.p`
  background: transparent;
  color: ${props => (props.isDark ? '#fff' : '#000')};
  border: none;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  outine: none;
  cursor: pointer;
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 100%;
  padding: 15px 20px;
  gap: 8px;
`

export const AboutContainer = styled.div`
  width: 100%;
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  cursor: pointer;
`
export const SocialMediaLogo = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`
export const ContactUsHeading = styled.p`
  font-size: 18px;
  color: ${props => (props.isDark ? '#fff' : '#00306e')};
  margin: 0px;
  font-weight: bold;
`

export const AboutUsDescription = styled.p`
  font-size: 14px;
  margin: 0px;
  color: ${props => (props.isDark ? '#fff' : '#00306e')};
`
