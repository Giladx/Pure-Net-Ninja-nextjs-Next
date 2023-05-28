import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Pure Net Ninja nextjs</title>
          <meta name="description" content="We Are Net Ninja" />
          <meta property="og:title" content="Pure Net Ninja nextjs" />
          <meta property="og:description" content="We Are Net Ninja" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/94ade6ce-c2fb-468a-af3f-8112894a5340/03b8584b-375b-4886-9640-29b0a9cfe2d1?org_if_sml=1&amp;q=80"
          />
        </Head>
        <div className="home-full-page">
          <img alt="image" src="/untitled-300h.webp" className="home-image" />
          <div className="home-container1">
            <img
              alt="image"
              src="/name%20logo-200h.png"
              className="home-image1"
            />
          </div>
          <span className="home-text">
            &quot;Achieve wonderful success with our technical service!&quot;
          </span>
          <div className="home-container2">
            <div className="home-div">
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_bt7iqzns.json"
                loop
                speed="2"
                autoplay
                background="transparent"
              ></lottie-player>
            </div>
            <div className="home-container3">
              <a href="tel:0525983311" className="home-link">
                <span>
                  Tel:                             
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text2">0525983311</span>
              </a>
              <a
                href="https://alexypv@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <span>eMail:           </span>
                <span className="home-text4">alexypv@gmail.com</span>
              </a>
              <a
                href="https://wa.link/tlx6wc"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <span>WhatsAp</span>
                <span>p:               </span>
                <span className="home-text7">Click To Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-full-page {
            width: 100%;
            height: 100vh;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-black);
          }
          .home-image {
            width: auto;
            height: 250px;
            object-fit: cover;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-image1 {
            width: 200px;
            object-fit: cover;
          }
          .home-text {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-div {
            width: 300px;
            height: 300px;
          }
          .home-container3 {
            flex: 0 0 auto;
            width: auto;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-link {
            color: var(--dl-color-gray-white);
            width: 100%;
            align-self: flex-start;
            text-decoration: none;
          }
          .home-text2 {
            font-weight: 700;
          }
          .home-link1 {
            color: var(--dl-color-gray-white);
            width: 100%;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text4 {
            font-weight: 700;
          }
          .home-link2 {
            color: var(--dl-color-gray-white);
            width: 100%;
            align-self: flex-start;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text7 {
            font-weight: 700;
          }
          @media (max-width: 1600px) {
            .home-container {
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .home-full-page {
              height: 100vh;
            }
            .home-image {
              width: auto;
              height: 282px;
              margin-bottom: 10px;
            }
            .home-div {
              width: 295px;
              height: 247px;
            }
          }
          @media (max-width: 1200px) {
            .home-image {
              width: auto;
            }
            .home-text {
              color: var(--dl-color-gray-white);
            }
          }
          @media (max-width: 767px) {
            .home-text {
              color: var(--dl-color-gray-white);
            }
          }
          @media (max-width: 479px) {
            .home-full-page {
              height: auto;
              padding: var(--dl-space-space-unit);
            }
            .home-image {
              width: auto;
              height: 200px;
              margin-bottom: 0px;
            }
            .home-container1 {
              height: auto;
              flex-direction: column;
            }
            .home-image1 {
              height: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text {
              color: var(--dl-color-gray-white);
              align-self: center;
              font-family: Cabin;
            }
            .home-container2 {
              width: 100%;
              height: auto;
              align-self: center;
              align-items: center;
              flex-direction: column;
            }
            .home-div {
              width: 100%;
            }
            .home-container3 {
              width: auto;
              height: 170px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
