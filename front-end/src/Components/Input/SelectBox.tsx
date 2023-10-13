// import axios from "axios";
// import capitalize from "capitalize-the-first-letter";
import { useState /* , useEffect */ } from "react";
import InformationCircleIcon from "@heroicons/react/24/outline/InformationCircleIcon";

type OptionsI = {
    value: string;
    name: string;
};

function SelectBox({
    labelTitle,
    labelDescription,
    defaultValue,
    containerStyle,
    placeholder,
    labelStyle,
    options,
    updateType,
    updateFormValue,
}: {
    labelTitle: string;
    labelDescription: string;
    labelStyle?: string;
    type?: string;
    containerStyle?: string;
    defaultValue: string;
    placeholder?: string;
    options: OptionsI[];
    updateFormValue: (val: UpdateFormValue) => void;
    updateType?: string;
}) {
    const [value, setValue] = useState(defaultValue || "");

    const updateValue = (newValue: UpdateFormValue["value"]) => {
        updateFormValue({ updateType: updateType || "text", value: newValue });
        setValue(newValue as string);
    };

    return (
        <div className={`inline-block ${containerStyle}`}>
            <label className={`label  ${labelStyle}`}>
                <div className="label-text">
                    {labelTitle}
                    {labelDescription && (
                        <div className="tooltip tooltip-right" data-tip={labelDescription}>
                            <InformationCircleIcon className="w-4 h-4" />
                        </div>
                    )}
                </div>
            </label>

            <select
                className="select select-bordered w-full"
                value={value}
                onChange={(e) => updateValue(e.target.value)}
            >
                <option disabled value="PLACEHOLDER">
                    {placeholder}
                </option>
                {options.map((o, k) => {
                    return (
                        <option value={o.value || o.name} key={k}>
                            {o.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default SelectBox;
