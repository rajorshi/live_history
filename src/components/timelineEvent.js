import React from 'react';
import { connect } from 'react-redux';

class TimelineEvent extends React.Component {
        
    render() { 
        const data = this.props.data;
        return (
            <div className="timeline-event">
                <div className="timeline-event-content">
                    <span className="tag" style={{ background: data.category.color }}>
                        {data.category.tag}
                    </span>
                    <time>{data.date}</time>
                    <p>{data.text}</p>
                    {data.link && (
                        <a
                            href={data.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {data.link.text}
                        </a>
                    )}
                    <span className="circle" />
                </div>
            </div>
        );
    }
}

export default connect()(TimelineEvent);