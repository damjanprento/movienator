import React, { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { client } from '../client';
import Spinner from './Spinner';
import { genres } from '../utils/data';

const CreatePin = ({ user }) => {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [destination, setDestination] = useState('');
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState(null);
  const [genre, setGenre] = useState(null); 
  const [imageAsset, setImageAsset] = useState(null); 
  const [wrongImageType, setWrongImageType] = useState(false); 

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center mt-5 lg:h-4/5">
      
    </div>
  )
}

export default CreatePin