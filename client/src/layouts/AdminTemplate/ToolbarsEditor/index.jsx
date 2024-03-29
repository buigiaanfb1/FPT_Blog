import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useStyles } from './styles';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import ModalGallery from '../Dashboard/ModalGallery';
import Swal from 'sweetalert2';

const ToolbarsEditor = () => {
  let token;
  if (localStorage.getItem('ADMIN')) {
    const local = JSON.parse(localStorage.getItem('ADMIN'));
    token = local.token;
  }
  const [content, setContent] = useState({
    title: '',
    summary: '',
    text: '',
    thumbnail: '',
  });
  const classes = useStyles();
  let data;

  const handleEditorChange = (e) => {
    data = e.target.getContent();
    setContent({
      ...content,
      text: data,
    });
  };

  const postDataAxios = () => {
    return axios({
      url: `/api/posts`,
      method: 'POST',
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
      const { data, status } = await postDataAxios();
      if (status === 200) {
        Swal.fire({
          title: 'Thành công',
          text: 'Bài viết đã được công khai',
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
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3 className={classes.title}>Title</h3>
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        name="title"
        placeholder="Tiêu đề"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <h3 className={classes.title}>Summary</h3>
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        name="summary"
        placeholder="Nội dung tóm tắt"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <h3 className={classes.title}>Thumbnail</h3>
      <ModalGallery handleImage={handleImage} />
      <br />
      <h3 className={classes.title}>Content</h3>
      <Editor
        apiKey="v5o2pa741vownqney7esv5efwtt657k8j38w8k2womugtuyg"
        initialValue="Made with <3 from Gia An"
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

export default ToolbarsEditor;
