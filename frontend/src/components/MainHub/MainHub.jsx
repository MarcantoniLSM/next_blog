import Carroussel from '../Carroussel/Carroussel'
import MainNews from '../MainNews/MainNews'
import NavBar from '../NavBar/NavBar'
import './MainHub.css'

export default function MainHub(props){
    return(
        <div className='mainHub'>
            <NavBar/>
            <MainNews/>
            <Carroussel/>
        </div>
    )
}