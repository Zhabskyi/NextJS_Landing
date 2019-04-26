export function sliderHOC (SliderComponent) {
    return class extends React.PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                slides: [],
                activeIndex: 0
            }
        }
    
        componentWillReceiveProps(nextProps) {
            if (nextProps) {
                this.setState(state => ({ ...state, slides: nextProps.slides, activeIndex: nextProps.activeIndex }));
            }
        }
    
        componentWillMount() {
            this.setState(state => ({ ...state, slides: this.props.slides, activeIndex: this.state.activeIndex }));
        }
    
        nextProperty = () => {
            const newIndex = this.state.activeIndex + 1;
    
            if (newIndex < this.state.slides.length) {
                this.setState({
                    activeIndex: newIndex
                });
            } else {
                this.setState({
                    activeIndex: 0
                });
            }
        }
    
        prevProperty = () => {
            const newIndex = this.state.activeIndex - 1;
    
            if (newIndex >= 0) {
                this.setState({
                    activeIndex: newIndex
                });
            } else {
                this.setState({
                    activeIndex: this.state.slides.length - 1
                });
    
            }
        }
    
        setIndex = (index) => {
            this.setState({
                activeIndex: index
            })
				}

				

        render() {
						const { slides, activeIndex }= this.state;
            return <SliderComponent 
                slides={slides} 
                activeIndex={activeIndex} 
                onNext={this.nextProperty}
                onPrev={this.prevProperty}
								onSetIndex={this.setIndex}
                />
        }
    }
}