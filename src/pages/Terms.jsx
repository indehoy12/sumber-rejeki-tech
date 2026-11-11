import LegalPage from './LegalPage';
import { useLanguage } from '../hooks/useLanguage';

const Terms = () => {
  const { t } = useLanguage();
  return <LegalPage content={t.termsPage} />;
};
export default Terms;
