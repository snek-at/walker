import * as React from "react"
import {fields} from "@snek-at/jaen-cms"
import TestBlock from "../blocks/TestBlock"
import AirbnbBlock from "../blocks/AirbmbBlock"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <div style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </div>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>
        {links.map((link, index) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}

              {/* <p style={descriptionStyle}>{link.description}</p> */}
              <div style={descriptionStyle}>
              {/* <fields.TextField fieldName={`linkfield${index}`} initValue={link.description}/> */}
                </div>

            </span>
          </li>
        ))}
      </ul>
      <fields.StreamField fieldName="streamfield1" initValue={{
        0: {
          typeName: "TestBlock",
          fields: {
            body: {
              _type: "TextBlock",
              text: "<p>This should resolve the window is not defined error and you should be able to build your code successfully. If you need more information regarding this, check the Gatsby documentation on Debugging HTML Builds.</p>"
            },
            body2: {
              _type: "TextBlock",
              text: "<p>02</p>"
            }
          }
        },
        1: {
          typeName: "TestBlock",
          fields: {
            body: {
              _type: "TextBlock",
              text: "<p>11</p>"
            },
            body2: {
              _type: "TextBlock",
              text: "<p>12</p>"
            }
          }
        }
      }} blocks={[TestBlock, AirbnbBlock]}/>

      

      {/* <fields.TextField fieldName="testfield" initValue={'<ul><li>4242424424243423</li></ul><figure class="media"><div data-oembed-url="https://www.youtube.com/watch?v=00cizszd4z0"><div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"><iframe src="https://www.youtube.com/embed/00cizszd4z0" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe></div></div></figure>'}/> */}
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage
