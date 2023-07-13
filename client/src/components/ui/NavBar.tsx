import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import type { PostFormType } from '../../types/post/post';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { addPostThunk } from '../../features/redux/slices/posts/thunks';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const initInputs = { title: '', body: '' };

export default function NavBar(): JSX.Element {
  const user = useAppSelector((store) => store.user);

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = (): void => {
    if (user.status === 'logged') {
      setOpenModal(true);
    }
  };
  const handleClose = (): void => setOpenModal(false);
  const [inputs, setInputs] = useState<PostFormType>(initInputs);
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const dispatch = useAppDispatch();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {user.status === 'logged' ? user.name : 'Guest'}
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Main
            </Button>
            <Button color="inherit" onClick={handleOpenModal}>
              Add post
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add post
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <TextField
            value={inputs.title}
            onChange={changeHandler}
            name="title"
            id="outlined-basic"
            label="Title"
            variant="outlined"
          />
          <TextField
            value={inputs.body}
            onChange={changeHandler}
            name="body"
            label="Body"
            multiline
            rows={4}
          />
          <Button
            onClick={() => {
              void dispatch(addPostThunk(inputs));
              setInputs(initInputs);
              handleClose();
            }}
          >
            Post!
          </Button>
        </Box>
      </Modal>
    </>
  );
}
