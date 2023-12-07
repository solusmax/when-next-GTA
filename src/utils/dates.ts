import { DateTime } from 'luxon';

export const getDaysFromRightNow = (dateTime: DateTime) => {
  const days = dateTime.diffNow('days').days;

  return Math.floor(days);
};
