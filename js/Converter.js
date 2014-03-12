var Converter = (function () {
    // private stuff goes here
    var ConverterValue = 2.2;
    var AcreToSquareMeter = 4046.86;
    return {

        convertFromImperialToMetric: function (weight) {
        	var num = parseInt(weight);
        	if (isNaN(num) == true){
        		throw new Error ("Not a number");
        	}
        	num = num/ConverterValue;
        	return Math.round(num);
        },

        convertFromMetricToImperial: function (weight) {
        	var num = parseInt(weight);
        	num = ConverterValue/num;
        	return num;
        },

        convertFromAcreToSquareMeter: function (weight) {
        	var num = parseInt(weight);
        	num = AcreToSquareMeter/num;
        	return num;
        }


    }

})();
