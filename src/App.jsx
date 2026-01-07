import { useState } from "react";

import Button from "./DayOne/Button";
import AdminDashboard from "./DayOnePartTwo/AdminDashboard";
import Login from "./DayOnePartTwo/Login";
import UserDashboard from "./DayOnePartTwo/UserDashboard";

function App() {
  const [role, setRole] = useState("null"); // null | "admin" | "user"


  function handleLogout() {
    setRole(null);
  }

  let content;

  if (!role) {
    content = <Login setRole={setRole} />;
  } else if (role === "admin") {
    content = <AdminDashboard onLogout={handleLogout} />;
  } else {
    content = <UserDashboard onLogout={handleLogout} />;
  }

  return (
    <>
      {/* <Button page="Home" />
      <Button page="About" /> */}
      {content}
    </>
  );
}

export default App;
