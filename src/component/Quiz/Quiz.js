import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye } from "react-icons/fa";

const Quiz = ({ quizes }) => {


    // console.log(quizes)
    const { question, options, correctAnswer } = quizes;
    // console.log(question)
    // console.log(options)
    const [correct, setCorrect] = useState([]);
    const [wrong, setWrong] = useState([]);

    const SelectAnswer = (event) => {
        event.target.disabled = true;
        // console.log(options.option)
        console.log(correctAnswer)
        if (event.target.value === correctAnswer) {
            toast("Correct Answer!");
            // console.log(true)
            const newValue = correct + 1;
            setCorrect(parseInt(newValue))
        }
        else {
            toast("Wrong Answer")
            // console.log(false)
            const newValue = wrong + 1;
            setWrong(parseInt(newValue))
        }
    };

    const CorrectAns = () => {
        toast(correctAnswer)
    }
    return (
        <div className='container mx-auto'>
            <div className='flex items-center justify-center bg-rose-200 font-semibold font-xl w-fit mx-auto px-8 rounded'>
                <p className='py-3'> Quiz: {question}</p>
                <p className='ml-5' onClick={CorrectAns}><FaRegEye></FaRegEye></p>
            </div>

            <div className='w-3/4 mx-auto grid md:grid-cols-2  gap-4 mt-4 mb-12 '>

                {
                    options.map((option, idx) => <p className=' w-full p-4 px bg-sky-600 text-white font-2xl font-bold text-left rounded' key={idx}>
                        <input onClick={SelectAnswer} className=' bg-sky-500' type="radio" name="quiz" id={option} value={option} />
                        <label className='ml-3' htmlFor={option}>{option}</label>

                    </p>)
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Quiz;