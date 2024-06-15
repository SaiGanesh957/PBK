import React from 'react'
import { useState, useEffect } from "react";
import PBKlogo from '../../assets/pbklogo.jpg'
import Boy from '../../assets/boy.png'
import art from '../../assets/art.jpg'
import baby from '../../assets/baby.jpg'
import bk from '../../assets/balakrishna.jpg'
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

import a from '../../assets/a.png'
import b from '../../assets/b.png'
import c from '../../assets/c.png'
import d from '../../assets/d.png'
import e from '../../assets/e.png'
import f from '../../assets/f.png'
import g from '../../assets/g.png'
import h from '../../assets/h.png'
import i from '../../assets/i.png'
import j from '../../assets/j.png'
import l from '../../assets/l.png'


export default function Start() {

    const {register, reset, handleSubmit} = useForm();

    const [isSuccess, setIsSuccess] = useState(false);
    const [result, setResult] = useState(null);
  
    const accessKey = "4cb9af38-bfe7-4e14-9752-92b1266bd049";
  
    const { submit: onSubmit } = useWeb3Forms({
      access_key: accessKey,
      settings: {
        from_name: "Acme Inc",
        subject: "New Contact Message from your Website",
        // ... other settings
      },
      onSuccess: (msg, data) => {
        setIsSuccess(true);
        alert("Thanks for your Reaching My Website, Successfully Message Sent!")
        setResult(msg);
        reset();
      },
      onError: (msg, data) => {
        setIsSuccess(false);
        setResult(msg);
      },
    });
  
    
  return (
  <>
  <nav className="bg-white mt-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img className="h-16 w-auto" src={PBKlogo} alt="Logo" ></img>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            {/* Contact Us Button */}
            <a href="#contact"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 ease-in-out">
              Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
  <section className="py-20">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm text-indigo-600 font-medium">
                            Over 50+ successful deals
                        </h1>
                        <h1 className="text-4xl text-gray-800 font-extrabold md:text-5xl  pb-5">
                            Hello , Iam Bala Krishna Ponnaganti
                        </h1>
                        <p>
                        Welcome to Balakrishna Ponnaganti's portfolio, showcasing his unique and captivating artwork. Discover his creative journey through a variety of stunning drawings and paintings.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                           <Link to='/Gallery'>
                           <a href="" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                              View  All Artworks
                            </a>
                            </Link>
                            <a href="https://www.instagram.com/balakrishna.pencils?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                            Book a Custom Drawing
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="pt-10">
                        <img src={bk} alt=""/>
                    </div>
                </div>
             
            </section>

  <section className="px-20">
    <h1 className="font-bold text-center text-5xl	py-10 flex flex-wrap">My Arts & Drawing</h1>
            <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={l}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src={g}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={d}
        alt="gallery-photo"
      />
    </div>
  </div>
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={i}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={j}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src={f}
        alt="gallery-photo"
      />
    </div>
  </div>
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={a}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src={b}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={c}
        alt="gallery-photo"
      />
    </div>
  </div>
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={e}
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={h}
        alt="gallery-photo"
      />
    </div>
  </div>
</div>
</section>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Our Previous Customers ❤️</h1>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/2 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">"Working with Balakrishna was a wonderful experience. He listened to my ideas and brought them to life with his artistic expertise. The final artwork was perfect and exceeded all my hopes." </p>
          <a class="inline-flex items-center">
            <img alt="testimonial" src="https://tse2.mm.bing.net/th?id=OIP.25GN74MjGhidOgWi_erJPwHaHa&pid=Api&P=0&h=180" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"></img>
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">Chandu</span>
              <span class="text-gray-500 text-sm">Developer</span>
            </span>
          </a>
        </div>
      </div>

      <div class="p-4 md:w-1/2 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">"Balakrishna's drawings are a true reflection of his passion and skill. His attention to detail and the depth of his work make him stand out as an artist. I highly recommend his work to anyone looking for beautiful, unique art."</p>
          <a class="inline-flex items-center">
            <img alt="testimonial" src="https://i.pinimg.com/736x/38/27/e9/3827e92d09bf0cdca4c00659a72e7ceb.jpg" class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"></img>
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">SaiGanesh</span>
              <span class="text-gray-500 text-sm">DESIGNER</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


    <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] px-5 ">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src={baby}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src={art}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src={Boy}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                       
                       
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                <h1 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                P. BALA KRINSHNA
                </h1>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                Balakrishna Ponnaganti is an accomplished artist renowned for his detailed portraits and vibrant abstract pieces. His journey in art began at a young age, inspired by the natural world and human form. With a formal education in fine arts, Balakrishna has developed a unique style that blends traditional techniques with modern aesthetics. His work is characterized by meticulous attention to detail and a profound creative vision, making each piece come alive. Over the years, he has exhibited his work in numerous galleries and received various accolades for his exceptional talent.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                "Art is not merely a form of expression but a way to connect deeply with the world around us. Through my work, I strive to capture the essence of my subjects and evoke emotions in the viewer. Each piece I create is a journey of discovery, both for myself and those who experience it."
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="min-h-screen bg-white dark:bg-gray-900" id="contact">
    <div class="container px-6 py-10 mx-auto">
        <div class="lg:flex lg:items-center lg:-mx-10">
            <div class="lg:w-1/2 lg:mx-10">
                <h1 class="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">Let’s talk</h1>

                <p class="mt-4 text-gray-500 dark:text-gray-400">
                    Ask us everything and we would love
                    to hear from you
                </p>

<form class="mt-12" onSubmit={handleSubmit(onSubmit)}>

                    <div class="-mx-2 md:items-center md:flex">
                        <div class="flex-1 px-2">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                            <input type="text" {...register("name", { required: true })} placeholder="John Doe" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="flex-1 px-2 mt-4 md:mt-0">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                            <input type="email" {...register("email", { required: true })} placeholder="johndoe@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div class="w-full mt-4">
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                        <textarea {...register("message", { required: true })} class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>
                    <div className='text-lime-300 text-2xl bg-green p-3'>{result}</div>
                    <button type="submit" class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        get in touch
                    </button>
                    
</form>
            </div>

            <div class="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                <img class="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96" src="https://img.freepik.com/free-vector/illustration-postponed-concept-with-person-checking-devices_23-2148510059.jpg?t=st=1718375437~exp=1718379037~hmac=a88ca63da924e924ab124795bdc7de432f3a1f3369a6890a7b97510fac20c224&w=1060" alt=""></img>

                <div class="mt-6 space-y-8 md:mt-8">
                    <p class="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400 text-wrap">
                        KAKINADA INSTITUTE OF ENGINEERING AND TECHNOLOGY & Martur
                        </span>
                    </p>

                    <p class="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>

                        <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">Not Available</span>
                    </p>

                    <p class="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>

                        <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">balakrishnaarts47479@gmail.com</span>
                    </p>
                </div>

                <div class="mt-6 w-80 md:mt-8">
                    <h3 class="text-gray-600 dark:text-gray-300 ">Follow us</h3>

                    <div class="flex mt-4 -mx-1.5 ">
                    
                        <a class="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="https://www.instagram.com/balakrishna.pencils?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z" fill="currentColor" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="text-center p-5">
      <p className="text-white">_____________________________</p>
    <a href="https://psg-portfolio.vercel.app/"><h1 >Developed By SAIGANESH Ponnaganti</h1></a>
    </div>
</section>
      
  </>
  )
}
