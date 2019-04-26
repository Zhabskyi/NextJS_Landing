import React, { Component } from 'react';
import classes from './chartsSlider.scss';
import classnames from 'classnames';

import ChartsSlide from './chartsSlide/chartsSlide';
import SlideBubblesControls from '../sectionSlides/slideControls/slideBubblesControls/slideBubblesControls';
import SlideArrowsControls from '../sectionSlides/slideControls/slideArrowsControls/slideArrowsControls';
import { sliderHOC } from '../hoc/sliderHOC';




class ChartsSlider extends Component {

	componentDidMount() {
		console.log(`Active Index ${this.props.activeIndex}`);
		setInterval(this.props.onNext, 4000);
 }
	render() {
		const { activeIndex, slides, onNext, onPrev, onSetIndex } = this.props;
		return (
				<div className={classes.container}>
					<div className={classes.slides}>
						{slides.map(el => (
							<ChartsSlide
								isActive={el.index === activeIndex}
								imgSrc={el.imgSrc}
								key={el.id}
								index={el.index} />
						))}
						<div className={classes.arrows}>
							<SlideArrowsControls
							onClickPrev={onPrev}
							onClickNext={onNext} />
						</div>
						<div className={classes.bubbles}>
						{slides.map(el => (
							<SlideBubblesControls
								isActive={el.index === activeIndex}
								onClick={ () => onSetIndex(el.index)} />
						))}
						</div>
				</div>
				</div>
		)
	}
}

const Slider = sliderHOC(ChartsSlider);

export default Slider;

