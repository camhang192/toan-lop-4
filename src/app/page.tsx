export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          📚 Học Toán Lớp 4 - Lớp 5
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">
              Lớp 4
            </h2>

            <ul className="space-y-2">
              <li>➕ Trung bình cộng</li>
              <li>➕ Tổng - Hiệu</li>
              <li>➕ Phân số</li>
              <li>➕ Hình học</li>
              <li>➕ Toán tuổi</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">
              Lớp 5
            </h2>

            <ul className="space-y-2">
              <li>➕ Số thập phân</li>
              <li>➕ Tỉ số phần trăm</li>
              <li>➕ Chuyển động đều</li>
              <li>➕ Hình học nâng cao</li>
              <li>➕ Ôn thi vào lớp 6</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}