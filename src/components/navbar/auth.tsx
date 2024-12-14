import { getSession } from "@/lib";
import TopNavBar from "./top-nav-bar";

const Auth = async () => {
  const session = await getSession();
  const u = session.userInfo;

  return <TopNavBar user={u} />;
};

export default Auth;
