import { Input } from "@/Components/Input";
import { useGetPredictionMutation } from "@/app/backend/export/predction";
import { useNotification } from "@/hooks";
import { FormikProvider, useFormik, Form } from "formik";
import { ArrowLeft2 } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const inputs: InputRequiredFields<Predmodel>[] = [
  {
    required: true,
    type: 'number',
    id: 'radius_mean',
    placeholder: 'Radius Mean',
    name: 'radius_mean',
    className: 'md:max-w-md',
    inputClassName: 'md:max-w-md',
    autoComplete: 'off',
    autoFocus: true,
  },
  {
    required: true,
    type: 'number',
    id: 'texture_mean',
    placeholder: 'Texture Mean',
    name: 'texture_mean',
    className: 'md:max-w-md',
    inputClassName: 'md:max-w-md',
    autoComplete: 'off',
    autoFocus: false,
  },
  {
    required: true,
    type: 'number',
    id: 'smoothness_mean',
    placeholder: 'Smoothness Mean',
    name: 'smoothness_mean',
    className: 'md:max-w-md',
    inputClassName: 'md:max-w-md',
    autoComplete: 'off',
    autoFocus: false,
  },
  {
    required: true,
    type: 'number',
    id: 'compactness_mean',
    placeholder: 'Compactness Mean',
    name: 'compactness_mean',
    className: 'md:max-w-md',
    inputClassName: 'md:max-w-md',
    autoComplete: 'off',
    autoFocus: false,
  },
  {
    required: true,
    type: 'number',
    id: 'concavity_mean',
    placeholder: 'Concavity Mean',
    name: 'concavity_mean',
    className: 'md:max-w-md',
    inputClassName: 'md:max-w-md',
    autoComplete: 'off',
    autoFocus: false,
  },
  {
    required: true,
    type: 'number',
    id: 'symmetry_mean',
    placeholder: 'Symmetry Mean',
    name: 'symmetry_mean',
    className: 'md:max-w-md',
    inputClassName: 'md:max-w-md',
    autoComplete: 'off',
    autoFocus: false,
  },
  {
    required: true,
    type: 'number',
    id: 'radius_se',
    placeholder: 'Radius SE',
    name: 'radius_se',
    className: 'md:max-w-md',
    inputClassName: 'md:max-w-md',
    autoComplete: 'off',
    autoFocus: false,
  },
  {
    required: true,
    type: 'number',
    id: 'texture_se',
    placeholder: 'Texture SE',
    name: 'texture_se',
    className: 'md:max-w-md',
    inputClassName: 'md:max-w-md',
    autoComplete: 'off',
    autoFocus: false,
  },
  {
    required: true,
    type: 'number',
    id: 'smoothness_se',
    placeholder: 'Smoothness SE',
    name: 'smoothness_se',
    className: 'md:max-w-md',
    inputClassName: 'md:max-w-md',
    autoComplete: 'off',
    autoFocus: false,
  },
  {
    required: true,
    type: 'number',
    id: 'compactness_se',
    placeholder: 'Compactness SE',
    name: 'compactness_se',
    className: 'md:max-w-md',
    inputClassName: 'md:max-w-md',
    autoComplete: 'off',
    autoFocus: false,
  },
  {
    required: true,
    type: 'number',
    id: 'concavity_se',
    placeholder: 'Concavity SE',
    name: 'concavity_se',
    className: 'md:max-w-md',
    inputClassName: 'md:max-w-md',
    autoComplete: 'off',
    autoFocus: false,
  },
  {
    required: true,
    type: 'number',
    id: 'concave_points_se',
    placeholder: 'Concave Points SE',
    name: 'concave_points_se',
    className: 'md:max-w-md',
    inputClassName: 'md:max-w-md',
    autoComplete: 'off',
    autoFocus: false,
  },
  {
    required: true,
    type: 'number',
    id: 'symmetry_se',
    placeholder: 'Symmetry SE',
    name: 'symmetry_se',
    className: 'md:max-w-md',
    inputClassName: 'md:max-w-md',
    autoComplete: 'off',
    autoFocus: false,
  },
  {
    required: true,
    type: 'number',
    id: 'fractal_dimension_se',
    placeholder: 'Fractal Dimension SE',
    name: 'fractal_dimension_se',
    className: 'md:max-w-md',
    inputClassName: 'md:max-w-md',
    autoComplete: 'off',
    autoFocus: false,
  },
  {
    required: true,
    type: 'number',
    id: 'smoothness_worst',
    placeholder: 'Smoothness Worst',
    name: 'smoothness_worst',
    className: 'md:max-w-md',
    inputClassName: 'md:max-w-md',
    autoComplete: 'off',
    autoFocus: false,
  },
  {
    required: true,
    type: 'number',
    id: 'compactness_worst',
    placeholder: 'Compactness Worst',
    name: 'compactness_worst',
    className: 'md:max-w-md',
    inputClassName: 'md:max-w-md',
    autoComplete: 'off',
    autoFocus: false,
  },
  {
    required: true,
    type: 'number',
    id: 'concavity_worst',
    placeholder: ' concavity_worst',
    name: 'concavity_worst',
    className: 'md:max-w-md',
    inputClassName: 'md:max-w-md',
    autoComplete: 'off',
    autoFocus: false,
  },
  {
    required: true,
    type: 'number',
    id: 'concave_points_worst',
    placeholder: 'Concave Points Worst',
    name: 'concave_points_worst',
    className: 'md:max-w-md',
    inputClassName: 'md:max-w-md',
    autoComplete: 'off',
    autoFocus: false,
  },
  {
    required: true,
    type: 'number',
    id: 'symmetry_worst',
    placeholder: 'Symmetry Worst',
    name: 'symmetry_worst',
    className: 'md:max-w-md',
    inputClassName: 'md:max-w-md',
    autoComplete: 'off',
    autoFocus: false,
  },
  {
    required: true,
    type: 'number',
    id: 'fractal_dimension_worst',
    placeholder: 'Fractal Dimension Worst',
    name: 'fractal_dimension_worst',
    className: 'md:max-w-md',
    inputClassName: 'md:max-w-md',
    autoComplete: 'off',
    autoFocus: false,
  },
];

const FormI = () => {
    const navigate = useNavigate();
    const {Notify,Errofy} = useNotification();
    const [GetPredection, {isLoading}] = useGetPredictionMutation();
    const initialValues:Predmodel = {
      radius_mean: 0,
      texture_mean: 0,
      smoothness_mean: 0,
      compactness_mean: 0,
      concavity_mean: 0,
      symmetry_mean: 0,
      radius_se: 0,
      texture_se: 0,
      smoothness_se: 0,
      compactness_se: 0,
      concavity_se: 0,
      concave_points_se: 0,
      symmetry_se: 0,
      fractal_dimension_se: 0,
      smoothness_worst: 0,
      compactness_worst: 0,
      concavity_worst: 0,
      concave_points_worst: 0,
      symmetry_worst: 0,
      fractal_dimension_worst: 0,
      fractal_dimension_mean: 0,
    };
    const formik = useFormik<Predmodel>({
      initialValues,
      validationSchema: Yup.object().shape({
        radius_mean: Yup.string().required('This field is required'),
        texture_mean: Yup.string().required('This field is required'),
        smoothness_mean: Yup.string().required('This field is required'),
        compactness_mean: Yup.string().required('This field is required'),
        concavity_mean: Yup.string().required('This field is required'),
        symmetry_mean: Yup.string().required('This field is required'),
        radius_se: Yup.string().required('This field is required'),
        texture_se: Yup.string().required('This field is required'),
        smoothness_se: Yup.string().required('This field is required'),
        compactness_se: Yup.string().required('This field is required'),
        concavity_se: Yup.string().required('This field is required'),
        concave_points_se: Yup.string().required('This field is required'),
        symmetry_se: Yup.string().required('This field is required'),
        fractal_dimension_se: Yup.string().required('This field is required'),
        smoothness_worst: Yup.string().required('This field is required'),
        compactness_worst: Yup.string().required('This field is required'),
        concavity_worst: Yup.string().required('This field is required'),
        concave_points_worst: Yup.string().required('This field is required'),
        symmetry_worst: Yup.string().required('This field is required'),
        fractal_dimension_worst: Yup.string().required(
          'This field is required'
        ),
        fractal_dimension_mean: Yup.string().required('This field is required'),
      }),
      validateOnChange: true,
      onSubmit: (body) => {
        GetPredection(body).unwrap().then((res) => {
            console.log(res);
            res.data.predicted_class === 0
              ? Notify('Analyses arived', 'All goood')
              : Notify('Analyses arived', 'You should consult a doctor');
            
        }).catch((err) => {
            Errofy('Error',err,'Something went wrong');
        });
      },
    });

    const { errors, touched, getFieldProps, handleSubmit } = formik;

    return (
        <div className=" p-6 relative mb-20">
            <button
                className="btn btn-ghost btn-circle active:bg-base-200 absolute z-50"
                onClick={() => {
                    navigate(-1);
                }}
            >
                <ArrowLeft2 />
            </button>
            <div className="w-full flex flex-col relative  text-black place-items-center pt-2">
                <h2 className="font-bold text-primary text-lg ">Ai Doctor</h2>
            </div>
            <div className="h-full flex flex-col gap-6  pt-20">
                <h1 className="text-3xl font-bold">Please enter your analysis results </h1>

                <p className="text-error text-sm">All the fields are required*</p>
                <FormikProvider value={formik}>
                    <Form
                        onSubmit={handleSubmit}
                        className="h-full w-full flex flex-col justify-between"
                    >
                        <div>
                            {inputs.map(({ name, type = "text", ...props }, i) => (
                                <Input
                                    className=""
                                    key={i}
                                    {...props}
                                    type={type}
                                    error={touched[name] && errors[name] ? errors[name] : undefined}
                                    props={getFieldProps(name)}
                                />
                            ))}
                        </div>

                        <button
                            type="submit"
                            disabled = {isLoading}
                            className="btn btn-primary text-base-100 w-full"
                        >
                            Continue
                        </button>
                    </Form>
                </FormikProvider>
            </div>
        </div>
    );
};

export default FormI;
