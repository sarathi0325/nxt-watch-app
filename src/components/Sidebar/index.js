import {useEffect, useContext} from 'react' // 1. Import useContext
import {useLocation} from 'react-router-dom'
import {
  MdHome,
  MdWhatshot,
  MdVideogameAsset,
  MdPlaylistAdd,
} from 'react-icons/md'
import NxtWatchContext, {AppTabs} from '../../context/NxtWatchContext'
import {
  NavLinkContainer,
  NavlinkList,
  NavlinkButton,
  NavLink,
  SidebarContainer,
  AboutContainer,
  ContactUsHeading,
  AboutUsDescription,
  SocialMediaLogo,
  LogoContainer,
} from './styledComponents'

const Sidebar = () => {
  const location = useLocation()
  const {pathname} = location

  const contextValue = useContext(NxtWatchContext)
  const {isDark, activeTab, setActivetab} = contextValue

  useEffect(() => {
    const currentTab = pathname === '/' ? 'home' : pathname.replace('/', '')
    if (activeTab !== currentTab) {
      setActivetab(currentTab)
    }
  }, [pathname, activeTab, setActivetab])

  return (
    <SidebarContainer isDark={isDark}>
      <NavLinkContainer>
        {AppTabs.map(each => {
          const isActive = each.TabId === activeTab
          let iconColor = isDark ? '#909090' : '#606060' // Default colors
          if (isActive) {
            iconColor = '#ff0000' // Red if active
          }
          let IconComponent
          switch (each.TabId) {
            case 'home':
              IconComponent = MdHome
              break
            case 'trending':
              IconComponent = MdWhatshot
              break
            case 'gaming':
              IconComponent = MdVideogameAsset
              break
            case 'saved-videos':
              IconComponent = MdPlaylistAdd
              break
            default:
              IconComponent = MdHome
          }
          return (
            <NavlinkList key={each.TabId} isActive={isActive} isDark={isDark}>
              <NavLink
                onClick={() => setActivetab(each.TabId)}
                to={each.TabId === 'home' ? '/' : `/${each.TabId}`}
              >
                <IconComponent size={24} color={iconColor} />
                <NavlinkButton isActive={isActive} isDark={isDark}>
                  {each.TabName}
                </NavlinkButton>
              </NavLink>
            </NavlinkList>
          )
        })}
      </NavLinkContainer>
      <AboutContainer>
        <ContactUsHeading isDark={isDark}>CONTACT US</ContactUsHeading>
        <LogoContainer>
          <SocialMediaLogo
            alt="facebook logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          />
          <SocialMediaLogo
            alt="twitter logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          />
          <SocialMediaLogo
            alt="linked in logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          />
        </LogoContainer>
        <AboutUsDescription isDark={isDark}>
          Enjoy! Now to see your channels and recommendations!
        </AboutUsDescription>
      </AboutContainer>
    </SidebarContainer>
  )
}

export default Sidebar
