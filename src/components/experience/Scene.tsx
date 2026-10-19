import { useEffect, useRef } from 'react';
import { Renderer, Camera, Geometry, Program, Mesh, Transform, Sphere, Box, Vec3 } from 'ogl';

type SceneKind = 'hero' | 'network' | 'vision';
interface Props { kind: SceneKind; paused: boolean; variant?: number; expanded?: boolean }
const vertex = `attribute vec3 position; attribute vec3 normal; uniform mat4 modelViewMatrix; uniform mat4 projectionMatrix; uniform mat3 normalMatrix; varying vec3 vN; varying vec3 vP; void main(){vN=normalize(normalMatrix*normal);vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
const fragment = `precision highp float;
varying vec3 vN; varying vec3 vP; uniform vec3 uColor; uniform float uEye; uniform float uTime;
void main(){
 vec3 n=normalize(vN);float l=max(dot(n,normalize(vec3(-.4,.8,1.))),0.);
 float rim=pow(1.-abs(n.z),2.);float stripe=pow(.5+.5*sin(n.y*7.+n.x*4.),7.);
 vec3 c=uColor*(.12+l*.7)+vec3(.72,.82,.87)*stripe*.55+vec3(.7,.9,.85)*rim*.7;
 c+=vec3(.95,1.,.94)*pow(max(dot(reflect(normalize(vec3(.2,-.7,-1.)),n),vec3(0.,0.,1.)),0.),60.);
 if(uEye>.5){float d=length(vP.xy);float a=atan(vP.y,vP.x);float pupil=smoothstep(.22,.26,d);float iris=1.-smoothstep(.58,.61,d);float fibers=.5+.5*sin(a*95.+sin(d*60.)*.8);vec3 eye=mix(vec3(.05,.08,.09),vec3(.43,.72,.59)*(fibers*.4+.6),pupil);c=mix(c,eye,iris*step(0.,vP.z));c+=vec3(.7,1.,.9)*pow(max(dot(n,normalize(vec3(-.3,.5,1.))),0.),100.)*.6;}
 gl_FragColor=vec4(c,1.);
}`;

export default function Scene({ kind, paused, variant = 0, expanded = false }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const options = useRef({ paused, variant, expanded });
  useEffect(() => { options.current = { paused, variant, expanded }; }, [paused, variant, expanded]);
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let renderer: Renderer;
    try { renderer = new Renderer({ alpha: true, antialias: true, dpr: Math.min(window.devicePixelRatio, 1.5) }); }
    catch { return; }
    const gl = renderer.gl;
    el.appendChild(gl.canvas); gl.clearColor(0, 0, 0, 0);
    const camera = new Camera(gl, { fov: 36 }); camera.position.z = kind === 'hero' ? 9 : 8;
    const scene = new Transform(), group = new Transform(); group.setParent(scene);
    const geometries: Geometry[] = [], programs: Program[] = [];
    const makeProgram = (color: number[], eye = false) => {
      const p = new Program(gl, { vertex, fragment, uniforms: { uColor: { value: color }, uEye: { value: eye ? 1 : 0 }, uTime: { value: 0 } } });
      programs.push(p); return p;
    };
    const chrome = makeProgram([.64,.76,.72]), mint = makeProgram([.49,.91,.7]), violet = makeProgram([.57,.49,.8]);
    const sphere = new Sphere(gl, { radius: 1, widthSegments: 48, heightSegments: 32 });
    const box = new Box(gl); geometries.push(sphere, box);
    function tube(knot = true, radius = 1.5, thickness = .22) {
      const pos: number[] = [], normals: number[] = [], indices: number[] = [];
      const segments = 180, sides = 24;
      const point = (u: number) => knot ? new Vec3((1.2+.48*Math.cos(3*u))*Math.cos(2*u),(1.2+.48*Math.cos(3*u))*Math.sin(2*u),.48*Math.sin(3*u)) : new Vec3(radius*Math.cos(u),radius*Math.sin(u),0);
      for(let i=0;i<=segments;i++) {
        const u=i/segments*Math.PI*2, p=point(u), tangent=point(u+.001).sub(p).normalize();
        const normal=new Vec3().cross(tangent,new Vec3(0,0,1)).normalize(), binormal=new Vec3().cross(tangent,normal).normalize();
        for(let j=0;j<=sides;j++) {
          const v=j/sides*Math.PI*2, n=new Vec3().copy(normal).multiply(Math.cos(v)).add(new Vec3().copy(binormal).multiply(Math.sin(v)));
          pos.push(p.x+n.x*thickness,p.y+n.y*thickness,p.z+n.z*thickness); normals.push(n.x,n.y,n.z);
          if(i<segments&&j<sides){const a=i*(sides+1)+j,b=a+sides+1;indices.push(a,a+1,b,b,a+1,b+1);}
        }
      }
      const geometry=new Geometry(gl,{position:{size:3,data:new Float32Array(pos)},normal:{size:3,data:new Float32Array(normals)},index:{data:new Uint16Array(indices)}});
      geometries.push(geometry);return geometry;
    }
    const addMesh=(geometry:Geometry,program:Program,parent:Transform=group)=>{const m=new Mesh(gl,{geometry,program});m.setParent(parent);return m;};
    const knot=kind==='hero'?addMesh(tube(true,1.5,.27),chrome):null;
    const code=new Transform();code.setParent(group);
    if(kind==='hero') {
      for(const side of [-1,1]) for(const half of [-1,1]) {
        const m=addMesh(box,mint,code);m.scale.set(.14,.85,.25);m.position.set(side*.8,half*.32,0);m.rotation.z=side*half*.7;
      }
      const slash=addMesh(box,chrome,code);slash.scale.set(.13,1.6,.25);slash.rotation.z=-.25;
    }
    const satellites: Mesh[]=[];
    const links: Mesh[]=[];
    const orb=new Transform();orb.setParent(group);
    if(kind!=='vision') {
      const core=addMesh(sphere,kind==='hero'?violet:chrome,orb);core.scale.set(.48);
      for(let i=0;i<12;i++) {
        const node=addMesh(sphere,i%3===0?violet:mint,orb);node.scale.set(.10+(i%3)*.025);satellites.push(node);
        const link=addMesh(box,chrome,orb);links.push(link);
      }
      for(let i=0;i<3;i++){const ring=addMesh(tube(false,1.65,.012),chrome,orb);ring.rotation.set(i*.85,.6+i*.8,i*.4);}
    }
    let eye: Mesh | null=null;
    if(kind==='vision') {
      eye=addMesh(sphere,makeProgram([.54,.65,.65],true));eye.scale.set(1.3);
      const ring=addMesh(tube(false,1.7,.025),mint);ring.rotation.x=.3;
      const ring2=addMesh(tube(false,1.9,.012),violet);ring2.rotation.y=.5;
    }
    // A sparse depth field, rendered in the same WebGL context.
    const dust: Mesh[]=[];
    if(kind==='hero')for(let i=0;i<16;i++){const dot=addMesh(sphere,i%2?mint:chrome,scene);dot.scale.set(.015+(i%3)*.012);dot.position.set(Math.sin(i*5.7)*3.5,Math.cos(i*3.9)*2.5,-1-Math.sin(i)*2);dust.push(dot);}
    let frame=0, time=0, last=0, visible=true, drag=false, dragX=0, dragY=0;
    let tx=0,ty=0,x=0,y=0,spread=1,renderNeeded=true;
    const resize=()=>{renderer.setSize(el.clientWidth,el.clientHeight);camera.perspective({aspect:gl.canvas.width/gl.canvas.height});renderNeeded=true;};
    const sizeObserver=new ResizeObserver(resize);sizeObserver.observe(el);resize();
    const viewObserver=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;renderNeeded=true;});viewObserver.observe(el);
    const move=(e:PointerEvent)=>{if(options.current.paused)return;const r=el.getBoundingClientRect();tx=(e.clientX-r.left)/r.width*2-1;ty=(e.clientY-r.top)/r.height*2-1;if(drag){dragX+=e.movementX*.008;dragY+=e.movementY*.008;}renderNeeded=true;};
    const down=(e:PointerEvent)=>{if(e.pointerType==='mouse'&&!options.current.paused){drag=true;el.setPointerCapture(e.pointerId);}};
    const up=()=>{drag=false;};const leave=()=>{if(!drag){tx=0;ty=0;}};
    el.addEventListener('pointermove',move);el.addEventListener('pointerdown',down);el.addEventListener('pointerup',up);el.addEventListener('pointercancel',up);el.addEventListener('pointerleave',leave);
    let previousVariant=-1,previousExpanded=false,previousPaused=options.current.paused;
    function draw(now:number){
      frame=requestAnimationFrame(draw);
      const o=options.current;
      if(!visible||document.hidden){last=now;return;}
      if(o.variant!==previousVariant||o.expanded!==previousExpanded||o.paused!==previousPaused)renderNeeded=true;
      previousVariant=o.variant;previousExpanded=o.expanded;previousPaused=o.paused;
      if(o.paused&&!renderNeeded){last=now;return;}
      if(!o.paused)time+=Math.min((now-last)/1000,.04);last=now;
      x+=(tx-x)*.055;y+=(ty-y)*.055;spread=o.paused?(o.expanded?1.35:1):spread+((o.expanded?1.35:1)-spread)*.06;
      if(knot){knot.visible=o.variant===0;code.visible=o.variant===1;orb.visible=o.variant===2;}
      else {code.visible=false;orb.visible=kind==='network';}
      if(!o.paused){
        group.rotation.set(y*.32+dragY, x*.45+dragX+(kind==='vision'?0:time*.10), kind==='hero'?-.2:0);
        group.position.y=Math.sin(time*.6)*.07;
        if(knot)knot.rotation.set(.5+time*.06,0,Math.sin(time*.15)*.2);
        if(eye)eye.rotation.set(y*.38,x*.4,0);
      }
      satellites.forEach((node,i)=>{
        const a=i/12*Math.PI*2+(o.paused?0:time*.08),b=Math.sin(i*2.3)*1.1;
        node.position.set(Math.cos(a)*1.65*spread,Math.sin(a)*1.65*spread,Math.sin(b)*1.1*spread);
        const link=links[i];link.position.copy(node.position).multiply(.5);link.scale.set(.009,.009,node.position.len());link.lookAt(node.position);
      });
      dust.forEach((dot,i)=>{if(!o.paused)dot.position.y+=Math.sin(time+i)*.0008;});
      renderer.render({scene,camera});renderNeeded=false;
    }
    frame=requestAnimationFrame(draw);
    return()=>{cancelAnimationFrame(frame);sizeObserver.disconnect();viewObserver.disconnect();el.removeEventListener('pointermove',move);el.removeEventListener('pointerdown',down);el.removeEventListener('pointerup',up);el.removeEventListener('pointercancel',up);el.removeEventListener('pointerleave',leave);geometries.forEach(g=>g.remove());programs.forEach(p=>p.remove());gl.getExtension('WEBGL_lose_context')?.loseContext();gl.canvas.remove();};
  }, [kind]);
  return <div className={`scene scene-${kind}`} ref={host} aria-hidden="true"><div className="scene-fallback"/></div>;
}
