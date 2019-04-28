import React, { Component } from 'react'

export class CategoryFilter extends Component {

    handleChange = (status, e) => {
        //to add the class in category
        let classes = 'tabs';
        let els = document.getElementsByClassName('tabs active');
        if (els) {
            while (els[0]) {
                els[0].classList.remove('active')
            }
        }
        e.target.className = classes.replace('tabs', 'tabs active');
        //find the category
        this.props.onChange(status)
    }

    render() {
        const { filterdata } = this.props
        const categoryArray = ["All"];
        filterdata.map(k => k.status.map(status => {
            if (categoryArray.indexOf(status) < 0) {
                categoryArray.push(status)
            }
            return filterdata;
        })
        )

        //to find the first child
        let x = document.getElementsByClassName('tabs')
        if (x[0]) {
            x[0].classList.add("firstactive");
        }

        return (
            <React.Fragment>
                {categoryArray.map((status, i) => <div className="tabs" key={i} onClick={(e) => this.handleChange(status, e)}>{status}</div>
                )}
            </React.Fragment>
        )
    }
}

export default CategoryFilter
