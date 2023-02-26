// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth";
import { Button, Container } from "react-bootstrap";
// import { auth } from "../firebase";
// import { getAuth } from "firebase/auth";

import { useAuth } from "../AuthContext";

import "../index.css";

const Profile = () => {
  const navigate = useNavigate();

  // const [username, setUsername] = useState("");
  // const [loading, setLoading] = useState(false);

  const { logout, currentUser, setError } = useAuth();

  async function handleLogout() {
    try {
      setError("");
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <>
      <Container className="pt-4">
        <h3 className="text-center">Profile</h3>
        <Container>
          <h5>Email Address</h5>
          <p>{currentUser.email}</p>
        </Container>
        <div className="text-center">
          <Button variant="flat" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Profile;
