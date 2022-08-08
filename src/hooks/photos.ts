import {useMutation, useQuery} from "@tanstack/react-query";
import {QueryKeys} from "./constants";
import {photosAPI} from "../api/photos";


export const useGetPhotos = () => {
  return useQuery([QueryKeys.photos], photosAPI.getPhotos)
}

export const useCreatePhotos = () => {
  return useMutation(photosAPI.createPhoto)
}
