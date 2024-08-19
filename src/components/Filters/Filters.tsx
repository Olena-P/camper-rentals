import { Box, Typography, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { fetchAdverts } from '../../services/camper';
import CustomButton from '../buttons/CustomButton';
import SelectController from '../forms/SelectController/SelectController';
import { SelectChangeEvent } from '@mui/material';
import {
  FilterIconBox,
  FilterTitle,
  FilterSubtitle,
  StyledDivider,
  GridItem,
} from './Filters.styled';
import { detailsOptions, formOptions } from '../../config/filtersConfig';
import {
  initialFilters,
  VehicleFilters,
} from '../../redux/filters/filterProperties';

interface FiltersProps {
  filters: VehicleFilters;
  onChange: (filters: VehicleFilters) => void;
}

const Filters = ({ filters, onChange }: FiltersProps) => {
  const [location, setLocation] = useState(filters.location);
  const [details, setDetails] = useState(filters.details);
  const [form, setForm] = useState(filters.form);
  const [locationsOptions, setLocationsOptions] = useState<string[]>([]);

  useEffect(() => {
    fetchAdverts().then((adverts) => {
      const locations = Array.from(
        new Set(adverts.map((advert) => advert.location))
      );
      if (JSON.stringify(locations) !== JSON.stringify(locationsOptions)) {
        setLocationsOptions(locations);
      }
    });
  }, [locationsOptions]);

  useEffect(() => {
    if (
      location !== filters.location ||
      JSON.stringify(details) !== JSON.stringify(filters.details) ||
      JSON.stringify(form) !== JSON.stringify(filters.form)
    ) {
      onChange({ location, details, form });
    }
  }, [location, details, form, filters, onChange]);

  const handleLocationChange = (event: SelectChangeEvent<string>) => {
    setLocation(event.target.value);
  };

  const handleDetailChange = (name: string) => {
    setDetails((prev) => ({
      ...prev,
      [name]: prev[name as keyof typeof details] === 'true' ? '' : 'true',
    }));
  };

  const handleFormChange = (name: string) => {
    if (form.includes(name)) {
      setForm(form.filter((item) => item !== name));
    } else {
      setForm([...form, name]);
    }
  };

  const handleSearchFilters = () => {
    onChange({ location, details, form });
  };

  const handleClearFilters = () => {
    const clearedFilters: VehicleFilters = initialFilters;
    setLocation(clearedFilters.location);
    setDetails(clearedFilters.details);
    setForm(clearedFilters.form);
    onChange(clearedFilters);
  };

  const isDetailSelected = (key: string) =>
    details[key as keyof typeof details] === 'true';

  const FilterIcon = ({
    icon,
    name,
    selectedItems,
    handleChange,
  }: {
    icon: string;
    name: string;
    selectedItems: string[];
    handleChange: (name: string) => void;
  }) => (
    <FilterIconBox
      selected={selectedItems.includes(name)}
      onClick={() => handleChange(name)}
    >
      <img src={icon} alt={name} style={{ width: '32px' }} />
      <Typography variant="body2" textAlign="center">
        {name}
      </Typography>
    </FilterIconBox>
  );

  return (
    <Box>
      <FilterTitle variant="h6">Location</FilterTitle>

      <SelectController
        value={location}
        onChange={handleLocationChange}
        options={locationsOptions}
        placeholder="City"
        icon={
          <img
            src="/icons/location.svg"
            alt="Location"
            style={{ width: '16px' }}
          />
        }
      />

      <FilterSubtitle variant="h6">Filters</FilterSubtitle>

      <Typography variant="subtitle1" sx={{ mt: '14px' }}>
        Vehicle equipment
      </Typography>
      <StyledDivider />
      <Grid container spacing={2}>
        {detailsOptions.map((option) => (
          <GridItem item xs={6} sm={4} key={option.id}>
            <FilterIcon
              icon={option.icon}
              name={option.name}
              selectedItems={Object.keys(details).filter(isDetailSelected)}
              handleChange={handleDetailChange}
            />
          </GridItem>
        ))}
      </Grid>

      <Typography variant="subtitle1" sx={{ mt: '32px' }}>
        Vehicle type
      </Typography>
      <StyledDivider />
      <Grid container spacing={2}>
        {formOptions.map((option) => (
          <GridItem item xs={6} sm={4} key={option.id}>
            <FilterIcon
              icon={option.icon}
              name={option.name}
              selectedItems={form}
              handleChange={handleFormChange}
            />
          </GridItem>
        ))}
      </Grid>

      <Box sx={{ mt: '64px' }}>
        <CustomButton onClick={handleSearchFilters} sx={{ mr: 2 }}>
          Search
        </CustomButton>
        <CustomButton variant="outlined" onClick={handleClearFilters}>
          Clear Filters
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Filters;
