import React, { Component } from 'react'

//Function to show difference between current date and input date
class DateDetail extends Component {
    date_diff_indays = (date1) => {
        let dt1 = new Date(date1);
        return Math.floor((Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
    }
    render() {
        return (
            <div className="d_inline">
                {this.date_diff_indays(this.props.inputDate)}
            </div>
        )
    }
}

export default DateDetail










