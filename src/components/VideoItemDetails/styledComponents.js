import styled from 'styled-components'

export const StatusContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const FailureImage = styled.img`
  width: 230px;

  @media (min-width: 768px) {
    width: 300px;
  }
`

export const FailureHeading = styled.h1`
  color: ${props => (props.isDark ? '#fff' : '#000')};
  font-size: 18px;
  font-weight: 700;
  margin: 0px;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`

export const FailureText = styled.p`
  color: ${props => (props.isDark ? '#d7dfe9' : '#94a3b8')};
  font-size: 12px;
  font-weight: 300;
  margin: 0px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

export const FailureButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 8px 25px;
  color: #ffffff;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  background-color: #4f46e5;
`

export const Main = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  width: 100%;
`

export const VideoItemContainerBg = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  padding: 15px 20px;
`

export const ResponsiveVideoPlayer = styled.div`
  width: 100%;
  height: 250px;

  @media (min-width: 768px) {
    height: 450px;
  }
`

export const VideoTitle = styled.p`
  font-size: 18px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  margin-top: 20px;
`

export const VideoStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
export const StatsDot = styled.span`
  margin: 0px 5px;
`

export const VideoStatsText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  p {
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto';
    font-size: 14px;
    color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  }
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  flex-wrap: wrap;
  gap: 10px;
`
export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: transparent;
  border: none;
  padding: 0px;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  gap: 5px;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
`

export const HorizantalLine = styled.hr`
  height: 2px;
  font-weight: 700;
  margin: 32px 0px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  width: 100%;
`

export const ChannelAboutContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
`
export const SubscribersContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SubscribersCount = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  font-size: 11px;
  margin: 0px;
`

export const ChannelName = styled.p`
  font-size: 16px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  margin: 0px;
`

export const DescriptionText = styled.p`
  font-size: 14px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`
