import axios from "axios";

const BASE_URL = "http://localhost:8080/send-email";

// ✅ API function
export const sendEmailApi = async (formData, file) => {
  try {
    const data = new FormData();

    // JSON data
    data.append("data", JSON.stringify(formData));

    // file
    if (file) {
      data.append("image", file);
    }

    const response = await axios.post(BASE_URL, data);
      // headers: {
      //   "Content-Type": "multipart/form-data"
      // }

    return response.data;

  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};