/*interface HomeProps {
  count: number;
}*/

import appPreviewImg from '../assets/app-nlw-copa-preview.png'

export default function Home() {
  return (
    <div>
      <main>

      </main>
      <img src={appPreviewImg} alt="Dois Celulares exibindo uma prévia da ap" />
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