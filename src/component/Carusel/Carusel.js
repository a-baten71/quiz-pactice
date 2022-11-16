import React from 'react';
import { Carousel } from 'flowbite-react';


const Carusel = () => {
    return (

        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-12 container mx-auto">
            <Carousel>
                <div className="flex h-full items-center justify-center ">
                    <img className='w-full'
                        src="https://img.freepik.com/premium-photo/software-developer-writing-programming-code-using-laptop-computer-while-sitting-lazy-bag-modern-startup-office_530697-17276.jpg?size=626&ext=jpg&uid=R31494095&ga=GA1.2.1825396758.1667065467"
                        alt="..."
                    />
                </div>
                <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
                    <img className='w-full'
                        src="https://img.freepik.com/premium-vector/vector-question-answers-template-neon-style-quiz-game-exam-tv-show-school-examination-test_111651-575.jpg?size=626&ext=jpg&uid=R31494095&ga=GA1.2.1825396758.1667065467"
                        alt="..."
                    />
                </div>
                <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
                    <img className='w-full'
                        src="https://img.freepik.com/free-psd/pink-3d-question-engagement-interface-mockup_106244-1774.jpg?size=626&ext=jpg&uid=R31494095&ga=GA1.2.1825396758.1667065467"
                        alt="..."
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default Carusel;