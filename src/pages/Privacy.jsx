import LegalPage from './LegalPage';
import { useLanguage } from '../hooks/useLanguage';

const Privacy = () => {
  const { t } = useLanguage();
  return <LegalPage content={t.privacyPage} />;
};
export default Privacy;
