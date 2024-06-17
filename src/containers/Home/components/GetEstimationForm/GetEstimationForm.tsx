import { useNavigate } from 'react-router-dom';

import { homePageIcons } from '../../../../assets/icons/Home';
import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/UI/Input';
import { CONTACT } from '../../../../routes';
import { data } from './data';

import style from './GetEstimationForm.module.scss';



export const GetEstimationForm = () => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.container_inner}>
          <div className={style.column_left}>
            <div className={style.column_title}>Get Estimation</div>
            <div className={style.column_desc}>Enter the data and describe your project so that we can provide you with a free estimate of the cost and time of implementation of your idea</div>
            <div className={style.column_list}>
              {data
              ? data.map(current => <div className={style.list_element}>
                <div><img src={current.icon} alt='number_icon'/></div>
                <div>{current.text}</div>
              </div>)
              : undefined
              }
            </div>
          </div>
          <div className={style.column_right}>
            <form className={style.form}>
              <div className={style.form_row}>
                <Input type='text' label='Full Name*' placeholder='John Smith' required/>
                <Input type='text' label='Company Name' placeholder='IT Company'/>
              </div>  
              <div className={style.form_row}>
                <Input type="phone" label='Phone Number*' placeholder ='+1 (831) 333-6202' required/>
                <Input type='email' label='Email*' placeholder='Example@gmail.com' required/>
              </div>
              <div className={style.form_row}>
                <Input type='date' label='Convenient time for contact' placeholder='Month/Day/Time'/>
                <Input type='text' label='Service' placeholder='Development/Design'/>
              </div>
              <div className={style.expected_budget}>
                <div className={style.expected_budget_header}>Expected Budget</div>
                <div className={style.buttons}>
                  <button className={style.button}>Up to $25k</button>
                  <button className={style.button}>$25k - $50k</button>
                  <button className={style.button}>$50k - $100k</button>
                  <button className={style.button}>Over $100k</button>
                </div>
              </div>
              <div className={style.tell_us_more}>
                <div className={style.tell_us_more_header}>Tell us more about your project</div>
                <div className={style.buttons}>
                  <textarea className={style.textarea}>Message</textarea>
                </div>
              </div>
              <div className={style.attach_file}>
                <div className={style.attach_file_header}>Attached</div>
                <div className={style.attach_file_icon}>
                  <img src={homePageIcons.attachIcon} alt='attach button'/>
                </div>
              </div>
              <div className={style.additional}>
                <div className={style.checkbox_container}>
                  <input className={style.checkbox} type='checkbox'/>
                  <label>Do you need an NDA first?</label>
                </div>
                <div className={style.checkbox_container}>
                  <input className={style.checkbox} type='checkbox'/>
                  <label>I agree with Terms of use and Privacy policy</label>
                </div>
                <Button onClick={() => navigate(CONTACT)} title='Get Estimation' type='solid' fullWidth/>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}