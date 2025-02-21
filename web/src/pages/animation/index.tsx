import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Paper, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export const NotificationOverlay = ({ type = 'success', message = '', show = false }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1300,
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            exit={{ scale: 0 }}
            transition={{
              type: "spring",
              duration: 0.8,
              bounce: 0.4
            }}
          >
            <Paper
              elevation={6}
              sx={{
                padding: 3,
                backgroundColor: type === 'success' ? '#e8f5e9' : '#ffebee',
                borderRadius: '16px',
                textAlign: 'center',
                minWidth: '300px',
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  times: [0, 1],
                }}
              >
                {type === 'success' ? (
                  <CheckCircleIcon
                    sx={{
                      fontSize: 80,
                      color: '#2e7d32',
                      marginBottom: 2
                    }}
                  />
                ) : (
                  <CancelIcon
                    sx={{
                      fontSize: 80,
                      color: '#d32f2f',
                      marginBottom: 2
                    }}
                  />
                )}
              </motion.div>
              
              <Typography
                variant="h6"
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                sx={{
                  color: type === 'success' ? '#1b5e20' : '#b71c1c',
                  fontWeight: 'bold'
                }}
              >
                {message}
              </Typography>
            </Paper>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// 使用例
export const Demo = () => {
  const [notification, setNotification] = React.useState({
    show: false,
    type: 'success',
    message: ''
  });

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 3000);
  };

  return (
    <Box sx={{ p: 2 }}>
      <button onClick={() => showNotification('success', '処理が成功しました！')}>
        成功通知を表示
      </button>
      <button onClick={() => showNotification('error', 'エラーが発生しました')}>
        エラー通知を表示
      </button>
      
      <NotificationOverlay
        show={notification.show}
        type={notification.type}
        message={notification.message}
      />
    </Box>
  );
};

