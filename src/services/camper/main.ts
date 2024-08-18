import axios from 'axios';
import { CamperAdvert } from './entities';

const serverBaseURL = import.meta.env.VITE_SERVER_BASE_URL;

export const main = async (): Promise<CamperAdvert[]> => {
  const url = `${serverBaseURL}/camper-rent/adverts`;

  try {
    const response = await axios.get<CamperAdvert[]>(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('some error', error);
    return [] as CamperAdvert[];
  }
};
