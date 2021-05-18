import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, Button, TextField } from '@material-ui/core';

const EditPost = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.PostsReducer.posts);

  let rows = posts;

  const handleRenderPost = () => {
    if (rows) {
      return rows.map((row, index) => (
        <TableRow key={row._id}>
          <TableCell
            align="center"
            component="th"
            scope="row"
            style={{ width: '50px' }}
          >
            {index + 1}
          </TableCell>
          <TableCell align="left">{row.title}</TableCell>
          <TableCell align="center">
            <Button variant="contained" color="primary">
              Chỉnh sửa
            </Button>
          </TableCell>
        </TableRow>
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
