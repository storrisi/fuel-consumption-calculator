
class FuelConsumptionCalculator {
    constructor(distance, fuelAmount, fuelCost) {
        this.distance = distance
        this.fuelAmount = fuelAmount
        this.fuelCost = fuelCost
    }

    computeConsumption() {
        const consumed =  (this.fuelAmount / (this.distance/100)).toFixed(2);
        const costper100 = (consumed * this.fuelCost).toFixed(2);
        const totalCost = (this.fuelAmount*this.fuelCost).toFixed(2)
        return {consumed, costper100, totalCost}
    }
}

export default FuelConsumptionCalculator