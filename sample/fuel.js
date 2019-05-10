/* eslint wrap-iife: [2, "inside", { functionPrototypeMethods: true }] */

;(function() {
  const fuelConsumption = new FuelConsumptionCalculator({ distance: 1 })
  console.log("fuelConsumption", fuelConsumption.distance)
})()

function computeConsumption() {
  alert("fuelConsumption")
}
