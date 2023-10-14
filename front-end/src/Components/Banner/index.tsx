// import DoctorIcon from "@/icons/DoctorIcon";

const Banner = () => {
    return (
        <div className="stack">
            <div className="card shadow-md bg-base-100 text-primary-content relative overflow-hidden">
                <div className="card-body">
                    <img src="/public/doctor.png" className="absolute bottom-0 right-0 top-0 h-56 translate-x-10 translate-y-4 " />
                    <h2 className="card-title text-primary w-2/3 ">Daily Tip:</h2>
                    <p className="text-secondary text-sm  w-2/3 ">
                        Eating a balanced diet and regular exercise can reduce your risk of breast
                        cancer.
                    </p>
                </div>
            </div>
            <div className="card shadow bg-base-200 text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Daily Tip:</h2>
                    <p>
                        Eating a balanced diet and regular exercise can reduce your risk of breast
                        cancer.
                    </p>
                </div>
            </div>
            <div className="card shadow-sm bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Daily Tip:</h2>
                    <p>
                        Eating a balanced diet and regular exercise can reduce your risk of breast
                        cancer.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
