import './App.css';
import Navb from '../src/component/ navbar/navbar'
import Titre from '../src/component/titre/titre'
import Itemcard from '../src/component/card/card'
//import Ph1 from '/home/znazen/Bureau/brief/airbnbjs/src/photo/9e847a85-0f96-4f11-9280-71ed39ebbfbb.webp'
//import ph10 from ''
//import Ph2 from '/home/znazen/Bureau/brief/airbnbjs/public/ph10.jpg'
//import Ph8 from ''
//import Ph9 from ''
//import Ph10 from ''

const tabvar=[
  {r:1,h3:"Découvrez les expériences en ligne",p:"Des activités uniques à faire ensemble, organisées par des hôtes du monde entier."},
  {r:2,h3:"Aventures Airbnb dans le monde entier",p:"Voyages de plusieurs jours organisés par des experts locaux avec activités, repas et logements compris"},
  {r:3,img:{}, h3:"Tarot avec un chien de thérapie" ,p:"Prix :33€/personne"},
  {r:4,img:{}, h3:"Tarot avec un chien de thérapie" ,p:"Prix :33€/personne"},
  {r:5,img:{}, h3:"Tarot avec un chien de thérapie" ,p:"Prix :33€/personne"},
  {r:6,img:{}, h3:"Tarot avec un chien de thérapie" ,p:"Prix :33€/personne"},
  {r:7,img:{}, h3:"Tarot avec un chien de thérapie" ,p:"Prix :33€/personne"},
  {r:8,img:{}, h3:"Tarot avec un chien de thérapie" ,p:"Prix :33€/personne"},
  {r:9,img:{},h2:"avanture", h3:"PLUS DE 500 EXPÉRIENCES" ,p:" Des aventures organisées vers des lieux extraordinaires : il ne vous reste plus qu'à réserver"},
  {r:10,img:{},h2:"Cuisine", h3:"PLUS DE 3000 EXPÉRIENCES" ,p:" Des aventures organisées vers des lieux extraordinaires : il ne vous reste plus qu'à réserver"},
  {r:11,img:{},h2:"Animeaux", h3:"PLUS DE 5000 EXPÉRIENCES" ,p:" Des aventures organisées vers des lieux extraordinaires : il ne vous reste plus qu'à réserver"},
  {r:12,img:{}, h3:"Découverte de l'histoire et de la culture musicale avec un DJ" ,p:"La Havane, Cuba"},
  {r:13,img:{}, h3:"Découverte de l'histoire et de la culture musicale avec un DJ" ,p:"La Havane, Cuba"},
  {r:14,img:{}, h3:"Découverte de l'histoire et de la culture musicale avec un DJ" ,p:"La Havane, Cuba"},
]

 
function Title({n}){
  return(
    <div >
       {tabvar.filter(x=>x.r==n).map(el=>(<div><Titre h31={el.h3} p31={el.p}/></div>))}
    </div>
  )
}

function Card({n}){
  return (
  <div >
    {tabvar.filter(x=>x.r==n).map(el=><Itemcard titrc={el.h3} descc={el.p} imgc={el.img} />)}
  </div>
  )
}

function Exper({n}){
  return (
  <div >
      {tabvar.filter(x=>x.r==n).map(el=><Itemcard titrc={el.h3} descc={el.p} imgc={el.img} titra={el.h2} />)}
  </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className='experience'>
        <Navb/> 
        <div className='page'>
            <h5>EXPÉRIENCES AIRBNB</h5>
            <h1>Des activités uniques organisées par des experts </h1>
            <div className='blue'>
              <Title n={1} />
            </div>
            <div className='card'>
            <Card n={3} /><Card n={4} /><Card n={5} /><Card n={6} /><Card n={7} /><Card n={8} />
            </div>
            <button className='lien'>
                <strong>Afficher toutes les expériences en ligne  &#10095;</strong>
            </button>
            <div className='expcard'><Exper n={9}/><Exper n={10}/><Exper n={11}/></div>
            <h2>Rencontrez des hôtes du monde entier</h2>
            <div className='expcard'><Card n={12} /><Card n={13} /><Card n={14} /></div>
        </div>
      </div>
    </div>
  );
}
export default App;