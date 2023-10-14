
const Banner = () => {
    return (
        <div className="stack">
            <div className="card shadow-md bg-base-100 text-primary-content">
                <div className="card-body">
                    <h2 className="card-title text-primary ">Daily Tip:</h2>
                    <p className="text-secondary text-sm">
                        Eating a balanced diet and regular exercise can reduce your risk of breast
                        cancer. 
                    </p>
                </div>
                {/* <div>
                <DoctorIcon className="absolute "/>
                </div> */}
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
