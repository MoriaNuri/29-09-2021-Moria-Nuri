import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/actions/favoriteAction';

export const useFavorite = (location) => {

    const favorites = useSelector(state => state.favoriteModule);
    const dispatch = useDispatch();

    const isFavorite = () => {
        console.log(favorites);
        return favorites.favorites.find(favorite => favorite.id === location.locationKey)
    }


    const toggleFavorite = () => {
        const { locationKey } = location
        console.log(locationKey);
        if (isFavorite())
            dispatch(removeFavorite(locationKey));

        else
            dispatch(addFavorite(location));
    }

    return [isFavorite(), toggleFavorite];

}