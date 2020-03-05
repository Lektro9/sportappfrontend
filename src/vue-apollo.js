// vue-apollo.js
import { persistCache } from 'apollo-cache-persist';

export async function willCreateProvider() {
  await persistCache({ cache, storage: window.localStorage });
}
