'use client'
import DiscoverLogo from '../DiscoverLogo/DiscoverLogo'
import Repos from '../Repos/Repos'
import './MainDiscover.css'
import axios from 'axios'

 export default async function MainDiscover(props){

    var repos =[]

    const compararPorTempo = (objetoA, objetoB) => {
        const tempoA = new Date(objetoA.updated_at);
        const tempoB = new Date(objetoB.updated_at);
      
        // Ordenar do mais recente para o mais antigo
        return tempoB - tempoA;
      };

    await axios.get('https://api.github.com/users/MarcantoniLSM/repos')
    .then(resp =>{
        repos = resp.data.sort(compararPorTempo)
        console.log(repos)
    })

    return(
        <div className='mainDiscover'>
            <div className='discoverStart'>
              <h3>Repositórios</h3>
              <span>Ver todos</span>  
            </div>
            <DiscoverLogo/>
            <div className='reposArea'>
                <Repos 
                 name={repos[0].name}
                 description = {repos[0].description}
                 date={repos[0].updated_at}
                 link = {repos[0].clone_url}
                 />
                <Repos 
                 name={repos[1].name}
                 description = {repos[1].description}
                 date={repos[1].updated_at}
                 link = {repos[1].clone_url}
                 />
                <Repos 
                 name={repos[2].name}
                 description = {repos[2].description}
                 date={repos[2].updated_at}
                 link = {repos[2].clone_url}
                 />
                <Repos 
                 name={repos[3].name}
                 description = {repos[3].description}
                 date={repos[3].updated_at}
                 link = {repos[3].clone_url}
                 />
            </div>
            
        </div>
    )
}