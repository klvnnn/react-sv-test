import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tab from "../../components/common/Tab";

const AllPosts = () => {
  const [activeTab, setActiveTab] = useState("Published");
  const navigate = useNavigate();

  // Contoh data post
  const posts = [
    { id: 1, title: "React Basics", category: "Programming", status: "Published" },
    { id: 2, title: "Getting Started with Node.js", category: "Backend", status: "Drafts" },
    { id: 3, title: "SEO Optimization Tips", category: "Marketing", status: "Trashed" }
  ];

  const filteredPosts = posts.filter((post) => post.status === activeTab);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="rounded-lg border border-gray-200 mt-4">
        <div className="overflow-x-auto rounded-t-lg">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Title</th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Category</th>
                <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <tr key={post.id}>
                    <td className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">{post.title}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-gray-700">{post.category}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-gray-700">
                      <button onClick={() => navigate(`/posts/edit/${post.id}`)} className="mr-2 text-blue-500">
                        Edit
                      </button>
                      <button onClick={() => alert("Moved to Trash")} className="text-red-500">
                        Trash
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-4 py-2 text-center text-gray-500">
                    No posts available in this category.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Section (Placeholder) */}
        <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
          <ol className="flex justify-end gap-1 text-xs font-medium">
            <li>
              <a href="#" className="inline-flex size-8 items-center justify-center rounded-sm border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
                <span className="sr-only">Prev Page</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="block size-8 rounded-sm border border-gray-100 bg-white text-center leading-8 text-gray-900">1</a>
            </li>
            <li className="block size-8 rounded-sm border-blue-600 bg-blue-600 text-center leading-8 text-white">2</li>
            <li>
              <a href="#" className="block size-8 rounded-sm border border-gray-100 bg-white text-center leading-8 text-gray-900">3</a>
            </li>
            <li>
              <a href="#" className="inline-flex size-8 items-center justify-center rounded-sm border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
                <span className="sr-only">Next Page</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
