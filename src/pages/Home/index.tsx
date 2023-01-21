import ProductsTable from '../../components/ProductsTable';
import './Home.scss';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ChangeLanguage from '../../components/ChangeLanguage';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  if (location.pathname === '/') {
    document.body.classList.remove('blue-bg');
    document.body.classList.add('white-bg');
  }

  return (
    <div className="home">
      <div className="d-flex justify-content-between">
        <h1 className="home__title">{t('heading')}</h1>
        <ChangeLanguage />
      </div>
      <ProductsTable />
    </div>
  );
};

export default Home;
