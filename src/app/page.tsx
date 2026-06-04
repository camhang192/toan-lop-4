import { grades } from "@/data/topics";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          📚 Học Toán Lớp 4 - Lớp 5
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {grades.map((grade) => (
            <div
              key={grade.id}
              className="bg-white rounded-xl shadow p-6"
            >
              <h2 className="text-2xl font-bold mb-4">
                {grade.name}
              </h2>

              <ul className="space-y-3">
                {grade.topics.map((topic) => (
                  <li
                    key={topic}
                    className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 cursor-pointer"
                  >
                    📖 {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-gray-500">
          Website luyện toán cho con gái ❤️
        </div>
      </div>
    </main>
  );
}