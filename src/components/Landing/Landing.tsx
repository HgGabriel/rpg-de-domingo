import dndlogo from '../../assets/DD-Logo.png'
import './styles.modules.scss'

function Landing() {
  return (
    <>
      <div className='container'>
        <a href="https://dnd.wizards.com/" target="_blank">
          <img src={dndlogo} className="logo" alt="D&D logo" />
        </a>
      </div>
      <h1>RPG de Domingo</h1>
      <div className="card">
        <button  className="button_enter">
          Entrar
        </button>
      </div>
    </>
  )
}

export default Landing

