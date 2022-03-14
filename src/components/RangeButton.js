import React, {Component} from 'react';

class RangeButton extends Component {
    render() {
        let active_class
        if (this.props.is_active === true) {
            active_class = 'active'
        } else {
            active_class = 'inactive'
        }
        return (
            <div key={this.props.range}
                 onClick={() => this.props.toggleRange(this.props.range)}
                 className={"noteButton " + active_class}>
                {this.props.range[this.props.range.length - 1]}
            </div>
        );
    }
}

export default RangeButton;