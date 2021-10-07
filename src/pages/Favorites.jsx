import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import FavoritesList from '../cmps/FavoritesList';

function Favorites() {
    const history = useHistory();
    const { favorites } = useSelector(state => state.favoriteModule);

    // Go to the home page with the weather details of the clicked location
    const visitLocation = location => {
        console.log(location);
        const { locationName, id } = location;
        history.push(`/${id}/${locationName}`);
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
