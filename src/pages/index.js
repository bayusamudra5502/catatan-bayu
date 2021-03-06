import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Catatan Bayu`
  const siteDescription = data.site.siteMetadata?.description || "Ini adalah catatan bayu"
  const posts = data.allMdx.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          Belum ada postingan disini... Coba cek lagi besok yaa..
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location}>
      <Seo title="All posts" />

      <div className="jumbotron">
        <p className="book">
          📖
        </p>
        <h1>{siteTitle}</h1>
        <p className="description">
          {siteDescription} Semoga bermanfaat 😀.
        </p>
      </div>

      <ol className="article-list">
        {posts.map(post => {
          const title = post.frontmatter.title || post.slug

          return (
            <li key={post.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>
                    {new Intl.DateTimeFormat("id", { dateStyle: "long" }).format(new Date(post.frontmatter.date))}
                  </small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 20
      filter: {frontmatter: {draft: {eq: false}}}
    ) {
      nodes {
        excerpt
        slug
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
