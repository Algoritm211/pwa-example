import React from 'react';
import {Field, Form, FormRenderProps} from "react-final-form";
import {FileField} from "./FileField";
import {photosAPI} from "../../api/photos";
import {useCreatePhotos} from "../../hooks/photos";

interface FormValues {
  photos: File[]
}

export const PhotosForm = () => {
  const {mutateAsync} = useCreatePhotos()

  const onPhotosSubmit = async (values: FormValues, form: any) => {
    const file = values.photos[0]
    console.log(file)
    const formData = new FormData()
    formData.append('file', file)
    await mutateAsync(formData)
    form.form.reset();
  }

  return (
    <div>
      <Form<FormValues>
        onSubmit={onPhotosSubmit}
        render={({handleSubmit}) => {
          return (
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div>
                <label>Upload Your Image</label>
                <FileField
                  name="photos"
                  type="file"
                  placeholder="Choose file"
                  className="shadow border rounded py-2 px-3 mt-1 block w-full
            ring-yellow-500 focus:ring outline-none"
                />
              </div>
              <button
                className="text-white mt-3 bg-amber-500 hover:bg-amber-600
              rounded p-2 transition duration-500"
                type="submit">
                Submit photos
              </button>
            </form>
          )
        }}
      />
    </div>
  );
};
