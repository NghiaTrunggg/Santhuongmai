import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import { ROUNTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/profilePage";


const renderUserRounter = () => {
    const userRounters = [
        {
            path: ROUNTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUNTERS.USER.PROFILE,
            component: <ProfilePage />
        },
    ]

    return (
        <MasterLayout>
            <Routes>
                {userRounters.map((item,key) => (   
                        <Route key={key} path={item.path} element={item.component} />                  
                ))}
            </Routes>
        </MasterLayout>
    );
};

const RouterCustome = () => {
    return renderUserRounter();
};

export default RouterCustome;
