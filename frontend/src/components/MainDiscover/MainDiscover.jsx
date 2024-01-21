import DiscoverLogo from '../DiscoverLogo/DiscoverLogo'
import Repos from '../Repos/Repos'
import './MainDiscover.css'

export default function MainDiscover(props){
    return(
        <div className='mainDiscover'>
            <div className='discoverStart'>
              <h3>Repositórios</h3>
              <span>Ver todos</span>  
            </div>
            <DiscoverLogo/>
            <div className='reposArea'>
                <Repos/>
                <Repos/>
                <Repos/>
                <Repos/>
            </div>
            
        </div>
    )
}