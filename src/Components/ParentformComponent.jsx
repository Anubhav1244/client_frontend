import React, { useState } from "react";
import GetHelpNowForm from "./Gethelp";
// import GetHelpNowForm from "./GetHelpNowForm"; // adjust the path if needed

const ParentComponent = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Open Help Form
      </button>

      {showForm && (
        <GetHelpNowForm onClose={() => setShowForm(false)} />
      )}
    </div>
  );
};

export default ParentComponent;
