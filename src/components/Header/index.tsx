import * as Dialog from '@radix-ui/react-dialog'
import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  NewTransactionButton,
} from './styles'
import logoImg from '../../assets/ignite-logo.svg'
import { NewTransactionalModal } from '../NewTransactionalModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <img src={logoImg} alt="" />
          <h2>DT Money</h2>
        </HeaderLogo>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionalModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
