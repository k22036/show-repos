import UserInfo from "./components/UserInfo";
import Repos from "./components/Repos";
import { getUserData } from "@/libs/fetch_user";

export default async function Home() {

  const userData = await getUserData();

  return (
    <div className="container mx-auto p-5">
      <div className="text-3xl font-bold mb-6">Hello GitHub</div>
      <UserInfo data={userData.data} />
      <Repos data={userData.data} />
    </div>
  );
}
