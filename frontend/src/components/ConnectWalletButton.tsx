import React from 'react'
import { Button, useWalletModal } from '@pancakeswap/uikit'
import styled from 'styled-components'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const CustomButton = styled.div`
 button {
  color: #000 !important;
  cursor: pointer;
  padding: 10px 30px;
  border: none;
  font-weight: 800;
  font-size: 16px;
  position: relative;
  font-family: "Comfortaa", cursive;
  display: inline-block;
  -webkit-border-radius: 90px;
  -moz-border-radius: 90px;
  border-radius: 90px;
  background-image: linear-gradient(
  150deg, #fe9600 0%, rgb(249 183 7) 78%);
 }
`

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <CustomButton>
      <Button onClick={onPresentConnectModal} {...props}>
        {t('Connect Wallet')}
      </Button>
    </CustomButton>
  )
}

export default ConnectWalletButton
