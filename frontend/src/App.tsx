import React, { useState } from 'react';
import { 
  Send, 
  Zap, 
  Power, 
  Loader2, 
  LayoutDashboard, 
  Settings, 
  Sun, 
  Moon,
  Brain,
  Activity,
  History,
  Menu,
  X,
  RotateCw,
  RotateCcw,
  Gauge,
  AlertTriangle,
  Timer,
  ArrowUpRight,
  ArrowDownRight,
  Thermometer,
  WrenchIcon,
  BarChart3,
  LineChart,
  Clock,
  CalendarClock
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  type: 'user' | 'assistant';
  status?: 'pending' | 'success' | 'error';
}

type AIModel = 'gpt-4' | 'gpt-3.5-turbo' | 'claude-2' | 'gemini-pro';

function DashboardView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-gray-700 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Motor Status</h3>
          <Power className="w-5 h-5 text-green-400" />
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Current Speed</span>
            <span className="text-green-400">1750 RPM</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Direction</span>
            <span className="text-blue-400">Clockwise</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Temperature</span>
            <span className="text-orange-400">45°C</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Load</span>
            <span className="text-purple-400">75%</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Quick Controls</h3>
          <Gauge className="w-5 h-5 text-yellow-400" />
        </div>
        <div className="space-y-3">
          <button className="w-full flex items-center gap-2 bg-gray-600 p-3 rounded-lg hover:bg-gray-500 transition-colors">
            <RotateCw className="w-4 h-4" /> Start Clockwise
          </button>
          <button className="w-full flex items-center gap-2 bg-gray-600 p-3 rounded-lg hover:bg-gray-500 transition-colors">
            <RotateCcw className="w-4 h-4" /> Start Counter-Clockwise
          </button>
          <button className="w-full flex items-center gap-2 bg-red-600 p-3 rounded-lg hover:bg-red-700 transition-colors">
            <AlertTriangle className="w-4 h-4" /> Emergency Stop
          </button>
        </div>
      </div>

      <div className="bg-gray-700 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Performance Metrics</h3>
          <Activity className="w-5 h-5 text-blue-400" />
        </div>
        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Efficiency</span>
              <span>92%</span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }} />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Power Factor</span>
              <span>0.85</span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }} />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Current Draw</span>
              <span>12.5A</span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsView() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-gray-700 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Speed Over Time</h3>
            <LineChart className="w-5 h-5 text-blue-400" />
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {[40, 65, 82, 78, 95, 60, 45].map((height, index) => (
              <div
                key={index}
                className="bg-blue-500 w-full rounded-t"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-400">
            <span>-30m</span>
            <span>-25m</span>
            <span>-20m</span>
            <span>-15m</span>
            <span>-10m</span>
            <span>-5m</span>
            <span>Now</span>
          </div>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Temperature Trend</h3>
            <Thermometer className="w-5 h-5 text-red-400" />
          </div>
          <div className="h-64 flex items-center">
            <div className="w-full h-1/2 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-lg" />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-400">
            <span>25°C</span>
            <span>35°C</span>
            <span>45°C</span>
            <span>55°C</span>
            <span>65°C</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Performance Analysis</h3>
          <BarChart3 className="w-5 h-5 text-purple-400" />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-600 p-4 rounded-lg">
              <h4 className="text-sm text-gray-400 mb-2">Average Speed</h4>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">1725</span>
                <span className="text-sm text-gray-400">RPM</span>
                <ArrowUpRight className="w-4 h-4 text-green-400" />
              </div>
            </div>
            <div className="bg-gray-600 p-4 rounded-lg">
              <h4 className="text-sm text-gray-400 mb-2">Power Usage</h4>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">2.4</span>
                <span className="text-sm text-gray-400">kW</span>
                <ArrowDownRight className="w-4 h-4 text-red-400" />
              </div>
            </div>
            <div className="bg-gray-600 p-4 rounded-lg">
              <h4 className="text-sm text-gray-400 mb-2">Runtime</h4>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">147</span>
                <span className="text-sm text-gray-400">hours</span>
                <Timer className="w-4 h-4 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HistoryView() {
  return (
    <div className="space-y-4">
      <div className="bg-gray-700 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Operation Log</h3>
          <CalendarClock className="w-5 h-5 text-orange-400" />
        </div>
        <div className="space-y-4">
          {[
            {
              time: '10:30 AM',
              action: 'Speed adjusted to 1750 RPM',
              status: 'Speed Change',
              user: 'System'
            },
            {
              time: '09:15 AM',
              action: 'Direction changed to Counter-Clockwise',
              status: 'Direction Change',
              user: 'Voice Command'
            },
            {
              time: '08:45 AM',
              action: 'Emergency stop triggered',
              status: 'Emergency',
              user: 'Manual Override'
            },
            {
              time: '07:30 AM',
              action: 'Motor started - Clockwise rotation',
              status: 'Startup',
              user: 'Auto Schedule'
            },
            {
              time: 'Yesterday',
              action: 'Maintenance check completed',
              status: 'Maintenance',
              user: 'Technician'
            }
          ].map((log, index) => (
            <div key={index} className="border-l-2 border-gray-600 pl-4 pb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">{log.time}</span>
                <span className="text-blue-400">{log.user}</span>
              </div>
              <p className="mt-1">{log.action}</p>
              <p className="text-sm text-gray-400">{log.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SettingsView() {
  return (
    <div className="space-y-4">
      <div className="bg-gray-700 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Motor Configuration</h3>
          <WrenchIcon className="w-5 h-5 text-blue-400" />
        </div>
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-md font-medium">Speed Settings</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Maximum Speed (RPM)</label>
                <input 
                  type="number" 
                  className="w-full bg-gray-600 rounded-lg px-3 py-2"
                  value="1800"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Acceleration Rate</label>
                <select className="w-full bg-gray-600 rounded-lg px-3 py-2">
                  <option>Slow</option>
                  <option>Medium</option>
                  <option>Fast</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-md font-medium">Safety Limits</h4>
            <div className="space-y-2">
              <label className="flex items-center justify-between">
                <span>Temperature Limit (°C)</span>
                <input 
                  type="number" 
                  className="w-32 bg-gray-600 rounded-lg px-3 py-1"
                  value="75"
                />
              </label>
              <label className="flex items-center justify-between">
                <span>Current Limit (A)</span>
                <input 
                  type="number" 
                  className="w-32 bg-gray-600 rounded-lg px-3 py-1"
                  value="15"
                />
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-md font-medium">Alerts</h4>
            <div className="space-y-2">
              <label className="flex items-center justify-between">
                <span>Over-temperature Warning</span>
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" checked />
              </label>
              <label className="flex items-center justify-between">
                <span>Speed Deviation Alert</span>
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" checked />
              </label>
              <label className="flex items-center justify-between">
                <span>Maintenance Reminders</span>
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" checked />
              </label>
            </div>
          </div>

          <div className="pt-4">
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Save Configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatInterface() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      type: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsProcessing(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const response: Message = {
        id: (Date.now() + 1).toString(),
        text: `Motor command processed: "${input}". Motor parameters updated.`,
        type: 'assistant',
        status: 'success'
      };
      setMessages(prev => [...prev, response]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, there was an error processing your motor command.',
        type: 'assistant',
        status: 'error'
      };
      setMessages(prev => [...prev, errorMessage]);
    }
    
    setIsProcessing(false);
  };

  return (
    <div className="bg-gray-700 rounded-lg shadow-lg p-4 mb-4">
      <div className="h-[500px] overflow-y-auto mb-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 mt-20">
            <Zap className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Start by typing a command to control the motor.</p>
            <p className="text-sm mt-2">Example: "Set motor speed to 1500 RPM" or "Change direction to counter-clockwise"</p>
          </div>
        )}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.type === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-lg ${
                message.type === 'user'
                  ? 'bg-blue-600'
                  : message.status === 'error'
                  ? 'bg-red-600'
                  : 'bg-gray-600'
              }`}
            >
              <p>{message.text}</p>
            </div>
          </div>
        ))}
        {isProcessing && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-4 rounded-lg bg-gray-600">
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <p>Processing motor command...</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your motor control command here..."
          className="w-full bg-gray-600 text-white rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isProcessing}
        />
        <button
          type="submit"
          disabled={isProcessing}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-400 hover:text-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedModel, setSelectedModel] = useState<AIModel>('gpt-4');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const mainBgClass = isDarkMode 
    ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
    : 'bg-gradient-to-br from-gray-100 to-white text-gray-900';

  const sidebarBgClass = isDarkMode
    ? 'bg-gray-800'
    : 'bg-white';

  const renderActiveView = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'history':
        return <HistoryView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className={`min-h-screen ${mainBgClass} flex`}>
      {/* Sidebar */}
      <div className={`${sidebarBgClass} w-64 shadow-lg transition-all duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="font-bold">Motor Control</span>
            </div>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveSection('dashboard')}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeSection === 'dashboard' 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-gray-700'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </button>

            <button
              onClick={() => setActiveSection('analytics')}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeSection === 'analytics' 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-gray-700'
              }`}
            >
              <Activity className="w-5 h-5" />
              Analytics
            </button>

            <button
              onClick={() => setActiveSection('history')}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeSection === 'history' 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-gray-700'
              }`}
            >
              <History className="w-5 h-5" />
              History
            </button>

            <button
              onClick={() => setActiveSection('settings')}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeSection === 'settings' 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-gray-700'
              }`}
            >
              <Settings className="w-5 h-5" />
              Settings
            </button>
          </nav>

          <div className="mt-8 space-y-4">
            <div className="p-4 rounded-lg bg-gray-700">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">AI Model</span>
                </div>
              </div>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value as AIModel)}
                className="w-full bg-gray-600 text-white rounded-md px-2 py-1 text-sm"
              >
                <option value="gpt-4">GPT-4</option>
                <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                <option value="claude-2">Claude 2</option>
                <option value="gemini-pro">Gemini Pro</option>
              </select>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg bg-gray-700">
              <div className="flex items-center gap-2">
                {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                <span className="text-sm font-medium">Theme</span>
              </div>
              <button
                onClick={toggleTheme}
                className="px-3 py-1 rounded-full bg-gray-600 text-sm"
              >
                {isDarkMode ? 'Dark' : 'Light'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <header className="flex items-center justify-between p-4">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className={`lg:hidden ${isSidebarOpen ? 'hidden' : 'block'}`}
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full ml-auto">
            <Power className="w-4 h-4 text-green-400" />
            <span className="text-sm">Motor Online</span>
          </div>
        </header>

        <div className="container mx-auto p-4">
          <div className="mb-6">
            {renderActiveView()}
          </div>
          
          <ChatInterface />

          <footer className="text-center text-gray-400 text-sm">
            <p>Connected to Motor Control System v1.0</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;