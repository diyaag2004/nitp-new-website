"use client";
import React, { useEffect } from 'react';
import FacultyList from '../../../components/faculty/FacultyList';

const FacultyPage = ({ params }) => {
  const { department } = params;

  useEffect(() => {
    
    if (department) {
      
      console.log(`Fetching data for department: ${department}`);
    }
  }, [department]); 

  if (!department) {
    return <div><h1>Invalid department Name </h1></div>;
  }

  return <FacultyList department={department} />;
};


export default FacultyPage;
