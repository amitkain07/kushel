import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Basic styles

const PhoneField = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className="mt-2 w-16 ">
      <PhoneInput
        country={'in'}
        value={phone}
        onChange={setPhone}
        inputStyle={{
          width: '100%',
          borderRadius: '0.375rem',
          backgroundColor: '#738FFF',
          color: 'white',
          border: 'none',
          padding: '10px 14px',
        }}
        buttonStyle={{
          backgroundColor: '#738FFF',
          border: 'none',
        }}
        containerStyle={{
          width: '100%',
        }}
      />
    </div>
  );
};

export default PhoneField;
