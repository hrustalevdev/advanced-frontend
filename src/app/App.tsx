import { DefaultLayout } from './layouts';
import { Providers } from './providers';

export const App = () => {
  return (
    <Providers>
      <DefaultLayout />
    </Providers>
  )
}
