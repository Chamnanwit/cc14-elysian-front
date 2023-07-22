export default function InputErrorMessage({ message }) {
  // ตรวจสอบว่า message เป็น Object และมี key หรือไม่
  const hasMessage = message && Object.keys(message).length > 0;

  return (
    <div>
      {/* ให้แสดงข้อความเฉพาะหากมี key ใน message */}
      {hasMessage && <span className="text-red-500 text-xs">{message}</span>}
    </div>
  );
}
