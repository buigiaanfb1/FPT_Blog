import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useStyles } from './styles';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import ModalGallery from './../../layouts/AdminTemplate/Dashboard/ModalGallery';
import Swal from 'sweetalert2';

const PostEditorEdit = ({ post }) => {
  let token;
  if (localStorage.getItem('ADMIN')) {
    const local = JSON.parse(localStorage.getItem('ADMIN'));
    token = local.token;
  }
  const [content, setContent] = useState({
    id: post._id,
    title: `${post.title}`,
    summary: `${post.summary}`,
    text: `${post.text}`,
    thumbnail: `${post.thumbnail}`,
  });

  console.log(content);

  const handleEditorChange = (e) => {
    data = e.target.getContent();
    setContent({
      ...content,
      text: data,
    });
  };

  const putDataAxios = () => {
    return axios({
      url: `/api/posts`,
      method: 'PUT',
      data: content,
      headers: {
        'x-auth-token': token,
      },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent({
      ...content,
      [name]: value,
    });
  };

  const handleImage = (pictureJSON) => {
    setContent({
      ...content,
      thumbnail: pictureJSON,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, status } = await putDataAxios();
      if (status === 200) {
        Swal.fire({
          title: 'Thành công',
          text: 'Cập nhật thành công',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
      }
    } catch (err) {
      Swal.fire({
        title: 'Error!',
        text: `${err.response.statusText}`,
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    }
  };

  const classes = useStyles();
  let data;
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3 className={classes.title}>Title</h3>
      <TextField
        variant="outlined"
        fullWidth
        name="title"
        placeholder="Tiêu đề"
        defaultValue={content.title}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <h3 className={classes.title}>Summary</h3>
      <TextField
        variant="outlined"
        fullWidth
        name="summary"
        placeholder="Nội dung tóm tắt"
        defaultValue={content.summary}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <h3 className={classes.title}>Thumbnail</h3>
      <Box className={classes.wrapperThumbnail}>
        <ModalGallery handleImage={handleImage} />
        <Typography className={classes.textThumbnail}>
          {content.thumbnail}
        </Typography>
      </Box>
      <br />
      <h3 className={classes.title}>Content</h3>
      <Editor
        apiKey="v5o2pa741vownqney7esv5efwtt657k8j38w8k2womugtuyg"
        initialValue={`${post.text}`}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
            'codesample',
          ],
          toolbar:
            'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help | codesample',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          codesample_global_prismjs: true,
        }}
        onChange={handleEditorChange}
      />
      <Button type="submit" variant="contained" className={classes.save}>
        Lưu
      </Button>
    </form>
  );
};

export default PostEditorEdit;
