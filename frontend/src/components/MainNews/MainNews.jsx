import MagicFigure from '../MagicFigure/MagicFigure'
import MainNewsContent from '../MainNewsContent/MainNewsContent'
import './MainNews.css'

export default function MainNews(props){
    return(
        <div className='mainNews'>
            <MainNewsContent/>
            <MagicFigure/>
        </div>
    )
}