import { favoritesService } from '../../services/favorite-service';

export function addLocationToFavorites(location) {
  console.log(location)
    const favoriteLocation = favoritesService.addLocationToFavorite(location);
    return {
      type: 'ADD_TO_FAVORITES',
      favoriteLocation
    }
  }
  
  export function deleteLocationFromFavorites(locationId) {
    favoritesService.deleteLocationFromFavorites(locationId);
    return {
      type: 'REMOVE_FROM_FAVORITES',
      locationId
    }
  }


export default {
  addLocationToFavorites,
  deleteLocationFromFavorites
}