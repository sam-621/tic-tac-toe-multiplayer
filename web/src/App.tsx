import { WrapperUi } from '@/shared/wrappers';
import { AppConfigWrapper } from '@/wrappers/app-config-wrapper';

import { HomePage } from './pages';

function App() {
  return (
    <AppConfigWrapper>
      <WrapperUi>
        <HomePage />
      </WrapperUi>
    </AppConfigWrapper>
  );
}

export default App;
