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

    it('should make a sum', () => {
        const operations = ["1", "+", "2"]
        expect(handleCalculation(operations)).toEqual(3)
    })

    it('should make a substraction', () => {
        const operations = ["4", "-", "1"]
        expect(handleCalculation(operations)).toEqual(3)
    })

    it('should make a division', () => {
        const operations = ["10", "/", "2"]
        expect(handleCalculation(operations)).toEqual(5)
    })

    it('should make a multiplication', () => {
        const operations = ["10", "x", "2"]
        expect(handleCalculation(operations)).toEqual(20)
    })
})


