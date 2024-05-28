'use client';
import {
  BulbFilled,
  RightOutlined,
  DatabaseFilled,
  CodeFilled,
  TagsFilled,
  GithubFilled,
} from '@ant-design/icons';
import Mobile from '../../../public/images/mobile.png';
import DesktopInterviewify from '../../../public/images/Frame 8.png';
import GoogleLogo from '../../../public/images/GoogleLogo.png';
import React, { ReactNode, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SecondContentCardProps {
  profession: string;
  icon: ReactNode;
}

function NavbarLayout() {
  return (
    <div
      className="w-[95%] md:max-w-4xl xl:max-w-5xl mx-auto lg:w-full pt-2 z-[2]"
      id="navbar"
    >
      <div className="w-full flex flex-col gap-10 md:max-w-5xl md:mx-auto">
        <div className="flex justify-between items-center text-white">
          <svg
            width="182"
            height="46"
            viewBox="0 0 182 46"
            className="fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.92 19H9.824V35H5.92V19ZM7.904 16.936C7.328 16.936 6.84267 16.7493 6.448 16.376C6.05333 15.992 5.856 15.512 5.856 14.936C5.856 14.3707 6.05333 13.896 6.448 13.512C6.84267 13.128 7.32267 12.936 7.888 12.936C8.45333 12.936 8.928 13.128 9.312 13.512C9.70667 13.896 9.904 14.3707 9.904 14.936C9.904 15.512 9.712 15.992 9.328 16.376C8.944 16.7493 8.46933 16.936 7.904 16.936ZM28.201 24.888V35H24.297V25.912C24.297 25.2827 24.1423 24.712 23.833 24.2C23.5237 23.6773 23.1077 23.2667 22.585 22.968C22.073 22.6587 21.5023 22.504 20.873 22.504C20.2437 22.504 19.6677 22.6587 19.145 22.968C18.633 23.2667 18.2223 23.6773 17.913 24.2C17.6143 24.712 17.465 25.2827 17.465 25.912V35H13.561L13.545 19H17.449L17.465 20.424C18.009 19.848 18.6597 19.3947 19.417 19.064C20.1743 18.7227 20.9903 18.552 21.865 18.552C23.0277 18.552 24.089 18.84 25.049 19.416C26.009 19.9813 26.7717 20.744 27.337 21.704C27.913 22.6533 28.201 23.7147 28.201 24.888ZM39.9648 22.904H36.8608V35H32.9568V22.904H30.5888V19H32.9568V13.976H36.8608V19H39.9648V22.904ZM49.5225 35.416C48.0505 35.416 46.7065 35.0373 45.4905 34.28C44.2852 33.5227 43.3198 32.504 42.5945 31.224C41.8798 29.944 41.5225 28.5307 41.5225 26.984C41.5225 25.8213 41.7305 24.7333 42.1465 23.72C42.5625 22.696 43.1332 21.8 43.8585 21.032C44.5945 20.2533 45.4478 19.6453 46.4185 19.208C47.3892 18.7707 48.4238 18.552 49.5225 18.552C50.7705 18.552 51.9118 18.8187 52.9465 19.352C53.9918 19.8747 54.8772 20.5947 55.6025 21.512C56.3278 22.4293 56.8558 23.4747 57.1865 24.648C57.5172 25.8213 57.5918 27.048 57.4105 28.328H45.7145C45.8638 28.9253 46.1092 29.464 46.4505 29.944C46.7918 30.4133 47.2238 30.792 47.7465 31.08C48.2692 31.3573 48.8612 31.5013 49.5225 31.512C50.2052 31.5227 50.8238 31.3627 51.3785 31.032C51.9438 30.6907 52.4132 30.232 52.7865 29.656L56.7705 30.584C56.1198 32.0027 55.1492 33.1653 53.8585 34.072C52.5678 34.968 51.1225 35.416 49.5225 35.416ZM45.5865 25.4H53.4585C53.3412 24.76 53.0905 24.184 52.7065 23.672C52.3332 23.1493 51.8692 22.7333 51.3145 22.424C50.7598 22.1147 50.1625 21.96 49.5225 21.96C48.8825 21.96 48.2905 22.1147 47.7465 22.424C47.2025 22.7227 46.7385 23.1333 46.3545 23.656C45.9812 24.168 45.7252 24.7493 45.5865 25.4ZM60.0298 35L60.0138 19H63.9178L63.9338 20.424C64.4778 19.848 65.1284 19.3947 65.8858 19.064C66.6431 18.7227 67.4591 18.552 68.3338 18.552C68.9204 18.552 69.5071 18.6373 70.0938 18.808L68.5578 22.744C68.1524 22.584 67.7471 22.504 67.3418 22.504C66.7124 22.504 66.1364 22.6587 65.6138 22.968C65.1018 23.2667 64.6911 23.6773 64.3818 24.2C64.0831 24.712 63.9338 25.2827 63.9338 25.912V35H60.0298ZM82.2303 35H77.1903L71.3663 18.984H75.5263L79.7183 30.504L83.8943 18.984H88.0543L82.2303 35ZM90.42 19H94.324V35H90.42V19ZM92.404 16.936C91.828 16.936 91.3427 16.7493 90.948 16.376C90.5533 15.992 90.356 15.512 90.356 14.936C90.356 14.3707 90.5533 13.896 90.948 13.512C91.3427 13.128 91.8227 12.936 92.388 12.936C92.9533 12.936 93.428 13.128 93.812 13.512C94.2067 13.896 94.404 14.3707 94.404 14.936C94.404 15.512 94.212 15.992 93.828 16.376C93.444 16.7493 92.9693 16.936 92.404 16.936ZM104.835 35.416C103.363 35.416 102.019 35.0373 100.803 34.28C99.5977 33.5227 98.6323 32.504 97.907 31.224C97.1923 29.944 96.835 28.5307 96.835 26.984C96.835 25.8213 97.043 24.7333 97.459 23.72C97.875 22.696 98.4457 21.8 99.171 21.032C99.907 20.2533 100.76 19.6453 101.731 19.208C102.702 18.7707 103.736 18.552 104.835 18.552C106.083 18.552 107.224 18.8187 108.259 19.352C109.304 19.8747 110.19 20.5947 110.915 21.512C111.64 22.4293 112.168 23.4747 112.499 24.648C112.83 25.8213 112.904 27.048 112.723 28.328H101.027C101.176 28.9253 101.422 29.464 101.763 29.944C102.104 30.4133 102.536 30.792 103.059 31.08C103.582 31.3573 104.174 31.5013 104.835 31.512C105.518 31.5227 106.136 31.3627 106.691 31.032C107.256 30.6907 107.726 30.232 108.099 29.656L112.083 30.584C111.432 32.0027 110.462 33.1653 109.171 34.072C107.88 34.968 106.435 35.416 104.835 35.416ZM100.899 25.4H108.771C108.654 24.76 108.403 24.184 108.019 23.672C107.646 23.1493 107.182 22.7333 106.627 22.424C106.072 22.1147 105.475 21.96 104.835 21.96C104.195 21.96 103.603 22.1147 103.059 22.424C102.515 22.7227 102.051 23.1333 101.667 23.656C101.294 24.168 101.038 24.7493 100.899 25.4ZM122.832 35H118.96L113.616 19H117.44L120.912 29.352L124.368 19H128.224L131.68 29.352L135.152 19H138.976L133.632 35H129.76L126.288 24.6L122.832 35ZM141.358 19H145.262V35H141.358V19ZM143.342 16.936C142.766 16.936 142.28 16.7493 141.886 16.376C141.491 15.992 141.294 15.512 141.294 14.936C141.294 14.3707 141.491 13.896 141.886 13.512C142.28 13.128 142.76 12.936 143.326 12.936C143.891 12.936 144.366 13.128 144.75 13.512C145.144 13.896 145.342 14.3707 145.342 14.936C145.342 15.512 145.15 15.992 144.766 16.376C144.382 16.7493 143.907 16.936 143.342 16.936ZM153.636 15.64V19H158.004V22.904H153.636V35H149.732V22.904H147.988V19H149.732V15.64C149.732 14.7227 149.956 13.8853 150.404 13.128C150.862 12.36 151.476 11.752 152.244 11.304C153.012 10.8453 153.86 10.616 154.788 10.616C155.46 10.616 156.126 10.7547 156.788 11.032C157.449 11.3093 158.036 11.736 158.548 12.312L155.732 15.064C155.636 14.8827 155.497 14.7493 155.316 14.664C155.145 14.568 154.969 14.52 154.788 14.52C154.478 14.52 154.206 14.632 153.972 14.856C153.748 15.0693 153.636 15.3307 153.636 15.64ZM171.334 19H175.478L166.726 43H162.582L165.478 35L159.718 19H163.99L167.43 29.656L171.334 19Z" />
          </svg>
          <form action="http://localhost:4000/auth/google">
            <button className="grid cursor-pointer text-black">
              <div className="rounded-full w-20 h-8 md:w-24 md:h-10 bg-white opacity-25 col-[1] row-[1]" />
              <div className="col-[1] row-[1] w-20 h-8 md:w-24 md:h-10 flex justify-center items-center gap-1">
                <p className="text-white font-medium text-sm md:text-base">
                  Sign in
                </p>
                <RightOutlined className="text-white text-xs leading-none md:text-base md:leading-none" />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function FirstContent() {
  return (
    <div className="flex w-[100%] lg:w-full md:max-w-4xl xl:max-w-5xl mx-auto justify-center items-center">
      <div className="flex flex-col w-full md:grid md:grid-cols-2 justify-center items-center md:items-start">
        <div className="md:grid-cols-1 grid md:mt-5">
          <div
            className="flex flex-col gap-6 md:gap-10 z-[2] titleSection"
            id="titleSection"
          >
            <p className="text-4xl md:text-5xl xl:text-6xl font-bold text-white poppins w-full z-[2] leading-snug">
              Master the Behavioral Interview
            </p>
            <p className="text-lg font-normal text-[#F1F1F1] z-[2]">
              Improve your behavioral interview skills with our AI-powered web
              app. Get personalized feedback on your responses to common
              questions and practice at your own pace.
            </p>
            <form action="http://localhost:4000/auth/google">
              <button className="rounded-md bg-white w-8/12 md:w-6/12 h-10 z-[2] flex items-center px-3 cursor-pointer">
                <Image height={24} width={24} src={GoogleLogo} alt='google logo' />
                <p className="text-slate-600 w-full text-center">
                  Continue with Google
                </p>
              </button>
            </form>
          </div>
          <div className="gradientCover bg-[#3772FF] absolute bottom-0 overflow-hidden top-0">
            <canvas className="relative block w-[inherit] h-full" />
          </div>
        </div>
        <div className="grid-cols-1 hidden md:block">
          <div className="flex md:justify-end lg:justify-center items-center relative z-[2] w-full">
            <figure className="absolute top-0 md:left-44 lg:left-48 w-[900px]">
              {/* TODO: alter height based on mobile parameter that will be added */}
              <Image
                src={DesktopInterviewify}
                height={550}
                className="w-full absolute"
                alt="..."
              ></Image>
            </figure>
            <figure className="relative mt-20">
              {/* TODO: alter height based on mobile parameter that will be added */}
              <Image src={Mobile} height={500} alt="..."></Image>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondContent() {
  return (
    <div className="flex md:max-w-4xl xl:max-w-5xl mt-16 w-[95%] mx-auto lg:w-full items-center md:mt-0">
      <div className="flex w-full flex-col">
        <div className="flex flex-col md:gap-2">
          <p className="font-bold text-[#3772FF] text-base md:text-lg">
            Field-focused preparation
          </p>
          <p className="font-bold text-black text-3xl md:text-4xl poppins">
            Practice interviewing for top tech fields{' '}
          </p>
        </div>
        <div className="flex flex-wrap-reverse w-full mt-5 justify-center gap-3 lg:justify-between items-center">
          <SecondContentCard
            profession={'Data Science'}
            icon={
              <DatabaseFilled className="text-[#3772FF] text-2xl leading-none" />
            }
          />
          <SecondContentCard
            profession={'Software Engineering'}
            icon={
              <CodeFilled className="text-[#3772FF] text-2xl leading-none" />
            }
          />
          <SecondContentCard
            profession={'Product Management'}
            icon={
              <BulbFilled className="text-[#3772FF] text-2xl leading-none" />
            }
          />
        </div>
      </div>
    </div>
  );
}

function SecondContentCard({ profession, icon }: SecondContentCardProps) {
  return (
    <div className="flex justify-center justify-items bg-[#F0F0F0] rounded-md w-fit p-3">
      <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center">
        {icon}
      </div>
      <div className="w-fit px-10 justify-center items-center flex">
        <p className="font-bold text-lg">{profession}</p>
      </div>
    </div>
  );
}

function ThirdContent() {
  return (
    <div className="ThirdContent mt-10 mb-10 pb-10">
      <div className="md:max-w-4xl xl:max-w-5xl w-[95%] lg:w-full flex flex-col-reverse gap-5 md:grid md:grid-cols-12 mx-auto mt-10 mb-10">
        <div className="flex flex-col gap-4 col-span-8 w-11/12">
          <p className="font-bold text-lg poppins">Ready to get started?</p>
          <p className="text-base text-[#434343]">
            Connect your Google account instantly and start practicing your
            behavioral interview skills in a few minutes! Reach your full
            potential with the power of AI!
          </p>
          <div className="flex items-center gap-5">
            <form action="http://localhost:4000/auth/google" className='w-5/12 md:w-3/12'>
              <button className="flex items-center justify-center rounded-full w-full py-1 text-white bg-[#3772FF] gap-1 font-medium">
                <p>Start Now</p>
                <RightOutlined className="text-sm leading-none" />
              </button>
            </form>
            <button className="flex items-center justify-center rounded-full w-5/12 md:w-3/12 py-1 text-[#3772FF] bg-transparent gap-1 font-medium">
              <p>Contact Us</p>
              <RightOutlined className="text-sm leading-none" />
            </button>
          </div>
        </div>
        <div className="col-span-4 flex justify-center">
          <div className="flex flex-col gap-1">
            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
              <TagsFilled className="text-[#3772FF] text-2xl leading-none" />
            </div>
            <p className="font-bold text-base">Free to use</p>
            <p className="text-sm text-[#434343]">
              Get access to all features and tools without paying a single cent!{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="flex md:max-w-4xl xl:max-w-5xl w-[95%] mx-auto lg:w-full items-center mb-5">
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col">
          <svg
            width="182"
            height="46"
            viewBox="0 0 182 46"
            className="fill-[#3772FF] "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.92 19H9.824V35H5.92V19ZM7.904 16.936C7.328 16.936 6.84267 16.7493 6.448 16.376C6.05333 15.992 5.856 15.512 5.856 14.936C5.856 14.3707 6.05333 13.896 6.448 13.512C6.84267 13.128 7.32267 12.936 7.888 12.936C8.45333 12.936 8.928 13.128 9.312 13.512C9.70667 13.896 9.904 14.3707 9.904 14.936C9.904 15.512 9.712 15.992 9.328 16.376C8.944 16.7493 8.46933 16.936 7.904 16.936ZM28.201 24.888V35H24.297V25.912C24.297 25.2827 24.1423 24.712 23.833 24.2C23.5237 23.6773 23.1077 23.2667 22.585 22.968C22.073 22.6587 21.5023 22.504 20.873 22.504C20.2437 22.504 19.6677 22.6587 19.145 22.968C18.633 23.2667 18.2223 23.6773 17.913 24.2C17.6143 24.712 17.465 25.2827 17.465 25.912V35H13.561L13.545 19H17.449L17.465 20.424C18.009 19.848 18.6597 19.3947 19.417 19.064C20.1743 18.7227 20.9903 18.552 21.865 18.552C23.0277 18.552 24.089 18.84 25.049 19.416C26.009 19.9813 26.7717 20.744 27.337 21.704C27.913 22.6533 28.201 23.7147 28.201 24.888ZM39.9648 22.904H36.8608V35H32.9568V22.904H30.5888V19H32.9568V13.976H36.8608V19H39.9648V22.904ZM49.5225 35.416C48.0505 35.416 46.7065 35.0373 45.4905 34.28C44.2852 33.5227 43.3198 32.504 42.5945 31.224C41.8798 29.944 41.5225 28.5307 41.5225 26.984C41.5225 25.8213 41.7305 24.7333 42.1465 23.72C42.5625 22.696 43.1332 21.8 43.8585 21.032C44.5945 20.2533 45.4478 19.6453 46.4185 19.208C47.3892 18.7707 48.4238 18.552 49.5225 18.552C50.7705 18.552 51.9118 18.8187 52.9465 19.352C53.9918 19.8747 54.8772 20.5947 55.6025 21.512C56.3278 22.4293 56.8558 23.4747 57.1865 24.648C57.5172 25.8213 57.5918 27.048 57.4105 28.328H45.7145C45.8638 28.9253 46.1092 29.464 46.4505 29.944C46.7918 30.4133 47.2238 30.792 47.7465 31.08C48.2692 31.3573 48.8612 31.5013 49.5225 31.512C50.2052 31.5227 50.8238 31.3627 51.3785 31.032C51.9438 30.6907 52.4132 30.232 52.7865 29.656L56.7705 30.584C56.1198 32.0027 55.1492 33.1653 53.8585 34.072C52.5678 34.968 51.1225 35.416 49.5225 35.416ZM45.5865 25.4H53.4585C53.3412 24.76 53.0905 24.184 52.7065 23.672C52.3332 23.1493 51.8692 22.7333 51.3145 22.424C50.7598 22.1147 50.1625 21.96 49.5225 21.96C48.8825 21.96 48.2905 22.1147 47.7465 22.424C47.2025 22.7227 46.7385 23.1333 46.3545 23.656C45.9812 24.168 45.7252 24.7493 45.5865 25.4ZM60.0298 35L60.0138 19H63.9178L63.9338 20.424C64.4778 19.848 65.1284 19.3947 65.8858 19.064C66.6431 18.7227 67.4591 18.552 68.3338 18.552C68.9204 18.552 69.5071 18.6373 70.0938 18.808L68.5578 22.744C68.1524 22.584 67.7471 22.504 67.3418 22.504C66.7124 22.504 66.1364 22.6587 65.6138 22.968C65.1018 23.2667 64.6911 23.6773 64.3818 24.2C64.0831 24.712 63.9338 25.2827 63.9338 25.912V35H60.0298ZM82.2303 35H77.1903L71.3663 18.984H75.5263L79.7183 30.504L83.8943 18.984H88.0543L82.2303 35ZM90.42 19H94.324V35H90.42V19ZM92.404 16.936C91.828 16.936 91.3427 16.7493 90.948 16.376C90.5533 15.992 90.356 15.512 90.356 14.936C90.356 14.3707 90.5533 13.896 90.948 13.512C91.3427 13.128 91.8227 12.936 92.388 12.936C92.9533 12.936 93.428 13.128 93.812 13.512C94.2067 13.896 94.404 14.3707 94.404 14.936C94.404 15.512 94.212 15.992 93.828 16.376C93.444 16.7493 92.9693 16.936 92.404 16.936ZM104.835 35.416C103.363 35.416 102.019 35.0373 100.803 34.28C99.5977 33.5227 98.6323 32.504 97.907 31.224C97.1923 29.944 96.835 28.5307 96.835 26.984C96.835 25.8213 97.043 24.7333 97.459 23.72C97.875 22.696 98.4457 21.8 99.171 21.032C99.907 20.2533 100.76 19.6453 101.731 19.208C102.702 18.7707 103.736 18.552 104.835 18.552C106.083 18.552 107.224 18.8187 108.259 19.352C109.304 19.8747 110.19 20.5947 110.915 21.512C111.64 22.4293 112.168 23.4747 112.499 24.648C112.83 25.8213 112.904 27.048 112.723 28.328H101.027C101.176 28.9253 101.422 29.464 101.763 29.944C102.104 30.4133 102.536 30.792 103.059 31.08C103.582 31.3573 104.174 31.5013 104.835 31.512C105.518 31.5227 106.136 31.3627 106.691 31.032C107.256 30.6907 107.726 30.232 108.099 29.656L112.083 30.584C111.432 32.0027 110.462 33.1653 109.171 34.072C107.88 34.968 106.435 35.416 104.835 35.416ZM100.899 25.4H108.771C108.654 24.76 108.403 24.184 108.019 23.672C107.646 23.1493 107.182 22.7333 106.627 22.424C106.072 22.1147 105.475 21.96 104.835 21.96C104.195 21.96 103.603 22.1147 103.059 22.424C102.515 22.7227 102.051 23.1333 101.667 23.656C101.294 24.168 101.038 24.7493 100.899 25.4ZM122.832 35H118.96L113.616 19H117.44L120.912 29.352L124.368 19H128.224L131.68 29.352L135.152 19H138.976L133.632 35H129.76L126.288 24.6L122.832 35ZM141.358 19H145.262V35H141.358V19ZM143.342 16.936C142.766 16.936 142.28 16.7493 141.886 16.376C141.491 15.992 141.294 15.512 141.294 14.936C141.294 14.3707 141.491 13.896 141.886 13.512C142.28 13.128 142.76 12.936 143.326 12.936C143.891 12.936 144.366 13.128 144.75 13.512C145.144 13.896 145.342 14.3707 145.342 14.936C145.342 15.512 145.15 15.992 144.766 16.376C144.382 16.7493 143.907 16.936 143.342 16.936ZM153.636 15.64V19H158.004V22.904H153.636V35H149.732V22.904H147.988V19H149.732V15.64C149.732 14.7227 149.956 13.8853 150.404 13.128C150.862 12.36 151.476 11.752 152.244 11.304C153.012 10.8453 153.86 10.616 154.788 10.616C155.46 10.616 156.126 10.7547 156.788 11.032C157.449 11.3093 158.036 11.736 158.548 12.312L155.732 15.064C155.636 14.8827 155.497 14.7493 155.316 14.664C155.145 14.568 154.969 14.52 154.788 14.52C154.478 14.52 154.206 14.632 153.972 14.856C153.748 15.0693 153.636 15.3307 153.636 15.64ZM171.334 19H175.478L166.726 43H162.582L165.478 35L159.718 19H163.99L167.43 29.656L171.334 19Z" />
          </svg>
          <p className="text-sm text-[#434343] pl-1">
            Master the behavioral interview
          </p>
        </div>
        <hr className="border-solid border-[#434343] border-1 w-full rounded-full" />
        <div className="flex justify-between items-center">
          <p className="text-sm text-[#434343] pl-1">@2024 Interviewify</p>
          <div className="flex gap-4 items-center justify-around">
            <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex justify-center items-center">
              <Link href="https://github.com/JohanDelao/interviewify-ts"><GithubFilled className="text-black text-2xl leading-none" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Welcome() {
  useEffect(() => {
    // Create a DIV to measure the scrollbar width
    const scrollDiv = document.createElement('div');
    scrollDiv.className = 'scrollbar-measure';
    document.body.appendChild(scrollDiv);

    // Get the scrollbar width
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

    // Delete the DIV
    document.body.removeChild(scrollDiv);

    // Set the scrollbar width as a CSS variable
    document.documentElement.style.setProperty(
      '--scrollbar-width',
      `${scrollbarWidth}px`,
    );

    const content = document.getElementById('titleSection');
    const contentHeight = content?.clientHeight;

    const nav = document.getElementById('navbar');
    const navHeight = nav?.clientHeight;

    document.documentElement.style.setProperty(
      '--content-height',
      `${contentHeight}px`,
    );
    document.documentElement.style.setProperty(
      '--nav-height',
      `${navHeight}px`,
    );
  }, []); // Run this effect only once after the component mounts

  return (
    <div
      style={{ background: 'white', minHeight: '100vh' }}
      className="max-w-md md:max-w-full"
    >
      <div className="w-full flex justify-center items-center overflow-hidden">
        <div className="w-full flex flex-col gap-10">
          <NavbarLayout />
          <FirstContent />
          <SecondContent />
          <ThirdContent />
          <Footer />
        </div>
      </div>
    </div>
  );
}
