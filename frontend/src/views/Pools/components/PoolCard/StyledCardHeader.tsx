import React from 'react'
import { CardHeader, Heading, Text, Flex } from '@pancakeswap/uikit'
import { Token } from '@pancakeswap/sdk'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { TokenImage } from 'components/TokenImage'
import CakeVaultTokenPairImage from '../CakeVaultCard/CakeVaultTokenPairImage'

const Wrapper = styled(CardHeader)<{ isFinished?: boolean; background?: string }>`
  background: ${({ isFinished, background, theme }) =>
    isFinished ? theme.colors.backgroundDisabled : theme.colors.secondary};
  border-radius: ${({ theme }) => `${theme.radii.card} ${theme.radii.card} 0 0`};
`

const StyledCardHeader: React.FC<{
  earningToken: Token
  stakingToken: Token
  isAutoVault?: boolean
  isFinished?: boolean
  isStaking?: boolean
}> = ({ earningToken, stakingToken, isFinished = false, isAutoVault = false, isStaking = false }) => {
  const { t } = useTranslation()
  const isCakePool = earningToken.symbol === 'PRX' && stakingToken.symbol === 'USDT'
  const background = isStaking ? 'blue' : 'secondary'

  const getHeadingPrefix = () => {
    if (isAutoVault) {
      // vault
      return t('Auto')
    }
    if (isCakePool) {
      // manual cake
      return t('Manual')
    }
    // all other pools
    return t('Earn')
  }

  const getSubHeading = () => {
    if (isAutoVault) {
      return t('Automatic restaking')
    }
    if (isCakePool) {
      return t('Earn USDT, stake PRX')
    }
    return t('Stake PRX, Earn USDT')
  }

  return (
    <Wrapper isFinished={isFinished} background={background}>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex flexDirection="column">
          <Heading style={{backgroundImage: 'linear-gradient(to bottom, #ffe964 22%,#dcaa35 24%,#dcaa35 40%,#ffe964 78%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} color={isFinished ? 'textDisabled' : 'white'} scale="lg">
            PRX 
          </Heading> 
          <Text style={{backgroundImage: 'linear-gradient(to bottom, #ffe964 22%,#dcaa35 24%,#dcaa35 40%,#ffe964 78%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}} color={isFinished ? 'textDisabled' : 'white'}>{getSubHeading()}</Text>
        </Flex>
        {isAutoVault ? (
          <CakeVaultTokenPairImage width={64} height={64} />
        ) : (
          <TokenImage token={earningToken} width={64} height={64} />
        )}
      </Flex>
    </Wrapper>
  )
}

export default StyledCardHeader
