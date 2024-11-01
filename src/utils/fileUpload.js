import multer from "multer";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../Backend/src/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const uploadFile = multer({ storage }).single("file");
