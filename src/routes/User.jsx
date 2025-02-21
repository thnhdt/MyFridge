import React from 'react';

const User = () => {
  return (
    <section id="hero" className="block hero-block">
      <div style={styles.card}>
        <h2 style={styles.title}>Thông tin người dùng</h2>
        <div style={styles.infoBox}>
            <strong>Tên: Admin</strong>
            <br />
            <strong>Email: admin@gmail.com</strong>
            <br />
            <strong>Phone: 0912345678</strong>
            <br />
            <strong>Dùng từ ngày: 20/2/2025</strong>
        </div>
      </div>
    </section>
  );
};

const styles = {
  card: {
    width: 400,
    margin: '20px auto',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    padding: '20px',
    backgroundColor: '#ffffff',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  infoBox: {
    padding: '16px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
};

export default User;