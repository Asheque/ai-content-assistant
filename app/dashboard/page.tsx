"use client"; // This enables client-side interactivity

import { useState } from "react";

export default function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) return;

    setLoading(true);
    setResult("");

    try {
      // Call your AI API here
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setResult(data.text); // Assume the API returns { text: "..." }
    } catch (err) {
      console.error(err);
      setResult("Error generating content.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-6">AI Content Generator</h1>

      <textarea
        className="w-full max-w-xl p-4 border rounded mb-4"
        rows={5}
        placeholder="Enter your prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-6"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {result && (
        <div className="w-full max-w-xl p-4 border rounded bg-gray-50">
          <h2 className="font-semibold mb-2">Generated Content:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
