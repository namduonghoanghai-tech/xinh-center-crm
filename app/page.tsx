export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#ffffff",
      padding: "40px",
      fontFamily: "Arial"
    }}>
      <h1 style={{
        fontSize: "42px",
        fontWeight: "bold",
        marginBottom: "10px"
      }}>
        Xinh Center CRM
      </h1>

      <p style={{
        fontSize: "18px",
        color: "#666",
        marginBottom: "40px"
      }}>
        CEO Dashboard • Ultra Luxury VIP Experience
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        marginBottom: "40px"
      }}>
        <div style={{
          padding: "24px",
          border: "1px solid #eee",
          borderRadius: "20px"
        }}>
          <h3>Doanh thu hôm nay</h3>
          <h2>268.000.000đ</h2>
        </div>

        <div style={{
          padding: "24px",
          border: "1px solid #eee",
          borderRadius: "20px"
        }}>
          <h3>Khách VIP hôm nay</h3>
          <h2>36 khách</h2>
        </div>

        <div style={{
          padding: "24px",
          border: "1px solid #eee",
          borderRadius: "20px"
        }}>
          <h3>Lịch hẹn cao cấp</h3>
          <h2>52 lịch</h2>
        </div>

        <div style={{
          padding: "24px",
          border: "1px solid #eee",
          borderRadius: "20px"
        }}>
          <h3>Lead tiềm năng mới</h3>
          <h2>41 khách</h2>
        </div>
      </div>

      <div style={{
        padding: "30px",
        border: "1px solid #eee",
        borderRadius: "20px"
      }}>
        <h2>Ưu tiên hôm nay</h2>
        <ul>
          <li>08 khách VIP cần chăm sóc riêng hôm nay</li>
          <li>03 khách Diamond sắp hết liệu trình</li>
          <li>05 khách cần xác nhận lịch tái khám</li>
          <li>02 khách sinh nhật VIP cần gửi quà</li>
        </ul>
      </div>
    </main>
  );
}