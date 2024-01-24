import './Repos.css'

export default function Repos(props){

  const download = props.link.split('.git')[0] + '/zipball/main'

    return(
        <div className='repos'>
            <div className='topArea'>
                <div className='info'>
                    <h4>{props.name}</h4>
                    <h5>{props.date.split('T')[0].replace('-','/').replace('-','/')}</h5>
                </div>
              
              <div>
                <a href={download} target="_blank" rel="noopener noreferrer"><span class="material-symbols-outlined">download</span></a>  
                <a href={props.link} target="_blank" rel="noopener noreferrer"><span class="material-symbols-outlined">link</span></a>
              </div>
            
            </div>
            
            <p>{props.description}</p>
        </div>
    )
}