function calculate() {
    // const crop = document.getElementById("crop").value;
    const urlParams = new URLSearchParams(window.location.search);
	const crop = urlParams.get('origin');
    let landSize = parseFloat(document.getElementById("land-size").value);
    let measurementType = document.getElementById("measurement-type").value;
    let totalCost, profit;

    if (measurementType === "bigha") {
        landSize = landSize * 0.619;
    } else if (measurementType === "hectare") {
        landSize = landSize * 2.47105;
    } else if (measurementType === "acre") {
        // Handle acre conversion if needed
    }

    if (crop === 'Wheat') {
        totalCost = 12210 * landSize;
        profit = 15390 * landSize;
    } else if (crop === 'Soybeans') {
        totalCost = 1476 * 81.97 * landSize;
        profit = 20979 * landSize;
    } else if (crop === 'Corn') {
        totalCost = 15200 * landSize;
        profit = 36000 * landSize;
    } else if (crop === 'Winter Wheat') {
        totalCost = 151.20 * 81.97 * landSize;
        profit = 173.80 * 81.97 * landSize;
    } else if(crop=='Rice'){
        totalCost=27940*landSize;
        profit=50975*landSize;
    } else if(crop=='Mustard'){
        totalCost=9493*landSize;
        profit=22707*landSize;
    }
    else {
        totalCost = 0;
        profit = 0;
    }

    totalCost = totalCost.toFixed(2);
    profit = profit.toFixed(2);

    document.getElementById("total-cost").value = totalCost;
    document.getElementById("total-profit").value = profit;

    return false;
}
