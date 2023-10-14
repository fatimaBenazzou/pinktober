import { NextFunction, Request, Response } from 'express';
import { ErrorResponse, SuccessResponse } from '../utils/Response';
import axios from 'axios';

export const Modelreq = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
     const requestBody = req.body;
   const data = {
     radius_mean: requestBody.radius_mean,
     texture_mean: requestBody.texture_mean,
     smoothness_mean: requestBody.smoothness_mean,
     compactness_mean: requestBody.compactness_mean,
     concavity_mean: requestBody.concavity_mean,
     symmetry_mean: requestBody.symmetry_mean,
     fractal_dimension_mean: requestBody.fractal_dimension_mean,
     radius_se: requestBody.radius_se,
     texture_se: requestBody.texture_se,
     smoothness_se: requestBody.smoothness_se,
     compactness_se: requestBody.compactness_se,
     concavity_se: requestBody.concavity_se,
     concave_points_se: requestBody.concave_points_se,
     symmetry_se: requestBody.symmetry_se,
     fractal_dimension_se: requestBody.fractal_dimension_se,
     smoothness_worst: requestBody.smoothness_worst,
     compactness_worst: requestBody.compactness_worst,
     concavity_worst: requestBody.concavity_worst,
     concave_points_worst: requestBody.concave_points_worst,
     symmetry_worst: requestBody.symmetry_worst,
     fractal_dimension_worst: requestBody.fractal_dimension_worst,
   };
   const apiUrl = "";
  try {
    const response = await axios.post(apiUrl, data);
    const result = response.data;
    
    return SuccessResponse(
      res,
      200,
      result,
      `Fetched result successfully for `
    );
  } catch (error) {
    console.error('Failed to make request ', error);
    return ErrorResponse(res, 404, 'Failed to Failed to make request .', error);
  }
};
