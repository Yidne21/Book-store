import DataURIParser from "datauri/parser";
import { uploader } from "../config/cloudinary";

export const uploadFile = async (file, folderName) => {
  const parser = new DataURIParser();
  try {
    const fileDataUri = parser.format(file.mimetype, file.buffer).content;

    const result = await uploader.upload(fileDataUri, {
      asset_folder: folderName,
      public_id: file.originalname,
      overwrite: true,
      resource_type: "Image",
    });

    return result.secure_url;
  } catch (error) {
    throw new Error(error);
  }
};
