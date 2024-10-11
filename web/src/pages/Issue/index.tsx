import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Issue: React.FC = () => {
    return (
        <div>
          <h1>VC発行</h1>
          <Box sx={{ width: 500, maxWidth: '100%' }}>
            <TextField fullWidth label="VC送信先アドレス" id="fullWidth" />
            <TextField fullWidth label="学類" id="fullWidth" />
            <TextField fullWidth label="学位" id="fullWidth" />
          </Box>
        </div>
    )
}