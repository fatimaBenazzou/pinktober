import { useState } from "react";

function ToggleInput({
    labelTitle,
    labelStyle,
    containerStyle,
    defaultValue,
    updateFormValue,
    updateType,
}: {
    labelTitle: string;
    labelStyle?: string;
    containerStyle?: string;
    defaultValue: boolean;
    updateFormValue: (val: {
        updateType: string;
        value: string | number | readonly string[] | undefined | boolean;
    }) => void;
    updateType?: string;
}) {
    const [value, setValue] = useState(defaultValue);

    const updateToggleValue = () => {
        setValue(!value);
        updateFormValue({ updateType: updateType || "text", value: !value });
    };

    return (
        <div className={`form-control w-full ${containerStyle}`}>
            <label className="label cursor-pointer">
                <span className={"label-text text-base-content " + labelStyle}>{labelTitle}</span>
                <input type="checkbox" className="toggle" checked={value} onChange={() => updateToggleValue()} />
            </label>
        </div>
    );
}

export default ToggleInput;
