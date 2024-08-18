import { useState, useEffect } from 'react';
import { CamperAdvert } from '../services/camper';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<CamperAdvert[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (advert: CamperAdvert) => {
    setFavorites((prev) =>
      prev.some((fav) => fav._id === advert._id)
        ? prev.filter((fav) => fav._id !== advert._id)
        : [...prev, advert]
    );
  };

  const isFavorite = (id: string) => {
    return favorites.some((fav) => fav._id === id);
  };

  return { favorites, toggleFavorite, isFavorite };
};
