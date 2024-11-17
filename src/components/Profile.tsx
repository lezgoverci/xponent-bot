import React from 'react';
// import 'tailwindcss/tailwind.css';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center px-4">
          <nav className="ml-auto flex gap-6">
            <a href="/profile" className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.5 0-7 1.25-7 3.75V20h14v-2.25c0-2.5-4.5-3.75-7-3.75z" />
              </svg>
              Profile
            </a>
            <a href="/knowledge-base" className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 2v20h12V2H6zm10 18H8V4h8v16z" />
              </svg>
              Knowledge Base
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-6 lg:p-8">
        {/* Virtual ID Card */}
        <div className="mx-auto max-w-md overflow-hidden bg-white shadow-lg rounded-lg">
          <div className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 p-6 text-white">
            <div className="absolute inset-0 bg-black/20"></div>
            <h1 className="relative z-10 text-2xl font-bold">Virtual ID Card</h1>
          </div>
          <div className="aspect-[1.58/1] bg-gradient-to-br-light p-6">
            <div className="grid h-full grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <div className="text-xs font-medium text-muted-foreground">Full Name</div>
                <div className="font-semibold">John Doe</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-medium text-muted-foreground">ID Number</div>
                <div className="font-semibold">ID-12345-XYZ</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-medium text-muted-foreground">Date of Issue</div>
                <div className="font-semibold">2024-01-01</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-medium text-muted-foreground">Valid Until</div>
                <div className="font-semibold">2029-01-01</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-medium text-muted-foreground">Access Level</div>
                <div className="font-semibold">Level 3 - Premium</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-medium text-muted-foreground">Status</div>
                <span className="badge badge-success">Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mx-auto mt-8 max-w-2xl">
          <h2 className="mb-4 text-xl font-semibold">Achievements</h2>
          <div className="h-400 overflow-y-auto rounded-lg border p-4">
            <div className="space-y-4">
              {/* Example Achievement */}
              <div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M10 2v2h4V2h-4zM4 6h16v14H4V6zm0-2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4z" />
                  </svg>
                  <div>
                    <h3 className="font-medium">Early Adopter</h3>
                    <p className="text-sm text-muted-foreground">One of the first 1000 users to join the platform</p>
                    <div className="mt-1 text-xs text-muted-foreground">Earned on: 2024-01-15</div>
                  </div>
                </div>
              </div>
              {/* Additional Achievements */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;