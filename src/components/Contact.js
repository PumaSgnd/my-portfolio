import React, { useState } from "react";
import "../css/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(""); 
  const [modalType, setModalType] = useState("success"); 
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModalType("success");
        setModalMessage("Pesan berhasil dikirim dan disimpan!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setModalType("error");
        setModalMessage("Terjadi kesalahan saat mengirim pesan.");
      }
    } catch (error) {
      console.error("Error:", error);
      setModalType("error");
      setModalMessage("Terjadi kesalahan jaringan. Silakan coba lagi.");
    } finally {
      setLoading(false);
      setShowModal(true);
      setTimeout(() => setShowModal(false), 7000);
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
            {modalType === "success" ? (
              <i className="fas fa-check-circle success-icon"></i>
            ) : (
              <i className="fas fa-times-circle error-icon"></i>
            )}
            <h3>Notifikasi</h3>
            <p>{modalMessage}</p>
            <button onClick={() => setShowModal(false)}>Oke</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
