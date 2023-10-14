import { ArrowRight3, People } from "iconsax-react";

type Props = {
    title: string;
    data: ActivityI[];
};

const Activities = ({ title, data }: Props) => {
    return (
        <div className="w-full h-full flex flex-col">
            <h3 className="font-bold mb-2 text-2xl">{title}</h3>
            {data.map((activity) => (
                <div key={activity.id} className="card bg-base-100 shadow-xl mb-8">
                    <figure>
                        <img src={activity.image} alt="marathon" />
                    </figure>
                    <div className="card-body p-4">
                        <div className="flex justify-between text-xs">
                            <p className="text-primary">
                                {activity.day} at {activity.time}
                            </p>
                            <div className="flex text-secondary gap-1">
                                <People className="w-5 h-5"/>
                                <p>
                                    {activity.joined}/{activity.max}
                                </p>
                            </div>
                        </div>
                        <h2 className="card-title text-lg">{activity.name}</h2>
                        <div className="card-actions justify-between items-baseline">
                            <div>
                                {activity.tags.map((tag, i) => (
                                    <div
                                        key={"badge" + activity.id + i}
                                        className="badge badge-outline mr-2 badge-primary"
                                    >
                                        {tag}
                                    </div>
                                ))}
                            </div>
                            <button className="btn btn-primary btn-sm text-base-100 lowercase">
                                <ArrowRight3 /> Join
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Activities;
