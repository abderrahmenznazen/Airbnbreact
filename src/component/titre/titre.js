import '../titre/titre.css'


function Titre(props){
    return(
        <div className='title'>
            <h3>{props.h31}</h3>
            <p>{props.p31}</p>
        </div>
    )
}

export default Titre