import * as Express from 'express';

import { ImageController } from '../controllers/ImageController';
import InvalidRequestError from '../models/error/InvalidRequestError';
import LoggerUtil from '../utils/LoggerUtil';
import routePaths from './routePaths';

export const apiRouter = Express.Router();

// api endpoints
// [GET] /api/image
apiRouter.get(
  routePaths.API_IMAGE,
  (req: Express.Request, res: Express.Response) => {
    try {
      const { text } = req.query;
      if (!text) {
        throw new InvalidRequestError('text is a required parameter');
      }
      ImageController.generateEmiruImage(text);
      res.status(200).send(); // ok
    } catch (err) {
      if (err instanceof InvalidRequestError) {
        res.status(400).send({ error: err.message });
      } else {
        res.status(500).send({ error: err.message });
      }
      LoggerUtil.error(err.message);
    }
  },
);
