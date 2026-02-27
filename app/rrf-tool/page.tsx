'use client';

import { useState } from 'react';

interface QueryResult {
  query: string;
  cited: boolean;
  rank: number | null;
}

export default function RRFScoringTool() {
  const [dealershipName, setDealershipName] = useState('');
  const [queryResults, setQueryResults] = useState<QueryResult[]>([
    { query: "best Toyota dealership [city]", cited: false, rank: null },
    { query: "reliable car service [city]", cited: false, rank: null },
    { query: "honest mechanic near me", cited: false, rank: null },
    { query: "oil change [city]", cited: false, rank: null },
    { query: "brake repair [city]", cited: false, rank: null },
    { query: "Toyota service [city]", cited: false, rank: null },
    { query: "car dealership [city] reviews", cited: false, rank: null },
    { query: "buy Toyota [city]", cited: false, rank: null },
    { query: "trade-in value [city]", cited: false, rank: null },
    { query: "used cars [city]", cited: false, rank: null },
    { query: "new car financing [city]", cited: false, rank: null },
    { query: "car lease deals [city]", cited: false, rank: null },
    { query: "auto repair [city]", cited: false, rank: null },
    { query: "transmission repair [city]", cited: false, rank: null },
    { query: "tire replacement [city]", cited: false, rank: null },
    { query: "car maintenance [city]", cited: false, rank: null },
    { query: "vehicle inspection [city]", cited: false, rank: null },
    { query: "car detailing [city]", cited: false, rank: null },
    { query: "auto body shop [city]", cited: false, rank: null },
    { query: "collision repair [city]", cited: false, rank: null },
  ]);

  const handleCitedChange = (index: number, cited: boolean) => {
    const newResults = [...queryResults];
    newResults[index].cited = cited;
    if (!cited) newResults[index].rank = null;
    setQueryResults(newResults);
  };

  const handleRankChange = (index: number, rank: string) => {
    const newResults = [...queryResults];
    newResults[index].rank = rank ? parseInt(rank) : null;
    setQueryResults(newResults);
  };

  // Calculate RRF Score
  const calculateRRF = () => {
    const citedQueries = queryResults.filter(q => q.cited && q.rank);
    if (citedQueries.length === 0) return { score: 0, frequency: 0, avgRank: 0 };
    
    let rrfSum = 0;
    citedQueries.forEach(q => {
      // RRF formula: 1 / (k + rank), where k = 60
      rrfSum += 1 / (60 + (q.rank || 1));
    });
    
    const frequency = citedQueries.length;
    const avgRank = citedQueries.reduce((sum, q) => sum + (q.rank || 0), 0) / frequency;
    const normalizedScore = Math.min(100, (rrfSum * 10000));
    
    return {
      score: Math.round(normalizedScore),
      frequency,
      avgRank: Math.round(avgRank * 10) / 10
    };
  };

  const rrfData = calculateRRF();
  
  // Calculate grade
  const getGrade = (score: number) => {
    if (score >= 80) return { grade: 'A', color: 'text-green-500', message: 'Excellent AI visibility' };
    if (score >= 60) return { grade: 'B', color: 'text-blue-500', message: 'Good AI visibility' };
    if (score >= 40) return { grade: 'C', color: 'text-yellow-500', message: 'Average AI visibility' };
    if (score >= 20) return { grade: 'D', color: 'text-orange-500', message: 'Poor AI visibility' };
    return { grade: 'F', color: 'text-red-500', message: 'Critical: Invisible in AI search' };
  };
  
  const gradeInfo = getGrade(rrfData.score);

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">RRF Scoring Tool</h1>
        <p className="text-gray-400 text-center mb-8">Reciprocal Rank Fusion Citation Analysis</p>
        
        {/* Dealership Input */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-2">Dealership Name</label>
          <input
            type="text"
            value={dealershipName}
            onChange={(e) => setDealershipName(e.target.value)}
            placeholder="Enter dealership name"
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded text-white"
          />
        </div>

        {/* Score Card */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 mb-8">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-400 mb-1">RRF Citation Score</p>
            <p className={`text-6xl font-bold ${gradeInfo.color}`}>{rrfData.score}/100</p>
            <p className={`text-2xl font-semibold ${gradeInfo.color} mt-2`}>Grade: {gradeInfo.grade}</p>
            <p className="text-gray-400 mt-1">{gradeInfo.message}</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-black p-4 rounded">
              <p className="text-3xl font-bold text-white">{rrfData.frequency}/20</p>
              <p className="text-xs text-gray-400">Contexts Cited</p>
            </div>
            <div className="bg-black p-4 rounded">
              <p className="text-3xl font-bold text-white">{rrfData.avgRank || '-'}</p>
              <p className="text-xs text-gray-400">Avg Rank</p>
            </div>
            <div className="bg-black p-4 rounded">
              <p className="text-3xl font-bold text-white">{Math.round((rrfData.frequency / 20) * 100)}%</p>
              <p className="text-xs text-gray-400">Visibility</p>
            </div>
          </div>
        </div>

        {/* Query Results Table */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-zinc-700 bg-zinc-800">
            <h2 className="text-xl font-bold">Query Context Analysis</h2>
            <p className="text-sm text-gray-400">Mark which queries cite the dealership and their rank</p>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            <table className="w-full">
              <thead className="bg-zinc-800 sticky top-0">
                <tr>
                  <th className="text-left p-3 text-sm font-medium">Query</th>
                  <th className="text-center p-3 text-sm font-medium w-24">Cited?</th>
                  <th className="text-center p-3 text-sm font-medium w-24">Rank</th>
                </tr>
              </thead>
              <tbody>
                {queryResults.map((result, index) => (
                  <tr key={index} className={result.cited ? 'bg-green-950/30' : 'border-b border-zinc-800'}>
                    <td className="p-3 text-sm">{result.query}</td>
                    <td className="p-3 text-center">
                      <input
                        type="checkbox"
                        checked={result.cited}
                        onChange={(e) => handleCitedChange(index, e.target.checked)}
                        className="w-5 h-5 accent-green-500"
                      />
                    </td>
                    <td className="p-3 text-center">
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={result.rank || ''}
                        onChange={(e) => handleRankChange(index, e.target.value)}
                        disabled={!result.cited}
                        className="w-16 px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-center disabled:opacity-30"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Export Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              const report = {
                dealership: dealershipName,
                date: new Date().toISOString(),
                rrfScore: rrfData.score,
                grade: gradeInfo.grade,
                contextsCited: rrfData.frequency,
                avgRank: rrfData.avgRank,
                queryResults: queryResults.filter(q => q.cited)
              };
              console.log('Report:', report);
              alert('Report logged to console. Copy the data for your records.');
            }}
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded transition-colors"
          >
            Export Report
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-8 p-4 bg-zinc-900 border border-zinc-700 rounded text-sm text-gray-400">
          <p className="font-semibold text-white mb-2">How to Use:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Run 20 AI queries about the dealership (ChatGPT, Claude, Perplexity)</li>
            <li>Mark which queries cite the dealership</li>
            <li>Record their rank position (1-10)</li>
            <li>RRF Score calculates automatically</li>
            <li>Export report for client deliverables</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
