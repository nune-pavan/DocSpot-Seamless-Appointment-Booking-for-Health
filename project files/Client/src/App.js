import './App.css';
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      {/* Global Toast Setup */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          success: {
            style: {
              background: "#38A169", // green
              color: "white",
              fontWeight: "bold",
            },
          },
          error: {
            style: {
              background: "#E53E3E", // red
              color: "white",
              fontWeight: "bold",
            },
          },
        }}
      />

      {/* Main Layout */}
      <div className="min-h-screen bg-gray-50">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
