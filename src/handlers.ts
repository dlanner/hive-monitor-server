import {Request, Response} from 'express';
import {register} from 'prom-client';

import {
  weightGauge,
  temperatureGauge,
  humidityGauge,
  pressureGauge,
  gasGauge,
} from './metrics';

const getRootHandler = async (req: Request, res: Response) => {
  res.send('Beeeeees!');
};

/*
 * Gets the following data points from the request:
 * weight (lbs), temperature (F), humidity (%), pressure (hPa), gas (KOhms).
 * Collect data with Prometheus.
 */
const postDataHandler = async (req: Request, res: Response) => {
  console.log('Req body: ', req.body);
  const labels = {hiveId: req.body.hiveId};
  weightGauge.set(labels, parseFloat(req.body.weight));
  temperatureGauge.set(labels, parseFloat(req.body.temperature));
  humidityGauge.set(labels, parseFloat(req.body.humidity));
  pressureGauge.set(labels, parseFloat(req.body.pressure));
  gasGauge.set(labels, parseFloat(req.body.gas));
  res.json({status: 'ok'});
};

// Expose metrics to prometheus scraper
const getMetricsHandler = async (req: Request, res: Response) => {
  const metrics = await register.metrics();
  const html = `<pre style="word-wrap: break-word; white-space: pre-wrap;">${metrics}</pre>`;
  res.send(html);
};

export {getRootHandler, postDataHandler, getMetricsHandler};
