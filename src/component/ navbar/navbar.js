import logoai from '/home/znazen/Bureau/brief/airbnbjs/src/photo/logoai.png'
import search from '/home/znazen/Bureau/brief/airbnbjs/src/photo/search.svg'
import language from '/home/znazen/Bureau/brief/airbnbjs/src/photo/language.svg'
import account from '/home/znazen/Bureau/brief/airbnbjs/src/photo/account.svg'
import menu from '/home/znazen/Bureau/brief/airbnbjs/src/photo/menu.svg'
import '../ navbar/navbar.css'


function Navb(){
    return(
    <div className='navbar'>

        <img src={logoai} className='logo'/>
        <div className='input'>
            <button >
                <strong>Commencez votre recherche</strong>
                <img src={search} ></img>
            </button>
        </div>
        <div className='comptdowns'>
            <button ><strong>Devenez hôte</strong></button>
        </div>
        <div className='langmodal'>
            <button >
                <img src={language} ></img>
            </button>
        </div>
        <div className='inscrit'>
            <button >
                <img src={menu} ></img>
                <img src={account} ></img> 
            </button>
        </div>
        <div></div>
    </div>
    )
} 

export default Navb