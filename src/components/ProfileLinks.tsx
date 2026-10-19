import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function ProfileLinks({ label, phone = false }: { label: string; phone?: boolean }) {
  return <nav className="profile-links" aria-label={label}>
    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} aria-hidden="true"/><span>LinkedIn</span></a>
    <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18} aria-hidden="true"/><span>GitHub</span></a>
    <a href={`mailto:${profile.email}`}><Mail size={18} aria-hidden="true"/><span>Email</span></a>
    {phone && <a href={profile.phoneHref}><Phone size={18} aria-hidden="true"/><span>{profile.phone}</span></a>}
  </nav>;
}
