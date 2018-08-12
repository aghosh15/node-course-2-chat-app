const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        expect(isRealString(12)).toBe(false);
        expect(isRealString(null)).toBe(false);
        expect(isRealString(true)).toBe(false);
        expect(isRealString(undefined)).toBe(false);
    });

    it('should reject string with only spaces', () => {
        expect(isRealString('')).toBe(false);
        expect(isRealString('     ')).toBe(false);
    });

    it('should allow strings with non-space characters', () => {
        expect(isRealString('  Actual string     ')).toBe(true);
    });
});