import apiClient from './api';

export interface PersonalInfo {
//   id?: string;
//   name?: string;
//   profileImage?: string;
//   backgroundImage?: string;
  // Add other fields as needed based on your API response
  _id?: string;
  fname?: string;
  lname?: string;
  mname?: string;
  email?: string;
  phone?: string;
  address?: string;
}

export const getPersonalInfo = async (): Promise<PersonalInfo> => {
  try {
    const response = await apiClient.get('/personalinfo');
    // The API returns an array, so get the first entry
    const data = Array.isArray(response.data) ? response.data[0] : response.data;
    return data;
  } catch (error) {
    console.error('Error fetching personal info:', error);
    throw error;
  }
};
