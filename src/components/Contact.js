import React, { useState } from "react";
import "../css/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setTimeout(() => {
          setLoading(false);
          setShowModal(true);
          setFormData({ name: "", email: "", message: "" });
        }, 2000);
      } else {
        setLoading(false);
        alert("Terjadi kesalahan!");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  return (
    <section id="contact">
      <h2>Kontak</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Nama" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Pesan" value={formData.message} onChange={handleChange} required />
        <button type="submit" disabled={loading}>
          {loading ? "Mengirim..." : "Kirim"}
        </button>
      </form>

      {/* Loading Overlay */}
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>Mengirim pesan...</p>
        </div>
      )}

      {/* Modal Pop-Up */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <i className="fas fa-check-circle success-icon"></i>
            <h3>Notifikasi</h3>
            <p>Pesan berhasil dikirim dan disimpan!</p>
            <button onClick={() => setShowModal(false)}>Oke</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
