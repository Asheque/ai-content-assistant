import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">
          Create Professional Content in Seconds
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Our AI-powered assistant helps you write blogs, emails, and social posts instantly — saving you time and boosting your impact.
        </p>
        <Link
  href="/dashboard"
  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
>
  Try for Free
</Link>
      </section>

      {/* Features Section */}
      <section className="max-w-4xl grid gap-8 text-center py-12">
        <h2 className="text-3xl font-bold mb-6">Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Ready-Made Templates</h3>
            <p>Start with emails, blog posts, product descriptions, and more.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Custom Tone & Style</h3>
            <p>Choose friendly, professional, persuasive, or technical tones.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
            <p>Generate polished text in just a few clicks.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Content History</h3>
            <p>Save and reuse past creations anytime.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-4xl text-center py-12">
        <h2 className="text-3xl font-bold mb-6">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <p className="text-2xl font-bold mb-2">$0/mo</p>
            <ul className="text-gray-600 text-sm">
              <li>10 generations/month</li>
              <li>Basic templates</li>
              <li>Standard AI responses</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="text-2xl font-bold mb-2">$9/mo</p>
            <ul className="text-gray-600 text-sm">
              <li>100 generations/month</li>
              <li>All templates</li>
              <li>Tone & length customization</li>
              <li>Content history</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-2xl font-bold mb-2">$39/mo</p>
            <ul className="text-gray-600 text-sm">
              <li>Unlimited generations</li>
              <li>Advanced templates</li>
              <li>Priority speed</li>
              <li>Content history + favorites</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-2xl font-bold mb-2">Custom</p>
            <ul className="text-gray-600 text-sm">
              <li>Unlimited users</li>
              <li>API access</li>
              <li>Dedicated support</li>
              <li>Custom integrations</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
