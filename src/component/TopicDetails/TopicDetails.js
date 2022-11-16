import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const TopicDetails = () => {
    const topic = useLoaderData()
    const { questions, name } = topic.data;

    // console.log(questions[1].question)

    return (
        <div className='border-indigo-500'>
            <h2 className='text-2xl font-bold mb-11 mt-7'>Quiz of {name}</h2>

            {
                questions.map(quizes => <Quiz
                    quizes={quizes}
                ></Quiz>)
            }
        </div>
    );
};

export default TopicDetails;