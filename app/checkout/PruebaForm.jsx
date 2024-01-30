'use client'

import { useForm } from 'react-hook-form';

const PruebaForm = ({ onSubmit }) => {
  const { register, handleSubmit, watch, setValue } = useForm();

  const radioOption = watch('radioOption');

  const handleRadioChange = (value) => {
    setValue('radioOption', value);

    const handleSubmit = (data) =>{
      console.log(data)
    }
    // Habilitar los primeros cuatro inputs solo si se selecciona "Option 1"
    if (value === 'option1') {
      setValue('textInput1', '');
      setValue('textInput2', '');
      setValue('textInput3', '');
      setValue('textInput4', '');
    } else {
      // Deshabilitar los primeros cuatro inputs si se selecciona "Option 2" o "Option 3"
      setValue('textInput1', 'disabled');
      setValue('textInput2', 'disabled');
      setValue('textInput3', 'disabled');
      setValue('textInput4', 'disabled');
    }
  };

  const handleTextInputChange = (name, value) => {
    setValue(name, value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          <input
            type="radio"
            value="option1"
            name="radioOption"
            onChange={() => handleRadioChange('option1')}
            {...register('radioOption')}
          />
          Option 1
        </label>
        <label>
          <input
            type="radio"
            value="option2"
            name="radioOption"
            onChange={() => handleRadioChange('option2')}
            {...register('radioOption')}
          />
          Option 2
        </label>
        <label>
          <input
            type="radio"
            value="option3"
            name="radioOption"
            onChange={() => handleRadioChange('option3')}
            {...register('radioOption')}
          />
          Option 3
        </label>
      </div>

      <div>
        <label>
          Text Input 1:
          <input
            type="text"
            name="textInput1"
            onChange={(e) => handleTextInputChange('textInput1', e.target.value)}
            {...register('textInput1', { required: radioOption === 'option1' })}
            disabled={radioOption !== 'option1'}
          />
        </label>
      </div>
      <div>
        <label>
          Text Input 2:
          <input
            type="text"
            name="textInput2"
            onChange={(e) => handleTextInputChange('textInput2', e.target.value)}
            {...register('textInput2', { required: radioOption === 'option1' })}
            disabled={radioOption !== 'option1'}
          />
        </label>
      </div>
      <div>
        <label>
          Text Input 3:
          <input
            type="text"
            name="textInput3"
            onChange={(e) => handleTextInputChange('textInput3', e.target.value)}
            {...register('textInput3', { required: radioOption === 'option1' })}
            disabled={radioOption !== 'option1'}
          />
        </label>
      </div>
      <div>
        <label>
          Text Input 4:
          <input
            type="text"
            name="textInput4"
            onChange={(e) => handleTextInputChange('textInput4', e.target.value)}
            {...register('textInput4', { required: radioOption === 'option1' })}
            disabled={radioOption !== 'option1'}
          />
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={
            !((radioOption === 'option1' && watch('textInput1') && watch('textInput2') && watch('textInput3') && watch('textInput4')) ||
              (radioOption === 'option2') || (radioOption === 'option3'))
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default PruebaForm;
