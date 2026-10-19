import { useState } from 'react';
import { ArrowRight, RotateCcw, Check, Database, Cpu, Shirt, Heart, Activity } from 'lucide-react';
import Scene from './Scene';

const latencies = [18, 62, 110];
type Arm = { pulls: number; reward: number };

function CacheDemo({ paused }: { paused: boolean }) {
  const [arms, setArms] = useState<Arm[]>(() => latencies.map(() => ({ pulls: 0, reward: 0 })));
  const [selected, setSelected] = useState<number | null>(null);
  const total = arms.reduce((sum, arm) => sum + arm.pulls, 0);
  function route() {
    let next = arms.findIndex(arm => arm.pulls === 0);
    if (next < 0) {
      const scores = arms.map(arm => arm.reward / arm.pulls + 1.4 * Math.sqrt(2 * Math.log(total) / arm.pulls));
      next = scores.indexOf(Math.max(...scores));
    }
    setSelected(next);
    setArms(arms.map((arm, i) => i === next ? { pulls: arm.pulls + 1, reward: arm.reward + Math.max(0, 1 - latencies[i] / 500) } : arm));
  }
  return <div className="exhibit cache-exhibit">
    <div className="exhibit-title"><span><Cpu size={15}/> HYPERCACHE / ROUTING LAB</span><span>01</span></div>
    <div className="cache-sculpture"><Scene kind="network" paused={paused} expanded={selected === 2}/></div>
    <div className="cache-command"><span className="terminal-prompt">~</span> GET portfolio <span className="command-cursor" aria-hidden="true"/></div>
    <div className="cache-nodes">{arms.map((arm, i) => <div key={i} className={`cache-node ${selected === i ? 'node-selected' : ''}`}><Database size={18}/><span>NODE 0{i + 1}</span><strong>{latencies[i]}<small> ms</small></strong><span>{arm.pulls} reads</span></div>)}</div>
    <div className="exhibit-controls"><button className="demo-action" onClick={route}>Route a request <ArrowRight size={15}/></button><button className="demo-reset" aria-label="Reset routing simulation" onClick={() => { setSelected(null); setArms(latencies.map(() => ({ pulls: 0, reward: 0 }))); }}><RotateCcw size={15}/></button></div>
    <p className="demo-feedback" role="status">{selected === null ? 'Send a few requests. Watch the router explore.' : `Request ${total} → Node 0${selected + 1}. ${total <= 3 ? 'First, try each replica.' : 'Balancing observed speed with exploration.'}`}</p>
    <span className="exhibit-footnote">INTERACTIVE MODEL · FIXED SAMPLE LATENCIES · UCB1 READ SELECTION</span>
  </div>;
}

function FitDemo() {
  const [size, setSize] = useState(1);
  const chest = [48, 52, 56][size];
  const difference = chest - 50;
  const within = difference >= -1 && difference <= 3;
  return <div className="exhibit fit-exhibit">
    <div className="exhibit-title"><span><Shirt size={15}/> FITCHECK / THE COMPARISON</span><span>02</span></div>
    <div className="fit-caption"><span>YOUR FAVOURITE, MEET</span><h4>the next one.</h4></div>
    <div className="garment-stage"><svg viewBox="0 0 420 265" role="img" aria-label={`Garment comparison. Reference chest 50 centimetres. Selected size chest ${chest} centimetres.`}>
      <defs><linearGradient id="tee-fill" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#b96e4c"/><stop offset=".55" stopColor="#e7a37d"/><stop offset="1" stopColor="#b96948"/></linearGradient></defs>
      <ellipse cx="210" cy="245" rx="110" ry="9" fill="#5e443016"/>
      <g className="reference-shirt"><path d="M155 30 L112 49 75 105 117 131 137 104 137 232 283 232 283 104 303 131 345 105 308 49 265 30 Q210 68 155 30Z"/></g>
      <g className="candidate-shirt" style={{ transform: `translateX(210px) scaleX(${chest / 50}) translateX(-210px)` }}><path d="M155 30 L112 49 75 105 117 131 137 104 137 232 283 232 283 104 303 131 345 105 308 49 265 30 Q210 68 155 30Z" fill="url(#tee-fill)"/><path d="M155 30 Q210 103 265 30 M148 217H272 M118 57L142 95 M302 57L278 95" fill="none" stroke="#8d4c3340" strokeWidth="2"/></g>
      <path d="M137 150H283 M137 143V157 M283 143V157" stroke="#5f3325" strokeWidth="1.2" strokeDasharray="3 3"/><rect x="181" y="139" width="58" height="23" rx="12" fill="#fff8ec"/><text x="210" y="155" textAnchor="middle" fill="#4d3629" fontSize="11" fontFamily="monospace">{chest} cm</text>
    </svg></div>
    <div className="fit-legend"><span><i/> Your favourite · 50 cm</span><span><i/> New garment</span></div>
    <div className="fit-options"><span className="micro">TRY A SIZE</span><div role="group" aria-label="Garment size">{['S', 'M', 'L'].map((label, i) => <button aria-pressed={size === i} onClick={() => setSize(i)} key={label}>{label}</button>)}</div></div>
    <div className={`fit-result ${within ? 'within' : ''}`} role="status"><span>{within ? <Check size={16}/> : <ArrowRight size={16}/>} {difference > 0 ? '+' : ''}{difference} cm at the chest</span><strong>{within ? 'Within your range' : 'Outside your range'}</strong></div>
    <span className="exhibit-footnote">SAMPLE CHEST COMPARISON · PREFERRED DIFFERENCE −1 TO +3 CM</span>
  </div>;
}

function SaathiDemo() {
  const [choice, setChoice] = useState<number | null>(null);
  const [hindi, setHindi] = useState(false);
  const labels = hindi ? ['गोला', 'चौकोर', 'त्रिकोण'] : ['Circle', 'Square', 'Triangle'];
  return <div className="exhibit saathi-exhibit">
    <div className="exhibit-title"><span><Heart size={15}/> SAATHI / A MOMENT OF PRACTICE</span><span>03</span></div>
    <div className="saathi-language"><span className="saathi-logo">साथी<span>saathi</span></span><button aria-label={hindi ? "Use English in activity" : "Use Hindi in activity"} aria-pressed={hindi} onClick={() => setHindi(!hindi)}>{hindi ? 'English' : 'हिन्दी'}</button></div>
    <div className="saathi-question" lang={hindi ? 'hi' : 'en'}><span className="micro">{hindi ? 'कोई जल्दी नहीं' : 'TAKE YOUR TIME'}</span><h4>{hindi ? 'अगला आकार कौन सा है?' : 'What comes next?'}</h4><p>{hindi ? 'पैटर्न को देखिए। एक आकार चुनिए।' : 'Look at the pattern. Choose a shape.'}</p></div>
    <div className="pattern-strip" aria-label="Circle, square, circle, square, unknown"><span className="pattern-circle"/><span className="pattern-square"/><span className="pattern-circle"/><span className="pattern-square"/><span className="pattern-unknown">?</span></div>
    <div className="pattern-choices" role="group" aria-label="Choose the next shape">{labels.map((label, i) => <button aria-pressed={choice === i} key={i} onClick={() => setChoice(i)}><span className={['pattern-circle', 'pattern-square', 'pattern-triangle'][i]} aria-hidden="true"/><span lang={hindi ? 'hi' : 'en'}>{label}</span></button>)}</div>
    <p className="demo-feedback" role="status" lang={hindi ? 'hi' : 'en'}>{choice === null ? (hindi ? 'आप अपनी गति से आगे बढ़ें।' : 'No timer. Just one small step.') : choice === 0 ? (hindi ? 'बिल्कुल सही! गोला अगला आकार है।' : 'That’s it. The circle comes next.') : (hindi ? 'एक बार फिर देखिए। आप फिर कोशिश कर सकते हैं।' : 'Take another look. You can try again.')}</p>
    <span className="exhibit-footnote">PORTFOLIO ACTIVITY SAMPLE · NO PROGRESS OR PERSONAL DATA SAVED</span>
  </div>;
}

const sampleClaims = [24, 31, 29, 35, 32, 48, 28, 30, 37, 88, 32, 39, 34, 30, 46, 36];
function CareDemo() {
  const [inspect, setInspect] = useState(false);
  return <div className="exhibit care-exhibit">
    <div className="exhibit-title"><span><Activity size={15}/> CAREFLOW / PATTERN EXPLORER</span><span>04</span></div>
    <div className="care-caption"><span className="micro">FROM RECORDS TO A REVIEW SIGNAL</span><h4>Look a little closer.</h4><p>Synthetic claims · illustrative distribution</p></div>
    <div className="care-chart" role="img" aria-label={`Sample claims distribution. ${inspect ? 'One unusually high sample is highlighted for review.' : 'Sixteen sample bars are shown.'}`}><div className="chart-lines"/>{sampleClaims.map((value, i) => <div key={i} className={`claim-bar ${inspect && i === 9 ? 'flagged' : ''}`} style={{ height: `${value}%` }}>{inspect && i === 9 && <span>REVIEW ↓</span>}</div>)}</div>
    <div className="chart-axis micro"><span>CLAIM 01</span><span>CLAIM 16</span></div>
    <div className="care-pipeline"><span><Database size={14}/> Claims</span><ArrowRight size={14}/><span><Cpu size={14}/> Model</span><ArrowRight size={14}/><span><Activity size={14}/> Review</span></div>
    <button className="demo-action" aria-pressed={inspect} onClick={() => setInspect(!inspect)}>{inspect ? 'Show all samples' : 'Inspect the outlier'}<ArrowRight size={15}/></button>
    <p className="demo-feedback" role="status">{inspect ? 'Unusual ≠ incorrect. A signal asks for context.' : 'A pattern is a starting point for a better question.'}</p>
    <span className="exhibit-footnote">ILLUSTRATIVE DATA · NO LIVE MODEL OR CLINICAL INFERENCE</span>
  </div>;
}

export default function ProjectDemo({ id, paused }: { id: string; paused: boolean }) {
  if (id === 'hypercache') return <CacheDemo paused={paused}/>;
  if (id === 'fitcheck') return <FitDemo/>;
  if (id === 'saathi') return <SaathiDemo/>;
  return <CareDemo/>;
}
