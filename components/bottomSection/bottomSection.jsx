import React, { Component } from 'react';
import classes from './bottomSection.scss';
import classnames from 'classnames';

import Quotes from '../quotes/quotes';
import Slide from '../sectionSlides/slide/slide';
import SlideBubblesControls from '../sectionSlides/slideControls/slideBubblesControls/slideBubblesControls';
import SlideArrowsControls from '../sectionSlides/slideControls/slideArrowsControls/slideArrowsControls';
import { sliderHOC } from '../hoc/sliderHOC';


//After refactoring



class BottomSection extends Component {

	componentDidMount() {
    console.log(`Active Index ${this.props.activeIndex}`);
 }
	render() {
		const { activeIndex, slides, onNext, onPrev, onSetIndex } = this.props;
		return (
			<section className={classes.customerSecion} onClickCapture={() => console.log('CLICK  CAPTURED')}>
				<div className={classes.container} id="Testimonials">
					<div className={classes.container__left}>
						<Quotes color='lightGreen' size='big' />
					</div>
					<div className={classes.container__right} onClick={() => console.log('CLICK BUBLING 2')}>
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

const Slider = sliderHOC(BottomSection);

export default Slider;

// USE TO BE

// class BottomSection extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			properties: data.properties,
//       property: data.properties[0]
// 		}
// 	}

// 	nextProperty = () => {
//     const newIndex = this.state.property.index+1;
   
// 		if ( newIndex >= this.state.properties.length) {
// 			this.setState({
// 				property: data.properties[0]
// 			})
// 		} else {
// 			this.setState({
// 				property: data.properties[newIndex]
// 			});
// 		}
//   }

//   prevProperty = () => {
// 		const newIndex = this.state.property.index-1;
		
// 		if ( newIndex < 0) {
// 			this.setState({
// 				property: data.properties[this.state.properties.length - 1]
// 			});
// 		} else {
// 			this.setState({
// 				property: data.properties[newIndex]
// 			});
// 		}
// 	}
	
// 	bubbleClickHandler = (index) => {
// 		this.setState({
// 			property: data.properties[index]
// 		})
// 	}

// 	render() {


// 		return (
// 			<section className={classes.customerSecion}>
// 				<div className={classes.container}>
// 					<div className={classes.container__left}>
// 						<Quotes color='lightGreen' size='big'/>
// 					</div>
// 					<div className={classes.container__right}>
// 						<SlideArrowsControls
// 							onClickPrev={this.prevProperty}
// 							onClickNext={this.nextProperty}/>
// 					</div>
// 							<div className={classnames(classes.slider, classes[`active_slide_${this.state.property.index}`])}>
// 								<div className={classes.slider_wrapper} style={{
// 												'transform': `translateX(-${this.state.property.index*(100/this.state.properties.length)}%)`
// 											}}>
// 									{this.state.properties.map(el => (
// 													<Slide
// 														active={this.state.property.index}
// 														quotesColor='white'
// 														key={el.id}
// 														index={el.index}
// 														comment={el.comment} 
// 														name={el.name}
// 														company={el.company} />
// 												))}
// 								</div>
// 						</div>
// 					<SlideBubblesControls
// 						active={this.state.property.index}
// 						bubbleClick={this.bubbleClickHandler}/>
// 			</div>
// 		</section>
// 		)
// 	}
// }

// export default BottomSection;
