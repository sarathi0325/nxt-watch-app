import React from 'react'

export const AppTabs = [
  {
    TabId: 'home',
    TabName: 'Home',
  },
  {
    TabId: 'trending',
    TabName: 'Trending',
  },
  {
    TabId: 'gaming',
    TabName: 'Gaming',
  },
  {
    TabId: 'saved-videos',
    TabName: 'Saved videos',
  },
]

const NxtWatchContext = React.createContext({
  isDark: false,
  onChangeTheme: () => {},
  activeTab: AppTabs[0].TabId,
  toggleSaveVideo: () => {},
  savedVideosList: [],
  setActivetab: () => {},
})

export default NxtWatchContext
