const key = 'REACT_PROPERTY_LIST_SESSION';

const initialDefaultState = {
  properties: [],
  isLoading: false,
};

export const loadState = () => {
  try {
    const persistedState = sessionStorage.getItem(key);
    if (persistedState === null) {
      return initialDefaultState;
    }

    return JSON.parse(persistedState);
  } catch {
    return undefined;
  }
};

export const saveState = state => {
  try {
    sessionStorage.setItem(key, JSON.stringify(state));
  } catch {
    // implement error scenario.
  }
}
