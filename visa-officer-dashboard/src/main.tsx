import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";

// Importing pages
import ErrorPage from "./pages/ErrorPage.tsx";
import App from "./App.tsx";
import Login from "./pages/Login.tsx";
import ExamplePage from "./pages/ExamplePage.tsx";
import VisaApplication from './pages/VisaApplicationsPage.tsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <VisaApplication/>,
  }, 
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/example",
    element: <ExamplePage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
