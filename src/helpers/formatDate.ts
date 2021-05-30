import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import usLocale from 'date-fns/locale/en-US';

type DateType = Date | string | number;

export const formatDateDistance = (date: DateType) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true, locale: usLocale });
};

export const getLocalTime = (date: DateType) => {
  return new Date(date).toLocaleTimeString('ru-RU');
};
