import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {useContext} from 'react'
import Popup from 'reactjs-popup'
import {FaMoon, FaSun} from 'react-icons/fa'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NavBar,
  IconButton,
  NxtLogo,
  MediumSizeNavIcons,
  ToggleThemeButton,
  SmallSizeNavIcons,
  ProfileLogo,
  LogOutButton,
  ModalContainer,
  ModalContainerLogout,
  ModalText,
  ModalButtonsContainer,
  CancelButton,
  ConfirmButton,
  CloseButton,
  NavLinksContainer,
  NavLinkItem,
  NavLinkText,
} from './styledComponents'

const Header = props => {
  const {isDark, onChangeTheme} = useContext(NxtWatchContext)

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <NavBar isDark={isDark}>
      <Link to="/">
        <NxtLogo
          alt="website logo"
          src={
            isDark
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          }
        />
      </Link>

      <SmallSizeNavIcons>
        <ToggleThemeButton
          onClick={onChangeTheme}
          type="button"
          data-testid="theme"
        >
          {isDark ? (
            <FaSun color="#ffffff" size={22} />
          ) : (
            <FaMoon size={22} color="#181818" />
          )}
        </ToggleThemeButton>

        <Popup
          modal
          trigger={
            <IconButton type="button" isDark={isDark}>
              <GiHamburgerMenu
                size={25}
                color={isDark ? '#ffffff' : '#181818'}
              />
            </IconButton>
          }
          className="popup-content"
        >
          {close => (
            <ModalContainer isDark={isDark}>
              <CloseButton type="button" onClick={close} isDark={isDark}>
                <IoMdClose size={30} color={isDark ? '#ffffff' : '#181818'} />
              </CloseButton>

              <NavLinksContainer>
                <NavLinkItem to="/" onClick={close}>
                  <AiFillHome size={22} color="#ff0000" />
                  <NavLinkText isDark={isDark}>Home</NavLinkText>
                </NavLinkItem>

                <NavLinkItem to="/trending" onClick={close}>
                  <HiFire size={22} color="#ff0000" />
                  <NavLinkText isDark={isDark}>Trending</NavLinkText>
                </NavLinkItem>

                <NavLinkItem to="/gaming" onClick={close}>
                  <SiYoutubegaming size={22} color="#ff0000" />
                  <NavLinkText isDark={isDark}>Gaming</NavLinkText>
                </NavLinkItem>

                <NavLinkItem to="/saved-videos" onClick={close}>
                  <MdPlaylistAdd size={22} color="#ff0000" />
                  <NavLinkText isDark={isDark}>Saved Videos</NavLinkText>
                </NavLinkItem>
              </NavLinksContainer>
            </ModalContainer>
          )}
        </Popup>

        <Popup
          modal
          trigger={
            <IconButton type="button" isDark={isDark}>
              <FiLogOut size={22} color={isDark ? '#ffffff' : '#181818'} />
            </IconButton>
          }
          className="popup-content"
        >
          {close => (
            <ModalContainerLogout isDark={isDark}>
              <ModalText isDark={isDark}>
                Are you sure, you want to logout
              </ModalText>
              <ModalButtonsContainer>
                <CancelButton type="button" onClick={() => close()}>
                  Cancel
                </CancelButton>
                <ConfirmButton type="button" onClick={onClickLogout}>
                  Confirm
                </ConfirmButton>
              </ModalButtonsContainer>
            </ModalContainerLogout>
          )}
        </Popup>
      </SmallSizeNavIcons>

      <MediumSizeNavIcons>
        <ToggleThemeButton onClick={onChangeTheme} type="button">
          {isDark ? (
            <FaSun color="#ffffff" size={23} />
          ) : (
            <FaMoon size={23} color="#181818" />
          )}
        </ToggleThemeButton>
        <ProfileLogo
          alt="profile"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
        />
        <Popup
          modal
          trigger={
            <LogOutButton type="button" isDark={isDark}>
              Logout
            </LogOutButton>
          }
          className="popup-content"
        >
          {close => (
            <ModalContainerLogout isDark={isDark}>
              <ModalText isDark={isDark}>
                Are you sure, you want to logout
              </ModalText>
              <ModalButtonsContainer>
                <CancelButton type="button" onClick={() => close()}>
                  Cancel
                </CancelButton>
                <ConfirmButton type="button" onClick={onClickLogout}>
                  Confirm
                </ConfirmButton>
              </ModalButtonsContainer>
            </ModalContainerLogout>
          )}
        </Popup>
      </MediumSizeNavIcons>
    </NavBar>
  )
}

export default withRouter(Header)
