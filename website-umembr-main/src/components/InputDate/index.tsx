import { useEffect, useState, FC } from 'react';
import { Box, ClickAwayListener, TextFieldProps, Typography } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { palette } from '../../theme/constants';
import moment from 'moment';
import { styles } from './styles';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

interface IAditionalProps {
  name: string;
  ref: any;
  handleDatePicker: any;
  value: string;
  disableFuture?: boolean;
  disablePast?: boolean;
  setCurrentDateByDefault?: boolean;
  views?: any;
  inputFormat?: any;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  placeholder?: string;
  isDarkTheme?: boolean;
}

type Props = TextFieldProps | IAditionalProps;

export const MuiInputDate: FC<Props> = ({
  handleDatePicker,
  value,
  disablePast = false,
  disableFuture = false,
  setCurrentDateByDefault = true,
  disabled = false,
  views = null,
  inputFormat = 'MM/DD/YYYY',
  label = '',
  error = false,
  errorMessage = '',
  placeholder = 'Select',
  isDarkTheme = true,
  onChange,
  name,
}: any) => {
  const { t } = useTranslation();
  const [date, setNewDate] = useState(value ? value : setCurrentDateByDefault ? new Date() : '');
  const [show, setShow] = useState(false);

  const setShowCalendar = () => setShow(!show);

  useEffect(() => {
    setNewDate(value);
  }, [value]);
  const validateDate = (date: any) => {
    const year = new Date(date).getFullYear();
    if (year >= 1900 && year < 2100) {
      setNewDate(date);
      handleDatePicker(date);
    }
  };

  return (
    <ClickAwayListener onClickAway={() => setShow(false)}>
      <Box position={'relative'} sx={isDarkTheme ? styles(error).darkTheme : styles(error).lightTheme}>
        <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={'en'}>
          <DatePicker
            onOpen={() => setShow(true)}
            open={show}
            value={date !== '' && date !== null ? moment(date) : null}
            views={views}
            label={t(label)}
            data-cy='input-component'
            disableFuture={disableFuture}
            disablePast={disablePast}
            disabled={disabled}
            dayOfWeekFormatter={(day) => day.toUpperCase()}
            onChange={(date: any) => {
              setShowCalendar();
              setNewDate(date);
              handleDatePicker(date);
              if (onChange) onChange(name, date);
            }}
            format={inputFormat}
            slotProps={{
              textField: {
                InputProps: {
                  startAdornment: !isDarkTheme ? (
                    <Image src={`/icons/calendar.svg`} alt={'calendar'} width={24} height={24} quality={80} />
                  ) : (
                    <Image src={`/icons/calendar.svg`} alt={'calendar'} width={24} height={24} quality={80} />
                  ),
                },
                onClick: () => {
                  setShow(true);
                },
                value: date !== '' && date !== null ? moment(date) : null,
                onChange: (value) => {
                  validateDate(value);
                },
                placeholder: t(placeholder),
                sx: {
                  width: '100%',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: error && palette?.error,
                  },

                  '&. MuiDateCalendar-root': {
                    width: '100%',
                  },
                },
              },
              inputAdornment: {
                position: 'end',
              },
            }}
            slots={{
              openPickerIcon: () =>
                isDarkTheme ? (
                  <Image src={`/icons/down-arrow-dark.svg`} alt={'down-arrow'} width={15} height={15} quality={80} />
                ) : (
                  <Image src={`/icons/down-arrow-dark.svg`} alt={'down-arrow'} width={15} height={15} quality={80} />
                ),
            }}
          />
          {error && (
            <Typography
              position={'absolute'}
              bottom={-21}
              left={15}
              fontSize={'0.75rem'}
              fontWeight={400}
              color={palette.error}>
              {t(errorMessage)}
            </Typography>
          )}
        </LocalizationProvider>
      </Box>
    </ClickAwayListener>
  );
};
