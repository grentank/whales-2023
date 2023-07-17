import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PostsList from './ui/PostsList';
import { useAppDispatch, useAppSelector } from '../../../features/redux/hooks';
import { loadAllPostsThunk } from '../../../features/redux/slices/posts/thunks';

export default function PostsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const length = useAppSelector((store) => store.posts.allPosts.length);
  useEffect(() => {
    if (!length) void dispatch(loadAllPostsThunk());
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <h1>Posts</h1>
        </Col>
      </Row>
      <PostsList />
    </Container>
  );
}
