// import { XCircleIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

import { useAuth } from "../AuthContext";

export default function ErrorMessage() {
  const { error, setError } = useAuth();

  return (
    error && (
      <div className="flex justify-center">
        <Container className="mt-4">
          <div className="flex">
            <div className="text-center">
              <FontAwesomeIcon
                onClick={() => setError("")}
                icon={faCircleXmark}
              />
            </div>
            <div className="text-center">
              <h3 style={{ fontSize: "14px" }}>Error: {error}</h3>
            </div>
          </div>
        </Container>
      </div>
    )
  );
}
