import React, { Component } from 'react';
import classes from './chartsSlider.scss';
import classnames from 'classnames';

import Slide from '../sectionSlides/slide/slide';
import SlideBubblesControls from '../sectionSlides/slideControls/slideBubblesControls/slideBubblesControls';
import SlideArrowsControls from '../sectionSlides/slideControls/slideArrowsControls/slideArrowsControls';
import { sliderHOC } from '../hoc/sliderHOC';




class ChartsSlider extends Component {

	componentDidMount() {
    console.log(`Active Index ${this.props.activeIndex}`);
 }
	render() {
		const { activeIndex, slides, onNext, onPrev, onSetIndex } = this.props;
		return (
			<section className={classes.customerSecion}>
				<div className={classes.container}>
					<div className={classes.container__left}>
						<Quotes color='lightGreen' size='big' />
					</div>
					<div className={classes.container__right}>
						<SlideArrowsControls
							onClickPrev={onPrev}
							onClickNext={onNext} />
					</div>
					<div className={classnames(classes.slider, classes[`active_slide_${activeIndex}`])}>
						<div className={classes.slider_wrapper} style={{
							'transform': `translateX(-${activeIndex * (100 / slides.length)}%)`
						}}>
							{slides.map(el => (
								<Slide
									isActive={el.index === activeIndex}
									key={el.id}
									index={el.index}
									comment={el.comment}
									name={el.name}
									company={el.company} />
							))}
						</div>
					</div>
					<div className={classes.bubbles}>
						{slides.map(el => (
							<SlideBubblesControls
								isActive={el.index === activeIndex}
								onClick={ () => onSetIndex(el.index)} />
						))}
					</div>
				</div>
			</section>
		)
	}
}

const Slider = sliderHOC(ChartsSlider);

export default Slider;

