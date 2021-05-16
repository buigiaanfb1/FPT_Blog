import React, { useEffect, useState } from 'react';
import { CloudinaryContext } from 'cloudinary-react';
import {
  fetchPhotos,
  openUploadWidget,
} from './../../common/CloudinaryService';
import Dashboard from './Dashboard';
import { useDispatch } from 'react-redux';
import { MOVE_IMAGES_TO_REDUCER } from './modules/constants';

const AdminTemplate = () => {
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPhotos('image', setImages);
  }, []);

  if (images.length > 0) {
    dispatch({
      type: MOVE_IMAGES_TO_REDUCER,
      payload: images,
    });
  }

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: 'cloudassetbuffet',
      tags: [tag, 'image'],
      uploadPreset: 'upload',
    };

    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        if (photos.event === 'success') {
          setImages([...images, photos.info.public_id]);
        }
      } else {
      }
    });
  };

  return (
    <CloudinaryContext cloudName="cloudassetbuffet">
      <div>
        <Dashboard beginUpload={beginUpload} />
      </div>
    </CloudinaryContext>
  );
};

export default AdminTemplate;
