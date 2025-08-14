export default function App() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold">Tailwind v4 OK</h1>

      <button className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
        Bouton
      </button>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="h-16 rounded-xl bg-emerald-500" />
        <div className="h-16 rounded-xl bg-indigo-500" />
      </div>
    </div>
  )
}
