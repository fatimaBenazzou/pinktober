import { Link } from "react-router-dom";


const ProfileP = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-8">Profile</h2>

            <div className="mb-6 text-left">
                <Link to={""} className="btn btn-ghost w-full mb-4">Informations Personnelles</Link>
                <Link to={""} className="btn btn-ghost w-full mb-4">Paramètres</Link>
                <Link to={"/auth/logout"} className="btn btn-ghost w-full">Déconnexion</Link>
            </div>
        </div>
    );
};

export default ProfileP;
