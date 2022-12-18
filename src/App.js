import './App.css';
import React from 'react';
import user from './images/girl.png';
import emptyStar from './images/star-empty.png';
import filledStar from './images/star-filled.png';

function App() {

    const [contact, setContact] = React.useState({
        firstName: "Jane",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    function toggleFavorite() {
        //console.log("Toggle favorite")
        setContact(prevState => (
            {
                 ...prevState,
                isFavorite: !contact.isFavorite
            }
            )
        )
    }

    return (
        <main>
            <article className="card">
                <img src={user} className="card--image"/>
                <div className="card--info">
                    <img
                        src={contact.isFavorite ? filledStar : emptyStar}
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>

            </article>
        </main>
    );
}

export default App;
