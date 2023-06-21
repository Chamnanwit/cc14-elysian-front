import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button
        className="border border-1 border-c-blue1 rounded-full px-5 py-1 text-c-blue1 font-semibold hover:bg-c-blue1 hover:text-c-white1  active:scale-95  hover:scale-105 transition-all duration-200"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        ออกจากระบบ
      </button>
    )
  );
};

export default LogoutButton;
