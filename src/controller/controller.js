import { uploadFile } from '../utils/multer.js';
import extractData from '../utils/tesseract.js';

const upload =(req, res) => {
    uploadFile(req, res,async (err) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Error uploading file.");
        }
        const filePath = `../Backend/src/uploads/${req.file.originalname}`;

        //Extracting data
        const data=await extractData(filePath)
        res.json(data)
          
      });
 
};

export default {
  upload,
};
