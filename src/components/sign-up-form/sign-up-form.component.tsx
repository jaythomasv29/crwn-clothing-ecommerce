import { useState, ChangeEvent, FormEvent } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils'
import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'

import "./sign-up-form-styles.scss"

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
}
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = formFields;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value
    })
  }

  const handleSubmitUserEmailAndPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    };
    try {
      const response = await createAuthUserWithEmailAndPassword(email, password);
      if (response) {
        await createUserDocumentFromAuth(response.user, { displayName: name })
      } else {
        console.log("Failed to create user")
      }

    } catch (err) {
      alert("Cannot sign up user, error with credentials")
    } finally {
      setFormFields(defaultFormFields)
    }
  }
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmitUserEmailAndPassword}>
        <FormInput label="Name" onChange={handleInputChange} type="text" required name="name" value={name} />

        <FormInput label="Email" onChange={handleInputChange} type="email" required name="email" value={email} />


        <FormInput label="Password" onChange={handleInputChange} type="password" required name="password" value={password} />

        <FormInput label="Confirm Password" onChange={handleInputChange} type="password" required name="confirmPassword" value={confirmPassword} />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm