import Bar from '../Bar/Bar'
import './Cards.css'

export default function Cards(props){
    return(
        <div className='cards'>
            <Bar/>
            <h3>
                era uma vez um elemento.
            </h3>
            <p>Esse elemento tinha estilos e elementos, como 
                h3 e p, mas talvez o p não seja o mais adequado, 
                entretanto irei analisar e corrigir os elementos mal planejados.</p>
        </div>
        
    )
}