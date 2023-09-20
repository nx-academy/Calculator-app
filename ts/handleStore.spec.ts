import { describe, it, expect, beforeEach } from "vitest";

import { updateStore, createStore, Store } from "./handleStore";

describe("createStore Unit Test Suites", () => {
  it("should return something", () => {
    expect(createStore()).toBeDefined();
  });

  it("should have an operations array", () => {
    expect(Array.isArray(createStore().operations)).toBe(true);
  });
});

describe("updateStore Unit Test Suites", () => {
  let store: Store;

  beforeEach(() => {
    store = createStore();
  });

  it("should return something", () => {
    expect(updateStore(store, "2")).toBeDefined();
  });

  it("should create a new store and not update the existing one", () => {
    const newStore = updateStore(store, "+");
    expect(store.operations).not.toContain("+");
    expect(newStore.operations).toContain("+");
  });

  it("should contains the following operation '1', '+', '2'", () => {
    const newStore = updateStore(store, "1");
    const newNewStore = updateStore(newStore, "+");
    const newNewNewStore = updateStore(newNewStore, "2");

    expect(newNewNewStore.operations[0]).toEqual("1");
    expect(newNewNewStore.operations[1]).toEqual("+");
    expect(newNewNewStore.operations[2]).toEqual("2");
  });
});
