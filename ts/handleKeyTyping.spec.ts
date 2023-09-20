import { describe, it, expect } from 'vitest'

import { handleKeyTyping } from './handleKeyTyping'

describe('handleKeyTyping Unit Test Suites', () => {
    it('should return something', () => {
        expect(handleKeyTyping("0", "1")).toBeDefined()
    })

    it('should return a string', () => {
        expect(typeof handleKeyTyping("0", "1")).toBe("string")
    })

    it('should return 1', () => {
        expect(handleKeyTyping("0", "1")).toEqual("1")
    })

    it('should return 10', () => {
        expect(handleKeyTyping("1", "0")).toBe("10")
    })
})

