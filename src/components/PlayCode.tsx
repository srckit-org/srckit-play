import { useState } from 'react';import { TextField,Paper,Typography,Button } from '@mui/material';import PlayArrowIcon from '@mui/icons-material/PlayArrow';
export default function PlayCode(){const[code,setCode]=useState('// Try some JS\nconsole.log("hi!");');const[output,setOutput]=useState('');
const run=()=>{let out='';const orig=console.log;console.log=(...a:unknown[])=>{out+=a.join(' ')+'\n';};try{new Function(code)();setOutput(out||'undefined');}catch(e){setOutput(out+String(e));}console.log=orig;};
return(<div className="p-4 max-w-4xl mx-auto"><Typography variant="h5" sx={{fontWeight:600}} gutterBottom>JavaScript Playground</Typography>
<TextField label="Code" multiline minRows={12} maxRows={24} value={code} onChange={e=>setCode(e.target.value)} fullWidth className="font-mono mb-3"/>
<Button variant="contained" startIcon={<PlayArrowIcon/>} onClick={run}>Run</Button>
{output&&<Paper variant="outlined" className="p-4 mt-4"><pre className="m-0 text-sm font-mono whitespace-pre-wrap">{output}</pre></Paper>}</div>);}
