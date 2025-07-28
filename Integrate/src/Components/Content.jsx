import { Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import Image from "./Image";
import React from 'react'


const Content = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center ">

      <div className="row w-100 align-items-center">

        <div className="main col-md-6 text-center text-md-start px-4">
          <h3 className="fw-bold display-7">Hi, Hi, I'm John Deo.</h3>
          <p className="text-muted">
            A freelance Web developer from London. I
            convert custom web designs to Bootstrap templates.
          </p>

          <p className="text-muted">I make YouTube videos and write Blog.</p>
          <Button variant="primary" className="mt-3 custom-btn">I'm Available</Button>
          <div className="icon d-flex align-items-center mt-3 fs-5 gap-3 social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaGithub /></a>
          </div>

        </div>

        < Image />
      </div>

    </div>
  )
}

export default Content
