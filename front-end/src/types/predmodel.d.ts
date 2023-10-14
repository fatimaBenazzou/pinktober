declare interface Predmodel {
  radius_mean: number;
  texture_mean: number;
  smoothness_mean: number;
  compactness_mean: number;
  concavity_mean: number;
  symmetry_mean: number;
  fractal_dimension_mean: number;
  radius_se: number;
  texture_se: number;
  smoothness_se: number;
  compactness_se: number;
  concavity_se: number;
  concave_points_se: number;
  symmetry_se: number;
  fractal_dimension_se: number;
  smoothness_worst: number;
  compactness_worst: number;
  concavity_worst: number;
  concave_points_worst: number;
  symmetry_worst: number;
  fractal_dimension_worst: number;
}


declare interface PredResponse {
  predicted_class: number;
  predicted_class_name: string;
}