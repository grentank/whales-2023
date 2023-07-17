import React from 'react';
import { Button, Card } from 'react-bootstrap';
import type { PostType } from '../../../../types/post/post';
import { useAppDispatch, useAppSelector } from '../../../../features/redux/hooks';
import { setCurrentPost } from '../../../../features/redux/slices/posts/postsSlice';

type OnePostCardProps = {
  post: PostType;
};

export default function OnePostCard({ post }: OnePostCardProps): JSX.Element {
  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  return (
    <Card>
      <Card.Header>{post.author.name}</Card.Header>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        {user.status === 'logged' && (
          <Button onClick={() => {
            dispatch(setCurrentPost(post))
          }} variant="primary" disabled={user.id !== post.authorId}>
            Edit
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
