import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/actions/favoriteAction';

export const useFavorite = ( location ) => {

    const favorites = useSelector( state => state.favoriteModule );
    const dispatch = useDispatch();

    const isFavorite = () => {
        console.log(favorites);
        return favorites.favorites.find(favorite => favorite.id === location.locationKey)
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

}