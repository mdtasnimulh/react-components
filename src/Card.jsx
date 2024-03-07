import profilePic from './assets/react.svg'

function Card() {
    return(
        <div className="card">
            <img alt="Profile Picture" src={profilePic} className='card-image'></img>
            <h2 className='card-title'>Tasnimul Hasan</h2>
            <p className='card-description'>Hi! I am a "Mobile Application Developer"</p>
        </div>
    );
}

export default Card;