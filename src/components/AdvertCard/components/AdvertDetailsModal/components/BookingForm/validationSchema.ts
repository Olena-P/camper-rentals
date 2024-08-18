import * as yup from 'yup';

export const bookingFormSchema = yup.object({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s]+$/,
      'Name can only contain letters and spaces'
    )
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .required('Name is required'),

  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),

  bookingDate: yup
    .string()
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      'Booking date must be in the format YYYY-MM-DD'
    )
    .required('Booking date is required'),

  comment: yup.string().max(300, 'Comment cannot exceed 300 characters'),
});
