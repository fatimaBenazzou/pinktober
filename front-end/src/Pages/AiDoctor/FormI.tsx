import { Input } from "@/Components/Input";
import { FormikProvider, useFormik, Form } from "formik";
import { ArrowLeft2 } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const inputs: InputRequiredFields<FormInfo>[] = [
    {
        required: true,
        type: "text",
        id: "radius_mean",
        placeholder: "Radius Mean",
        name: "radius_mean",
        className: "md:max-w-md",
        inputClassName: "md:max-w-md",
        autoComplete: "off",
        autoFocus: true,
    },
    {
        required: true,
        type: "text",
        id: "texture_mean",
        placeholder: "Texture Mean",
        name: "texture_mean",
        className: "md:max-w-md",
        inputClassName: "md:max-w-md",
        autoComplete: "off",
        autoFocus: false,
    },
    {
        required: true,
        type: "text",
        id: "smoothness_mean",
        placeholder: "Smoothness Mean",
        name: "smoothness_mean",
        className: "md:max-w-md",
        inputClassName: "md:max-w-md",
        autoComplete: "off",
        autoFocus: false,
    },
    {
        required: true,
        type: "text",
        id: "compactness_mean",
        placeholder: "Compactness Mean",
        name: "compactness_mean",
        className: "md:max-w-md",
        inputClassName: "md:max-w-md",
        autoComplete: "off",
        autoFocus: false,
    },
    {
        required: true,
        type: "text",
        id: "concavity_mean",
        placeholder: "Concavity Mean",
        name: "concavity_mean",
        className: "md:max-w-md",
        inputClassName: "md:max-w-md",
        autoComplete: "off",
        autoFocus: false,
    },
    {
        required: true,
        type: "text",
        id: "symmetry_mean",
        placeholder: "Symmetry Mean",
        name: "symmetry_mean",
        className: "md:max-w-md",
        inputClassName: "md:max-w-md",
        autoComplete: "off",
        autoFocus: false,
    },
    {
        required: true,
        type: "text",
        id: "radius_se",
        placeholder: "Radius SE",
        name: "radius_se",
        className: "md:max-w-md",
        inputClassName: "md:max-w-md",
        autoComplete: "off",
        autoFocus: false,
    },
    {
        required: true,
        type: "text",
        id: "texture_se",
        placeholder: "Texture SE",
        name: "texture_se",
        className: "md:max-w-md",
        inputClassName: "md:max-w-md",
        autoComplete: "off",
        autoFocus: false,
    },
    {
        required: true,
        type: "text",
        id: "smoothness_se",
        placeholder: "Smoothness SE",
        name: "smoothness_se",
        className: "md:max-w-md",
        inputClassName: "md:max-w-md",
        autoComplete: "off",
        autoFocus: false,
    },
    {
        required: true,
        type: "text",
        id: "compactness_se",
        placeholder: "Compactness SE",
        name: "compactness_se",
        className: "md:max-w-md",
        inputClassName: "md:max-w-md",
        autoComplete: "off",
        autoFocus: false,
    },
    {
        required: true,
        type: "text",
        id: "concavity_se",
        placeholder: "Concavity SE",
        name: "concavity_se",
        className: "md:max-w-md",
        inputClassName: "md:max-w-md",
        autoComplete: "off",
        autoFocus: false,
    },
    {
        required: true,
        type: "text",
        id: "concave_points_se",
        placeholder: "Concave Points SE",
        name: "concave_points_se",
        className: "md:max-w-md",
        inputClassName: "md:max-w-md",
        autoComplete: "off",
        autoFocus: false,
    },
    {
        required: true,
        type: "text",
        id: "symmetry_se",
        placeholder: "Symmetry SE",
        name: "symmetry_se",
        className: "md:max-w-md",
        inputClassName: "md:max-w-md",
        autoComplete: "off",
        autoFocus: false,
    },
    {
        required: true,
        type: "text",
        id: "fractal_dimension_se",
        placeholder: "Fractal Dimension SE",
        name: "fractal_dimension_se",
        className: "md:max-w-md",
        inputClassName: "md:max-w-md",
        autoComplete: "off",
        autoFocus: false,
    },
    {
        required: true,
        type: "text",
        id: "smoothness_worst",
        placeholder: "Smoothness Worst",
        name: "smoothness_worst",
        className: "md:max-w-md",
        inputClassName: "md:max-w-md",
        autoComplete: "off",
        autoFocus: false,
    },
    {
        required: true,
        type: "text",
        id: "compactness_worst",
        placeholder: "Compactness Worst",
        name: "compactness_worst",
        className: "md:max-w-md",
        inputClassName: "md:max-w-md",
        autoComplete: "off",
        autoFocus: false,
    },
    {
        required: true,
        type: "text",
        id: "concavity_worst",
        placeholder: " concavity_worst",
        name: "concavity_worst",
        className: "md:max-w-md",
        inputClassName: "md:max-w-md",
        autoComplete: "off",
        autoFocus: false,
    },
    {
        required: true,
        type: "text",
        id: "concave_points_worst",
        placeholder: "Concave Points Worst",
        name: "concave_points_worst",
        className: "md:max-w-md",
        inputClassName: "md:max-w-md",
        autoComplete: "off",
        autoFocus: false,
    },
    {
        required: true,
        type: "text",
        id: "symmetry_worst",
        placeholder: "Symmetry Worst",
        name: "symmetry_worst",
        className: "md:max-w-md",
        inputClassName: "md:max-w-md",
        autoComplete: "off",
        autoFocus: false,
    },
    {
        required: true,
        type: "text",
        id: "fractal_dimension_worst",
        placeholder: "Fractal Dimension Worst",
        name: "fractal_dimension_worst",
        className: "md:max-w-md",
        inputClassName: "md:max-w-md",
        autoComplete: "off",
        autoFocus: false,
    },
];

const FormI = () => {
    const navigate = useNavigate();

    const formik = useFormik<FormInfo>({
        initialValues: {
            radius_mean: "",
            texture_mean: "",
            smoothness_mean: "",
            compactness_mean: "",
            concavity_mean: "",
            symmetry_mean: "",
            radius_se: "",
            texture_se: "",
            smoothness_se: "",
            compactness_se: "",
            concavity_se: "",
            concave_points_se: "",
            symmetry_se: "",
            fractal_dimension_se: "",
            smoothness_worst: "",
            compactness_worst: "",
            concavity_worst: "",
            concave_points_worst: "",
            symmetry_worst: "",
            fractal_dimension_worst: "",
            fractal_dimension_mean: "",
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required("You have to provide a username"),
            stay: Yup.boolean(),
            radius_mean: Yup.string().required("This field is required"),
            texture_mean: Yup.string().required("This field is required"),
            smoothness_mean: Yup.string().required("This field is required"),
            compactness_mean: Yup.string().required("This field is required"),
            concavity_mean: Yup.string().required("This field is required"),
            symmetry_mean: Yup.string().required("This field is required"),
            radius_se: Yup.string().required("This field is required"),
            texture_se: Yup.string().required("This field is required"),
            smoothness_se: Yup.string().required("This field is required"),
            compactness_se: Yup.string().required("This field is required"),
            concavity_se: Yup.string().required("This field is required"),
            concave_points_se: Yup.string().required("This field is required"),
            symmetry_se: Yup.string().required("This field is required"),
            fractal_dimension_se: Yup.string().required("This field is required"),
            smoothness_worst: Yup.string().required("This field is required"),
            compactness_worst: Yup.string().required("This field is required"),
            concavity_worst: Yup.string().required("This field is required"),
            concave_points_worst: Yup.string().required("This field is required"),
            symmetry_worst: Yup.string().required("This field is required"),
            fractal_dimension_worst: Yup.string().required("This field is required"),
            fractal_dimension_mean: Yup.string().required("This field is required"),
        }),
        validateOnChange: true,
        onSubmit: () => {},
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
