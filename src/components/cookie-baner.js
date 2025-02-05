import React, { useState, useEffect } from "react";
import { Container, Flex, Box, Button, Text } from "./ui";

const CookieBanner = () => {
  // State to control visibility of the banner
  const [isVisible, setIsVisible] = useState(true);

  // Check if the user has already accepted the cookies
  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (cookieConsent) {
      setIsVisible(false); // Hide banner if consent is already given
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem("cookieConsent", "accepted"); // Store consent in localStorage
  };

  const handleDecline = () => {
    setIsVisible(false);
    localStorage.setItem("cookieConsent", "declined"); // Store declined consent in localStorage
  };

  if (!isVisible) return null; // Don't render the banner if not visible

  return (
    <div style={styles.banner}>
      <p>
        We use cookies to enhance your experience on our website. By continuing
        to browse, you agree to our
        <a href="/privacy" style={styles.link}>
          Privacy Policy
        </a>
        and consent to the use of cookies.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div style={{ margin: "0 0.5rem" }}>
          <Button onClick={handleAccept}>Accept</Button>
        </div>
        <div style={{ margin: "0 0.5rem" }}>
          <Button onClick={handleDecline}>Decline</Button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  banner: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "black",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
    zIndex: 1000,
  },
  link: {
    color: "#fff",
    textDecoration: "underline",
  },
  button: {
    margin: "0 10px",
    padding: "8px 16px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default CookieBanner;
