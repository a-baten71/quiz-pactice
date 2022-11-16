import { Footer } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Foooter = () => {
    return (

        <footer class="p-4 bg-black  rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline ">Quiz contest</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link to="#" class="mr-4 hover:underline md:mr-6 text-white ">About</Link>
                </li>
                <li>
                    <Link to="#" class="mr-4 hover:underline md:mr-6 text-white">Privacy Policy</Link>
                </li>
                <li>
                    <Link to="#" class="mr-4 hover:underline md:mr-6 text-white">Licensing</Link>
                </li>
                <li>
                    <Link to="#" class="hover:underline text-white">Contact</Link>
                </li>
            </ul>
        </footer>

    );
};

export default Foooter;