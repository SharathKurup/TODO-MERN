import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";
import {jwtDecode} from "jwt-decode";

const useAuth = () => {
    const {token} = useContext(AuthContext);


    if (token) {
        try {
            const user = jwtDecode(token);
            const currentTime = Date.now() / 1000;

            if (user.exp < currentTime) {
                return null; // Token has expired
            }

            return {token, user};
        } catch (error) {
            console.error("Invalid token:", error);
            return null; // Token is invalid
        }
    }

    return null;

    // if (token) {
    //     try {
    //         const decoded = jwtDecode(token);
    //         const currentTime = Date.now() / 1000;
    //
    //         if (decoded.exp < currentTime) {
    //             return null; // Token has expired
    //         }
    //     } catch (error) {
    //         console.error("Invalid token:", error);
    //         return null; // Token is invalid
    //     }
    // }
    //
    // return token;
};

export default useAuth;
