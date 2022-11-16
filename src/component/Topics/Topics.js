import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const data = useLoaderData();
    const topics = data.data;
    return (
        <div className=' container mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-8   my-24'>

            {
                topics.map(topic => <Topic
                    key={topic.id} topic={topic}
                ></Topic>)
            }
        </div>
    );
};

export default Topics;