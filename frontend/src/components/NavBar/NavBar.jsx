import BubbleCard from '../BubbleCard/BubbleCard'
import './NavBar.css'

export default function NavBar(props){
    return(
        <nav className='navBar'>
            <BubbleCard text = {'title'}/>
            <BubbleCard text = {'card'}/>
            <BubbleCard text = {'card'}/>
            <BubbleCard text = {'card'}/>
        </nav>
    )
}