import { Messages2 } from "iconsax-react";

type Props = {
    title: string;
    data: HelpI[];
};

const Helping = ({ title, data }: Props) => {
    return (
        <div className="w-full h-full flex flex-col ">
            <h3 className="font-bold mb-2 text-2xl">{title}</h3>
            {data.map((help) => (
                <div key={help.id} className="card bg-base-100 shadow-xl mb-8">
                  <span className="absolute inset-y-0 left-0 w-2.5 rounded-r-none rounded-l-xl bg-primary " aria-hidden="true"></span>
                    <div className="card-body p-6">
                        <h2 className="card-title text-lg">{help.name}</h2>
                        <p className="text-xs text-secondary">{help.description}</p>
                        <div className="card-actions justify-between items-baseline">
                            <div className="avatar-group -space-x-4">
                                <div className="avatar">
                                    <div className="w-8">
                                        <img src="https://reqres.in/img/faces/1-image.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-8">
                                        <img src="https://reqres.in/img/faces/2-image.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-8">
                                        <img src="https://reqres.in/img/faces/3-image.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-8">
                                        <img src="https://reqres.in/img/faces/4-image.jpg" />
                                    </div>
                                </div>
                            </div>

                                <div className="flex text-primary text-sm gap-1">
                                    <Messages2 />
                                    <p>{help.comments.length}</p>
                                    <p className="">comments</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Helping;
