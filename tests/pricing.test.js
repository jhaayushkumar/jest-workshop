const { calculateFinalAmount } = require('../src/pricing');

describe('calculateFinalAmount', () => {
    test('should return the correct amount without any coupon', () => {
        expect(calculateFinalAmount(500, "")).toBe(500);
        expect(calculateFinalAmount(999, null)).toBe(999);
    });

    test('should apply 5% discount for subtotal >= 1000 without coupon', () => {
        expect(calculateFinalAmount(1000, "")).toBe(950);
        expect(calculateFinalAmount(2000, undefined)).toBe(1900);
    });

    test('should apply SAVE10 coupon (10% discount)', () => {
        expect(calculateFinalAmount(500, "SAVE10")).toBe(450);
    });

    test('should cap SAVE10 discount at 100', () => {
        expect(calculateFinalAmount(1500, "SAVE10")).toBe(1325);
    });

    test('should apply FLAT50 coupon (flat 50 discount)', () => {
        expect(calculateFinalAmount(500, "FLAT50")).toBe(450);
    });

    test('should apply FLAT50 coupon with 5% discount', () => {
        expect(calculateFinalAmount(1000, "FLAT50")).toBe(900);
    });

    test('should throw error for invalid subtotal', () => {
        expect(() => calculateFinalAmount(-100)).toThrow("Invalid subtotal");
        expect(() => calculateFinalAmount("100")).toThrow("Invalid subtotal");
        expect(() => calculateFinalAmount(NaN)).toThrow("Invalid subtotal");
    });

    test('should throw error for invalid coupon', () => {
        expect(() => calculateFinalAmount(100, "INVALID")).toThrow("Invalid Coupon");
    });

    test('should handle case-insensitive coupon codes', () => {
        expect(calculateFinalAmount(500, "save10")).toBe(450);
        expect(calculateFinalAmount(500, "flat50")).toBe(450);
        expect(calculateFinalAmount(500, "SaVe10")).toBe(450);
    });

    test('should return 0 if discount > total', () => {
        expect(calculateFinalAmount(40, "FLAT50")).toBe(0);
    });

    test('should round to 2 decimal places', () => {
        expect(calculateFinalAmount(10.123, "")).toBe(10.12);
    });
});
