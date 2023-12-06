import React from 'react'
import './first.css'

const First = () => {
  return (
    <>
    <form>
        <label htmlFor="fullname">FullName</label>
        <br />
        <input type="text" name="fname" id="fullname" />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" name="email" id="email" />
        <br />
        <label htmlFor="pwd">Password</label>
        <br />
        <input type="password" name="pwd" id="pwd" />
        <br />
        <input type="submit" value="Register" />
    </form>
    </>
  )
}

export default First