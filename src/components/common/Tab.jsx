import React from 'react';

function Tab({ setActiveTab }) {
  return (
    <div>
      <div className="sm:hidden">
        <select
          id="Tab"
          className="w-full rounded-md border-gray-200"
          onChange={(e) => setActiveTab(e.target.value)}
        >
          <option value="Published">Published</option>
          <option value="Drafts">Drafts</option>
          <option value="Trashed">Trashed</option>
        </select>
      </div>

      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex gap-6" aria-label="Tabs">
            {['Published', 'Drafts', 'Trashed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="inline-flex items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Tab;
