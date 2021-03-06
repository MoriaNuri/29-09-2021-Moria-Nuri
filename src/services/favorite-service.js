import { storageService } from './storage-service';
var gFavorites = storageService.loadFromStorage('favoriteDB') || [];

export const favoritesService = {
    addLocationToFavorite,
    deleteLocationFromFavorites
}

function addLocationToFavorite(location) {
    const favoriteLocation = {
        id: location.locationKey,
        cTemp: location.temperature.Metric.Value,
        fTemp: location.temperature.Imperial.Value,
        locationName: location.locationName,
        icon: location.weatherIcon
    };
    gFavorites.push(favoriteLocation);
    storageService.saveToStorage('favoriteDB', gFavorites)
    return favoriteLocation;
}

async function deleteLocationFromFavorites(locationId) {
    const favoriteLocationIdx = gFavorites.findIndex(favorite => favorite.id === locationId);
    if (favoriteLocationIdx === -1) return;
    gFavorites.splice(favoriteLocationIdx, 1)
    storageService.saveToStorage('favoriteDB', gFavorites);
}