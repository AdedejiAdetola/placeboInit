// api.ts

import axios from "axios";

const BASE_URL = "https://placebo.onrender.com"; // Replace this with your backend API base URL

export const signUp = async (userData: any) => {
  console.log("got here", userData);
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/auth/signup`,
      userData,
      {
        withCredentials: true, // Indicates whether or not cross-site Access-Control requests should be made using credentials
        // credentials: "include", // Passes cookies when making cross-origin requests
      }
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const signIn = async (userData: any) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/auth/signin`,
      userData,
      {
        withCredentials: true, // Indicates whether or not cross-site Access-Control requests should be made using credentials
        // credentials: "include", // Passes cookies when making cross-origin requests
      }
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
