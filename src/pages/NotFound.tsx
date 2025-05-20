
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-chembrand-100 text-chembrand-700 mb-4">
            <span className="text-2xl font-bold">404</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-muted-foreground max-w-lg mb-8">
          We couldn't find the page you were looking for. It might have been removed, renamed, or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
          <Link to="/products">
            <Button variant="outline">Browse Products</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
