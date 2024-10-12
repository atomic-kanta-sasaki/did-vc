import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export const VefiryVC: React.FC = () => {
  const [vc, setVc] = useState("");
  const handleVcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVc(e.target.value);
  };
  const handleSumit = async () => {
    const res = await fetch("http://localhost:3000/verifyVc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vc,
      }),
    });
    console.log(await res.json());
  };
  return (
    <div>
      <h1>VC検証</h1>
      <Box sx={{ width: 500, maxWidth: "100%" }}>
        <TextField
          fullWidth
          label="VC"
          id="fullWidth"
          onChange={handleVcChange}
        />
        <Button onClick={handleSumit} variant="contained">
          送信
        </Button>
      </Box>
    </div>
  );
};
