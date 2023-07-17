import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../features/redux/hooks';
import { closeModal } from '../../features/redux/slices/posts/postsSlice';
import type { PostForm } from '../../types/post/forms';
import { addNewPostThunk, editPostThunk } from '../../features/redux/slices/posts/thunks';

const initState = { title: '', body: '' };

export default function ModalPosts(): JSX.Element {
  const { modalIsOpened: show, currentPost } = useAppSelector((store) => store.posts);
  const dispatch = useAppDispatch();

  const handleClose = (): void => {
    dispatch(closeModal());
  };
  const [formData, setFormData] = useState<PostForm>(currentPost || initState);
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => {
    setFormData(currentPost || initState);
  }, [currentPost]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={changeHandler}
              value={formData.title}
              type="text"
              name="title"
              placeholder="Enter title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicBody">
            <Form.Label>Body</Form.Label>
            <Form.Control
              onChange={changeHandler}
              value={formData.body}
              type="text"
              name="body"
              placeholder="Body"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            if (!currentPost) void dispatch(addNewPostThunk(formData));
            else void dispatch(editPostThunk({ id: currentPost.id, formData }));
            setFormData(initState);
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
