const FuelConsumptionCalculator = require("../")

describe("FuelConsumption", () => {
  it("initialize without crashing", () => {
    const fuelConsumption = new FuelConsumptionCalculator({
      distance: 1,
      fuelPer100Km: 5,
      fuelCost: 1,
    })
    expect(fuelConsumption.distance).toEqual(1)
    expect(fuelConsumption.fuelPer100Km).toEqual(5)
    expect(fuelConsumption.fuelCost).toEqual(1)
    expect(fuelConsumption.fuelPerKm).toEqual(0.05)
    expect(fuelConsumption.kmPerLiter).toEqual(20)
    expect(fuelConsumption.fuelAmount).toEqual(0.05)
  })
  it("calculate a standard route consumption", () => {
    const fuelConsumption = new FuelConsumptionCalculator({
      distance: 10.1,
      fuelPer100Km: 6.2,
      fuelCost: 1.8,
    })
    expect(fuelConsumption.computeConsumption()).toEqual({
      distance: 10.1,
      fuelAmount: 0.606,
      totalCost: 1.09,
    })
  })
  it("add intermediate stages", () => {
    //Initialize without a distance
    const fuelConsumption = new FuelConsumptionCalculator({
      fuelPer100Km: 5,
      fuelCost: 1.8,
    })
    // Adding an intermediate stage
    fuelConsumption.addStage({ distance: 10 })
    // Adding an intermediate stage
    fuelConsumption.addStage({ distance: 3 })
    // Adding an intermediate stage
    fuelConsumption.addStage({ distance: 8.4 })
    // Adding an intermediate stage
    fuelConsumption.addStage({ distance: 2 })
    // Calculate total consumption
    expect(fuelConsumption.computeConsumption()).toEqual({
      distance: 23.4,
      fuelAmount: 1.17,
      totalCost: 2.11,
    })
  })
})
