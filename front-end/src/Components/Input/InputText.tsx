import { useState } from "react";

function InputText({
    labelTitle,
    labelStyle = "",
    type,
    containerStyle = "",
    defaultValue,
    placeholder,
    updateFormValue,
    updateType = type,
}: {
    labelTitle: string;
    labelStyle?: string;
    type?: string;
    containerStyle?: string;
    defaultValue: UpdateFormValue["value"];
    placeholder?: string;
    updateFormValue: (val: UpdateFormValue) => void;
    updateType?: string;
}) {
    const [value, setValue] = useState(defaultValue);

    const updateInputValue = (val: UpdateFormValue["value"]) => {
        setValue(val);
        updateFormValue({ updateType: updateType || "text", value: val });
    };

    return (
        <div className={`form-control w-full ${containerStyle}`}>
            <label className="label">
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
            </label>
            <input
                type={type || "text"}
                value={value as string | number | readonly string[] | undefined}
                placeholder={placeholder || ""}
                onChange={(e) => updateInputValue(e.target.value)}
                className="input  input-bordered w-full "
            />
        </div>
    );
}

export default InputText;
