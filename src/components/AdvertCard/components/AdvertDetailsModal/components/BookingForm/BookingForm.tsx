import { useForm, SubmitHandler } from 'react-hook-form';
import { Box, Typography } from '@mui/material';
import { bookingFormSchema } from './validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePickerController from '../../../../../forms/DatePickerController';
import CustomButton from '../../../../../buttons/CustomButton';
import TextFieldController from '../../../../../forms/TextFieldController';

export interface BookingFormData {
  name: string;
  email: string;
  bookingDate: string;
  comment?: string;
}

interface BookingFormProps {
  onSubmit: SubmitHandler<BookingFormData>;
}

const BookingForm = ({ onSubmit }: BookingFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: yupResolver(bookingFormSchema),
    defaultValues: {
      name: '',
      email: '',
      bookingDate: '',
      comment: '',
    },
  });

  const handleFormSubmit: SubmitHandler<BookingFormData> = (data) => {
    const formattedData = {
      ...data,
      bookingDate: new Date(data.bookingDate).toISOString(),
    };

    onSubmit(formattedData);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(handleFormSubmit)}
      sx={{
        display: 'inline-flex',
        padding: '16px',
        flexDirection: 'column',
        borderRadius: '12px',
        border: '1px solid rgba(16, 24, 40, 0.20)',
        background: '#FFF',
      }}
    >
      <Typography variant="h2">Book your campervan now</Typography>
      <Typography variant="subtitle2" m="8px 0 10px">
        Stay connected! We are always ready to help you.
      </Typography>
      <Box mb="24px">
        <TextFieldController
          name="name"
          control={control}
          placeholder="Name"
          error={!!errors.name}
          helperText={errors.name?.message}
          id="name-field"
          aria-label="Name"
        />
        <TextFieldController
          name="email"
          control={control}
          placeholder="Email"
          error={!!errors.email}
          helperText={errors.email?.message}
          id="email-field"
          aria-label="Email"
        />
        <DatePickerController
          name="bookingDate"
          control={control}
          placeholder="Booking Date"
          error={!!errors.bookingDate}
          helperText={errors.bookingDate?.message}
          id="booking-date-field"
          aria-label="Booking Date"
        />
        <TextFieldController
          name="comment"
          control={control}
          placeholder="Comment"
          multiline
          rows={4}
          error={!!errors.comment}
          helperText={errors.comment?.message}
          id="comment-field"
          aria-label="Comment"
        />
      </Box>

      <CustomButton
        type="submit"
        variant="contained"
        color="primary"
        aria-label="Send booking form"
      >
        Send
      </CustomButton>
    </Box>
  );
};

export default BookingForm;
