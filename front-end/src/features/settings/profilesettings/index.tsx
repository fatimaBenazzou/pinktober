//import moment from "moment";
//import { useEffect, useState } from "react"
import TitleCard from "@/Components/Cards/TitleCard";
import { showNotification } from "@/app/context/header";
import InputText from "@/Components/Input/InputText";
import TextAreaInput from "@/Components/Input/TextAreaInput";
import ToggleInput from "@/Components/Input/ToggleInput";
import { useAppDispatch } from "@/hooks";

function ProfileSettings() {
	const dispatch = useAppDispatch();

	// Call API to update profile settings changes
	const updateProfile = () => {
		dispatch(showNotification({ message: "Profile Updated", status: 1 }));
	};

	const updateFormValue = ({ updateType /* ,value */ }: UpdateFormValue) => {
		console.log(updateType);
	};

	return (
		<>
			<TitleCard title="Profile Settings" topMargin="mt-2">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<InputText labelTitle="Name" defaultValue="Alex" updateFormValue={updateFormValue} />
					<InputText labelTitle="Email Id" defaultValue="alex@ups-manager.com" updateFormValue={updateFormValue} />
					<InputText labelTitle="Title" defaultValue="UI/UX Designer" updateFormValue={updateFormValue} />
					<InputText labelTitle="Place" defaultValue="California" updateFormValue={updateFormValue} />
					<TextAreaInput
						labelTitle="About"
						defaultValue="Doing what I love, part time traveler"
						updateFormValue={updateFormValue}
					/>
				</div>
				<div className="divider"></div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<InputText labelTitle="Language" defaultValue="English" updateFormValue={updateFormValue} />
					<InputText labelTitle="Timezone" defaultValue="IST" updateFormValue={updateFormValue} />
					<ToggleInput updateType="syncData" labelTitle="Sync Data" defaultValue={true} updateFormValue={updateFormValue} />
				</div>

				<div className="mt-16">
					<button className="btn btn-primary float-right" onClick={() => updateProfile()}>
						Update
					</button>
				</div>
			</TitleCard>
		</>
	);
}

export default ProfileSettings;
