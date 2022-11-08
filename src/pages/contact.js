import React from "react"
import styled from "styled-components"
import { FiMail } from "react-icons/fi"
import { BsTelephone } from "react-icons/bs"
import { HiOutlineArrowRight } from "react-icons/hi"

const ContactPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="text-container" id="contact">
          <h1>
            Have projects in mind? Let's work
            <span className="text-gradient"> together</span>
          </h1>
          <p>
            Have a project in mind? Looking to partner or work together? Reach
            out through the form and I'll get back to you in the next 48 hours.
          </p>
          <div className="contact-container">
            <div className="emailphone">
              <div className="icon-bg">
                <FiMail className="icon" />
              </div>
              <a href="mailto:mytokyowebdev@ernieryan.dev">
                mytokyowebdev@ernieryan.dev
              </a>
            </div>
            <div className="emailphone">
              <div className="icon-bg">
                <BsTelephone className="icon" />
              </div>
              <a href="tel:08075750507">+81 80-7575-0507</a>
            </div>
          </div>
        </div>

        <div className="form-container">
          <form action="https://submit-form.com/slwDqCJ6" className="form">
            <h3>FILL THE FORM BELOW*</h3>
            <input
              className="styling"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required=""
            />
            <input
              className="styling"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required=""
            />
            <textarea
              className="styling"
              cols="40"
              rows="7"
              id="message"
              name="message"
              placeholder="Type your message"
              required=""
            ></textarea>
            <div className="btn-container">
              <button type="submit" className="btn" href="#">
                Submit Now
              </button>
              <div className="icon-bg">
                <HiOutlineArrowRight className="arrow" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  background-color: black;
  color: white;
  padding: 4rem 2rem;
  .text-gradient {
    background: linear-gradient(to right, #bd10c3, #cd1590, #d2177e, #eb9fed);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .container {
    .text-container {
      h1 {
        font-size: 4rem;
        font-weight: 500;
        line-height: 1.1;
        margin-bottom: 3rem;
      }
      p {
        color: var(--clr-grey-9);
        font-size: 1.8rem;
        margin-bottom: 3rem;
      }
      .contact-container {
        margin-bottom: 7rem;
        position: relative;
        /* &::before {
          content: "";
          top: -7.5rem;
          opacity: 0.3;
          width: 100%;
          height: 1px;
          background-color: white;
          position: absolute;
        } */
        .emailphone {
          display: flex;
          align-items: center;
          position: relative;
          margin-bottom: 3rem;

          a {
            font-size: 1.6rem;
            font-weight: 400;
            border-radius: 50rem;
            color: white;
            padding-left: 4.5rem;
          }
          .icon-bg {
            /* border-radius: 50%; */
            padding: 1rem;
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;
            position: absolute;
            left: 0;
            .icon {
              color: white;
              width: 2rem;
              height: 2rem;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
      }
    }

    .form-container {
      background-color: #1f1f1f;
      border-radius: 2px;

      h3 {
        font-weight: 500;
        font-size: 1.6rem;
      }
      .form {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        .styling {
          border-radius: 2px;
          padding: 1rem;
          border: 2px solid;
          background-color: black;
          color: white;
          outline: 0;
        }
        .btn-container {
          display: flex;
          align-items: center;
          position: relative;
          margin: 0 auto;
          padding-bottom: 3rem;

          button {
            background: linear-gradient(
              to right,
              #bd10c3,
              #cd1590,
              #d2177e,
              #eb9fed
            );
            color: white;
            border-radius: 50rem;
            padding: 1.5rem 13rem 1.5rem 7rem;
            font-size: 1.8rem;
            font-weight: 400;
            border: none;
            cursor: pointer;
          }
          .icon-bg {
            background-color: white;
            padding: 1rem;
            width: 4.5rem;
            height: 4.5rem;
            border-radius: 50%;
            position: absolute;
            right: 0.3rem;
            .arrow {
              width: 2rem;
              height: 2rem;
              color: black;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
      }
    }
  }

  @media (min-width: 1164px) {
    padding: 4rem 5rem;

    .container {
      display: flex;
      /* gap: 3rem; */
      justify-content: space-evenly;
      .text-container {
        width: 50%;
        h1 {
          font-size: 6rem;
        }
      }
      .form-container {
        width: 40%;
        height: 100%;
      }
    }
  }

  @media (min-width: 1440px) {
    padding: 4rem 9rem;

    .container {
      display: flex;
      /* gap: 3rem; */
      justify-content: space-evenly;
      .text-container {
        width: 45%;
        h1 {
          font-size: 6rem;
        }
        p {
          max-width: 80%;
        }
      }
      .form-container {
        width: 35%;
      }
    }
  }
  @media (min-width: 1920px) {
    padding-inline: 25rem;
    .container {
      .text-container {
        h1 {
          font-size: 6.5rem;
        }
        p {
          max-width: 70%;
        }
      }
      .form-container {
      }
    }
  }
`

export default ContactPage

//  <Wrapper>
//       <section className="container">
//         {/* <h2>Contact</h2> */}
//         <div className="title">
//           <h1 className="header">get in touch</h1>
//         </div>
//         <div className="content">
//           <p className="info">
//             What is your challenge? I can help you with your website front-end
//             development needs and make it fully responsive for web and mobile!
//           </p>
//         </div>
//         <div className="socials">
//           <a href="mailto:ryanesmores07@gmail.com">
//             <h3>ryanesmores07@gmail.com</h3>
//           </a>
//           <a href="tel:08075750507">
//             <h3 style={{ marginBottom: "6rem" }}>+81 80-7575-0507</h3>
//           </a>
//           {socials.map((social, index) => {
//             return (
//               <div className="social-container">
//                 <a href={social.url} className="flex-container">
//                   <div className="social-text">{social.text}</div>
//                   <CgArrowsExpandUpRight className="arrow-icon" />
//                 </a>

//                 <div className="line"></div>
//               </div>
//             )
//           })}
//         </div>
//       </section>
//     </Wrapper>
// const Wrapper = styled.header`
//   width: 100%;

//   .container {
//     margin: 0 auto;
//     max-width: 80%;
//     /* padding: 0rem rem; */

//     .header {
//       animation: top-to-bottom calc(var(--transition-duration) + 400ms) ease-out
//         forwards;
//     }

//     .info {
//       animation: right-to-left calc(var(--transition-duration) + 400ms) ease-out
//         forwards;
//     }

//     h1 {
//       font-size: 5.5rem;
//       font-weight: 300;
//       letter-spacing: -2px;
//       margin-bottom: 10rem;
//     }

//     h2 {
//       font-weight: 200;
//       font-size: 1.7rem;
//     }

//     a,
//     h3 {
//       font-weight: 400;
//       font-size: 2rem;
//       color: var(--clr-black);
//       margin-bottom: 2rem;
//       font-family: var(--ff-primary);
//     }

//     a {
//       /* font-style: var(--ff-primary); */
//       font-weight: 200;
//     }

//     p {
//       font-size: 2rem;
//       margin-bottom: 10rem;
//     }

//     .social-container {
//       .flex-container {
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         margin: 0;

//         .social-text {
//           margin: 0 1rem;
//         }

//         .arrow-icon {
//           font-size: 2rem;
//           margin-right: 1rem;
//         }
//       }

//       .flex-container:hover,
//       .flex-container:focus {
//         .social-text {
//           transform: translateX(0.3rem);
//           transition: all 0.1s linear;
//           color: steelblue;
//         }
//       }

//       .line {
//         height: 0.1rem;
//         width: 100%;
//         background: var(--clr-black);
//         opacity: 0.2;
//         margin: 0.7rem 0;
//       }
//     }

//     @media (min-width: 450px) {
//       h1 {
//         font-size: 7rem;
//       }
//     }

//     @media (min-width: 768px) {
//       h1 {
//         font-size: 13rem;
//       }

//       p {
//         max-width: 46ch;
//       }
//     }

//     @media (min-width: 1170px) {
//       max-width: 95%;
//       h1 {
//         font-size: 17rem;
//       }

//       p {
//         margin: 0 auto;
//         /* width: 80%; */
//         max-width: 75ch;
//         padding: 0rem 8rem;
//         margin-bottom: 10rem;
//         font-size: 2.5rem;
//       }

//       .socials {
//         h3 {
//           font-size: 4rem;
//         }
//       }

//       .social-container {
//         a {
//           font-size: 2.5rem;
//         }
//       }
//     }
//   }
// `
