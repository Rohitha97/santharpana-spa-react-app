// ProgressBar.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // Import the CSS

function ProgressBar() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
      <p>Loading...</p>
    </div>
  );
}
export default ProgressBar;
