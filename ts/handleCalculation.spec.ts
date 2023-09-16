import { describe, expect, it } from 'vitest'

import handleCalculation from './handleCalculation'

describe('handleCalculation Unit Test Suites', () => {
    it('should return something', () => {
        const operations = ["1", "+", "2"]
        expect(handleCalculation(operations)).toBeDefined()
    })


    it('should return a number', () => {
        const operations = ["1", "+", "2"]
        expect(typeof handleCalculation(operations)).toBe('number')
    })
})


