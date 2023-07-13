import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import type { PostType } from '../../../../types/post/post';
import { useAppDispatch } from '../../../../features/redux/hooks';
import { deletePostThunk } from '../../../../features/redux/slices/posts/thunks';

type OnePostCardProps = {
  post: PostType;
};

export default function OnePostCard({ post }: OnePostCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="h5" component="div">
          {post.body}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {post.User.name}
        </Typography>
        <Typography variant="body2">{post.createdAt.toLocaleString()}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <Button size="small" onClick={() => void dispatch(deletePostThunk(post.id))}>
          <DeleteForeverIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
