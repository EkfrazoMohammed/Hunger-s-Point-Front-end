import { useAuth0 } from "@auth0/auth0-react";
import "./VIPContainer.css";
import { toast } from "react-toastify";

const VIPContainer = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <section className="v-i-p-frame hf-row" style={{backgroundColor:`var(--card-bg)`,borderRadius:'10px',border: `1px solid var(--hp-yellow-600)`,marginBottom:'20px'}}>
      <h1 className="become-a-vip" style={{fontFamily:`var(--primary-font-family-bold)`}}>BECOME A VIP</h1>
      <div className="update-notifications-frame">
        <div className="instagram-facebook-mail-frame">
          <div className="recieve-updates-on" style={{fontFamily:`var(--primary-font-family)`}}>
            Recieve updates on special events, Menu items, menu reviews and more
            !
          </div>
        </div>
        {/* loginWithRedirect() */}
        <button  onClick={() => {toast.success("The Hunger's Point coming soon at Punjab center!");}} className="buttons-states-dark61">
          <div className="button73" style={{fontFamily:`var(--primary-font-family)`}}>Sign Up Now!</div>
        </button>
      </div>
    </section>
  );
};

export default VIPContainer;
