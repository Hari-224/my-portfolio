import React, { useState } from 'react';
import { Terminal, X } from 'lucide-react';
import './DebugConsole.css';

const DebugConsole = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState(['Welcome to Developer Console! Try: skills, experience, contact']);

  const handleCommand = cmd => {
    const newOutput = [...output, `> ${cmd}`];
    switch (cmd.toLowerCase()) {
      case 'skills':
        newOutput.push('🚀 Frontend: React, JavaScript, TypeScript');
        newOutput.push('⚡ Backend: Node.js, Python, Java');
        newOutput.push('🗄️ Database: MongoDB, PostgreSQL, MySQL');
        break;
      case 'experience':
        newOutput.push('💼 2+ years of professional development');
        newOutput.push('📈 25+ projects completed');
        newOutput.push('👥 15+ happy clients');
        break;
      case 'contact':
        newOutput.push('📧 Email: your.email@example.com');
        newOutput.push('🌍 Available for remote opportunities');
        newOutput.push('⚡ Quick response time: <24 hours');
        break;
      case 'clear':
        setOutput(['Console cleared.']); setCommand(''); return;
      default:
        newOutput.push(`Command '${cmd}' not found. Try: skills, experience, contact, clear`);
    }
    setOutput(newOutput);
    setCommand('');
  };

  if (!isOpen)
    return (
      <button className="debug-toggle" onClick={() => setIsOpen(true)} title="Open Debug Console">
        <Terminal size={24} />
      </button>
    );

  return (
    <div className="debug-console">
      <div className="debug-header">
        <div>
          <Terminal size={16} /> <span>debug-console</span>
        </div>
        <button onClick={() => setIsOpen(false)}><X size={16}/></button>
      </div>
      <div className="debug-body">
        <div className="debug-output">
          {output.map((line, i) =>
            <div key={i} className={line.startsWith('>') ? 'cmd' : 'resp'}>{line}</div>
          )}
        </div>
        <div className="debug-input-row">
          <input
            value={command}
            onChange={e => setCommand(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && command && handleCommand(command)}
            placeholder="Enter command..."
          />
          <button onClick={() => command && handleCommand(command)}>Run</button>
        </div>
      </div>
    </div>
  );
};

export default DebugConsole;
