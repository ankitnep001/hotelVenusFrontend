import * as yup from 'yup';

export const bookingSchema = () => {
    const schema = yup.object({
        name: yup.string()
            .required('Name is required'),

        numberOfRoom: yup.number()
            .min(1, 'Number of room must be at least 1')
            .required('Number of room is required'),

        rooms: yup.array()
            .of(yup.string().required('Room selection is required'))
            .min(1, 'At least one room must be selected')
            .required('Rooms are required'),

        checkInDate: yup.date()
            .required('Check-in date is required')
            .min(new Date(), 'Check-in date cannot be in the past'),

        checkOutDate: yup.date()
            .required('Check-out date is required')
            .min(yup.ref('checkInDate'), 'Check-out date cannot be before check-in date'),
    });

    return schema;
}
