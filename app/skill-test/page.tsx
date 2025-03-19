'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Target, CheckCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import RankStatus from '@/components/ui/question';

const quickStats = [
  {
    title: 'Your Rank',
    value: '1',
    icon: Award,
    description: 'Current position',
  },
  {
    title: 'Percentile',
    value: '78%',
    icon: Target,
    description: 'Your performance',
  },
  {
    title: 'Score',
    value: '10/15',
    icon: CheckCircle,
    description: 'Correct answers',
  },
];

const comparisonData = [
  { month: 'Jan', yourScore: 65, avgScore: 55 },
  { month: 'Feb', yourScore: 70, avgScore: 58 },
  { month: 'Mar', yourScore: 75, avgScore: 60 },
  { month: 'Apr', yourScore: 85, avgScore: 65 },
  { month: 'May', yourScore: 80, avgScore: 68 },
];

const syllabusData = [
  { topic: 'HTML Basics', mastery: 90 },
  { topic: 'CSS Layouts', mastery: 85 },
  { topic: 'JavaScript Core', mastery: 75 },
  { topic: 'React Components', mastery: 80 },
  { topic: 'API Integration', mastery: 70 },
];

const questionAnalysis = [
  { name: 'Correct', value: 68, color: '#22c55e' },
  { name: 'Incorrect', value: 22, color: '#ef4444' },
  { name: 'Skipped', value: 10, color: '#94a3b8' },
];

export default function SkillTest() {
  const [stats, setStats] = useState({
    rank: '1',
    percentile: '78',
    score: '10',
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleUpdate = () => {
    // Update the quick stats with new values
    setStats({
      rank: stats.rank,
      percentile: stats.percentile,
      score: stats.score,
    });
    setIsOpen(false);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tight">Skill Test Analysis</h1>
        <div className="flex items-center gap-4">
          <p className="text-muted-foreground">Last test: {new Date().toLocaleDateString()}</p>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="default">Update Statistics</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Update Test Statistics</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="rank" className="text-right">
                    Rank
                  </Label>
                  <Input
                    id="rank"
                    type="number"
                    className="col-span-3"
                    value={stats.rank}
                    onChange={(e) => setStats(prev => ({ ...prev, rank: e.target.value }))}
                    min="1"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="percentile" className="text-right">
                    Percentile
                  </Label>
                  <Input
                    id="percentile"
                    type="number"
                    className="col-span-3"
                    value={stats.percentile}
                    onChange={(e) => setStats(prev => ({ ...prev, percentile: e.target.value }))}
                    min="0"
                    max="100"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="score" className="text-right">
                    Score (0-15)
                  </Label>
                  <Input
                    id="score"
                    type="number"
                    className="col-span-3"
                    value={stats.score}
                    onChange={(e) => setStats(prev => ({ ...prev, score: e.target.value }))}
                    min="0"
                    max="15"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={handleUpdate}>Update</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Quick Statistics */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Quick Statistics</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Your Rank</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">#{stats.rank}</div>
              <p className="text-xs text-muted-foreground">Current position</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Percentile</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.percentile}%</div>
              <p className="text-xs text-muted-foreground">Your performance</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Score</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.score}/15</div>
              <p className="text-xs text-muted-foreground">Correct answers</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comparison Graph */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Performance Comparison</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="yourScore" 
                  stroke="hsl(var(--primary))" 
                  name="Your Score"
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="avgScore" 
                  stroke="hsl(var(--muted-foreground))" 
                  name="Average Score"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Syllabus Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Syllabus-wise Analysis</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={syllabusData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="topic" type="category" width={100} />
                <Tooltip />
                <Bar
                  dataKey="mastery"
                  fill="hsl(var(--primary))"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Question Analysis */}
        
        <RankStatus
          rank={Number(stats.rank)}
          percentile={Number(stats.percentile)}
          score={Number(stats.score)} correct={0} incorrect={0} skipped={0} />

      </div>
    </div>
  );
}