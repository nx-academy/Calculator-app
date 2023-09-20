import { describe, it, expect } from 'vitest'

import { updateStore, createStore } from './handleStore'

describe("createStore Unit Test Suites", () => {
    it('should return something', () => {
        expect(createStore()).toBeDefined()
    })

    it('should have an operations array', () => {
        expect(Array.isArray(createStore().operations)).toBe(true)
    })
})

describe("updateStore Unit Test Suites", () => {
    it('should return something', () => {
        const store = createStore()
        expect(updateStore(store, "2")).toBeDefined()
    })

    it('should create a new store', () => {
        const store = createStore()
        const newStore = updateStore(store, "+")
        expect(store.operations).not.toContain("+")
        expect(newStore.operations).toContain("+")
    })
})