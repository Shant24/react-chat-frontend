import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import isThisMonth from 'date-fns/isThisMonth';
import isThisHour from 'date-fns/isThisHour';
import enUS from 'date-fns/locale/en-US';
import ru from 'date-fns/locale/ru';
import hy from 'date-fns/locale/hy';

type DateType = Date | string | number;
type LocaleType = 'us' | 'ru' | 'hy';

const localeArr = {
  us: enUS,
  ru,
  hy,
};

export const formatDateDistance = (preDate: DateType, isShowTime?: boolean, locale: LocaleType = 'us'): string => {
  const date = new Date(preDate);

  if (isShowTime && !isThisMonth(date)) return `${getDate(date)}, ${getTime(date)}`;

  const formattedDate = formatDistanceToNowStrict(date, {
    addSuffix: true,
    locale: localeArr[locale],
    roundingMethod: 'floor',
  });

  if (isShowTime) return `${formattedDate}, ${getTime(date)}`;
  if (isThisHour(date)) return formattedDate;
  if (isToday(date)) return getTime(date, false);
  if (isThisMonth(date)) return formattedDate;

  return getDate(date);
};

export const getDate = (date: DateType) => {
  return format(new Date(date), 'dd.MM.yyyy');
};

export const getTime = (date: DateType, isShowSeconds?: boolean) => {
  return format(new Date(date), isShowSeconds ? 'HH:mm:ss' : 'HH:mm');
};
