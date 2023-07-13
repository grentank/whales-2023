import { Box, CircularProgress } from '@mui/material';
import React, { useContext } from 'react';

type LoaderProps = {
  children: JSX.Element;
  isLoading: boolean;
};

export default function Loader({ children, isLoading }: LoaderProps): JSX.Element {
  if (isLoading)
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  return children;
}
