//CSS da PaginaDeLogin
import './PaginaDeLogin.css'

//componentes
import TextoCabecalho from './componentes/TextoCabecalho'
import LinkExplorar from './componentes/LinkExplorar'
import TextoCorpo from './componentes/TextoCorpo'
import BotaoDeAcesso from './componentes/BotaoDeAcesso'

const PaginaDeLogin = () => {
  return (
    <div>
        <div className='primeira-coluna'>
            <TextoCabecalho/>
            <LinkExplorar/>
            <TextoCorpo/>

            <BotaoDeAcesso/>
            <button className='btn-meCadastrarComoPf'>ME CADASTRAR COMO PF</button>
            <button className='btn-cadastrarMeuNegocio'>CADASTRAR MEU NEGÓCIO</button>

        </div>

        <div className='segunda-coluna'>
            
        </div>
    </div>
  )
}

export default PaginaDeLogin