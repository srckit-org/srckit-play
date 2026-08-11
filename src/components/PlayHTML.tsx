import { useState } from 'react';import { TextField,Paper,Typography } from '@mui/material';
export default function PlayHTML(){const[html,setHtml]=useState('<h1>Hello World</h1>\n<p>Edit me!</p>');
return(<div className="p-4 max-w-4xl mx-auto"><Typography variant="h5" sx={{fontWeight:600}} gutterBottom>HTML Playground</Typography>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4"><TextField label="HTML" multiline minRows={16} value={html} onChange={e=>setHtml(e.target.value)} fullWidth className="font-mono"/>
<Paper variant="outlined" className="p-2 min-h-[300px] overflow-auto"><iframe title="preview" srcDoc={html} className="w-full h-full border-0 min-h-[280px]"/></Paper></div></div>);}
