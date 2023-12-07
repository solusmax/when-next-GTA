import { useEffect, useState } from 'react';

import { ReleaseDate } from '@/consts/dates';
import { getDaysFromRightNow } from '@/utils/dates';

export default function Timer(): JSX.Element {
  const getDaysUntilGTA6Release = () => getDaysFromRightNow(ReleaseDate.GTA6);

  const [daysUntilGTA6Release, setDaysUntilGTA6Release] = useState(
    getDaysUntilGTA6Release(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDaysUntilGTA6Release(getDaysUntilGTA6Release());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div>
        <a href="https://www.rockstargames.com/VI">GTA VI</a> is at least
        {daysUntilGTA6Release} days away from release.
      </div>
    </>
  );
}
