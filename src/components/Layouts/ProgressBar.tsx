import LoadingScreen from "./LoadingScreen";

/**
 * ProgressBar — re-exports the branded LoadingScreen
 * Used as a Suspense fallback for any lazy-loaded components.
 */
function ProgressBar() {
  return <LoadingScreen />;
}

export default ProgressBar;
