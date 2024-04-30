import { useAuth0 } from "@auth0/auth0-react";
import "./VIPContainer.css";

const VIPContainer = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <section className="v-i-p-frame">
      <h1 className="become-a-vip">BECOME A VIP</h1>
      <div className="update-notifications-frame">
        <div className="instagram-facebook-mail-frame">
          <div className="recieve-updates-on">
            Recieve updates on special events, Menu items, menu reviews and more
            !
          </div>
        </div>
        <button  onClick={() => loginWithRedirect()} className="buttons-states-dark61">
          <div className="button73">Sign up Now!</div>
        </button>
      </div>
    </section>
  );
};

export default VIPContainer;
