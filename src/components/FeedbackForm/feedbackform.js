import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { API } from '../../api/api';
import { toast } from 'react-toastify';

const FeedbackForm = ({width,heading,selection}) => {
  const [coverLetterUploaded, setCoverLetterUploaded] = useState(false);
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);

  const initialValues = {
    first_name: '',
    last_name: '',
    phone_number: '',
    email_id: '',
    feedboack_opt: '',
    message: '',
    cover_letter: null,
    resume: null,
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    phone_number: Yup.string().required('Phone number is required'),
    message: Yup.string().required('Message is required'),
    email_id: Yup.string().email('Invalid email').required('Email is required'),
    feedboack_opt: Yup.string().required('Please select an option'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log('handleSubmit===>13')
    // Check if cover_letter exists and convert it to base64 if it does
    if (values.cover_letter && values.cover_letter instanceof Blob) {
      const base64CoverLetter = await convertToBase64(values.cover_letter);
      // formData.append('cover_letter', base64CoverLetter);
      values.cover_letter = base64CoverLetter
    }

    // Check if resume exists and convert it to base64 if it does
    if (values.resume && values.resume instanceof Blob) {
      const base64Resume = await convertToBase64(values.resume);
      values.resume = base64Resume
      // formData.append('resume', base64Resume);
    }
    console.log('handleSubmit===>222222')
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

    setSubmitting(true);
  };

  const options = [
    { value: '', label: 'Apply For' },
    { value: 'Careers', label: 'Careers' },
    { value: 'Franchises', label: 'Franchises' },
    { value: 'Feedback', label: 'Feedback' },
    { value: 'Event', label: 'Event' }
  ];

  const convertToBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]);
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
            <Field style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} as="select" name="feedboack_opt" className="user-field-input-common user-field-select-common">
              {options.map(option => (
                <option style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} key={option.value} value={option.value}>{option.label}</option>
              ))}
            </Field>
            <ErrorMessage style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} name="feedboack_opt" component="p" className="fp-error-text text-red-300 mt-1 ml-1" />
          </div>
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
          )}
          <div>
            <button style={{ backgroundColor: !isValidForm ? 'rgba(180, 49, 45, 0.7)' : 'rgb(180,49,45)', fontSize:`var(--primary-font-size-mini)` }} disabled={!isValidForm} type="submit" className="fp-primary-btn">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FeedbackForm;
