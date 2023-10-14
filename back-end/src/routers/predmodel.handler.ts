import { NextFunction, Request, Response } from 'express';
import { ErrorResponse, SuccessResponse } from '../utils/Response';
import axios from 'axios';
import { HttpCodes } from '../config/Errors';

export const Modelreq = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const requestBody = req.body;

  const apiUrl = 'https://pinktoberfest.onrender.com/predict';
  try {
    const data = {
      radius_mean: parseFloat(requestBody.radius_mean),
      texture_mean: parseFloat(requestBody.texture_mean),
      smoothness_mean: parseFloat(requestBody.smoothness_mean),
      compactness_mean: parseFloat(requestBody.compactness_mean),
      concavity_mean: parseFloat(requestBody.concavity_mean),
      symmetry_mean: parseFloat(requestBody.symmetry_mean),
      fractal_dimension_mean: parseFloat(requestBody.fractal_dimension_mean),
      radius_se: parseFloat(requestBody.radius_se),
      texture_se: parseFloat(requestBody.texture_se),
      smoothness_se: parseFloat(requestBody.smoothness_se),
      compactness_se: parseFloat(requestBody.compactness_se),
      concavity_se: parseFloat(requestBody.concavity_se),
      concave_points_se: parseFloat(requestBody.concave_points_se),
      symmetry_se: parseFloat(requestBody.symmetry_se),
      fractal_dimension_se: parseFloat(requestBody.fractal_dimension_se),
      smoothness_worst: parseFloat(requestBody.smoothness_worst),
      compactness_worst: parseFloat(requestBody.compactness_worst),
      concavity_worst: parseFloat(requestBody.concavity_worst),
      concave_points_worst: parseFloat(requestBody.concave_points_worst),
      symmetry_worst: parseFloat(requestBody.symmetry_worst),
      fractal_dimension_worst: parseFloat(requestBody.fractal_dimension_worst),
    };

    const response = await axios.post(apiUrl, data);
    const result = response.data;

    return SuccessResponse(
      res,
      HttpCodes.OK.code,
      result,
      `Fetched result successfully for `
    );
  } catch (error) {
    console.error('Failed to make request ', error);
    return ErrorResponse(
      res,
      HttpCodes.NotFound.code,
      'Failed to make request .',
      error
    );
  }
};
