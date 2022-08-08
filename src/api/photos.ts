import axios from "axios";

export interface Photo {
  url: string;
}

class PhotosAPI {
  async getPhotos() {
    const response = await axios.get<Photo[]>('http://localhost:5000/photos')
    return response.data
  }

  async createPhoto(photo: FormData) {
    const response = await axios.post('http://localhost:5000/photos', photo)
    return response.data;
  }
}

export const photosAPI = new PhotosAPI();
