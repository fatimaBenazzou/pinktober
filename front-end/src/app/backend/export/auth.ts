import api from "..";
// exporting auth hooks
export const {
    useSignInMutation,
    /* useSignUpMutation, */
    useLogOutMutation,
    useGetUserDataMutation,
    /* useEditUserMutation, */
    useCheckEmailMutation,
    useCheckPhoneMutation,
    useResetPasswordMutation,
    useCreateResetMutation,
} = api;

export type SignInType = typeof api.useSignInMutation;
// export type SignUpType = typeof api.useSignUpMutation;
