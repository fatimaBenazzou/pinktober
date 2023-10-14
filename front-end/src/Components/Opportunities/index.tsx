import {  Notification } from "iconsax-react";

type Props = {
    title: string;
    data: OpportunityI[];
};

const Opportunities = ({ title, data }: Props) => {
    return (
        <div className="w-full h-full flex flex-col">
            <h3 className="font-bold mb-6 text-2xl ">{title}</h3>
            {data.map((opportunity) => (
                <div key={opportunity.id} className="card bg-base-100 shadow-xl mb-8 relative ">
                  <button className="btn btn-primary btn-sm text-base-100 lowercase absolute right-4 top-24">
                                <Notification /> Notify Me
                            </button>
                    <figure >
                        <img className={" rounded-t-xl"} src={opportunity.image} alt="marathon" />
                    </figure>
                    <div className="card-body p-4">
                        <p className="text-primary text-xs">{opportunity.location}</p>

                        <h2 className="card-title text-lg">{opportunity.name}</h2>
                        <div className="card-actions">
                            <div
                                key={"Opportunity" + opportunity.id}
                                className="badge badge-outline mr-2 badge-primary"
                            >
                                {opportunity.tag}
                            </div>

                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Opportunities;
