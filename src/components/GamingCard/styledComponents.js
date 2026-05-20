import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoListItem = styled.li`
  width: 100%;
  height: 100%;
`

export const VideoCardLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const VideoCardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  flex-shrink: 0;
  image-rendering: auto;
  margin: 0;
`

export const VideoCardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
  margin: 0;
`

export const VideoCardContentHeading = styled.p`
  margin: 0px;
  font-size: 15px;
  color: ${props => (props.isDark ? '#fff' : '#000')};
`

export const VideoCardViewsDateText = styled.p`
  color: ${props => (props.isDark ? '#fff' : '#000')};
  font-size: 12px;
  margin: 0px;
`
