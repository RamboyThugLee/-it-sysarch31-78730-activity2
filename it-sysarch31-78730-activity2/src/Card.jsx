import profilePic from './assets/img 1.jpg'

function Card(){
    return(

        <div className="card">
            <img class="resize" src={profilePic} alt="profile picture"></img>
            <h2>Bro Code</h2>
            <p>I make Putot Balanghoy</p>
        </div>
    );

}

export default Card