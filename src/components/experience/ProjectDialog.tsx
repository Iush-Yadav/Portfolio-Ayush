import { useEffect, useRef, useState } from 'react';
import { X, ArrowUpRight, Network, ScanEye } from 'lucide-react';
import { featuredProjects } from '../../data/selectedWork';
import ProjectDemo from './ProjectDemos';
import Scene from './Scene';

export default function ProjectDialog({ projectId, paused, onClose }: { projectId: string | null; paused: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [tracking, setTracking] = useState(true);
  const project = featuredProjects.find(item => item.id === projectId);
  useEffect(() => {
    const element = dialog.current;
    if (!projectId || !element) return;
    element.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { element.close(); document.body.style.overflow = previous; };
  }, [projectId]);
  if (!project) return null;
  return <dialog ref={dialog} className="project-dialog" aria-labelledby="dialog-title" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="dialog-content"><header className="dialog-header"><div><span className="eyebrow">a closer look</span><h2 id="dialog-title">{project.name}</h2></div><button className="icon-button" onClick={onClose} aria-label="Close project preview"><X size={19}/></button></header>
      {project.id === 'startupconnect' || project.id === 'cheatdetector' ? <div className="exhibit original-exhibit"><div className="exhibit-title"><span>{project.id === 'startupconnect' ? 'A NETWORK OF PEOPLE & IDEAS' : 'EYE MOVEMENT / VISUAL CONCEPT'}</span></div><div className="original-scene"><Scene kind={project.id === 'startupconnect' ? 'network' : 'vision'} paused={paused || !tracking} expanded={expanded}/></div><button className="demo-action" aria-pressed={project.id === 'startupconnect' ? expanded : tracking} onClick={() => project.id === 'startupconnect' ? setExpanded(!expanded) : setTracking(!tracking)}>{project.id === 'startupconnect' ? <Network size={15}/> : <ScanEye size={15}/>} {project.id === 'startupconnect' ? (expanded ? 'Bring together' : 'Expand the network') : (tracking ? 'Pause eye movement' : 'Resume eye movement')}</button><span className="exhibit-footnote">INTERACTIVE ILLUSTRATION · {project.id === 'startupconnect' ? 'NOT A LIVE NETWORK OR PRODUCT SCREEN' : 'NO CAMERA ACCESS · NOT THE DETECTION MODEL'}</span></div> : <ProjectDemo id={project.id} paused={paused}/>}
      <p className="dialog-description">{project.description}</p><p className="dialog-boundary">{project.boundary}</p><a className="inline-link" href={project.source} target="_blank" rel="noopener noreferrer">See the actual implementation <ArrowUpRight size={14}/></a>
    </div>
  </dialog>;
}
