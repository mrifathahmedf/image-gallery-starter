
```jsx
import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('repository');

  const tabContent = {
    repository: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Repository Name (মূল ফোল্ডার)</h2>
        <p className="text-gray-600">GitHub-এ যেটা মূল রেপোজিটরি হবে:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>my-react-app</li>
          <li>drawing-app-react</li>
          <li>portfolio-site</li>
          <li>react-todo-list</li>
          <li>react-ai-chatbot</li>
        </ul>
        <p className="text-sm text-gray-500 mt-2">✅ নামকরণ টিপস: lowercase, ড্যাশ (-), স্পষ্টতা</p>
      </div>
    ),
    components: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Component Files</h2>
        <p className="text-gray-600">React component ফাইলগুলো .jsx বা .tsx এক্সটেনশন দিয়ে:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Header.jsx</li>
          <li>Navbar.jsx</li>
          <li>DrawingCanvas.jsx</li>
          <li>TodoItem.jsx</li>
          <li>Footer.jsx</li>
        </ul>
        <p className="text-sm text-gray-500 mt-2">📌 নামকরণ কনভেনশন: PascalCase, প্রতিটি Component আলাদা ফাইলে</p>
      </div>
    ),
    config: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Config / Setup Files</h2>
        <p className="text-gray-600">Root Level-এ থাকা গুরুত্বপূর্ণ ফাইলস:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>package.json – প্রজেক্ট dependency</li>
          <li>vite.config.js / webpack.config.js – bundler config</li>
          <li>tailwind.config.js – Tailwind CSS সেটআপ</li>
          <li>.gitignore – কোন ফাইল GitHub-এ যাবে না</li>
          <li>README.md – প্রজেক্টের পরিচিতি</li>
        </ul>
      </div>
    ),
    structure: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">ফোল্ডার গঠন</h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm text-gray-800">
{`my-react-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── README.md
└── .gitignore`}
        </pre>
      </div>
    ),
    readme: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">README.md ফাইল</h2>
        <p className="text-gray-600">প্রজেক্ট পরিচিতির জন্য সবচেয়ে গুরুত্বপূর্ণ। এই ফাইলে থাকা উচিত:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Project Title</li>
          <li>Live Demo (যদি থাকে)</li>
          <li>Installation Guide</li>
          <li>Usage Instruction</li>
          <li>Screenshots (optional)</li>
          <li>Technologies Used</li>
        </ul>
      </div>
    ),
    tips: (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">অতিরিক্ত টিপস</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>ফাইল নাম কখনও বাংলায় দিও না</li>
          <li>GitHub এ সব ফাইল Case-sensitive</li>
          <li>শুরুতে প্রজেক্ট নাম ঠিক করো, তারপর ফাইলগুলো নাম দাও পরিষ্কারভাবে</li>
          <li>প্রত্যেক Component কে আলাদা ফাইলে রাখো</li>
        </ul>
        <div className="mt-4">
          <h3 className="font-medium text-gray-800">সংক্ষেপে:</h3>
          <table className="w-full border-collapse mt-2 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 text-left">ফাইল/ফোল্ডার</th>
                <th className="border px-4 py-2 text-left">উদাহরণ নাম</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Repository Name</td>
                <td className="border px-4 py-2">drawing-app-react</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Component Files</td>
                <td className="border px-4 py-2">Header.jsx, CanvasBoard.jsx</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Configuration</td>
                <td className="border px-4 py-2">vite.config.js, tailwind.config.js</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Entry Point</td>
                <td className="border px-4 py-2">App.jsx, main.jsx</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Documentation</td>
                <td className="border px-4 py-2">README.md</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-indigo-600 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">React Project File & Folder Naming Guide</h1>
        </div>
        
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto" aria-label="Tabs">
            {[
              { id: 'repository', label: 'Repository' },
              { id: 'components', label: 'Components' },
              { id: 'config', label: 'Config' },
              { id: 'structure', label: 'Structure' },
              { id: 'readme', label: 'README' },
              { id: 'tips', label: 'Tips & Summary' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-4 px-6 text-sm font-medium ${
                  activeTab === tab.id
                    ? 'border-b-2 border-indigo-500 text-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {tabContent[activeTab]}
        </div>
      </div>
    </div>
  );
}
```