import styled from 'styled-components'

export const Main = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  width: 100%;
`
export const HomeContainerBg = styled.div`
  flex: 1;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const BannerAddContainer = styled.div`
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  padding: 35px 15px;
  display: flex;
  justify-content: space-between;
  height: 250px;
`
export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const NxtLogo = styled.img`
  width: 140px;
`

export const Bannertext = styled.p`
  color: #0f0f0f;
  font-size: 18px;
  margin: 0px;
`

export const BannerButton = styled.button`
  width: 120px;
  background: transparent;
  padding: 10px 10px;
  border: 1px solid #181818;
  font-weight: 1000;
  color: #181818;
  cursor: pointer;
`
export const RemoveBannerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  align-self: flex-start;
`

export const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 15px;
  gap: 10px;
`

export const SearchInputContainer = styled.div`
  display: flex;
  width: 90%; /* Take more width on mobile */
  height: 35px;
  border: 1px solid ${props => (props.isDark ? '#424242' : '#616e7c')};

  @media screen and (min-width: 768px) {
    width: 40%; /* Back to 40% on Medium/Desktop screens */
  }
`

export const SearchInput = styled.input`
  flex: 1;
  padding: 0px 10px;
  background-color: transparent;
  outline: none;
  color: ${props => (props.isDark ? '#fff' : '#000')};
  border: none;
  height: 100%;
`

export const SearchIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-left: 1px solid #909090;
  padding: 0px 20px;
  height: 100%;
  cursor: pointer;
  background-color: ${props => (props.isDark ? '#313131' : '#f4f4f4')};
`
export const VideosListContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
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
