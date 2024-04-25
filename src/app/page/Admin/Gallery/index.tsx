/* eslint-disable no-param-reassign */
import { PlusOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd';
import { Image, Upload, message } from 'antd';
import { RcFile } from 'antd/es/upload';
import { processDeleteQuery, processGetQuery, processPostQuery } from 'api';
import { cloneDeep, set } from 'lodash';
import { DynamicKeyObject } from 'model';
import { useEffect, useMemo, useState } from 'react';
import { useAppSelector } from 'store';
import { selectAppLoading } from 'store/appSlice';
import { confirmation, loading } from 'utils/app';
import { getBase64Multi, isValisBeforeUpload } from 'utils/upload';

const GalleryMangament = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState<any[]>([]);
  const isLoading = useAppSelector(selectAppLoading);
  const [firstLoading, setFirstLoading] = useState<boolean>(true);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64Multi(file.originFileObj);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps['onChange'] = (info) => {
    const { status, originFileObj } = info.file;

    if (status === 'uploading' && originFileObj) {
      handleUploadGallery(originFileObj);
    } else if (status === 'removed') {
      handleRemoveGallery(+info.file.uid);
    }
  };

  const handleUploadGallery = (file: RcFile) => {
    loading.on();
    const formData = new FormData();
    formData.append('image', file);
    processPostQuery('/gallery', formData, true).then((res: any) => {
      const { gallery } = res;
      const uploadtedFile = {
        uid: gallery?.id,
        name: gallery.url.split('\\').pop(),
        status: 'done',
        url: `${import.meta.env.VITE_API_ENPOINT}/${gallery.url}`,
      };
      const nextFileList = cloneDeep(fileList);
      nextFileList.push(uploadtedFile);
      setFileList(nextFileList);
      message.success('Thêm ảnh thành công!');
      loading.off();
    });
  };
  console.log('fileList', fileList);

  const handleRemoveGallery = (fileId: number) => {
    confirmation({
      type: 'multi',
      message: 'Xác nhận xoá ảnh này?',
      title: 'Xác nhận',
      onSubmit: () => handleSubmitRemove(fileId),
    });
  };

  const handleSubmitRemove = (fileId: number) => {
    loading.on();
    processDeleteQuery(`/gallery/${fileId}`).then(() => {
      message.success('Xóa ảnh thành công!');
      const nextFileList = cloneDeep(fileList).filter((file) => file.uid !== fileId);
      setFileList(nextFileList);
      loading.off();
    });
  };

  useEffect(() => {
    processGetQuery('/gallery').then((res) => {
      const { galleries } = res;
      const nextFileList = galleries.map((gallery: DynamicKeyObject) => ({
        uid: gallery?.id,
        name: gallery.url.split('\\').pop(),
        status: 'done',
        url: `${import.meta.env.VITE_API_ENPOINT}/${gallery.url}`,
      }));
      setFileList(nextFileList);
      setFirstLoading(false);
    });
  }, []);

  useEffect(() => {
    firstLoading ? loading.on() : loading.off();
  }, [firstLoading]);

  return (
    <>
      {!firstLoading && (
        <>
          <Upload
            listType="picture-card"
            customRequest={({ file, onSuccess }) => {
              onSuccess && onSuccess('ok');
            }}
            beforeUpload={isValisBeforeUpload}
            multiple={true}
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            <button style={{ border: 0, background: 'none' }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
          {previewImage && (
            <Image
              wrapperStyle={{ display: 'none' }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(''),
              }}
              src={previewImage}
            />
          )}
        </>
      )}
    </>
  );
};

export default GalleryMangament;
