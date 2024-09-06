import { Link, useRouteError } from "react-router-dom";
import "../styles/global.css";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div className="center-both">
        <Alert
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          width="80%"
          height="80%"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Oops
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            The page you're looking for doesn't exist.
          </AlertDescription>
          <Link to="/" className="error-link">
            Go back to the homepage
          </Link>
        </Alert>
      </div>
    </>
  );
}
