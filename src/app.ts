import { Logger } from 'winston';
import express, { Express } from 'express';
import { start } from '@notifications/server';
import { config } from '@notifications/config';
import { winstonLogger } from '@singh-barender/jobber-shared';

const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'notificationApp', 'debug');

function initialize(): void {
  const app: Express = express();
  start(app);
  log.info('Notification Service Initialized');
}
initialize();
