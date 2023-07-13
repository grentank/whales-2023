import React from 'react';
import { Grid } from '@mui/material';
import { useAppSelector } from '../../../features/redux/hooks';
import OnePostCard from './ui/OnePostCard';

export default function MainPage(): JSX.Element {
  const allPosts = useAppSelector((store) => store.posts.allPosts);
  return (
    <Grid container spacing={2}>
        {allPosts.map((post) => (<Grid item xs={12} key={post.id}>
            <OnePostCard post={post} />
        </Grid>))}
    </Grid>
  );
}
