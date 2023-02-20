import Link from 'next/link'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Image from 'next/image'
import imgs from '../../assets/constants/imgs'

const Navbar = () => {
  const navbarLinks = [
    { title: 'Procedures', link: '/' },
    { title: 'How It Works', link: '/' },
    { title: 'Reviews & Photos', link: '/' },
    { title: 'Prices', link: '/' },
    { title: 'Blogs', link: '/blogs' },
    { title: 'About Us ', link: '/' },
  ]

  const { logo, en, arrowDown, user, search } = imgs

  return (
    <>
      <nav id="navbar" className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <div className="logo ">
            <Link href="/">
              <Image
                src={logo}
                alt="Picture of the author"
                width="51.34px"
                height="45px"
              />
              <div className="logo__title">
                <h1>Safemedigo</h1>
              </div>
            </Link>
          </div>

          <button
            className="burger-btn navbar-toggler text-secondary "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main"
            aria-controls="main"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <GiHamburgerMenu />
          </button>

          <div className="collapse navbar-collapse " id="main">
            <div className="links-container">

              <div className="links ">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {navbarLinks.map((link, index) => (
                    <li key={index} className={`nav-item `}>
                      <Link href={`${link.link}`}>{link.title}</Link>
                    </li>
                  ))}
                </ul>

              </div>

              <div className="auth-methods d-flex align-items-center justify-content-between " >
                <div className="lang">
                  <div className="img-container">
                    <Image
                      src={en}
                      alt="Picture of the author"
                      width="20.7px"
                      height="12.88px"
                    />

                  </div>

                  <div className="lang-type"><span>EN</span></div>

                  <div className="icon-container">
                    <Image
                      src={arrowDown}
                      alt="Picture of the author"
                      width="14.84px"
                      height="8.49px"
                    />
                  </div>
                </div>

                <div className="search-btn">
                  <Link href="/">
                    <div className="icon-container">
                      <Image
                        src={search}
                        alt="Picture of the author"
                        width="18.89px"
                        height="19px"
                      />
                    </div>
                    <button>
                      Search
                    </button>
                  </Link>
                </div>

                <div className="login-btn">
                  <Link href="/login">
                    <div className="icon-container">
                      <Image
                        src={user}
                        alt="Picture of the author"
                        width="18.13px"
                        height="19.5px"
                      />
                    </div>
                    <button>
                      Sign In
                    </button>
                  </Link>
                </div>






              </div>
            </div>
          </div>


        </div>
      </nav>
      <nav id='sec-nav'>
        <div className="container">
          <h2 className='h6'>
            home / Blogs
          </h2>
        </div>
      </nav>
    </>

  )
}

export default Navbar