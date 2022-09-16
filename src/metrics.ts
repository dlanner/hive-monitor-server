import {Gauge} from 'prom-client';

const weightGauge = new Gauge({
  name: 'beehive_weight_pounds',
  help: 'Weight of beehive',
  // add `as const` here to enforce label names
  labelNames: ['hiveId'] as const,
});

const temperatureGauge = new Gauge({
  name: 'beehive_temperature_fahrenheit',
  help: 'Temperature inside beehive',
  labelNames: ['hiveId'] as const,
});

const humidityGauge = new Gauge({
  name: 'beehive_humidity_ratio',
  help: 'Humidity inside beehive',
  labelNames: ['hiveId'] as const,
});

const pressureGauge = new Gauge({
  name: 'beehive_pressure_inches_of_mercury',
  help: 'Air pressure inside beehive',
  labelNames: ['hiveId'] as const,
});

const gasGauge = new Gauge({
  name: 'beehive_gas_ohms',
  help: 'Resistance of gas sensor (proportional to the amount of VOC particles in the air)',
  labelNames: ['hiveId'] as const,
});

export {weightGauge, temperatureGauge, humidityGauge, pressureGauge, gasGauge};
