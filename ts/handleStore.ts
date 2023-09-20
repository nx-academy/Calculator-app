type Store = {
  operations: string[]
}

const store: Store = {
  operations: []
}

function createStore(): Store {
    return {
        operations: []
    }
}

function updateStore(store: Store, operation: string): Store {
    const newStore = {
        operations: [...store.operations, operation]
    }

    return newStore
}

export {
    store,
    updateStore,
    createStore
}
