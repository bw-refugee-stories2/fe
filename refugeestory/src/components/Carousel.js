import React, { useState, useContext } from 'react';
import {Link} from "react-router-dom";
import {StoriesContext} from "../contexts/StoriesContext";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';



/*
 * DUMMY DATA
const items = [
  {
    src: 'https://www.globalgiving.org/learn/wp-content/uploads/2017/06/01-Alia-Gruppo-Aleimar.jpg',
    altText: 'Refugees on a Beach',
    title: 'Alia',
    caption: 'Alia fled her home in Aleppo, Syria and is currently living in Damour, Lebanon. Alia is 7 years old.'
  },
  {
    src: 'https://www.globalgiving.org/learn/wp-content/uploads/2017/06/05-Achan-Hope-Ofiriha.jpg',
    altText: 'Slide 2',
    title: 'Achan',
    caption: 'Achan fled her home in Pajok, South Sudan and is currently living in a refugee camp in Lamwo District, Uganda.'
  },
  {
    src: 'https://www.globalgiving.org/learn/wp-content/uploads/2017/06/04-Sabri-Emfasis-remember-to-add-credit-back-in-since-i-cropped-it-out-of-photo.jpg',
    altText: 'Slide 3',
    title: 'Sabri',
    caption: 'Sabri fled his home in Aleppo, Syria and is currently living in Paiania, Greece. Sabri is 16 years old.'
  }
];
*/

const HomeCarousel = (props) => {
    const myData = useContext(StoriesContext)
    console.log(myData);


    const myItems = myData.slice(myData.length - 3,myData.length);
    console.log(myItems);

    const items = [];
    myItems.forEach(item => {
        items.push({id: item.id, src: item.image_URL, title: item.name, caption: item.quote})
    })


  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <Link to={{
            pathname: `/stories/${item.id}`,
            state: {singleStory: myItems.filter(element => (
                element.id === item.id
            ))
            }
        }}><CarouselCaption captionText={item.caption} captionHeader={item.title} /></Link>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default HomeCarousel;
