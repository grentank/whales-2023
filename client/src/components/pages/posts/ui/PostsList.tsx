import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import OnePostCard from './OnePostCard';
import { useAppSelector } from '../../../../features/redux/hooks';

export default function PostsList(): JSX.Element {
  const allPosts = useAppSelector((store) => store.posts.allPosts);
  return (
    <Container>
      <Row>
        {allPosts.map((post) => (
          <Col xs={6} key={post.id}>
            <OnePostCard post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
