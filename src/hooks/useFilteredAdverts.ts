import { useState, useEffect, useCallback } from 'react';
import { CamperAdvert, Details, VehicleFilters } from '../services/camper';

const useFilteredAdverts = (
  adverts: CamperAdvert[],
  initialFilters: VehicleFilters
) => {
  const [filters, setFilters] = useState<VehicleFilters>(initialFilters);
  const [filteredAdverts, setFilteredAdverts] = useState<CamperAdvert[]>(
    adverts
  );

  const applyFilters = useCallback(() => {
    const filtered = adverts.filter((advert) => {
      const matchesLocation = filters.location
        ? advert.location.toLowerCase().includes(filters.location.toLowerCase())
        : true;

      const matchesDetails = Object.entries(filters.details).every(
        ([key, value]) => {
          if (!value) return true;
          return advert.details[key as keyof Details] === 'true';
        }
      );

      const matchesForm = filters.form.length
        ? filters.form.includes(advert.form)
        : true;

      return matchesLocation && matchesDetails && matchesForm;
    });

    setFilteredAdverts(filtered);
  }, [filters, adverts]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const handleFilterChange = (newFilters: VehicleFilters) => {
    if (JSON.stringify(newFilters) !== JSON.stringify(filters)) {
      setFilters(newFilters);
    }
  };

  return { filteredAdverts, filters, handleFilterChange };
};

export default useFilteredAdverts;
