"use client";
import { useState, useEffect } from "react";

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [internshipId, setInternshipId] = useState("");
  const [status, setStatus] = useState("");

  const BASE_URL = "http://localhost:8081/applications";

  // Fetch applications (GET)
  const fetchApplications = async () => {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    setApplications(data);
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  //  Create application (POST)
  const addApplication = async () => {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ studentId, internshipId, status }),
    });
    await res.json();
    fetchApplications();
  };

  // Update application (PUT)
  const updateApplication = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ studentId, internshipId, status }),
    });
    await res.json();
    fetchApplications();
  };

  // remove application (DELETE)
  const deleteApplication = async (id) => {
    await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
    fetchApplications();
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h1>Applications</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          placeholder="Internship ID"
          value={internshipId}
          onChange={(e) => setInternshipId(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={addApplication}>Add Application</button>
      </div>

      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student ID</th>
            <th>Internship ID</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.id}</td>
              <td>{app.studentId}</td>
              <td>{app.internshipId}</td>
              <td>{app.status}</td>
              <td>
                <button onClick={() => updateApplication(app.id)}>Update</button>
                <button onClick={() => deleteApplication(app.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}