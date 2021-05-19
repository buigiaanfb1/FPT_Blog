import React, { Fragment, useEffect, useState } from 'react';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, TextField } from '@material-ui/core';
import PostEdit from './../../../components/PostEdit';

const EditPost = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.PostsReducer.posts);

  let rows = posts;

  const handleRenderPost = () => {
    if (rows) {
      return rows
        .slice()
        .reverse()
        .map((row, index) => (
          <PostEdit post={row} key={row._id} index={index} />
        ));
    }
  };

  return (
    <TableContainer component={Paper}>
      <Box className={classes.search}>
        <TextField
          id="standard-basic"
          label="Tìm kiếm bài viết"
          onChange={(e) => handleRenderPost(e)}
        />
      </Box>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell align="left">Tên bài viết</TableCell>
            <TableCell align="center">Chỉnh sửa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{handleRenderPost()}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default EditPost;
