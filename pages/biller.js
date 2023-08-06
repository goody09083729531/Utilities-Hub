import React from 'react';
import axios from 'axios';

export default async function apiCall() {
  try {
    const response = await axios.get("https://api.flutterwave.com/v3/bill-categories?cable=1", {
      headers: {
        Authorization: 'Bearer FLWSECK-6e06f2ee2a057fe71a4a04c49b7685b5-189bc8b24a6vt-X',
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    
    console.error(error);
    throw error;
  }
}