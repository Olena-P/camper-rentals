import { useMemo } from 'react';
import { CamperAdvert } from '../services/camper';
import { VehicleFilters } from '../redux/filters/filterProperties';

const useFilteredAdverts = (
  adverts: CamperAdvert[],
  filters: VehicleFilters
) => {
  const filteredAdverts = useMemo(() => {
    return adverts.filter((advert) => {
      const matchesLocation = filters.location
        ? advert.location.includes(filters.location)
        : true;

      const matchesDetails = Object.keys(filters.details).every((detail) => {
        if (
          filters.details[detail as keyof typeof filters.details] === 'true'
        ) {
          return advert.details[detail as keyof typeof advert.details] === 1;
        }
        return true;
      });

      const matchesForm =
        filters.form.length > 0 ? filters.form.includes(advert.form) : true;

      return matchesLocation && matchesDetails && matchesForm;
    });
  }, [adverts, filters]);

  return {
    filteredAdverts,
  };
};

export default useFilteredAdverts;
