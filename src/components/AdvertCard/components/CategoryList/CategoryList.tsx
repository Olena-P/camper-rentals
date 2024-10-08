import { Box, Typography } from '@mui/material';
import { Details } from '../../../../services/camper';
import { CategoryItem } from './CategoryList.styled';
import { detailsConfig } from '../../../../config/detailsConfig';

interface CategoryListProps {
  details: Details;
}

const CategoryList = ({ details }: CategoryListProps) => {
  return (
    <Box component="ul" sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {Object.entries(details).map(([key, value]) => {
        if (value === 0) return null;

        const { icon, name } =
          detailsConfig[key as keyof typeof detailsConfig] || {};

        return (
          <CategoryItem component="li" key={key}>
            {icon && <img src={icon} alt={name} style={{ width: '20px' }} />}
            {!(value === 1 && key !== 'beds') && (
              <Typography variant="body2" color="textSecondary">
                {value}
              </Typography>
            )}
            <Typography variant="body2">{name || key}</Typography>
          </CategoryItem>
        );
      })}
    </Box>
  );
};

export default CategoryList;
