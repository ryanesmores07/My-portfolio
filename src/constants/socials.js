import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    text: "facebook",
    url: "https://www.facebook.com/ryan.esmores/",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    text: "linkedin",
    url: "https://www.linkedin.com/in/ryan-esmores-ab5779131/",
  },
  {
    id: 3,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    text: "instagram",
    url: "https://www.instagram.com/ryanghostlean/",
  },
  {
    id: 4,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    text: "github",
    url: "https://github.com/ryanesmores07",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    text: "twitter",
    url: "https://twitter.com/EsmoresRyan",
  },
]

export default data
