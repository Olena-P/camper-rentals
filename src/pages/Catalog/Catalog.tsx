import { useState, useEffect } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import AdvertCard from '../../components/AdvertCard';
import { fetchAdverts, CamperAdvert } from '../../services/camper';
import CustomButton from '../../components/buttons/CustomButton';
import Filters from '../../components/Filters';
import useFilteredAdverts from '../../hooks/useFilteredAdverts';
import {
  initialFilters,
  VehicleFilters,
} from '../../redux/filters/filterProperties';

const ITEMS_PER_PAGE = 4;

const Catalog = () => {
  const [adverts, setAdverts] = useState<CamperAdvert[]>([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<VehicleFilters>(initialFilters);

  const { filteredAdverts } = useFilteredAdverts(adverts, filters);

  useEffect(() => {
    const fetchAndSetAdverts = async () => {
      const data = await fetchAdverts();
      setAdverts(data);
    };

    fetchAndSetAdverts();
  }, []);

  const loadMore = () => setPage((prev) => prev + 1);

  const hasMoreItems = filteredAdverts.length > page * ITEMS_PER_PAGE;

  return (
    <Container maxWidth="xl" sx={{ padding: { xs: '20px', sm: '32px 64px' } }}>
      <Grid container spacing="64px">
        <Grid item xs={12} lg={4}>
          <Filters
            filters={filters}
            onChange={(newFilters) => {
              setFilters(newFilters);
            }}
          />
        </Grid>
        <Grid container item xs={12} lg={8} spacing={4}>
          {filteredAdverts.length === 0 ? (
            <Grid item xs={12}>
              <Typography variant="h6" color="textSecondary">
                No campers match your search criteria.
              </Typography>
            </Grid>
          ) : (
            filteredAdverts.slice(0, page * ITEMS_PER_PAGE).map((advert) => (
              <Grid item key={advert._id} xs={12}>
                <AdvertCard advert={advert} />
              </Grid>
            ))
          )}
          {hasMoreItems && (
            <Grid item xs={12}>
              <CustomButton variant="outlined" onClick={loadMore}>
                Load More
              </CustomButton>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Catalog;
