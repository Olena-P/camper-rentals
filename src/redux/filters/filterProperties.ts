interface VehicleDetails {
  airConditioner: string;
  kitchen: string;
  TV: string;
  bathroom: string;
}

export interface VehicleFilters {
  location: string;
  details: VehicleDetails;
  form: string[];
}

export const initialFilters: VehicleFilters = {
  location: '',
  details: {
    airConditioner: '',
    kitchen: '',
    TV: '',
    bathroom: '',
  },
  form: [],
};
