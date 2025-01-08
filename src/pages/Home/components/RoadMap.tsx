import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0px 0px 20px 0px;
  @media (min-width: 576px) {
    flex-direction: column;
    padding: 50px 0px;
  }
`

export const TextWrapper = styled.div`
  width: 100%;
  margin-top: 85px;
  > h1 {
    font-family: Poppins;
    font-weight: 700;
    font-size: 56px;
    line-height: 120%;
    margin: 18px 0px;
    color: #121127;
    line-height: 120%;
    text-align: center;
  }
`
export const RoadMapWrapper = styled.section`
  background: var(--primary-color);
  margin: 20px auto;
  padding: 20px;
  > ul {
    background: #F9F9FB;
    box-shadow: 0px 4px 19px rgb(0 0 0 / 13%);
    border-radius: 12px;
    padding: 0;
    width: 12px;
  }
`

export const ItemWrapper = styled.li`
  list-style-type: none;
  position: relative;
  height: 180px
  margin: 0 auto;
  padding-top: 30px;
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 70px;
    transform: translateX(-50%);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: inherit;
    z-index: 1;
    border: 1px solid #FFFFFF;
    background: #ead9d2;
  }
  &:nth-child(even) div {
    left: 105px;
    &:before {
      left: -15px;
      border-width: 8px 16px 8px 0;
      border-color: transparent #f45b69 transparent transparent;
    }
  }
  &:nth-child(odd) div {
    left: -500px;
    &:before {
      right: -15px;
      border-width: 8px 0 8px 16px;
      border-color: transparent transparent transparent #f45b69;
    }
  }
`
export const ContentWrapper = styled.div`
  position: relative;
  top: 40px;
  width: 400px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #FFFFFF;
  border-radius: 12px;
  backdrop-filter: blur(168.8px);
`

export const StepTitle = styled.p`
  font-family: Poppins;
  font-weight: bold;
  font-size: 44px;
  line-height: 140%;
  color: #F03124;
  margin-bottom: 0;
  > span {
    font-size: 24px;
  }
`

export const DescriptionWrapper = styled.ul`
  padding-left: 20px;
`

export const StepDescription = styled.li`
  font-family: Poppins;
  font-weight: normal;
  list-style: initial;
  color: #121127;
  font-size: 16px;
  line-height: 180%;
`


export const RoadMap = () => {
  return (
    <Container>
      <TextWrapper>
        <h1>Roadmap</h1>
      </TextWrapper>
      <RoadMapWrapper>
        <ul>
          <ItemWrapper>
            <ContentWrapper>
              <StepTitle>Q1 <span>/2024</span></StepTitle>
              <DescriptionWrapper>
                <StepDescription>
                  Exchange implementation
                </StepDescription>
                <StepDescription>
                  Add LP, Remove LP
                </StepDescription>
              </DescriptionWrapper>
            </ContentWrapper>
          </ItemWrapper>
          <ItemWrapper>
            <ContentWrapper>
              <StepTitle>Q2 <span>/2024</span></StepTitle>
              <DescriptionWrapper>
                <StepDescription>
                  Farms Implementation
                </StepDescription>
              </DescriptionWrapper>
            </ContentWrapper>
          </ItemWrapper>
          <ItemWrapper>
            <ContentWrapper>
              <StepTitle>Q3 <span>/2024</span></StepTitle>
              <DescriptionWrapper>
                <StepDescription>
                  Staking Implementation
                </StepDescription>
              </DescriptionWrapper>
            </ContentWrapper>
          </ItemWrapper>
          <ItemWrapper>
            <ContentWrapper>
              <StepTitle>Q4 <span>/2024</span></StepTitle>
              <DescriptionWrapper>
                <StepDescription>
                  Airdrop Implementation
                </StepDescription>
              </DescriptionWrapper>
            </ContentWrapper>
          </ItemWrapper>
          <ItemWrapper>
            <ContentWrapper>
              <StepTitle>Q1 <span>/2025</span></StepTitle>
              <DescriptionWrapper>
                <StepDescription>
                  WalletConnect V2 Implementation
                </StepDescription>
              </DescriptionWrapper>
            </ContentWrapper>
          </ItemWrapper>
          <ItemWrapper>
            <ContentWrapper>
              <StepTitle>Q2 <span>/2025</span></StepTitle>
              <DescriptionWrapper>
                <StepDescription>
                  Coinbase Wallet Implementation
                </StepDescription>
              </DescriptionWrapper>
            </ContentWrapper>
          </ItemWrapper>
          <ItemWrapper>
            <ContentWrapper>
              <StepTitle>Q3 <span>/2025</span></StepTitle>
              <DescriptionWrapper>
                <StepDescription>
                  Add a KAOYA-USDT Farm
                </StepDescription>
                <StepDescription>
                  Add a KAOYA-USDT Staking
                </StepDescription>
              </DescriptionWrapper>
            </ContentWrapper>
          </ItemWrapper>
          <ItemWrapper>
            <ContentWrapper>
              <StepTitle>Q4 <span>/2025</span></StepTitle>
              <DescriptionWrapper>
                <StepDescription>
                  Add a KAOYA-USDT Airdrop
                </StepDescription>
              </DescriptionWrapper>
            </ContentWrapper>
          </ItemWrapper>
        </ul>
      </RoadMapWrapper>
    </Container>
  )
}
