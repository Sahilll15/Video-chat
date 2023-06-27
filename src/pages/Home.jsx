import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Typography } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState('');
   const [name,setname]=useState('')
   
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${roomCode}`);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom>
          Enter the room code:
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Enter the room code"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Enter the room
        </Button>
      </form>
    </Box>
  );
};

export default Home;
