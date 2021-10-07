import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import { setToast } from '../store/actions/toastAction';
import { addFavorite, removeFavorite } from '../store/actions/favoriteAction';

export const useFavorite = (location) => {

    const favorites = useSelector(state => state.favoriteModule);
=======
import { addFavorite, removeFavorite } from '../store/actions/favoriteAction';

export const useFavorite = ( location ) => {

    const favorites = useSelector( state => state.favoriteModule );
>>>>>>> b29dca0e0ba0af0d994318eabb3c48b32333f729
    const dispatch = useDispatch();

    const isFavorite = () => {
        console.log(favorites);
        return favorites.favorites.find(favorite => favorite.id === location.locationKey)
<<<<<<< HEAD
    }


    const toggleFavorite = () => {
        const { locationKey } = location
        console.log(locationKey);
        if (isFavorite()) {
            dispatch(removeFavorite(locationKey));
            dispatch(setToast({ msg: ` ${location.locationName}  delete from favorites`, type: 'success' }))
            return;
        } else
            dispatch(addFavorite(location));
        dispatch(setToast({ msg: ` ${location.locationName}  add to favorites`, type: 'success' }))

    }

    return [isFavorite(), toggleFavorite];
=======
      }

    // const isFavorite = () => {
    //     // console.log(favorites) // print Arr with length 5
    //     // console.log(location)
    //     // return favorites.favorites.find(favorite => favorite.id === location.locationKey)

    //     const id = favorites.favorites.findIndex( l => ( l.id === location.LocationKey ) );
    //     return id !== -1;
    // }

    const toggleFavorite = () => {

        const {locationKey}=location
        console.log(locationKey);

        // const favorite = {
        //     locationKey: location.locationKey,
        //     locationName: location.locationName
        // };

        if( isFavorite() )
            dispatch( removeFavorite( locationKey) );

        else
            dispatch( addFavorite( location ) );

    }

    return [ isFavorite(), toggleFavorite ];
>>>>>>> b29dca0e0ba0af0d994318eabb3c48b32333f729

}