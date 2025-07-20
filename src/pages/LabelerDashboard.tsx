import React, { useState } from 'react';
import { Search, Filter, Star, Award, Wallet, TrendingUp, Tag, CheckCircle2, Clock, ExternalLink, Target } from 'lucide-react';
import { Layout } from '../components/Layout';

export const LabelerDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'overview' | 'marketplace' | 'active' | 'earnings'>('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const stats = [
    { label: 'Total Earned', value: '2,847.3 ICP', change: '+234.5 this month', color: 'text-[#00FFB2]' },
    { label: 'Tasks Completed', value: '1,429', change: '+23 this week', color: 'text-[#9B5DE5]' },
    { label: 'Accuracy Rate', value: '97.8%', change: '+0.3% avg', color: 'text-blue-500' },
    { label: 'Reputation Level', value: 'Expert', change: 'Level 8', color: 'text-orange-500' },
  ];

  const marketplaceTasks = [
    {
      id: 1,
      title: 'Bitcoin Transaction Risk Analysis',
      client: 'CryptoSecure Labs',
      type: 'BTC Analysis',
      reward: '0.15 ICP',
      totalReward: '150.0 ICP',
      labels: 1000,
      difficulty: 'Medium',
      timeEstimate: '2-3 hours',
      requiredLevel: 'Advanced',
      description: 'Analyze Bitcoin transactions for risk patterns and suspicious activities.',
      skills: ['BTC', 'Risk Analysis', 'Pattern Recognition'],
      deadline: '2 days',
    },
    {
      id: 2,
      title: 'Smart Contract Vulnerability Detection',
      client: 'DeFi Shield',
      type: 'Contract Risk',
      reward: '0.25 ICP',
      totalReward: '500.0 ICP',
      labels: 2000,
      difficulty: 'Hard',
      timeEstimate: '4-6 hours',
      requiredLevel: 'Expert',
      description: 'Review smart contracts for potential vulnerabilities and security issues.',
      skills: ['Solidity', 'Security', 'Smart Contracts'],
      deadline: '5 days',
    },
    {
      id: 3,
      title: 'Phishing Website Classification',
      client: 'WebGuard Inc',
      type: 'Scam Detection',
      reward: '0.08 ICP',
      totalReward: '80.0 ICP',
      labels: 1000,
      difficulty: 'Easy',
      timeEstimate: '1-2 hours',
      requiredLevel: 'Beginner',
      description: 'Identify and classify phishing websites and scam attempts.',
      skills: ['Web Security', 'Phishing', 'Classification'],
      deadline: '3 days',
    },
  ];

  const activeTasks = [
    {
      id: 1,
      title: 'DeFi Protocol Analysis',
      progress: 65,
      completed: 650,
      total: 1000,
      reward: '0.12 ICP',
      deadline: '1 day',
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'NFT Metadata Verification',
      progress: 90,
      completed: 450,
      total: 500,
      reward: '0.10 ICP',
      deadline: '3 hours',
      status: 'Almost Done',
    },
  ];

  const earnings = [
    { date: '2024-01-15', task: 'Bitcoin Risk Analysis', amount: '24.5 ICP', txHash: '0xabc123...def456', status: 'Completed' },
    { date: '2024-01-14', task: 'Smart Contract Review', amount: '45.2 ICP', txHash: '0x789ghi...jkl012', status: 'Completed' },
    { date: '2024-01-13', task: 'Scam Detection', amount: '12.8 ICP', txHash: '0xmno345...pqr678', status: 'Completed' },
    { date: '2024-01-12', task: 'DeFi Protocol Analysis', amount: '78.1 ICP', txHash: '0xstu901...vwx234', status: 'Completed' },
  ];

  return (
    <Layout 
      title="Labeler Dashboard" 
      subtitle="Earn rewards through quality data labeling"
      activeSection={activeSection}
      onSectionChange={setActiveSection}
    >
      <div className="p-4 md:p-8 max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-wrap gap-2 mb-8 bg-[#F2F2F2] dark:bg-gray-800 p-1 rounded-2xl">
          {[
            { id: 'overview', label: 'Overview', icon: Target },
            { id: 'marketplace', label: 'Marketplace', icon: Search },
            { id: 'active', label: 'Active Tasks', icon: Clock },
            { id: 'earnings', label: 'Earnings', icon: TrendingUp },
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
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{stat.label}</span>
                    {stat.label === 'Reputation Level' && (
                      <Award className="w-4 h-4 text-orange-500" />
                    )}
                  </div>
                  <div className={`text-lg md:text-2xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.change}</div>
                </div>
              ))}
            </div>

            {/* Reputation Progress */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-[#0A0E2A] dark:text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Reputation Progress
                </h2>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-orange-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Level 8 - Expert</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-orange-500 to-[#00FFB2] h-3 rounded-full transition-all duration-500"
                  style={{ width: '75%' }}
                />
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                <span>2,847 XP</span>
                <span>Next Level: 3,200 XP</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-[#0A0E2A] dark:text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Available Tasks
                </h2>
                <div className="space-y-3">
                  {marketplaceTasks.slice(0, 2).map((task) => (
                    <div key={task.id} className="p-4 border border-gray-200 dark:border-gray-600 rounded-xl hover:border-[#00FFB2] transition-colors cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-[#0A0E2A] dark:text-white text-sm">{task.title}</h3>
                        <span className="text-[#9B5DE5] font-bold text-sm">{task.reward}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>{task.labels} labels</span>
                        <span>{task.difficulty}</span>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={() => setActiveSection('marketplace')}
                    className="w-full bg-[#00FFB2]/10 text-[#00FFB2] py-2 rounded-xl font-medium hover:bg-[#00FFB2]/20 transition-colors"
                  >
                    View All Tasks
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-[#0A0E2A] dark:text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Wallet Overview
                </h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-[#00FFB2]/10 to-[#00FFB2]/5 p-4 rounded-xl">
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Available Balance</div>
                    <div className="text-2xl font-bold text-[#00FFB2]">2,847.3 ICP</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-[#00FFB2] text-[#0A0E2A] py-2 rounded-xl font-medium hover:bg-[#00FFB2]/90 transition-colors text-sm">
                      Claim Rewards
                    </button>
                    <button className="bg-[#9B5DE5] text-white py-2 rounded-xl font-medium hover:bg-[#9B5DE5]/90 transition-colors text-sm">
                      Stake ICP
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Marketplace Section */}
        {activeSection === 'marketplace' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-[#0A0E2A] dark:text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                Task Marketplace
              </h2>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search tasks..."
                    className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00FFB2] focus:border-transparent text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
                <button className="flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 text-sm text-gray-700 dark:text-gray-300">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {marketplaceTasks.map((task) => (
                <div key={task.id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#0A0E2A] dark:text-white mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>
                        {task.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{task.client}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        task.difficulty === 'Easy'
                          ? 'bg-green-100 text-green-800'
                          : task.difficulty === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {task.difficulty}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Due: {task.deadline}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{task.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {task.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-[#00FFB2]/10 text-[#00FFB2] rounded-lg text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-xl">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Reward per Label</div>
                      <div className="text-lg font-bold text-[#9B5DE5]">{task.reward}</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-xl">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Total Potential</div>
                      <div className="text-lg font-bold text-[#00FFB2]">{task.totalReward}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-medium">{task.labels}</span> labels • {task.timeEstimate}
                    </div>
                    <button className="bg-[#00FFB2] text-[#0A0E2A] px-4 py-2 rounded-xl font-medium hover:bg-[#00FFB2]/90 transition-colors">
                      Start Task
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Active Tasks Section */}
        {activeSection === 'active' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-[#0A0E2A] dark:text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
              Active Tasks
            </h2>

            {activeTasks.map((task) => (
              <div key={task.id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0A0E2A] dark:text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                      {task.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{task.completed} / {task.total} labels completed</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-[#9B5DE5] font-medium">
                      {task.reward} per label
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Due: {task.deadline}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Progress</span>
                    <span className="text-sm font-medium text-[#0A0E2A] dark:text-white">{task.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-[#00FFB2] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${task.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-medium">{task.status}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="bg-[#F2F2F2] dark:bg-gray-700 text-[#0A0E2A] dark:text-white px-4 py-2 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                      Pause
                    </button>
                    <button className="bg-[#00FFB2] text-[#0A0E2A] px-4 py-2 rounded-xl font-medium hover:bg-[#00FFB2]/90 transition-colors">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Inline Labeling UI Example */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-[#0A0E2A] dark:text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
                Current Labeling Task
              </h3>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl mb-4">
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">Transaction Data:</div>
                <div className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-gray-100">
                  {`{
  "tx_hash": "0x1a2b3c4d5e6f...",
  "amount": "0.5 BTC",
  "from": "bc1qxy2k...",
  "to": "bc1qzw3l...",
  "timestamp": "2024-01-15T10:30:00Z"
}`}
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-sm font-medium text-[#0A0E2A] dark:text-white">Risk Assessment:</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {['Low Risk', 'Medium Risk', 'High Risk', 'Suspicious'].map((option) => (
                    <button
                      key={option}
                      className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-xl text-sm hover:bg-[#00FFB2]/10 hover:border-[#00FFB2] transition-colors text-gray-700 dark:text-gray-300"
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <input type="checkbox" id="confident" className="rounded" />
                  <label htmlFor="confident" className="text-sm text-gray-600 dark:text-gray-300">
                    I'm confident about this classification
                  </label>
                </div>
                <div className="flex justify-end space-x-2 mt-4">
                  <button className="bg-[#F2F2F2] dark:bg-gray-700 text-[#0A0E2A] dark:text-white px-4 py-2 rounded-xl font-medium">
                    Skip
                  </button>
                  <button className="bg-[#00FFB2] text-[#0A0E2A] px-4 py-2 rounded-xl font-medium hover:bg-[#00FFB2]/90 transition-colors">
                    Submit & Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Earnings Section */}
        {activeSection === 'earnings' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-[#0A0E2A] dark:text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Wallet Overview
                </h2>
                <div className="flex items-center space-x-2">
                  <Wallet className="w-5 h-5 text-[#00FFB2]" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Connected</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-r from-[#00FFB2] to-[#00FFB2]/80 p-4 rounded-xl text-white">
                  <div className="text-sm mb-1">Available Balance</div>
                  <div className="text-2xl font-bold">2,847.3 ICP</div>
                </div>
                <div className="bg-gradient-to-r from-[#9B5DE5] to-[#9B5DE5]/80 p-4 rounded-xl text-white">
                  <div className="text-sm mb-1">Pending Rewards</div>
                  <div className="text-2xl font-bold">156.7 ICP</div>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl text-white">
                  <div className="text-sm mb-1">Staked Amount</div>
                  <div className="text-2xl font-bold">500.0 ICP</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                <button className="bg-[#00FFB2] text-[#0A0E2A] py-2 rounded-xl font-medium hover:bg-[#00FFB2]/90 transition-colors">
                  Claim Rewards
                </button>
                <button className="bg-[#9B5DE5] text-white py-2 rounded-xl font-medium hover:bg-[#9B5DE5]/90 transition-colors">
                  Stake ICP
                </button>
                <button className="bg-[#F2F2F2] dark:bg-gray-700 text-[#0A0E2A] dark:text-white py-2 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                  Withdraw
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-[#0A0E2A] dark:text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Earnings History
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Task
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Transaction
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {earnings.map((earning, index) => (
                      <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                          {earning.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#0A0E2A] dark:text-white font-medium">
                          {earning.task}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-[#00FFB2] font-bold">
                          {earning.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="text-sm font-mono text-gray-600 dark:text-gray-300 mr-2">
                              {earning.txHash}
                            </span>
                            <ExternalLink className="w-4 h-4 text-gray-400 hover:text-[#00FFB2] cursor-pointer" />
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            {earning.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Floating Action Button */}
        <div className="fixed bottom-6 right-6 md:hidden z-30">
          <button
            onClick={() => setActiveSection('marketplace')}
            className="w-14 h-14 bg-[#00FFB2] text-[#0A0E2A] rounded-full shadow-lg flex items-center justify-center hover:bg-[#00FFB2]/90 transition-colors"
          >
            <Search className="w-6 h-6" />
          </button>
        </div>
      </div>
    </Layout>
  );
};