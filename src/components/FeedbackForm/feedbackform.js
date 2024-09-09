import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { API } from '../../api/api';
import { toast } from 'react-toastify';
import '../FeedbackForm/feedbackform.css'
const FeedbackForm = ({heading,selection,feedboack_opt}) => {
  const [coverLetterUploaded, setCoverLetterUploaded] = useState(false);
  const [fscUploaded, setFscUploaded] = useState(false);
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);
  const [restorentmenualldata, setRestorentMenuTagItemdata] = useState([]);
  useEffect(() => {
    GetMenuTagItemData('ALL')

  }, []);

  const GetMenuTagItemData = async (menu_id) => {
    let updated_url = "";
    const id = 1
    updated_url = `/api/menu-items`;
    
    API.getInstance()
      .menu.get(updated_url)
      .then((res) => {
        // console.log("GetMenuTagItemData======innnnn", res.data.result.data);
       
        setRestorentMenuTagItemdata(res.data.result.data);
      })
      .catch((error) => { })
      .finally(() => { });
  };


  const initialValues = {
    first_name: '',
    last_name: '',
    phone_number: '',
    email_id: '',
    feedboack_opt: feedboack_opt,
    fsc_opt: '',
    message: '',
    cover_letter: null,
    fsc_certificate: null,
    resume: null,
    menu_item:''
  };
  const validationSchema = Yup.object().shape({
    
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    phone_number: Yup.string().required('Phone number is required'),
    message: Yup.string().required('Message is required'),
    email_id: Yup.string().email('Invalid email').required('Email is required'),
    feedboack_opt: Yup.string().required('Please select an option'),
     
    fsc_opt: Yup.string().test(
      'is-fsc-opt-required',
      'Please select and uploading food safety cerificate',
      function(value) {
        const { fsc_certificate } = this.parent;
        if (value === '1' && fsc_certificate) {
          return true; // FSC option is '1' but FSC certificate is not provided
        }
        else if (value === '2' ){
          return true; // FSC option is not '1' or FSC certificate is provided
        }
        else{
          return false; // FSC option is
        }
      }
    ),
  });

  const handleSubmit = async (values, { setSubmitting }) => {

    console.log('handleSubmit===>13',values)
    // Check if cover_letter exists and convert it to base64 if it does
    if (values.cover_letter && values.cover_letter instanceof Blob) {
      const base64CoverLetter = await convertToBase64(values.cover_letter);
      console.log(base64CoverLetter,'base64CoverLetter===>')
      // formData.append('cover_letter', base64CoverLetter);
      values.cover_letter = base64CoverLetter
    }

    // Check if resume exists and convert it to base64 if it does
    if (values.resume && values.resume instanceof Blob) {
      console.log("resume===>11resume",values.resume)
      const base64Resume = await convertToBase64(values.resume);
      values.resume = base64Resume
      console.log(base64Resume,'base64Resume===>')
      // formData.append('resume', base64Resume);
    }
    
    // Check if resume exists and convert it to base64 if it does
    if (values.fsc_certificate && values.fsc_certificate instanceof Blob) {
      console.log("resume===>22fsc_certificate",values.fsc_certificate)
      const base64fsc = await convertToBase64(values.fsc_certificate);
      values.fsc_certificate = base64fsc
      console.log(base64fsc,'base64fsc===>')
      // formData.append('resume', base64Resume);
    }
    console.log('handleSubmit===>222222',values)
    if(values.feedboack_opt == "Careers" && values.resume ==null){
      toast.warn('Please Upload Resume!');
    }else{
 // Make API call
 API.getInstance()
 .menu.post('/api/submit-form', values)
 .then((res) => {
   console.log(res, 'response');
   toast.success('Form submited successfully!');
 })
 .catch((error) => {
   console.log(error,'error');
 });
    }
   

    setSubmitting(true);
  };

  const options = [
    { value: '', label: 'Select option' },
    { value: 'Careers', label: 'Careers' },
    { value: 'Franchises', label: 'Franchises' },
    { value: 'Feedback', label: 'Feedback' },
    { value: 'Event', label: 'Event' },
    { value: 'Contact Us', label: 'Contact Us' }
  ];

  const options1= [
    { value: '', label: 'Select option for uploading food certificate' },
    { value: '1', label: 'Upload my food safety certificate' },
    { value: '2', label: 'I will submit my food certificate within 30 days of employement' }
  ];


  const convertToBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result;
        if (base64String.startsWith('data:application') || base64String.includes(';base64,')) {
          const base64Data = base64String.split(',')[1];
          resolve(base64Data);
        } else {
          reject(new Error('Invalid base64 format'));
        }
      };
      reader.onerror = (error) => reject(error);
    });
  };

  
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnChange={true}
      validateOnBlur={false}
      validate={(values) => {
        validationSchema
          .validate(values)
          .then((e) => {console.log("error",e);setIsValidForm(true)})
          .catch((e) => {console.log("error",e); setIsValidForm(false)});
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <Form onSubmit={handleSubmit} className="fp-form-common" style={{width:'100%'}}>
          <h2 className="text-xl" style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size)`}}>{heading}</h2>
          <div className="fp-input-w">
          <Field
            style={{ fontFamily: 'var(--primary-font-family)', fontSize: 'var(--primary-font-size-mini)' }}
            as="select"
            name="feedboack_opt"
            className="user-field-input-common user-field-select-common"
            defaultValue={selection ? options[selection].value: options[0].value} // Set the default value to the value of the first option
          >
            {options.map(option => (
              <option
                style={{ fontFamily: 'var(--primary-font-family)', fontSize: 'var(--primary-font-size-mini)' }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </Field>
            <ErrorMessage style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} name="feedboack_opt" component="p" className="fp-error-text text-red-300 mt-1 ml-1" />
          </div>

          {/* {values.feedboack_opt === 'Feedback' && (
          <div className="fp-input-w">
          <Field
            style={{ fontFamily: 'var(--primary-font-family)', fontSize: 'var(--primary-font-size-mini)' }}
            as="select"
            name="menu_item"
            className="user-field-input-common user-field-select-common"
            // defaultValue={selection ? options[selection].value: options[0].value} // Set the default value to the value of the first option
          >
            {restorentmenualldata && restorentmenualldata.map(option => (
              <option
              
                style={{ fontFamily: 'var(--primary-font-family)', fontSize: 'var(--primary-font-size-mini)' }}
                key={option.id}
                value={option.id}
              >
               <div
                key={option.value}
                className="custom-select__option"
                onClick={() => handleSelect(option)}
              >
                <image src={option.item_image} />
                <span className="custom-select__option-text">{option.name}</span>
              </div>
              </option>
            ))}
          </Field>
            <ErrorMessage style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} name="menu_item" component="p" className="fp-error-text text-red-300 mt-1 ml-1" />
          </div>
          )
        
        } */}


          <div className="fp-input-group">
            <div className="fp-input-w">
              <Field style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} type="text" name="first_name" placeholder="First name *" className="user-field-input-common" />
              <ErrorMessage style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} name="first_name" component="p" className="fp-error-text text-red-300 mt-1 ml-1" />
            </div>
            <div className="fp-input-w">
              <Field style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} type="text" name="last_name" placeholder="Last name *" className="user-field-input-common" />
              <ErrorMessage style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} name="last_name" component="p" className="fp-error-text text-red-300 mt-1 ml-1" />
            </div>
          </div>
          <div className="fp-input-w">
            <Field style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} type="text" name="phone_number" placeholder="Phone Number *" className="user-field-input-common" />
            <ErrorMessage style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} name="phone_number" component="p" className="fp-error-text text-red-300 mt-1 ml-1" />
          </div>
          <div className="fp-input-w">
            <Field style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} as="textarea" name="message" placeholder="Message *" className="user-field-textarea-common h-[130px]" />
            <ErrorMessage style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} name="message" component="p" className="fp-error-text text-red-300 mt-1 ml-1" />
          </div>
          <div className="fp-input-w">
            <Field style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} type="email_id" name="email_id" placeholder="Email Id *" className="user-field-input-common" />
            <ErrorMessage style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} name="email_id" component="p" className="fp-error-text text-red-300 mt-1 ml-1" />
          </div>
          
          {values.feedboack_opt === 'Careers' && (
            <>
            
            <div className="fp-input-w flex justify-between">
              <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ flex: 1, marginRight: '0.5rem' }}>
                  <div className="file-upload-w">
                    <input
                      type="file"
                      name="cover_letter"
                      className="fp-input-file"
                      accept="application/pdf, .doc, .docx"
                      onChange={(e) => {
                        const file = e.currentTarget.files[0];
                        setFieldValue('cover_letter', file);
                        setCoverLetterUploaded(true)
                      }}
                    />
                    {errors.cover_letter && touched.cover_letter && (
                      <p className="fp-error-text text-red-300 mt-1 ml-1">{errors.cover_letter}</p>
                    )}
                    <div className="file-u-overlay" style={{ backgroundColor: coverLetterUploaded? 'green':'#505050' }}>
                      <span style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}}  className="text-gray-100">Upload</span>
                      <span style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} className="text-gray-100">Cover Letter</span>
                    </div>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="file-upload-w">
                    <input
                      type="file"
                      name="resume"
                      className="fp-input-file"
                      accept="application/pdf, .doc, .docx"
                      onChange={(e) => {
                        console.log(e.currentTarget.files,'e.currentTarget.files')
                        setFieldValue('resume', e.currentTarget.files[0])
                        setResumeUploaded(true)
                      }}
                    />
                    {errors.resume && touched.resume && (
                      <p className="fp-error-text text-red-300 mt-1 ml-1">{errors.resume}</p>
                    )}
                    <div className="file-u-overlay" style={{ backgroundColor: resumeUploaded? 'green':'#505050' }}>
                      <span style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} className="text-gray-100">Upload</span>
                      <span style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} className="text-gray-100">Resume <span style={{color: 'red'}}>*</span></span>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="fp-input-w">
            <Field
              style={{ fontFamily: 'var(--primary-font-family)', fontSize: 'var(--primary-font-size-mini)' }}
              as="select"
              name="fsc_opt"
              className="user-field-input-common user-field-select-common"
              defaultValue={ options1[0].value} // Set the default value to the value of the first option
            >
              {options1.map(options1 => (
                <option
                  style={{ fontFamily: 'var(--primary-font-family)', fontSize: 'var(--primary-font-size-mini)' }}
                  key={options1.value}
                  value={options1.value}
                >
                  {options1.label}
                </option>
              ))}
            </Field>
              <ErrorMessage style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} name="fsc_opt" component="p" className="fp-error-text text-red-300 mt-1 ml-1" />
            </div>
            
            {values.fsc_opt === '1' && (<div className="fp-input-w flex justify-between">
              <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ flex: 1,}}>
                  <div className="file-upload-w">
                    <input
                      type="file"
                      name="fsc_certificate"
                      className="fp-input-file"
                      accept="application/pdf, .doc, .docx"
                      onChange={(e) => {
                        const file = e.currentTarget.files[0];
                        setFieldValue('fsc_certificate', file);
                        setFscUploaded(true)
                      }}
                    />
                    {errors.fsc_certificate && touched.fsc_certificate && (
                      <p className="fp-error-text text-red-300 mt-1 ml-1">{errors.fsc_certificate}</p>
                    )}
                    <div className="file-u-overlay" style={{ backgroundColor: fscUploaded? 'green':'#505050' }}>
                      <span style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}}  className="text-gray-100">Upload</span>
                      <span style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`, marginTop:'10px'}} className="text-gray-100">Food safety certificate <span style={{color: 'red'}}>*</span></span>
                    </div>
                  </div>
                </div>
                 
              </div>
            </div>)}
            
            </>
          )}
         
          <div>
            <button style={{ backgroundColor: !isValidForm ? 'rgba(180, 49, 45, 0.3)' : 'rgb(180,49,45)', fontSize:`var(--primary-font-size-mini)` }} disabled={!isValidForm} type="submit" className="fp-primary-btn">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FeedbackForm;
