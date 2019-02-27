import ImagePicker from "react-native-image-crop-picker";
import RN from "rn-fetch-blob";
const UploadImage = callback => {
  let uri = "";
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: false
  }).then(image => {
    const fs = RN.fs;
    fs.readFile(image.path, "base64").then(data => {
      uri = "data:image/jpeg;base64," + data;
      callback(uri);
    });
  });
};
export default UploadImage;
