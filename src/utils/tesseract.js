import { createWorker } from 'tesseract.js';
const extractData=async (filePath) => {
    const worker = await createWorker("eng");
    const ret = await worker.recognize(filePath);
    const data = ret.data.text;

    await worker.terminate();
    return data
  }

  export default extractData