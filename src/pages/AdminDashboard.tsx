import React, { useState } from 'react';
import { Users, Activity, Shield, AlertTriangle, CheckCircle, XCircle, Eye, Ban, Flag, TrendingUp } from 'lucide-react';
import { Layout } from '../components/Layout';

export const AdminDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'overview' | 'review' | 'quality' | 'users'>('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const overviewStats = [
    { label: 'Active Tasks', value: '47', change: '+5 today', color: 'text-[#00FFB2]' },
    { label: 'Pending Reviews', value: '23', change: '2 urgent', color: 'text-orange-500' },
    { label: 'Total Labelers', value: '1,247', change: '+12 this week', color: 'text-[#9B5DE5]' },
    { label: 'Quality Score', value: '94.2%', change: '+1.1% avg', color: 'text-blue-500' },
  ];

  const pendingTasks = [
    {
      id: 1,
      title: 'DeFi Protocol Security Assessment',
      client: 'SecureChain Labs',
      submitted: '2 hours ago',
      labeler: 'alex_crypto',
      accuracy: 96,
      status: 'Pending Review',
      samples: 45,
      flagged: false,
    },
    {
      id: 2,
      title: 'Bitcoin Transaction Analysis',
      client: 'CryptoInsights',
      submitted: '4 hours ago',
      labeler: 'btc_analyst',
      accuracy: 89,
      status: 'Quality Check',
      samples: 32,
      flagged: true,
    },
    {
      id: 3,
      title: 'NFT Scam Detection',
      client: 'ArtGuard',
      submitted: '1 day ago',
      labeler: 'nft_expert',
      accuracy: 98,
      status: 'Approved',
      samples: 67,
      flagged: false,
    },
  ];

  const qualityIssues = [
    {
      id: 1,
      task: 'Smart Contract Analysis',
      labeler: 'code_reviewer',
      issue: 'Inconsistent classification patterns',
      severity: 'Medium',
      samples: 12,
      flagged: '1 hour ago',
    },
    {
      id: 2,
      task: 'Phishing Detection',
      labeler: 'web_security',
      issue: 'Multiple false positives',
      severity: 'High',
      samples: 8,
      flagged: '3 hours ago',
    },
    {
      id: 3,
      task: 'DeFi Risk Assessment',
      labeler: 'defi_analyst',
      issue: 'Low confidence scores',
      severity: 'Low',
      samples: 15,
      flagged: '5 hours ago',
    },
  ];

  const users = [
    {
      id: 1,
      username: 'alex_crypto',
      email: 'alex@example.com',
      level: 'Expert',
      reputation: 4.8,
      tasksCompleted: 245,
      accuracy: 96.2,
      joined: '2023-08-15',
      status: 'Active',
      strikes: 0,
    },
    {
      id: 2,
      username: 'btc_analyst',
      email: 'btc@example.com',
      level: 'Advanced',
      reputation: 4.5,
      tasksCompleted: 189,
      accuracy: 89.1,
      joined: '2023-09-22',
      status: 'Warning',
      strikes: 1,
    },
    {
      id: 3,
      username: 'nft_expert',
      email: 'nft@example.com',
      level: 'Expert',
      reputation: 4.9,
      tasksCompleted: 312,
      accuracy: 98.4,
      joined: '2023-07-10',
      status: 'Active',
      strikes: 0,
    },
  ];

  return (
    <Layout 
      title="Admin Dashboard" 
      subtitle="Platform oversight and quality control"
      activeSection={activeSection}
      onSectionChange={setActiveSection}
    >
      <div className="p-4 md:p-8 max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-wrap gap-2 mb-8 bg-[#F2F2F2] dark:bg-gray-800 p-1 rounded-2xl">
          {[
            { id: 'overview', label: 'Overview', icon: Activity },
            { id: 'review', label: 'Review Queue', icon: Eye },
            { id: 'quality', label: 'Quality Control', icon: Shield },
            { id: 'users', label: 'User Management', icon: Users },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id as any)}
                className={`flex items-center px-3 md:px-4 py-2 rounded-xl transition-all duration-200 text-sm md:text-base ${
                  activeSection === tab.id
                    ? 'bg-white dark:bg-gray-700 shadow-sm text-[#0A0E2A] dark:text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-[#0A0E2A] dark:hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}

        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {overviewStats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{stat.label}</span>
                    {stat.label === 'Pending Reviews' && (
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                    )}
                  </div>
                  <div className={`text-lg md:text-2xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.change}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-[#0A0E2A] dark:text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <div>
                        <div className="text-sm font-medium text-green-800 dark:text-green-200">Task Completed</div>
                        <div className="text-xs text-green-600 dark:text-green-300">Bitcoin Analysis by alex_crypto</div>
                      </div>
                    </div>
                    <span className="text-xs text-green-600 dark:text-green-400">2m ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl">
                    <div className="flex items-center">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mr-3" />
                      <div>
                        <div className="text-sm font-medium text-orange-800 dark:text-orange-200">Quality Issue</div>
                        <div className="text-xs text-orange-600 dark:text-orange-300">Flagged submission needs review</div>
                      </div>
                    </div>
                    <span className="text-xs text-orange-600 dark:text-orange-400">15m ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-blue-500 mr-3" />
                      <div>
                        <div className="text-sm font-medium text-blue-800 dark:text-blue-200">New Labeler</div>
                        <div className="text-xs text-blue-600 dark:text-blue-300">defi_expert joined the platform</div>
                      </div>
                    </div>
                    <span className="text-xs text-blue-600 dark:text-blue-400">1h ago</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-[#0A0E2A] dark:text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Stake Management
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Total Staked</span>
                      <span className="text-lg font-bold text-[#9B5DE5]">12,450.0 ICP</span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Across 47 active tasks</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Pending Payouts</span>
                      <span className="text-lg font-bold text-[#00FFB2]">1,234.5 ICP</span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Ready for distribution</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <button className="bg-[#00FFB2] text-[#0A0E2A] py-2 rounded-xl font-medium hover:bg-[#00FFB2]/90 transition-colors text-sm">
                      Trigger Payouts
                    </button>
                    <button className="bg-[#9B5DE5] text-white py-2 rounded-xl font-medium hover:bg-[#9B5DE5]/90 transition-colors text-sm">
                      Manage Stakes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Review Section */}
        {activeSection === 'review' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-[#0A0E2A] dark:text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
              Review Queue
            </h2>

            {pendingTasks.map((task) => (
              <div key={task.id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0A0E2A] dark:text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                      {task.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <span>{task.client}</span>
                      <span>•</span>
                      <span>Submitted {task.submitted}</span>
                      <span>•</span>
                      <span>Labeler: {task.labeler}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {task.flagged && (
                      <Flag className="w-4 h-4 text-orange-500" />
                    )}
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      task.status === 'Approved'
                        ? 'bg-green-100 text-green-800'
                        : task.status === 'Quality Check'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {task.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-xl">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Accuracy</div>
                    <div className="text-lg font-bold text-[#00FFB2]">{task.accuracy}%</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-xl">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Samples</div>
                    <div className="text-lg font-bold text-[#9B5DE5]">{task.samples}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-xl">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Labeler Level</div>
                    <div className="text-sm font-medium text-[#0A0E2A] dark:text-white">Expert</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-xl">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Reputation</div>
                    <div className="text-sm font-medium text-[#0A0E2A] dark:text-white">4.8/5.0</div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-end gap-2">
                  <button className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </button>
                  <button className="flex items-center px-4 py-2 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-colors">
                    <XCircle className="w-4 h-4 mr-2" />
                    Reject
                  </button>
                  <button className="flex items-center px-4 py-2 bg-[#00FFB2] text-[#0A0E2A] rounded-xl hover:bg-[#00FFB2]/90 transition-colors">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Approve
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quality Control Section */}
        {activeSection === 'quality' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-[#0A0E2A] dark:text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
                Quality Control Dashboard
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-4 rounded-xl">
                  <div className="text-sm text-red-600 mb-1">High Priority Issues</div>
                  <div className="text-2xl font-bold text-red-600">3</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl">
                  <div className="text-sm text-orange-600 mb-1">Medium Priority</div>
                  <div className="text-2xl font-bold text-orange-600">7</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-xl">
                  <div className="text-sm text-yellow-600 mb-1">Low Priority</div>
                  <div className="text-2xl font-bold text-yellow-600">12</div>
                </div>
              </div>
            </div>

            {qualityIssues.map((issue) => (
              <div key={issue.id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0A0E2A] dark:text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                      {issue.task}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <span>Labeler: {issue.labeler}</span>
                      <span>•</span>
                      <span>Flagged {issue.flagged}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      issue.severity === 'High'
                        ? 'bg-red-100 text-red-800'
                        : issue.severity === 'Medium'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {issue.severity}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-[#0A0E2A] dark:text-white mb-2">Issue Description:</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-3 rounded-xl">
                    {issue.issue}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-medium">{issue.samples}</span> samples affected
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <Eye className="w-4 h-4 mr-2" />
                      Review Samples
                    </button>
                    <button className="flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-xl hover:bg-orange-200 transition-colors">
                      <Flag className="w-4 h-4 mr-2" />
                      Report Issue
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* User Management Section */}
        {activeSection === 'users' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-[#0A0E2A] dark:text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                User Management
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Level
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Reputation
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Tasks
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Accuracy
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-[#0A0E2A] dark:text-white">{user.username}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-[#9B5DE5]">{user.level}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-[#0A0E2A] dark:text-white">{user.reputation}/5.0</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {user.tasksCompleted}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#00FFB2] font-medium">
                        {user.accuracy}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          {user.status}
                        </span>
                        {user.strikes > 0 && (
                          <span className="ml-2 text-xs text-red-600">
                            {user.strikes} strike{user.strikes > 1 ? 's' : ''}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                          <button className="text-[#00FFB2] hover:text-[#00FFB2]/80 font-medium">
                            View
                          </button>
                          <button className="text-orange-600 hover:text-orange-700 font-medium">
                            Strike
                          </button>
                          <button className="text-red-600 hover:text-red-700 font-medium">
                            <Ban className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Mobile Floating Action Button */}
        <div className="fixed bottom-6 right-6 md:hidden z-30">
          <button
            onClick={() => setActiveSection('review')}
            className="w-14 h-14 bg-[#00FFB2] text-[#0A0E2A] rounded-full shadow-lg flex items-center justify-center hover:bg-[#00FFB2]/90 transition-colors"
          >
            <Eye className="w-6 h-6" />
          </button>
        </div>
      </div>
    </Layout>
  );
};