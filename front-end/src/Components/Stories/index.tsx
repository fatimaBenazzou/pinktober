import { Link } from "react-router-dom";

type Props = {
    title: string;
    data: StoryI[];
};

const Stories = ({ title, data }: Props) => {
    return (
        <div className="w-full h-full flex flex-col ">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">{title} </h3>
                <Link className="text-primary underline text-sm" to={""}>Post Your Story</Link>
            </div>
            {data.map((story, i) => (
                <div key={story.id} className="card bg-base-100 shadow-xl mb-8">
                    <span
                        className={`absolute inset-y-0 left-0 w-2.5 rounded-r-none rounded-l-xl bg-custom${i}`}
                        aria-hidden="true"
                    ></span>

                    <div className="card-body p-6">
                        <div>
                            {story.PostType === "Unknown" ? (
                                <div className="flex items-center gap-2">
                                    <div className="avatar">
                                        <div className="w-8 rounded-full">
                                            <img src="/public/unknown.png" />
                                        </div>
                                    </div>
                                    <p>Unknown</p>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <div className="avatar rounded-full">
                                        <div className="w-8 rounded-full">
                                            <img src={story.picture} />
                                        </div>
                                    </div>
                                    <p> {story.name} </p>
                                </div>
                            )}
                        </div>
                        <h2 className="card-title text-lg">{story.title}</h2>
                        <p className="text-xs text-secondary">{story.description}</p>
                        <div className="card-actions justify-between items-baseline">
                            <Link to={"/"} className=" text-sm text-primary ml-auto" >
                                <p className="">See More!</p>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Stories;
