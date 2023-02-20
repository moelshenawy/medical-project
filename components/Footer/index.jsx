import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imgs from '../../assets/constants/imgs'


const Footer = () => {
  const { logoFooter,
    facebook,
    instagram,
    youtube,
    twitter
  } = imgs

  const socialLinks = [
    { link: '/twitter', img: twitter },
    { link: '/facebook', img: facebook },
    { link: '/instagram', img: instagram },
    { link: '/youtube', img: youtube },
  ]

  const contactLinks = [
    { title: 'Contact Us', link0: 'Lorem Ipsum', link1: 'Dolor Sit', link2: 'Amet,', link3: 'Conseteur', link4: 'Sadipscing', link5: 'Elitr, Sed', link6: 'Diam', link7: 'Nonumy', },
    { title: 'Contact Us', link0: 'Lorem Ipsum', link1: 'Dolor Sit', link2: 'Amet,', link3: 'Conseteur', link4: 'Sadipscing', link5: 'Elitr, Sed', link6: 'Diam', link7: 'Nonumy', },
    { title: 'Contact Us', link0: 'Lorem Ipsum', link1: 'Dolor Sit', link2: 'Amet,', link3: 'Conseteur', link4: 'Sadipscing', link5: 'Elitr, Sed', link6: 'Diam', link7: 'Nonumy', },
    { title: 'Contact Us', link0: 'Lorem Ipsum', link1: 'Dolor Sit', link2: 'Amet,', link3: 'Conseteur', link4: 'Sadipscing', link5: 'Elitr, Sed', link6: 'Diam', link7: 'Nonumy', },
    { title: 'Contact Us', link0: 'Lorem Ipsum', link1: 'Dolor Sit', link2: 'Amet,', link3: 'Conseteur', link4: 'Sadipscing', link5: 'Elitr, Sed', link6: 'Diam', link7: 'Nonumy', },
  ]
  return (
    <footer>
      <div className="container">
        <div className="logo-footer">
          <Link href='/'>
            <Image
              src={logoFooter}
              alt="Safemedigo"
              width="58.3px"
              height="50.18px"
            />
            <h4 className='h6'>Safemedigo</h4>
          </Link>
        </div>

        <section className="info-section">
          <div className="links-container">
            <div className="boxes">
              {contactLinks.map((contactLink, idx) => (
                <>
                  <div className='box' key={idx}>
                    <div className="box-title">
                      <h1 className='h6'>{contactLink.title}</h1>
                    </div>

                    <div className="box-link">
                      <ul>
                        <li>
                          <Link href={contactLink.link0}>

                            {contactLink.link0}
                          </Link>

                        </li>
                        <li>
                          <Link href={contactLink.link0}>

                            {contactLink.link1}
                          </Link>

                        </li>
                        <li>
                          <Link href={contactLink.link0}>

                            {contactLink.link2}
                          </Link>

                        </li>
                        <li>
                          <Link href={contactLink.link0}>

                            {contactLink.link3}
                          </Link>

                        </li>
                        <li>
                          <Link href={contactLink.link0}>

                            {contactLink.link4}
                          </Link>

                        </li>
                        <li>
                          <Link href={contactLink.link0}>

                            {contactLink.link5}
                          </Link>

                        </li>
                        <li>
                          <Link href={contactLink.link0}>

                            {contactLink.link6}
                          </Link>

                        </li>
                        <li>
                          <Link href={contactLink.link0}>

                            {contactLink.link7}
                          </Link>

                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="form-container">
            <div className="title">
              <h6>Subscribe to Our Newsletter</h6>
            </div>
            <form action="">
              <input type="email" placeholder='Email@test.com' />
              <button type='submit'>Send</button>
            </form>
          </div>
        </section>

        <hr />

        <section className="about-section">
          <div className="about-us">
            <h5 className="h6">
              Medical Travel Specialist <br />
              Certified Online Security
            </h5>
          </div>

          <div className="social-links">
            {socialLinks.map((link, idx) => (
              <>
                <div className='link' key={idx}>
                  <Link href={link.link}>
                    <Image
                      src={link.img}
                      alt={link.link}
                      width="28.79px"
                      height="23.38px"
                    />
                  </Link>
                </div>
              </>
            ))}
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer