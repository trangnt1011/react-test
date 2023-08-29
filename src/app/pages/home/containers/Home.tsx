import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = (): JSX.Element => {
  const { t } = useTranslation('common');
  return (
    <>
      <div>{t('pages.homepage')}</div>
      <div>
        <img src="assets/images/banner.png" alt="Banner" />
      </div>
    </>
  );
};

export default Home;
