import { useDispatch, useSelector } from 'react-redux';
import { setToast } from '../store/actions/toastAction';
import { addFavorite, removeFavorite } from '../store/actions/favoriteAction';

export const useFavorite = (location) => {

    const favorites = useSelector(state => state.favoriteModule);
    const dispatch = useDispatch();

    const isFavorite = () => {
        return favorites.favorites.find(favorite => favorite.id === location.locationKey)
    }

    const toggleFavorite = () => {
        const { locationKey } = location
        if (isFavorite()) {
            dispatch(removeFavorite(locationKey));
            dispatch(setToast({ msg: ` ${location.locationName}  delete from favorites`, type: 'success' }))
            return;
        } else
            dispatch(addFavorite(location));
        dispatch(setToast({ msg: ` ${location.locationName}  add to favorites`, type: 'success' }))

    }

    return [isFavorite(), toggleFavorite];

}