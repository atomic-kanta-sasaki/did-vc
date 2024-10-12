import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export const Issue: React.FC = () => {

    const [hodlerAddress, setHolderAddress]  = useState('');
    const [type, setType] = useState('');
    const [name, setName] = useState('');

    const handleHolderAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHolderAddress(e.target.value);
    }

    const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setType(e.target.value);
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleSumit = async () => {
        const res = await fetch('http://localhost:3000/issueVc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                hodlerAddress,
                type,
                name
            })
        });
        console.log(await res.json());
    }

    return (
        <div>
          <h1>VC発行</h1>
          <Box sx={{ width: 500, maxWidth: '100%' }}>
            <TextField fullWidth label="VC送信先アドレス" id="fullWidth" onChange={handleHolderAddressChange}/>
            <TextField fullWidth label="学類" id="fullWidth" onChange={handleTypeChange}/>
            <TextField fullWidth label="学位" id="fullWidth" onChange={handleNameChange}/>
            <Button onClick={handleSumit} variant="contained">送信</Button>

          </Box>
        </div>
    )
}