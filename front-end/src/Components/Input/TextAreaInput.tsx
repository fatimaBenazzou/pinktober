import { useState } from "react";

function TextAreaInput({
    labelTitle,
    labelStyle,
    containerStyle,
    defaultValue,
    placeholder,
    updateFormValue,
    updateType,
}: {
    labelTitle: string;
    labelStyle?: string;
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
            <textarea
                value={value as string | number | readonly string[] | undefined}
                className="textarea textarea-bordered w-full"
                placeholder={placeholder || ""}
                onChange={(e) => updateInputValue(e.target.value)}
            ></textarea>
        </div>
    );
}

export default TextAreaInput;
