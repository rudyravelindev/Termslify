import React, { useState } from 'react';
import axios from 'axios';
import {
  ShieldAlert,
  FileText,
  History,
  Settings,
  Zap,
  Copy,
  Loader2,
} from 'lucide-react';

function App() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSummarize = async () => {
    if (!inputText) return;
    setIsLoading(true);
    setSummary(''); // Clear this completely
    try {
      const response = await axios.post('http://localhost:3001/api/summarize', {
        text: inputText,
      });
      // ONLY set the summary if we actually got a response
      if (response.data.summary) {
        setSummary(response.data.summary);
      }
    } catch (err) {
      console.error('Frontend Error:', err);
      // We set a specific error message that DOES NOT look like a summary
      setSummary('ERROR_OCCURRED');
      alert('Connection failed. Is the server terminal showing any errors?');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900">
      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col p-6">
        <div className="flex items-center gap-2 mb-10">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <ShieldAlert size={24} />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            Termslify
          </h1>
        </div>

        <nav className="flex-1 space-y-4">
          <button className="flex items-center gap-3 w-full p-3 bg-blue-600 rounded-lg text-sm font-medium text-white shadow-lg shadow-blue-900/20">
            <Zap size={18} /> New Scan
          </button>
          <button className="flex items-center gap-3 w-full p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg text-sm font-medium transition-colors">
            <History size={18} /> History
          </button>
          <button className="flex items-center gap-3 w-full p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg text-sm font-medium transition-colors">
            <Settings size={18} /> Settings
          </button>
        </nav>

        <div className="mt-auto p-4 bg-slate-800 rounded-xl border border-slate-700">
          <p className="text-xs text-slate-400 mb-2">Free Plan: 3/5 Scans</p>
          <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full w-[60%]"></div>
          </div>
          <button className="mt-3 w-full text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors">
            UPGRADE TO PRO
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* HEADER */}
        <header className="h-16 border-b bg-white flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <h2 className="font-bold text-slate-800 tracking-tight">
              AI Safety Engine
              <span className="text-slate-400 font-medium ml-2 border-l pl-2 text-sm">
                System Active
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end leading-tight">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Security Level
              </span>
              <span className="text-xs font-bold text-emerald-600">
                Enterprise Grade
              </span>
            </div>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <p className="text-sm font-semibold text-slate-700 hidden sm:block">
                Rudy Ravelin
              </p>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-sm shadow-md">
                RR
              </div>
            </div>
          </div>
        </header>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-y-auto bg-slate-50">
          <div className="max-w-4xl mx-auto p-8 space-y-6">
            {/* INPUT CARD */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <label className="block text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wider">
                Analyze New Document
              </label>
              <textarea
                className="w-full h-48 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none text-slate-700"
                placeholder="Paste the Terms and Conditions text here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <button
                onClick={handleSummarize}
                disabled={isLoading || !inputText}
                className="mt-4 w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    AI Analyzing Legal Risks...
                  </>
                ) : (
                  <>
                    <FileText size={20} />
                    Summarize & Protect Me
                  </>
                )}
              </button>
            </div>
            {/* RESULT AREA */}
            {summary && (
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                {(() => {
                  // 1. Extract Score and split the content
                  const scoreMatch = summary.match(/SCORE:\s*(\d+)/i);
                  const score = scoreMatch ? parseInt(scoreMatch[1]) : 50;

                  // 2. Split content into Summary and Risks
                  const parts = summary.split(/RISKS:/i);
                  const mainSummary = parts[0]
                    .replace(/SCORE:\s*\d+/i, '')
                    .replace(/SUMMARY:/i, '')
                    .trim();
                  const riskPoints = parts[1]
                    ? parts[1]
                        .split('\n')
                        .filter((line) => line.trim().length > 5)
                    : [];

                  const isHigh = score >= 70;
                  const isMed = score >= 40 && score < 70;
                  const headerClass = isHigh
                    ? 'text-red-700 bg-red-50'
                    : isMed
                    ? 'text-amber-700 bg-amber-50'
                    : 'text-emerald-700 bg-emerald-50';
                  const barColor = isHigh
                    ? '#dc2626'
                    : isMed
                    ? '#d97706'
                    : '#059669';

                  return (
                    <>
                      {/* RISK HEADER */}
                      <div
                        className={`p-6 border-b flex items-center justify-between ${headerClass}`}
                      >
                        <div className="flex items-center gap-3">
                          <ShieldAlert size={28} />
                          <div>
                            <h3 className="text-xl font-bold uppercase tracking-tight">
                              Risk Analysis Complete
                            </h3>
                            <p className="text-xs font-semibold opacity-70">
                              Standard Legal Protocol Applied
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-4xl font-black">{score}</span>
                          <span className="text-sm font-bold ml-1">/100</span>
                        </div>
                      </div>

                      {/* THE GAUGE BAR */}
                      <div className="h-2 w-full bg-slate-100">
                        <div
                          className="h-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${score}%`,
                            backgroundColor: barColor,
                          }}
                        ></div>
                      </div>

                      <div className="p-8 space-y-8">
                        {/* EXECUTIVE SUMMARY SECTION */}
                        <section>
                          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">
                            Executive Summary
                          </h4>
                          <p className="text-slate-700 leading-relaxed font-medium">
                            {mainSummary}
                          </p>
                        </section>

                        {/* RISK CARDS SECTION */}
                        {riskPoints.length > 0 && (
                          <section>
                            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                              Critical Risks Detected
                            </h4>
                            <div className="grid gap-3">
                              {riskPoints.map((risk, index) => (
                                <div
                                  key={index}
                                  className="flex gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-blue-200 transition-colors group"
                                >
                                  <div className="mt-1 shrink-0">
                                    <div className="bg-white p-1.5 rounded-md shadow-sm border border-slate-200 group-hover:border-blue-300">
                                      <Zap
                                        size={14}
                                        className="text-amber-500"
                                      />
                                    </div>
                                  </div>
                                  <p className="text-sm text-slate-600 leading-relaxed">
                                    {risk.replace(/^-\s*/, '').trim()}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </section>
                        )}

                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(summary);
                            alert('Full report copied!');
                          }}
                          className="w-full py-3 border-2 border-slate-100 rounded-xl text-slate-400 font-bold hover:bg-slate-50 hover:text-slate-600 transition-all flex items-center justify-center gap-2"
                        >
                          <Copy size={18} /> Copy Raw Report
                        </button>
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
