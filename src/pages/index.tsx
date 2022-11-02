/*interface HomeProps {
  count: number;
}*/

import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw-copa-preview.png'
import logoImg from '../assets/logo.svg'
import usersAvatarExample from '../assets/users-avatar-example.png'
import iconCheckImg from '../assets/icon-check.svg'

export default function Home() {
  return (
    <div>
      <main>
        <Image src={logoImg} alt="NLW Copa"/>

        <h1>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>

        <div>
          <Image src={usersAvatarExample} alt="exemplo de usuários"/>

          <strong>
            <span>+12.592</span> pessoas já estão usando
          </strong>

          <form>
            <input type="text" required placeholder='Qual nome do seu bolão?'/>
            <button type='submit'>Criar meu bolão</button>
          </form>

          <p>Após criar seu botão, você receberá um código único que poderá usar para convidar outras pessoas </p>

          <div>
            <div>
              <Image src={iconCheckImg} alt="ícone de check"/>
              <div>
                <span>+2.034</span>
                <span>Bolões Criados</span>
              </div>
            </div>

            <div>
              <Image src={iconCheckImg} alt="ícone de check"/>
              <div>
                <span>+192.847</span>
                <span>Palpites enviados</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Image 
        src={appPreviewImg} 
        alt="Dois Celulares exibindo uma prévia da aplicação móvel do NLW Copa" 
        quality={100}
      />
    </div>
  )
}
/*      
export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()
  
  return {
    props: {
      count: data.count,
    }
  }
}*/