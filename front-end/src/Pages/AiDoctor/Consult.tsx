
const Consult = () => {
  return (
    <div className="quiz-container h-full p-6 bg-white py-16">
    <div className="p-6 w-full h-full flex flex-col items-center justify-center gap-10">
        <div className=" text-center">
            <span className="text-2xl font-bold text-error"> It's important</span>
            <h1 className=" text-2xl font-bold mb-6 ">to consult a Healthcare provider</h1>
            <p className="text-secondary">
                Early detection is key to effective treatment and improved outcomes.
            </p>
            <div className="">
                <img src="/public/doctor.png" alt="" />
            </div>
            <p className="text-secondary border-2 border-primary rounded-3xl p-2">
                If you have any other questions or concerns, don't hesitate to ask our AI
                chatbot. Chopper is here to provide information, support, and guidance.
            </p>
        </div>

        {/* <button className="btn btn-primary btn-outline rounded-3xl w-36 text-lg">
            Start
        </button> */}
        <button className="btn btn-primary text-base-100 w-full mt-auto">
            Understood
        </button>
    </div>
</div>
  )
}

export default Consult