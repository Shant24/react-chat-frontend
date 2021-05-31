import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import format from 'date-fns/format';
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

const excludedWordsForShowDate: string[] = ['year', 'month', 'day', 'days', 'лет', 'месяц', 'день'];
const excludedWordsForShowTime: string[] = ['hour', 'hours', 'час', 'часов'];

export const formatDateDistance = (date: DateType, showTime: boolean = false, locale: LocaleType = 'us'): string => {
  let formattedDate = formatDistanceToNowStrict(new Date(date), {
    addSuffix: true,
    locale: localeArr[locale],
    roundingMethod: 'floor',
  });

  // TODO: change functionality
  excludedWordsForShowDate.forEach((word) => {
    if (formattedDate.includes(word)) {
      formattedDate = getDate(date);
    }
  });

  if (showTime) {
    return `${formattedDate}, ${getTime(date)}`;
  }

  excludedWordsForShowTime.forEach((word) => {
    if (formattedDate.includes(word)) {
      formattedDate = getTime(date, false);
    }
  });

  return formattedDate;
};

export const getDate = (date: DateType) => {
  return format(new Date(date), 'dd.mm.yyyy');
};

export const getTime = (date: DateType, isShowSeconds: boolean = true) => {
  return format(new Date(date), isShowSeconds ? 'HH:mm:ss' : 'HH:mm');
};
