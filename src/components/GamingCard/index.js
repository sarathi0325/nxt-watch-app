import {useContext} from 'react'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoListItem,
  VideoCardLink,
  VideoCardImage,
  VideoCardContent,
  VideoCardContentHeading,
  VideoCardViewsDateText,
} from './styledComponents'

const GamingCard = props => {
  const {eachVideo} = props
  const {title, thumbnailUrl, viewCount, id} = eachVideo
  const {isDark} = useContext(NxtWatchContext)

  return (
    <VideoListItem>
      <VideoCardLink to={`/videos/${id}`}>
        <VideoCardImage alt="video thumbnail" src={thumbnailUrl} />
        <VideoCardContent>
          <VideoCardContentHeading isDark={isDark}>
            {title}
          </VideoCardContentHeading>
          <VideoCardViewsDateText isDark={isDark}>
            {viewCount} Watching WorldWide
          </VideoCardViewsDateText>
        </VideoCardContent>
      </VideoCardLink>
    </VideoListItem>
  )
}

export default GamingCard
