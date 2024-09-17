import { useState, useEffect, useTransition } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);

  const [isPending, startTransition] = useTransition();
  const { filteredAdverts } = useFilteredAdverts(adverts, filters);

  useEffect(() => {
    const fetchAndSetAdverts = async () => {
      setIsLoading(true);
      const data = await fetchAdverts();
      setAdverts(data);
      setIsLoading(false);
    };

    fetchAndSetAdverts();
  }, []);

  const loadMore = () => startTransition(() => setPage((prev) => prev + 1));

  const hasMoreItems = filteredAdverts.length > page * ITEMS_PER_PAGE;

  return (
    <Container maxWidth="xl" sx={{ padding: { xs: '20px', sm: '32px 64px' } }}>
      <Grid container spacing="64px">
        <Grid item xs={12} lg={4}>
          <Filters
            filters={filters}
            onChange={(newFilters) => {
              startTransition(() => setFilters(newFilters));
            }}
          />
        </Grid>
        <Grid container item xs={12} lg={8} spacing={4}>
          {isLoading ? (
            <Grid item xs={12}>
              <Typography variant="h6" color="textSecondary">
                Loading campers...
              </Typography>
            </Grid>
          ) : filteredAdverts.length === 0 && !isPending ? (
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
          {isPending && (
            <Grid item xs={12}>
              <Typography variant="h6" color="textSecondary">
                Loading...
              </Typography>
            </Grid>
          )}
          {hasMoreItems && !isLoading && (
            <Grid item xs={12}>
              <CustomButton
                variant="outlined"
                onClick={loadMore}
                disabled={isPending}
              >
                {isPending ? 'Loading...' : 'Load More'}
              </CustomButton>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Catalog;
