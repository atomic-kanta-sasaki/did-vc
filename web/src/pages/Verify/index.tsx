import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const VefiryVC: React.FC = () => {
    return (
        <div>
          <h1>VC検証</h1>
          <Box sx={{ width: 500, maxWidth: '100%' }}>
            <TextField fullWidth label="VC" id="fullWidth" />
          </Box>
        </div>
    )
}