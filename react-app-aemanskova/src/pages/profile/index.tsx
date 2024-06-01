import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthContext.tsx";
import AuthForm from "../../components/AuthForm";
import authInstance from "../../auth.ts";
import { IProfile } from "./types.tsx";
import { ProfileContaner, ProfileInfo } from "./styles.tsx";

const ProfilePage = () => {
  const { isAuth } = useContext(AuthContext);
  const [profile, setProfile] = useState({} as IProfile);
  const getUsers = async () => {
    const response = await authInstance.get("users/current/");
    setProfile(response.data);
    console.log(response);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (!isAuth) return <AuthForm />;
  else
    return (
      <ProfileContaner>
        <h2>Profile info</h2>
        <ProfileInfo>
          <span>Username: {profile.username}</span>
          <span>Email: {profile.email}</span>
        </ProfileInfo>
      </ProfileContaner>
    );
};
export default ProfilePage;
