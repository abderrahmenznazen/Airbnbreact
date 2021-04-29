import '../card/card.css';


function Itemcard(props){
    return( 
    <div className='card-item'>
        <a className='cardlink' >
        <img src={props.imgc} /> 
        <div className='donner'>
            <h2>{props.titra}</h2>
            <h3>{props.titrc}</h3>
            <p> {props.descc} </p>
        </div></a>
    </div>
    )
}

export default Itemcard