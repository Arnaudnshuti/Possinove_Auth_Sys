
import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import Sidebar from '../components/Sidebar';
import { TrendingUp, DollarSign, ArrowDownRight, ArrowUpRight, BarChart3 } from 'lucide-react';

const mockBalance = 12450.75;
const mockStats = [
  { title: 'Total Payments', value: 'FRW12,450', icon: <DollarSign className="w-4 h-4" />, trend: '+8.2%' },
  { title: 'Pending', value: 'FRW1,120', icon: <ArrowDownRight className="w-4 h-4" />, trend: '-2.3%' },
  { title: 'Completed', value: '128', icon: <ArrowUpRight className="w-4 h-4" />, trend: '+5.0%' },
  { title: 'Growth', value: '18%', icon: <TrendingUp className="w-4 h-4" />, trend: '+1.1%' },
];

const transactions = [
  { id: 1, name: 'Netflix', date: '2025-09-10', amount:  -15.99 },
  { id: 2, name: 'Salary', date: '2025-09-08', amount: 3500.0 },
  { id: 3, name: 'Groceries', date: '2025-09-07', amount: -84.75 },
  { id: 4, name: 'Gym', date: '2025-09-05', amount: -29.99 },
  { id: 5, name: 'Freelance', date: '2025-09-02', amount: 600.0 },
];



const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-teal-100 dark:from-gray-900 dark:to-gray-800">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            {/* Balance Card */}
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-r from-purple-600 to-teal-500 text-white">
              <CardHeader>
                <CardDescription className="text-white/80">Current Balance</CardDescription>
                <CardTitle className="text-4xl font-bold">FRW {mockBalance.toLocaleString()}</CardTitle>
                <div className="text-white/80">{`Welcome back, ${user?.name}`}</div>
              </CardHeader>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mockStats.map((s, i) => (
                <motion.div key={s.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}>
                  <Card className="hover:shadow-lg transition">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">{s.title}</CardTitle>
                      <div className="text-purple-600">{s.icon}</div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{s.value}</div>
                      <p className="text-xs text-green-600 mt-1">{s.trend}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chart Placeholder */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Transaction Trends</CardTitle>
                  <CardDescription>Last 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gradient-to-br from-purple-50 to-teal-50 rounded-lg">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                      <p className="text-gray-600">Chart visualization would go here</p>
                      <p className="text-sm text-gray-500">Install recharts for interactive charts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Transactions */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Latest account activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {transactions.map((t) => (
                      <div key={t.id} className="flex items-center justify-between p-3 rounded-md border hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                        <div>
                          <div className="font-medium">{t.name}</div>
                          <div className="text-xs text-gray-500">{t.date}</div>
                        </div>
                        <div className={t.amount >= 0 ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                          {t.amount >= 0 ? '+' : '-'}${Math.abs(t.amount).toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

