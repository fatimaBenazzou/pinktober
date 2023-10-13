import { useState } from "react";
// import {  useNotification } from ".";
// import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil";
// import { useNavigate } from "react-router-dom";

const useKeypad = (length: number = 4) => {
    const [code, setCode] = useState<number[]>([]);
    // const { openModal } = useModal();
    // const dispatch = useAppDispatch();
    // const navigate = useNavigate();
    const [isError] = useState(false);
    // const model = useModal();
    // const { Notify } = useNotification();
    // const { closeModal } = model;

    // const openRecognitionModal = () => {
    //     openModal({
	// 		title: "Use Face ID?",
    //         bodyType: MODAL_BODY_TYPES.FACE_RECOGNITION,
    //     }).then(() => {
    //         navigate("/");
    //     });
    // };

	// useEffectOnce(() => {
	// 	openRecognitionModal()
	// })

    const pressKey = async (key: number): Promise<void> => {
        const newCode = [...code, key];
        if (newCode.length <= length) setCode(newCode);
        if (newCode.length === length) {
            // const CodeChecked = SignIn({ pinCode: newCode.join("") }).unwrap();
            // CodeChecked.then(() => {
                //console. log("success!");
                // setTimeout(() => closeModal(), 4000);
                // openCongratsModal();
                // navigate("/facerecognition");

                // Notify("Switching to Admin", "You are now in Admin Mode");
            // })
                // .catch(() => {
                    // setIsError(true);
                    // setTimeout(() => {
                    //     setIsError(false);
                    // }, 1000);

                    // error notification
                // })
                // .finally(() => {
                //     setCode([]);
                // });
        }
    };

    const reset = (): void => setCode([]);

    return {
        code,
        pressKey,
        reset,
        // isLoading,
        isError,
    };
};

export default useKeypad;
