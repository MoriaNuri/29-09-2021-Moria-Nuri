import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import FavoritesList from '../cmps/FavoritesList';

function Favorites() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { favorites } = useSelector(state => state.favoriteModule);
    const [isDay, setIsDay] = useState(true)

    // Change the background image by day / night for the user
    useEffect(() => {
        const hours = new Date().getHours()
        if (hours > 6 && hours < 20) return 
           else (setIsDay(false));
        
    }, []);

    // Go to the home page with the weather details of the clicked location
    const visitLocation = location => {
        const { name, id } = location;
        history.push(`/${id}/${name}`);
    };

    return (
        < section className="favorites" >
            {favorites &&
                <div className="favorite-container">
                    <h1>Favorite Location</h1>
                    <FavoritesList favorites={favorites} visitLocation={visitLocation} />
                </div>
            }
        </section>
    )
}

export default Favorites
