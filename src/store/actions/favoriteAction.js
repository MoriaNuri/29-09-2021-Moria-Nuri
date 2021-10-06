import { favoritesService } from '../../services/favorite-service';

export function addFavorite(location) {
  const favoriteLocation = favoritesService.addLocationToFavorite(location);
  return {
    type: 'ADD_TO_FAVORITES',
    favoriteLocation
  }
}

export function removeFavorite(locationId) {
  favoritesService.deleteLocationFromFavorites(locationId);
  return {
    type: 'REMOVE_FROM_FAVORITES',
    locationId
  }
}


