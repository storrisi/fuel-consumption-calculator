# Fuel Consumption Calculator Library

A simple Js Library that calculates the cost of the necessary fuel to go through a path.

## How to use it

1. Clone this repo
2. Import the library into your project, you can use Js injection or ES6 import.
3. Instanciate a `new FuelConsumptionCalculator()` passing as a param an object that contains:
   * **distance** : the total distance of the travel
   * **fuelPer100Km**: the average consumption needed by a car to run across 100km
   * **fuelCost**: average cost of the fuel

4. Call `computeConsumption()` to have back an object that contains:
   * **distance** : the total distance of the travel
   * **fuelAmount** : the total fuel required by the travel
   * **totalCost** : the total cost required by the travel

## Available methods

* `computeConsumption()` : a method that calculates the amount of distance, fuel and costs given a travel;
* `addStage()`: you can even add intermediate stage to the travel. This will increase the amount of `distance` and `fuelAmount` to calculate the `totalCost`

## Working example

You can find a working example in the `sample` folder, just run `npm i` and suddenly `npm start` to start the example running in your browser.

### Example with default distance

```javascript
const fuelConsumption = new FuelConsumptionCalculator({
  distance: 10.1,
  fuelPer100Km: 6.2,
  fuelCost: 1.8,
})

// Return total costs
fuelConsumption.computeConsumption()
```

### Example with intermediate stages

```javascript
const fuelConsumption = new FuelConsumptionCalculator({
  fuelPer100Km: 6.2,
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
// Return total costs
fuelConsumption.computeConsumption()
```