import {Route, Redirect, Switch} from 'react-router-dom'
import {useState} from 'react'
import NxtWatchContext, {AppTabs} from './context/NxtWatchContext'
import Login from './components/Login'
import Home from './components/Home'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import SavedVideos from './components/SavedVideos'
import ProtectedRoutes from './components/ProtectedRoutes'

import './App.css'

// Replace your code here
const App = () => {
  const [isDark, setDark] = useState(false)
  const [activeTab, setActivetab] = useState(AppTabs[0].TabId)
  const [savedVideosList, setSavedVideosList] = useState([])

  const toggleSaveVideo = video => {
    const isAlreadySaved = savedVideosList.some(each => each.id === video.id)
    if (isAlreadySaved) {
      setSavedVideosList(prev => prev.filter(each => each.id !== video.id))
    } else {
      setSavedVideosList(prev => [...prev, video])
    }
  }

  const onChangeTheme = () => {
    setDark(prevTheme => !prevTheme)
  }

  return (
    <NxtWatchContext.Provider
      value={{
        isDark,
        onChangeTheme,
        activeTab,
        setActivetab,
        savedVideosList,
        toggleSaveVideo,
      }}
    >
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoutes exact path="/" component={Home} />
        <ProtectedRoutes
          exact
          path="/videos/:id"
          component={VideoItemDetails}
        />
        <ProtectedRoutes exact path="/trending" component={Trending} />
        <ProtectedRoutes exact path="/saved-videos" component={SavedVideos} />
        <ProtectedRoutes exact path="/gaming" component={Gaming} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </NxtWatchContext.Provider>
  )
}

export default App
