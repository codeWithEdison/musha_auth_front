// pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
          <Link 
            to="/profile" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            My Profile
          </Link>
        </div>
        
        <div className="mb-6 p-4 bg-blue-50 rounded-md">
          <p className="text-lg font-medium text-blue-800">
            Welcome EDISON
          </p>
          <p className="text-gray-600 mt-1">
            You can view, edit, and delete user accounts from this panel.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Username</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Created At</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-medium">
              {/* Row 1 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-6 text-left">1</td>
                <td className="py-3 px-6 text-left">john_doe</td>
                <td className="py-3 px-6 text-left">john@example.com</td>
                <td className="py-3 px-6 text-left">Dec 10, 2024</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <Link to="/user-detail/1" className="transform hover:text-blue-500 hover:scale-110 transition-all duration-150 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    <Link to="/edit-user/1" className="transform hover:text-blue-500 hover:scale-110 transition-all duration-150 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </Link>
                    <button className="transform hover:text-red-500 hover:scale-110 transition-all duration-150">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              
              {/* Row 2 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-6 text-left">2</td>
                <td className="py-3 px-6 text-left">jane_smith</td>
                <td className="py-3 px-6 text-left">jane@example.com</td>
                <td className="py-3 px-6 text-left">Dec 15, 2024</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <Link to="/user-detail/2" className="transform hover:text-blue-500 hover:scale-110 transition-all duration-150 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    <Link to="/edit-user/2" className="transform hover:text-blue-500 hover:scale-110 transition-all duration-150 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </Link>
                    <button className="transform hover:text-red-500 hover:scale-110 transition-all duration-150">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              
              {/* Row 3 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-6 text-left">3</td>
                <td className="py-3 px-6 text-left">alex_wilson</td>
                <td className="py-3 px-6 text-left">alex@example.com</td>
                <td className="py-3 px-6 text-left">Dec 18, 2024</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <Link to="/user-detail/3" className="transform hover:text-blue-500 hover:scale-110 transition-all duration-150 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    <Link to="/edit-user/3" className="transform hover:text-blue-500 hover:scale-110 transition-all duration-150 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </Link>
                    <button className="transform hover:text-red-500 hover:scale-110 transition-all duration-150">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              
              {/* Row 4 */}
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-6 text-left">4</td>
                <td className="py-3 px-6 text-left">emma_davis</td>
                <td className="py-3 px-6 text-left">emma@example.com</td>
                <td className="py-3 px-6 text-left">Dec 20, 2024</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <Link to="/user-detail/4" className="transform hover:text-blue-500 hover:scale-110 transition-all duration-150 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    <Link to="/edit-user/4" className="transform hover:text-blue-500 hover:scale-110 transition-all duration-150 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </Link>
                    <button className="transform hover:text-red-500 hover:scale-110 transition-all duration-150">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 5 */}
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-6 text-left">5</td>
                <td className="py-3 px-6 text-left">mike_johnson</td>
                <td className="py-3 px-6 text-left">mike@example.com</td>
                <td className="py-3 px-6 text-left">Dec 22, 2024</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <Link to="/user-detail/5" className="transform hover:text-blue-500 hover:scale-110 transition-all duration-150 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    <Link to="/edit-user/5" className="transform hover:text-blue-500 hover:scale-110 transition-all duration-150 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </Link>
                    <button className="transform hover:text-red-500 hover:scale-110 transition-all duration-150">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="flex justify-between items-center mt-6">
          <div className="text-gray-600">
            Showing 5 of 25 users
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Previous</button>
            <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">1</button>
            <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">2</button>
            <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">3</button>
            <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;