
import React from 'react';
import { connect } from 'react-redux';
import TimelineEvent from './timelineEvent'

const timelineData = [
    {
        "text": "Wrote my first blog post ever on Medium",
        "date": "March 03 2017",
        "category": {
            "tag": "medium",
            "color": "#018f69"
        },
        "link": {
            "url":
                "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
            "text": "Read more"
        }
    },
    {
        "text": "Wrote my second blog post on Medium",
        "date": "March 03 2018",
        "category": {
            "tag": "medium",
            "color": "#018f69"
        },
        "link": {
            "url":
                "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
            "text": "Read more"
        }
    }
];

class Timeline extends React.Component {

    render() {
        return (
            <div className="timeline">
                {timelineData.map((data, idx) => (
                    <TimelineEvent data={data} key={idx} />
                ))}
            </div>
        );
    }
}

export default connect()(Timeline);
