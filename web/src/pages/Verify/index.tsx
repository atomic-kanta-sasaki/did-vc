import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Card, CardContent, styled, Typography, Chip, Fade } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import VerifiedIcon from '@mui/icons-material/Verified';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
  height: "100vh",
  alignItems: "center",
  background: "#f5f5f5",
});

const StyledCard = styled(Card)({
  minWidth: 275,
  maxWidth: 600,
  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
  borderRadius: 16,
});

const VerificationBadge = styled(motion.div)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 24,
});

interface VerificationResult {
  verified: boolean;
  verifiableCredential: {
    issuanceDate: string;
    credentialSubject: {
      degree: {
        type: string;
        name: string;
      };
    };
  };
}

export const VefiryVC: React.FC = () => {
  const [vc, setVc] = useState("");
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVc(e.target.value);
  };

  const handleSubmit = async () => {
    setIsVerifying(true);
    try {
      const res = await axios.post("http://localhost:3000/verifyVc", { vc });
      setResult(res.data);
    } catch (error) {
      console.error(error);
    }
    setIsVerifying(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Container>
      <StyledCard>
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a237e' }}>
            VC検証
          </Typography>
          
          <Box sx={{ mb: 4 }}>
            <TextField
              fullWidth
              label="VCを入力"
              multiline
              rows={4}
              variant="outlined"
              onChange={handleVcChange}
              sx={{ mb: 2 }}
            />
            <Button 
              onClick={handleSubmit}
              variant="contained"
              fullWidth
              disabled={isVerifying}
              sx={{ 
                height: 48,
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
              }}
            >
              {isVerifying ? "検証中..." : "検証する"}
            </Button>
          </Box>

          {result && (
            <Fade in={true}>
              <Box>
                <VerificationBadge
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.8 }}
                >
                  <VerifiedIcon 
                    sx={{ 
                      fontSize: 80,
                      color: result.verified ? '#4caf50' : '#f44336'
                    }}
                  />
                </VerificationBadge>

                {result.verified && result.verifiableCredential && (
                  <Box sx={{ mt: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <SchoolIcon sx={{ mr: 1, color: '#1976d2' }} />
                      <Typography variant="h6" component="span" sx={{ mr: 2 }}>
                        {result.verifiableCredential.credentialSubject.degree.name}
                      </Typography>
                      <Chip 
                        label={result.verifiableCredential.credentialSubject.degree.type}
                        color="primary"
                        variant="outlined"
                      />
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CalendarTodayIcon sx={{ mr: 1, color: '#757575' }} />
                      <Typography variant="body1" color="text.secondary">
                        発行日: {formatDate(result.verifiableCredential.issuanceDate)}
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            </Fade>
          )}
        </CardContent>
      </StyledCard>
    </Container>
  );
};