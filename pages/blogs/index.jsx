import Image from 'next/image'
import imgs from '../../assets/constants/imgs'
import Link from 'next/link'

const Blogs = () => {
  const { post0,
    post1,
    post2,
    post3,
    post4,
    post5,
  } = imgs
  const posts = [
    { img: post0, title: 'It Was A Good Reason To Cancel My Hair Transplant!', desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery. It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery." },
    { img: post1, title: 'It Was A Good Reason To Cancel My Hair Transplant!', desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery. It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery." },
    { img: post2, title: 'It Was A Good Reason To Cancel My Hair Transplant!', desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery. It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery." },
    { img: post3, title: 'It Was A Good Reason To Cancel My Hair Transplant!', desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery. It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery." },
    { img: post4, title: 'It Was A Good Reason To Cancel My Hair Transplant!', desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery. It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery." },
    { img: post5, title: 'It Was A Good Reason To Cancel My Hair Transplant!', desc: "It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery. It’s Been 6 Months Since Freddy Had A Hair Transplant In Tijuana, Mexico. He's Giving Us An Update On What His Head Looks Like And How He Feels 6 Months After Surgery." },

  ]
  const tags = [
    { tag: 'Acibadem' },
    { tag: 'treatment' },
    { tag: 'treatment' },
    { tag: 'treatment' },
    { tag: 'treatment' },
    { tag: 'treatment' },
    { tag: 'treatment' },
    { tag: 'treatment' },
    { tag: 'treatment' },
    { tag: 'treatment' },
    { tag: 'treatment' },
    { tag: 'treatment' },
    { tag: 'treatment' },
  ]

  return (
    <>
      <div id='blogs'>
        <div className="header-container">
          <div className="container">
            <div className="text-container">
              <div className="guide">
                <h1 className='h4'>All blogs</h1>
              </div>

              <div className="title">
                <h2>All Of The Latest Medical Travel And Healthcare Developments In One Place.</h2>
              </div>

              <div className="review-by">
                <h3 className='h4'>
                  Reviewed by Safemedigo team, July 28, 2020
                </h3>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="tags-filter">
        <div className="container">
          <div className="title">
            <h4>All Tags</h4>
          </div>

          <div className="filter">
            <select name="" id="">
              <option value="">Acibadem Articles</option>
              <option value="">Acibadem Articles</option>
              <option value="">Acibadem Articles</option>
              <option value="">Acibadem Articles</option>
              <option value="">Acibadem Articles</option>
              <option value="">Acibadem Articles</option>
            </select>
          </div>

        </div>
      </div>


      <section id='blogs-sec'>
        <div className="container">
          <div className="title">
            <h6>
              Most Recent Posts
            </h6>
          </div>

          <div className="boxes-container">
            {posts.map((post, idx) => (
              <>
                <div className="box" key={idx}>
                  <div className="img-container">
                    <Image
                      src={post.img}
                      alt="Picture of the author"
                      width="width: 344px"
                      height="518px"
                    />
                  </div>
                  <div className="box-title">
                    <h5>{post.title}</h5>
                  </div>
                  <div className="desc">
                    <p>{post.desc}</p>
                  </div>
                  <div className="btns-container">
                    <div className="trans-btn">
                      <button>Hair transplant</button>
                    </div>
                    <div className="turk-btn">
                      <button>Turkey</button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      <section id='tags'>
        <div className="container">

          <div className="title">
            <h6>Popular Tags</h6>
          </div>

          <div className="tags-container">
            {tags.map((tag, idx) => (
              <>
                <div className='tag' key={idx}>
                  <Link href={tag.tag}>
                    <button>{tag.tag}</button>
                  </Link>
                </div>
              </>
            ))}
          </div>
        </div>

      </section>
    </>

  )
}

export default Blogs