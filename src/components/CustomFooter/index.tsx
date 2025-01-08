import React from 'react'
import footerBg from '../../assets/img/footer-bg.jpg'
import logo from '../../assets/img/logo.png'
import {
  Container,
  LogoWrapper,
  MenuWrapper,
  MenuLink,
  Divider,
  FooterWrapper,
  CopyWriter,
  SocialList,
  InnerContainer
} from './styles'

import {getEthChainInfo} from "../../utils/getEthChainInfo"
import {contractAddresses} from "../../sushi/lib/constants"

const {
  exploreURL,
  chainId
} = getEthChainInfo();

export const CustomeFooter = () => {
  const linkList = [
    { link: `${exploreURL}/address/${contractAddresses.sushi[chainId]}#code`, title: 'Kaoya Contract' },
    { link: `${exploreURL}/address/${contractAddresses.masterChef[chainId]}#code`, title: 'MasterChef Contract' },
    { link: 'https://kaoyaswap-1.gitbook.io/kaoyaswapdoc/', title: 'Docs' },
    { link: 'https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-KaoyaSwap-v1.0.pdf', title: 'Audit Report' }
  ]
  return (
    <Container bgimage={footerBg}>
      <InnerContainer>
        <LogoWrapper>
          <img src={logo} />
        </LogoWrapper>
        <MenuWrapper>
          {linkList.map((item, i) => (
            <MenuLink href={item.link} key={i}>
              {item.title}
            </MenuLink>
          ))}
        </MenuWrapper>
        <Divider />
        <FooterWrapper>
          <CopyWriter>© Copyright 2024 - Kaoyaswap</CopyWriter>
          <SocialList>
            <a href='https://discord.gg/DR4HQPrhBA'><img src='/images/discord.png' /></a>
            <a href='https://t.me/kaoyaswaporg'><img src='/images/instagram.png' /></a>
            <a href='https://x.com/KaoyaSwap'><img src='/images/twitter.png' /></a>
            <a href='https://github.com/kaoya1125'><img src='/images/github.png' /></a>
          </SocialList>
        </FooterWrapper>
      </InnerContainer>
    </Container>
  )
}
