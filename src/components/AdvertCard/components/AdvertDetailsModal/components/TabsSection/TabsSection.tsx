import { Box, Tabs, Tab } from '@mui/material';

interface TabsSectionProps {
  activeTab: number;
  handleTabChange: (newValue: number) => void;
}

const TabsSection = ({ activeTab, handleTabChange }: TabsSectionProps) => (
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs
      value={activeTab}
      onChange={(_event, newValue) => handleTabChange(newValue)}
      TabIndicatorProps={{ sx: { height: '5px' } }}
      sx={{ gap: '40px' }}
    >
      <Tab
        label="Features"
        sx={{
          typography: 'h1',
          color: 'text.primary',
          padding: '22px 0',
          marginRight: '40px',
          '&.Mui-selected': { color: 'text.primary' },
        }}
      />
      <Tab
        label="Reviews"
        sx={{
          color: 'text.primary',
          typography: 'h1',
          padding: '22px 0',
          '&.Mui-selected': { color: 'text.primary' },
        }}
      />
    </Tabs>
  </Box>
);

export default TabsSection;
