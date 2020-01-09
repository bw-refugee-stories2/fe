import React from "react";
// Components
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
//Utils
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// Actions
import { setIndex, setAnimating } from "../actions/actions";

const HomeCarousel = props => {
  const data = props.myData;
  const index = props.index;
  const animating = props.animating;

  const setIndex = props.setIndex;
  const setAnimating = props.setAnimating;

  const myItems = !data
    ? []
    : !data.length <= 3
    ? data.slice(0, 3)
    : data.slice(0, data.length);

  const items = myItems.map(item => ({
    id: item.id,
    src: item.image_URL,
    title: item.name,
    caption: item.quote
  }));

  const toggle = direction => {
    if (animating) return;
    if (direction === "next") {
      setIndex(index === items.length - 1 ? 0 : index + 1);
    }
    if (direction === "previous") {
      setIndex(index === 0 ? items.length - 1 : index - 1);
    }
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <Link
          to={{
            pathname: `/stories/${item.id}`,
            state: {
              singleStory: myItems.filter(element => element.id === item.id)
            }
          }}
        >
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.title}
          />
        </Link>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={index}
      next={e => toggle("next")}
      previous={e => toggle("previous")}
    >
      <CarouselIndicators
        items={items}
        activeIndex={index}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={e => toggle("previous")}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={e => toggle("next")}
      />
    </Carousel>
  );
};

const mapStateToProps = state => {
  return {
    index: state.index,
    animating: state.animating
  };
};

export default connect(mapStateToProps, {
  setIndex,
  setAnimating
})(HomeCarousel);
