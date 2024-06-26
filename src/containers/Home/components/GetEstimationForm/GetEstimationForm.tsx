import { useState, ChangeEvent, FormEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import { homePageIcons } from '../../../../assets/icons/Home';
import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/UI/Input';
import { data } from './data';

import style from './GetEstimationForm.module.scss';

interface RadioChosen {
  UpTo25: boolean;
  From25To50: boolean;
  From50To100: boolean;
  Over100: boolean;
}

export const GetEstimationForm = () => {
  const [radioChosen, setRadioChosen] = useState<RadioChosen>({
    UpTo25: false,
    From25To50: false,
    From50To100: false,
    Over100: false,
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, handleSubmit] = useForm('mpwaazlo');
  const [file, setFile] = useState<File | null>(null);

  const handleRadio = (value: keyof RadioChosen) => {
    setRadioChosen({
      UpTo25: value === 'UpTo25',
      From25To50: value === 'From25To50',
      From50To100: value === 'From50To100',
      Over100: value === 'Over100',
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleCustomSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    if (file) {
      formData.append('file', file);
    }

    console.log(formData);
    const response = await fetch('https://formspree.io/f/mpwaazlo', {
      mode: 'no-cors',
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.ok) {
      alert('success');
    } else {
      alert('error');
    }
  };

  return (
    <div className={style.container}>
      <div className={style.container_inner}>
        <div className={style.column_left}>
          <div className={style.column_title}>Get Estimation</div>
          <div className={style.column_desc}>
            Enter the data and describe your project so that we can provide you with a free estimate of the cost and
            time of implementation of your idea.
          </div>
          <div className={style.column_list}>
            {data &&
              data.map(current => (
                <div key={current.text} className={style.list_element}>
                  <div>
                    <img src={current.icon} alt='number_icon' />
                  </div>
                  <div>{current.text}</div>
                </div>
              ))}
          </div>
        </div>
        <div className={style.column_right}>
          <form onSubmit={handleCustomSubmit} encType='multipart/form-data' className={style.form}>
            <div className={style.form_row}>
              <Input type='text' label='Full Name*' name='name' placeholder='John Smith' required />
              <Input type='text' label='Company Name' name='company' placeholder='IT Company' />
            </div>
            <div className={style.form_row}>
              <Input type='tel' label='Phone Number*' name='phone' placeholder='+1 (831) 333-6202' required />
              <Input type='email' label='Email*' name='email' placeholder='Example@gmail.com' required />
              <ValidationError prefix='Email' field='email' errors={state.errors} />
            </div>
            <div className={style.form_row}>
              <Input type='date' label='Convenient time for contact' name='contact_time' placeholder='Month/Day/Time' />
              <Input type='text' label='Service' name='service' placeholder='Development/Design' />
            </div>
            <div className={style.expected_budget}>
              <div className={style.expected_budget_header}>Expected Budget</div>
              <div className={style.buttons}>
                <div
                  className={`${style.button} ${radioChosen.UpTo25 ? style.active : ''}`}
                  onClick={() => handleRadio('UpTo25')}
                >
                  <label>Up to $25k</label>
                </div>
                <div
                  className={`${style.button} ${radioChosen.From25To50 ? style.active : ''}`}
                  onClick={() => handleRadio('From25To50')}
                >
                  <label>$25k - $50k</label>
                </div>
                <div
                  className={`${style.button} ${radioChosen.From50To100 ? style.active : ''}`}
                  onClick={() => handleRadio('From50To100')}
                >
                  <label>$50k - $100k</label>
                </div>
                <div
                  className={`${style.button} ${radioChosen.Over100 ? style.active : ''}`}
                  onClick={() => handleRadio('Over100')}
                >
                  <label>Over $100k</label>
                </div>
              </div>
              <div className={style.radio_buttons}>
                <input type='radio' name='budget' value='Up to $25k' checked={radioChosen.UpTo25} />
                <input type='radio' name='budget' value='$25k - $50k' checked={radioChosen.From25To50} />
                <input type='radio' name='budget' value='$50k - $100k' checked={radioChosen.From50To100} />
                <input type='radio' name='budget' value='Over $100k' checked={radioChosen.Over100} />
              </div>
            </div>
            <div className={style.tell_us_more}>
              <div className={style.tell_us_more_header}>Tell us more about your project</div>
              <div className={style.buttons}>
                <textarea
                  minLength={5}
                  className={style.textarea}
                  required
                  name='message'
                  placeholder='Message'
                ></textarea>
              </div>
            </div>
            <div className={style.attach_file}>
              <div className={style.attach_file_header}>Attach a file</div>
              <div className={style.attach}>
                <input className={style.attach_file_input} name='document' type='file' onChange={handleFileChange} />
                <img className={style.attach_file_icon} src={homePageIcons.attachIcon} alt='attach file' />
              </div>
              {file && <div>{file.name}</div>}
            </div>
            <div className={style.additional}>
              <label className={style.checkbox_container}>
                <input className={style.checkbox} type='checkbox' name='nda' />
                <div>Do you need an NDA first?</div>
              </label>
              <label className={style.checkbox_container}>
                <input className={style.checkbox} type='checkbox' name='terms' required />
                <div>I agree with Terms of use and Privacy policy</div>
              </label>
              <Button onClick={() => {}} title='Get Estimation' type='ghost' fullWidth />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
