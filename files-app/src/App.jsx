import axios from 'axios';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    avatar: null,
  });

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      const response = await axios.post('http://localhost:8001/users', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error al registrar usuario', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Nombre</p>
        <input
          type='text'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
        />
        <br />
        <p>Apellido</p>
        <input
          type='text'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
        />
        <br />
        <input type='file' name='avatar' onChange={handleChange} />
        <br />
        <button type='submit'>Enviar</button>
      </form>
    </>
  );
}

export default App;
