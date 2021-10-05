import React from 'react'
import FavoritePreview from './FavoritePreview'

function FavoritestList({ favorites,visitLocation }) {
    return (
        <section className="favorites-list">
            {favorites.length > 0 ?
                favorites.map(favorite => (
                    <FavoritePreview
                        location={favorite}
                        visitLocation={visitLocation}
                    />
                )) : <div className="no-fvorites">Not having any favorites </div>}
        </section>
    )
}
export default FavoritestList




