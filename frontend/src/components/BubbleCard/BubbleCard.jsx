import './BubbleCard.css'

export default function BubbleCard(props){
    return(
    <span className='bubbleCard'>
        {props.text}
    </span>
    )
}