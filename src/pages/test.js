import React from "react";
import styled from "styled-components";
// import SEO from '../components/SEO';
import Img from "gatsby-image";

import BannerShot from "../assets/testBlogImages/BannerShot-hidden-valley.jpeg";
import ImageTwo from "../assets/testBlogImages/GoingUpHiddenValue.jpeg";
import ImageThree from "../assets/testBlogImages/ManHiddenValley.jpeg";
import ImageFour from "../assets/testBlogImages/Rifugio2HiddenValley.jpeg";
import ImageFive from "../assets/testBlogImages/TourersHiddenValley.jpeg";
// import ImageFive from "../assets/testBlogImages/TourersHiddenValley.jpeg";

const ArticleStyles = styled.div`
  /* border: solid red 1px; */
  font-family: "Crimson Text";
  font-size: 1.8rem;
  display: grid;
  max-width: 2000px;
  margin: 0 20px;
  grid-gap: 10px 10px;
  grid-template-columns: 2fr 2fr 10fr 2fr 2fr;
  h1,
  h2,
  h3,
  p {
    margin: 10px 0px;
  }
  > * {
    grid-column: 3;
  }
  .bannerImage {
    order: 3;
  }
  .sectionOneBlockQuote {
    order: 5;
  }
  > figure {
    margin: 0;
    grid-column: 2 / -2;
  }
  figcaption {
    font-size: 1.5rem;
  }

  > blockquote {
    grid-column: 1 / -1;
    font-size: 60px;
    font-style: italic;
    text-align: center;
    margin: 0;
    /* height: 100px; */
    p {
      margin: 20px 0px;
    }
  }

  .tip {
    padding: 10px;
    grid-row: span 5;
    align-self: start;
  }

  .tip-left {
    grid-column: 1 / span 2;
    text-align: right;
    /* border-right: 2px solid var(--red); */
  }

  .tip-right {
    grid-column: span 2 / -1;
    /* border-left: 2px solid var(--red); */
  }

  img {
    max-width: 100%;
    width: 100%;
    object-fit: contain;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 98%;
    max-width: 98%;
    margin: 10px 20px 50px 10px;
    gap: 0;
    .sectionOneContainer {
      display: flex;
    }

    > blockquote {
      font-size: 40px;
    }
    h2 {
      text-align: center;
    }
  }
`;

export default function BlogPage({ data }) {
  const blog = data.blogs.nodes[0];
  console.log(blog);
  const sectionParagraphs = blog.sectionOneText.split("+/+");
  //   const blockQuoteOne = blog.s

  return (
    <>
      {/* <SEO title='Important Info' /> */}
      <ArticleStyles className="post" id="beginning">
        <h1>{blog.name}</h1>
        <h3>{blog.sectionOneTitle}</h3>
        <div className="sectionOneContainer">
          {sectionParagraphs.map((paragraph, index) => {
            return (
              <p key={index} order={index === 0 ? index + 2 : index * 2}>
                {paragraph}
                {index}
              </p>
            );
          })}
          <div className="bannerImage">
            <figure>
              <img src={BannerShot} alt="wide angle" />
              <figcaption>Super Nice Photo</figcaption>
            </figure>
          </div>
          <div className="sectionOneBlockQuote">
            <blockquote>
              {blog.Blockquotes && <p>"{blog.Blockquotes[0]}"</p>}
            </blockquote>
          </div>
        </div>

        <h3>Off I Go</h3>
        <p>
          On Tuesday I drove to the car park. No point in expending energy
          getting to the start point; is that bad? There was only one other
          person in the car park, an oldish man (Old Dude henceforth) who I
          estimated to be about 70. Somewhat unnervingly, he looked like he was
          equipped to trek to the South Pole. I had a backpack with two Kit
          Kats, some water and three cameras. I’m all about the pictures, less
          about the basic survival. 70 year old dude asked me if the Rifugio
          Micheluzzi was open. I replied, in my best Italian, that I did not
          know. Somehow, he immediately seemed to realise I was English and gave
          me a look that gave the impression he suspected I would be unlikely to
          survive beyond the next 6 hours! However, as my friend Hayley oft
          points out I have worked as a walking guide. I know how to walk – sort
          of!
        </p>
        <div className="tip tip-right">
          <img src={ImageTwo}></img>
          <figcaption>Pathway on way up!</figcaption>
        </div>
        <p>
          Old dude toddled off up the very snowy road. Having donned my gloves I
          set off after him. This was such a magical experience, with the snow
          heaped up on the boughs of the pines. A veritable winter wonderland!
        </p>
        <p>
          Not wishing to blow my own trumpet but I do keep myself in relatively
          good shape (a kind of regular oval shape). I soon overtook old dude.
          In fact this was just before the road got super steep. The sort of
          steep that if you fell over you wouldn’t be getting back up again
          until you’d slid to the bottom. Now I have my pride and having just
          overtaken old dude I could not slow down going up this slope as his
          steady pace would have reeled me in – there was very much a
          tortoise/hare metaphor at work here! Fortunately, this steep slope
          gave way to a shallower incline in relatively short measure. So my
          bursting lungs could recover in the knowledge that I had beaten the
          pensioner. This story had not been fully told though!
        </p>
        <p>
          Soon after this I also set eyes upon two ski tourers up ahead, who I
          promptly overtook. Although, in the back of my mind I knew that if
          they were going up and coming back their return journey would bemuch
          more enjoyable than mine.
        </p>

        <blockquote>
          <p>"This was such a magical experience."</p>
        </blockquote>
        <p>
          The next hour or so saw me trekking up various degrees of incline
          following the road. There were off shoots which followed a proper
          walking trail but they were so deep in snow that I thought it best to
          stick to the road. This was no hardship as the winding route was
          continuing through this fantastic winter scenery. What came next was a
          landscape surprise.
        </p>
        <h3>The Top</h3>

        <p>
          At the top of the road I emerged onto a wondrous sight. Val Duron is a
          big flat plateau, covered in a blanket of snow, stretching into the
          distance to where some mountains arise. I stopped to take in the
          magnificent vista but then realised that I was a mere literal
          snowball’s throw from the very open Rifugio Micheluzzi. The vista
          wasn’t going anywhere and it’s majesty was outweighed by the thought
          of a milky coffee.
        </p>
        <div className="tip tip-left">
          <img src={ImageThree}></img>
          <figcaption>Pathway on way up!</figcaption>
        </div>

        <p>
          Perhaps unsurprisingly, apart from the owner, I was the only person in
          the rifugio. Despite my impeccable Italian he seemed to realise I was
          English and appeared mildly surprised I was there. But I guess he was
          happy with any business he could get in these times. Val Duron would
          normally be a haven for tourers, snowshoers and hikers but travel
          restrictions in Italy mean you can’t travel between the various
          states.
        </p>
        <p>
          Having finished my coffee I wrapped up and set off again. I was aiming
          for the mountains but not really sure how far I would get before I was
          forced to retreat. My short break had also given the ski tourers and
          the old dude time to overtake me – but not by much. So I set off with
          new vigour to hunt them all down.
        </p>
        <p>
          At this point I was still on the snowy road, although the road was
          getting narrower and the snow was getting deeper. I took out old dude
          relatively quickly. He stopped to take photos with his phone. Although
          I suspect that this was a ruse to hide his humiliation at being
          overtaken again. I made sure I had my ‘proper’ camera out as I
          nonchalantly bounced passed him and then stopped a little further on,
          went down on one knee and took a ‘proper’ photograph. I got a wet
          knee.
        </p>
        <p>
          The road then became just a solo track pockmarked with footprints and
          ski imprints. It was here that I overtook the ski tourers, who had
          decided to turn round. I was indeed envious of the their skiing route
          down.
        </p>

        <p>
          Whilst I was nearing the mountains the snow was becoming increasingly
          deep. I wanted to go on but I knew I wasn’t really equipped for this
          level of hike. The fact that the ski tourers had given up was probably
          the impetus I needed. I consoled myself by taking some more pictures
          before doing something every hiker hates, backtracking.
        </p>
        <p>
          The humiliator also became the humiliated as I crossed paths with the
          old dude. He smiled. He was happy in his ignorance of our competition,
          or so I thought. Old dude hiked on about 50m past where I had turned
          tail and then started walking back himself. Goddammit, he had beaten
          me.
        </p>
        <div className="tip tip-right">
          <img src={ImageFour}></img>
          <figcaption>Pathway on way up!</figcaption>
        </div>
        <h3>Going Down</h3>
        <p>
          The way back was mostly easy as it was pretty much all downhill. I did
          reward myself with another stop at one of the other rifugios. It was
          guarded by two friendly Alsatians who playfully chased me around,
          exuberantly baring their teeth, before the owner called them off and
          apologised. In a surprised tone she asked me if I was on holiday and
          was even more surprised when I told her I had been working in Val di
          Fassa. You have to feel for these people and admire the fact that they
          were staying open for such little business. I really hope things
          return to some form of normality in the summer when I assume they do
          the majority of their trade.
        </p>
        <p>
          The only real difficulty I encountered going down, apart from the
          terrifying dogs, was the really steep hill which I encountered at the
          very beginning of my trek. Fortunately, my walking boots have great
          grip but I still needed to zigzag a little to get down safely. I’d
          probably recommend taking walking poles to anyone doing this hike.
        </p>
        <div>
          <img src={ImageFive}></img>
          <figcaption>Pathway on way up!</figcaption>
        </div>
        <p>
          It only took me about 4.5 hours to get up and down, including the two
          short stops. I do walk quickly but I also stop to take a lot of
          photos. I also backtrack frequently if I think I’ve missed an
          opportunity for a nice photograph. This is one of the reasons I quite
          enjoy hiking solo as I don’t want to spoil anyone else’s enjoyment.
          Also, I tend to get the best of the environment. My interest in
          photography has developed in the last few years this definitely makes
          me look at my surroundings with newfound depth.
        </p>
        <p>
          Back at the car park my final thoughts were that I would love to come
          back here in the summer. The walk would be easier and you could also
          complete a circular route that would take you back into Canazei.
          Overall though a great hike and my only real regret was that I hadn’t
          known about it earlier.
        </p>
      </ArticleStyles>
    </>
  );
}

export const query = graphql`
  query BlogQueryTest {
    blogs: allSanityBlogs {
      nodes {
        name
        Blockquotes
        sectionOneText
        sectionOneTitle
      }
    }
  }
`;
