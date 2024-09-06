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
import VisaApplicationPage from './pages/VisaApplicationsPage.tsx'
import VisaAnalyticsPage from "./pages/VisaAnalyticsPage.tsx";
import InterpolePage from './pages/Interpolepage.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <VisaApplicationPage/>,
  }, 
  {
    path: "/InterpolePage",
    element: <InterpolePage/>,
  }, 
  {
    path: "/VisaApplicationPage",
    element: <VisaApplicationPage/>,
  },
  
  {
    path: "/VisaAnalyticsPage",
    element: <VisaAnalyticsPage/>,
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
