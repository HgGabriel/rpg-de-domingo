import './styles.modules.scss'

function Home() {
  return (
    <>
      <div className='container'>
       <div className='menu_card'>
        <img className='menu_card_image' src={"https://images.ctfassets.net/swt2dsco9mfe/7JMkOcQrCV1ubEnFSRyKGC/ba084c8cec4cbfc1c972cd354102285d/bx66w0bwE87WIQT.hero.jpg?q=70&w=1920"}/>
        <h1 className='menu_card_title'>Pesquisar Monstros</h1>
        <p className='menu_card_description'>Clique Aqui para Pesquisar um monstro de DnD</p>
       </div>

       <div className='menu_card'>
        <img className='menu_card_image' src={"https://images.ctfassets.net/swt2dsco9mfe/24zGpu8o1eFqYuWMJlZ2q2/000b6dcbc4a3c6fdbc9170f3989886ec/324009_1920x1342.jpg?q=70&w=1920"}/>
        <h1 className='menu_card_title'>Pesquisar Itens</h1>
        <p className='menu_card_description'>Clique Aqui para Pesquisar itens de DND</p>
       </div>
      </div>

      
    </>
  )
}

export default Home

