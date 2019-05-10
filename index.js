;(function() {
  class FuelConsumptionCalculator {
    constructor({ distance, fuelPer100Km, fuelCost }) {
      this.distance = parseFloat(distance) || 0
      this.fuelPer100Km = parseFloat(fuelPer100Km)
      this.fuelPerKm = parseFloat((fuelPer100Km / 100).toFixed(2))
      this.kmPerLiter = parseFloat((100 / fuelPer100Km).toFixed(2))
      this.fuelAmount = parseFloat(this.distance * this.fuelPerKm)
      this.fuelCost = parseFloat(fuelCost)
    }

    addStage({ distance }) {
      this.distance += distance
      this.fuelAmount = parseFloat(this.distance * this.fuelPerKm)
    }

    computeConsumption() {
      const totalCost = parseFloat((this.fuelAmount * this.fuelCost).toFixed(2))
      return {
        distance: this.distance,
        fuelAmount: this.fuelAmount,
        totalCost,
      }
    }
  }

  if (typeof module !== "undefined" && typeof module.exports !== "undefined")
    module.exports = FuelConsumptionCalculator
  else window.FuelConsumptionCalculator = FuelConsumptionCalculator
})()
