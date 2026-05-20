import styled from 'styled-components'

export const Main = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  width: 100%;
`
export const SavedVideosContainerBg = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${props => (props.isDark ? '#000' : '#fff')};
  overflow-y: hidden;
`

export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`

export const BannerContainer = styled.div`
  width: 100%;
  padding: 35px 45px;
  background-color: ${props => (props.isDark ? '#212121' : '#f1f1f1')};
`
export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const BannerLogoContainer = styled.div`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background-color: ${props => (props.isDark ? '#000' : '#fff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Bannertext = styled.h1`
  color: #000;
  font-size: 28px;
  margin: 0px;
  color: ${props => (props.isDark ? '#fff' : '#000')};
`

export const SavedVideosContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px 35px;
  gap: 10px;
`

export const SavedVideosListContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`

export const StatusContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
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
