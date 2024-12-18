import React, { useState, useEffect } from "react";

const Home = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    busService: "",
  });

  const [feedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    comments: "",
  });

  const [language, setLanguage] = useState("English");

  const [busSchedules, setBusSchedules] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const storedBusSchedules =
      JSON.parse(localStorage.getItem("busSchedules")) || [];
    const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setBusSchedules(storedBusSchedules);
    setFeedbacks(storedFeedbacks);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBusSchedules = [...busSchedules, formData];
    setBusSchedules(newBusSchedules);
    localStorage.setItem("busSchedules", JSON.stringify(newBusSchedules));
    alert("Bus Schedule Submitted Successfully!");
    setFormData({ from: "", to: "", date: "", busService: "" });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const newFeedbacks = [...feedbacks, feedbackData];
    setFeedbacks(newFeedbacks);
    localStorage.setItem("feedbacks", JSON.stringify(newFeedbacks));
    alert("Feedback Submitted Successfully!");
    setFeedbackData({ name: "", email: "", comments: "" });
  };

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Language Dropdown */}
      <div style={{ textAlign: "right", marginBottom: "10px" }}>
        <select
          value={language}
          onChange={handleLanguageChange}
          style={{ padding: "5px", width: "100px" }}
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Marathi">Marathi</option>
        </select>
      </div>

      {/* Flexbox Container for Forms */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {/* Bus Schedule Form */}
        <div style={{ flex: 1 }}>
          <h3 style={{ textAlign: "center" }}>Bus Schedule Form</h3>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <input
              type="text"
              name="from"
              placeholder="From"
              value={formData.from}
              onChange={handleInputChange}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              required
            />
            <input
              type="text"
              name="to"
              placeholder="To"
              value={formData.to}
              onChange={handleInputChange}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              required
            />
            <select
              name="busService"
              value={formData.busService}
              onChange={handleInputChange}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              required
            >
              <option value="">Bus Services</option>
              <option value="Express">Express</option>
              <option value="Luxury">Luxury</option>
              <option value="Standard">Standard</option>
            </select>
            <button
              type="submit"
              style={{
                backgroundColor: "#f44336",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
        </div>

        {/* Feedback Form */}
        <div style={{ flex: 1 }}>
          <h3 style={{ textAlign: "center" }}>Feedback Form</h3>
          <form
            onSubmit={handleFeedbackSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={feedbackData.name}
              onChange={handleFeedbackChange}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={feedbackData.email}
              onChange={handleFeedbackChange}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              required
            />
            <textarea
              name="comments"
              placeholder="Your Comments"
              value={feedbackData.comments}
              onChange={handleFeedbackChange}
              rows="4"
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              required
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>

      {/* Display Bus Schedules */}
      <h3 style={{ marginTop: "30px" }}>Submitted Bus Schedules</h3>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "10px",
          textAlign: "left",
        }}
      >
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th>Bus Service</th>
          </tr>
        </thead>
        <tbody>
          {busSchedules.map((schedule, index) => (
            <tr key={index}>
              <td>{schedule.from}</td>
              <td>{schedule.to}</td>
              <td>{schedule.date}</td>
              <td>{schedule.busService}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
