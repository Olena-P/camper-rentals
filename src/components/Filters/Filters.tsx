import { Box, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { fetchAdverts } from '../../services/camper';
import CustomButton from '../buttons/CustomButton';
import SelectController from '../forms/SelectController/SelectController';
import { SelectChangeEvent } from '@mui/material';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
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
import CustomModal from '../modals/CustomModal';

interface FiltersProps {
  filters: VehicleFilters;
  onChange: (filters: VehicleFilters) => void;
}

const Filters = ({ filters, onChange }: FiltersProps) => {
  const theme = useTheme();
  const [location, setLocation] = useState(filters.location);
  const [details, setDetails] = useState(filters.details);
  const [form, setForm] = useState(filters.form);
  const [locationsOptions, setLocationsOptions] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchAdverts().then((adverts) => {
      const locations = Array.from(
        new Set(adverts.map((advert) => advert.location))
      );
      setLocationsOptions((prevOptions) =>
        JSON.stringify(prevOptions) !== JSON.stringify(locations)
          ? locations
          : prevOptions
      );
    });
  }, []);

  const updateFilters = useCallback(() => {
    if (
      location !== filters.location ||
      JSON.stringify(details) !== JSON.stringify(filters.details) ||
      JSON.stringify(form) !== JSON.stringify(filters.form)
    ) {
      onChange({ location, details, form });
    }
  }, [location, details, form, filters, onChange]);

  useEffect(() => {
    updateFilters();
  }, [location, details, form, updateFilters]);

  const handleLocationChange = (event: SelectChangeEvent<string>) => {
    setLocation(event.target.value);
  };

  const handleDetailChange = (id: string) => {
    setDetails((prev) => ({
      ...prev,
      [id]: prev[id as keyof typeof details] === 'true' ? '' : 'true',
    }));
  };

  const handleFormChange = (name: string) => {
    setForm((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const handleClearFilters = () => {
    setLocation(initialFilters.location);
    setDetails(initialFilters.details);
    setForm(initialFilters.form);
    onChange(initialFilters);
  };

  const isDetailSelected = (id: string) =>
    details[id as keyof typeof details] === 'true';

  const FilterIcon = ({
    icon,
    id,
    name,
    handleChange,
  }: {
    icon: string;
    id: string;
    name: string;
    handleChange: (id: string) => void;
  }) => (
    <FilterIconBox
      selected={isDetailSelected(id)}
      onClick={() => handleChange(id)}
    >
      <img src={icon} alt={name} style={{ width: '32px' }} />
      <Typography variant="body2" textAlign="center">
        {name}
      </Typography>
    </FilterIconBox>
  );

  const renderFilters = useMemo(() => {
    return (
      <>
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
                id={option.id}
                name={option.name}
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
                id={option.id}
                name={option.name}
                handleChange={handleFormChange}
              />
            </GridItem>
          ))}
        </Grid>

        <Box sx={{ mt: '64px' }}>
          <CustomButton
            variant="outlined"
            aria-label="Clear Filters"
            onClick={handleClearFilters}
          >
            Clear Filters
          </CustomButton>
        </Box>
      </>
    );
  }, [location, details, form, locationsOptions]);

  return (
    <>
      {isDesktop ? (
        <Box>{renderFilters}</Box>
      ) : (
        <>
          <CustomButton
            aria-expanded={isModalOpen}
            onClick={() => setIsModalOpen(true)}
            aria-controls="filters"
            aria-label="Filters"
            sx={{
              position: 'fixed',
              top: '70px',
              right: '24px',
              zIndex: 100,
            }}
          >
            <FilterListRoundedIcon /> Filters
          </CustomButton>

          <CustomModal
            open={isModalOpen}
            onClose={handleModalClose}
            title="Фільтрувати"
          >
            {renderFilters}
          </CustomModal>
        </>
      )}
    </>
  );
};

export default Filters;
