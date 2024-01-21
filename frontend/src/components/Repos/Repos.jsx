import './Repos.css'

export default function Repos(props){
    return(
        <div className='repos'>
            <div className='topArea'>
                <div className='info'>
                    <h4>Repositório</h4>
                    <h5>22/01/2003</h5>
                </div>
              
              <div>
                <span class="material-symbols-outlined">download</span>  
                <span class="material-symbols-outlined">link</span>
              </div>
            
            </div>
            
            <p>Descrição dada ao repositório contendo
                 informações relevantes para o repositório referenciado.</p>
        </div>
    )
}