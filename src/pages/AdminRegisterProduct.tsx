import { useState } from "react";

const AdminRegisterProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    sex: "",
    description: "",
    availableSizeQtt: {},
  });

  const [sizeInput, setSizeInput] = useState("");
  const [qttInput, setQttInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  const handleAddSize = () => {
    if (!sizeInput || !qttInput) return;

    setFormData((prev) => ({
      ...prev,
      availableSizeQtt: {
        ...prev.availableSizeQtt,
        [sizeInput]: Number(qttInput),
      },
    }));
    setSizeInput("");
    setQttInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting product:", formData);
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-white rounded-3xl shadow-lg border border-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Register New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Product name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="0.00"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">Sex</label>
          <input
            type="text"
            name="sex"
            value={formData.sex}
            onChange={handleInputChange}
            placeholder="e.g. male, female, unisex"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">Description</label>
          <textarea
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Product description"
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
          />
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Available Sizes & Quantities</h3>

          <div className="flex gap-3 mb-4">
            <input
              type="text"
              placeholder="Size (e.g. P)"
              value={sizeInput}
              onChange={(e) => setSizeInput(e.target.value.toUpperCase())}
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
            />
            <input
              type="number"
              placeholder="Quantity"
              value={qttInput}
              onChange={(e) => {
                const val = e.target.value;
                // Só atualiza se vazio ou >= 0
                if (val === "" || Number(val) >= 0) {
                  setQttInput(val);
                }
              }}
              className="w-28 rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
            />
            <button
              type="button"
              onClick={handleAddSize}
              className="rounded-lg bg-blue-600 px-5 py-2 text-white font-semibold shadow hover:bg-blue-700 transition"
            >
              Add
            </button>
          </div>

          <ul className="text-sm text-gray-700 space-y-1">
            {Object.entries(formData.availableSizeQtt).map(([size, qtt]) => (
              <li key={size}>
                <span className="font-semibold">{size}:</span> {qtt}
              </li>
            ))}
          </ul>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-green-600 py-3 text-lg font-semibold text-white shadow hover:bg-green-700 transition"
        >
          Register Product
        </button>
      </form>
    </div>
  );
};

export default AdminRegisterProduct;
