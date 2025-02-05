import React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <main
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom right, #e0e7ff, #f3e8ff)",
      }}
    >
      <div
        style={{
          padding: "2.5rem",
          backgroundColor: "white",
          borderRadius: "1.5rem",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            color: "#7c3aed",
          }}
        >
          404: Page Not Found
        </h1>
        <p
          style={{
            color: "#374151",
            marginTop: "1rem",
            fontSize: "1.125rem",
          }}
        >
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          style={{
            marginTop: "1.5rem",
            display: "inline-block",
            padding: "1rem 2rem",
            color: "white",
            background: "linear-gradient(to right, #3b82f6, #9333ea)",
            borderRadius: "1rem",
            fontSize: "1.125rem",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.15)",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.target.style.background =
              "linear-gradient(to right, #2563eb, #7e22ce)")
          }
          onMouseOut={(e) =>
            (e.target.style.background =
              "linear-gradient(to right, #3b82f6, #9333ea)")
          }
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
