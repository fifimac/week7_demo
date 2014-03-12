describe ("My Converter", function() {
    it("should convert imperial weight to metric", function() {
        expect (Converter.convertFromImperialToMetric(2.2)).toBe(1);
    })
    it("should be able to deal with strings", function() {
        expect (function() {Converter.convertFromImperialToMetric("hello")}).toThrow(new Error("Not a number"));
    })

    it("should be able to convert kilos to pounds", function() {
       expect (Converter.convertFromMetricToImperial(1)).toBe(2.2);
    })

    it("should be able to convert From Acre To Square Meter", function() {
       expect (Converter.convertFromAcreToSquareMeter(1)).toBe(4046.86);
    })

})
