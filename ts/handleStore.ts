type Store = {
  operations: string[];
};

function createStore(): Store {
  return {
    operations: [],
  };
}

function updateStore(store: Store, operation: string): Store {
  const newStore = {
    operations: [...store.operations, operation],
  };

  return newStore;
}

export { Store, updateStore, createStore };
