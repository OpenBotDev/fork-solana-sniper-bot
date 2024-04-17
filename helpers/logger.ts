import pino from 'pino';
import * as path from 'path';

let parentDir = path.basename(path.dirname("."));

const logFile = path.join(parentDir, '/logs/app.log');

const transport = pino.transport({
  targets: [
    {
      target: 'pino/file',
      options: { destination: logFile },
    },
    {
      target: 'pino-pretty',
    },
  ],
});


export const logger = pino(
  {
    level: 'info',
    redact: ['poolKeys'],
    serializers: {
      error: pino.stdSerializers.err,
    },
    base: undefined,
    timestamp: pino.stdTimeFunctions.isoTime,
  },
  transport,
);
