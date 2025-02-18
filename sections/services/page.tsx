"use client"
import Header from "@/components/header/header";
import Image from "next/image";
import Style from "./page.module.css"
import { useEffect, useState } from "react";

interface ObjPrototype{
    [key: number]: string;
}
const OPTIONS = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Services() {
    const data = [
        {
          name: "Government",
          description: "We enhance government agencies' visibility and engagement with the community.",
          svg : <svg height={"100"}  xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 442 512.13"><path fill="#211d37"  fillRule="nonzero" d="M386.17 304.1v146.46h14.22c4.6 0 8.78 1.88 11.81 4.91 3.03 3.03 4.91 7.21 4.91 11.8v8.47h8.18c4.59 0 8.77 1.89 11.8 4.91 3.03 3.03 4.91 7.21 4.91 11.81v14.14c0 3.05-2.48 5.53-5.54 5.53h-87.98c.8-2.37.71-4.76-.46-7.14 0-1.34-.02-2.65-.05-3.93h82.96v-8.6c0-1.54-.64-2.95-1.67-3.98a5.62 5.62 0 0 0-3.97-1.66h-12.52c-.39.08-.79.13-1.2.13h-64.69c-.58-4.1-1.36-7.82-2.34-11.21h61.49v-8.47c0-1.54-.63-2.95-1.66-3.98a5.625 5.625 0 0 0-3.98-1.66h-62.13c-2.98-4.57-6.55-8.16-10.59-11.07h47.42V304.1h-64.5v138.16c-3.55-1.19-7.25-2.23-11.07-3.21V304.1h-46.66c-1.17-1.1-2.35-2.13-3.53-3.09-4.22-3.4-8.65-6.05-13.26-7.98h170.8v-1.58c0-4.3-1.78-8.24-4.63-11.09-2.85-2.85-6.78-4.63-11.09-4.63H46.07c-4.33 0-8.26 1.77-11.09 4.6l-.02.02a15.66 15.66 0 0 0-4.6 11.1v1.58H195.5c-1.92.74-3.84 1.57-5.75 2.5-4.84 2.35-9.53 5.23-14.07 8.57h-40.01v136.67c-3.83 1.08-7.54 2.21-11.07 3.5V304.1H62.14v146.46h49.31c-4.51 2.88-8.48 6.44-11.78 11.07H41.6c-1.54 0-2.95.64-3.98 1.66a5.607 5.607 0 0 0-1.66 3.98v8.47h56.93c-1.04 3.37-1.87 7.09-2.48 11.21H30.43c-.41 0-.82-.05-1.2-.13H16.71c-1.54 0-2.95.64-3.98 1.66a5.59 5.59 0 0 0-1.66 3.98v8.6h78.19c-.03 1.28-.05 2.59-.05 3.93-.28 2.49-.29 4.87-.08 7.14H5.54c-3.06 0-5.54-2.48-5.54-5.53v-14.14c0-4.59 1.88-8.76 4.91-11.79v-.02c3.02-3.02 7.2-4.91 11.8-4.91h8.18v-8.47c0-4.58 1.88-8.76 4.91-11.78v-.02c3.02-3.03 7.2-4.91 11.8-4.91h9.46V304.1H24.82c-3.05 0-5.54-2.48-5.54-5.54v-7.11c0-7.35 3.02-14.04 7.87-18.9l.02-.02c4.87-4.86 11.56-7.87 18.9-7.87h2.76V253c0-7.35 3.02-14.04 7.87-18.9l.02-.02c4.87-4.86 11.56-7.87 18.9-7.87H361.6c7.37 0 14.06 3.03 18.91 7.88 4.86 4.86 7.88 11.57 7.88 18.91v11.66h2.76c7.37 0 14.07 3.02 18.92 7.87 4.85 4.86 7.87 11.57 7.87 18.92v7.11c0 3.06-2.48 5.54-5.53 5.54h-26.24zM193.33 427.81c-5.3-4.72-9.5-8.13-10.39-17.93l-.57.01c-1.31-.02-2.58-.32-3.77-1-1.9-1.08-3.24-2.93-4.14-5.03-1.91-4.39-3.43-15.94 1.39-19.24l-.91-.6-.1-1.28c-.18-2.32-.23-5.14-.28-8.09-.17-10.86-.39-22.6-9.13-25.24l-3.74-1.13 2.47-3.06c7.05-8.72 14.43-16.34 21.86-22.2 8.41-6.62 16.96-11.03 25.33-12.3 8.6-1.31 16.93.67 24.63 6.89 2.27 1.84 4.48 4.04 6.6 6.63 8.22.79 14.93 5.22 19.72 11.53 2.86 3.76 5.03 8.22 6.42 12.96 1.38 4.72 1.98 9.74 1.72 14.68-.46 8.86-3.7 16.08-10.23 22.39 1.15.04 2.23.3 3.19.81 3.64 1.95 3.76 6.18 2.8 9.73-.95 2.97-2.15 6.41-3.28 9.3-1.38 3.9-3.39 4.63-7.28 4.21-.2 9.64-4.66 12.29-10.66 17.96.25 14.53-51.97 12.82-51.65 0zm-2.7 11.97 15.53 40.8 7.82-22.24-3.83-4.19c-2.88-4.2-1.89-8.98 3.44-9.84 1.8-.29 3.83-.11 5.78-.11 2.08 0 4.39-.19 6.35.24 4.95 1.09 5.47 5.89 3 9.71l-3.83 4.19 7.81 22.24 14.05-40.8c33.35 30.01 79.92 5.28 79.92 65.21H110.56c0-57.49 45.47-34.07 80.07-65.21zM361.6 237.29H75.62c-4.33 0-8.26 1.76-11.09 4.6l-.02.02a15.62 15.62 0 0 0-4.6 11.09v11.07h317.41V253c0-4.29-1.78-8.23-4.64-11.09-2.85-2.84-6.77-4.62-11.08-4.62zm-30.59 86.7h22.08v20.76h-22.08v-20.76zm0 42.96h22.08v20.76h-22.08v-20.76zm0 42.96h22.08v20.76h-22.08v-20.76zM84.14 323.99h22.08v20.76H84.14v-20.76zm0 42.96h22.08v20.76H84.14v-20.76zm0 42.96h22.08v20.76H84.14v-20.76zm72.79-223.5a5.541 5.541 0 0 1-7.59 1.88 5.524 5.524 0 0 1-1.88-7.59c4.91-8.14 10.91-15.08 17.86-20.72 6.99-5.68 14.92-10.02 23.67-12.96 2.89-.97 6.01.59 6.98 3.48.97 2.89-.59 6.02-3.48 6.98-7.48 2.52-14.25 6.23-20.2 11.06-5.94 4.81-11.09 10.8-15.36 17.87zm69.23-167.84c48.79-33.74 52.44 33.03 100.37-8.66v68.03c-45.71 41.11-55.57-25.3-100.37 8.44V18.57zM214.1 0c5.14 0 9.31 4.17 9.31 9.31 0 3.42-1.83 6.4-4.57 8.02h.44v84.34c31.91.16 61.14 11.68 83.85 30.73 23.24 19.49 40.01 48.2 45.47 79.9h-11.25c-5.01-28.51-20.04-53.58-41.31-71.42-20.94-17.56-47.95-28.14-77.42-28.14-29.48 0-56.49 10.58-77.43 28.13-21.27 17.85-35.77 40.93-40.78 69.44H88.98c5.47-31.05 21.88-58.43 45.12-77.91 20.55-17.24 46.45-28.31 74.83-30.38V17.33h.44a9.301 9.301 0 0 1-4.58-8.02c0-5.14 4.17-9.31 9.31-9.31z"/></svg>
        },
        {
          name: "Real Estate",
          description: "Helping real estate agents showcase properties and attract buyers effectively.",
          svg : <svg height={"100"} xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 110.18 122.88"  ><g><path fill="#211d37" d="M87.74,72.49c-0.02,0.17-0.07,0.34-0.15,0.49c-0.09,0.38-0.13,0.81-0.13,1.28c0,0.05,0.01,0.09,0.01,0.14v31.15 c0.39,0.98,0.88,1.71,1.46,2.17c0.54,0.43,1.2,0.64,2.01,0.6c0.06-0.01,0.11-0.01,0.17-0.01h8.93v0c0.02,0,0.05,0,0.07,0 c1.39,0.07,2.4-0.31,3.07-1.08c0.76-0.87,1.2-2.29,1.35-4.18l0,0l0-0.02l2.72-28.11c0-0.04,0-0.09,0.01-0.13 c0.19-1.6-0.16-2.64-0.95-3.24c-0.9-0.7-2.41-0.99-4.35-0.98c-0.05,0-0.09,0.01-0.14,0.01H91.76v-0.01c-1.54,0-2.66,0.31-3.35,0.93 C88.12,71.77,87.9,72.09,87.74,72.49L87.74,72.49L87.74,72.49z M49.68,26.98h13.58c0.53,0,0.96,0.42,0.96,0.94v10.62 c0,0.52-0.43,0.94-0.96,0.94H49.68c-0.53,0-0.96-0.42-0.96-0.94V27.92C48.72,27.4,49.15,26.98,49.68,26.98L49.68,26.98z M62.3,34.17h-5.04v3.43h5.04V34.17L62.3,34.17z M55.38,34.17h-4.74v3.43h4.74V34.17L55.38,34.17z M50.64,32.29h4.74v-3.43h-4.74 V32.29L50.64,32.29z M57.26,32.29h5.04v-3.43h-5.04V32.29L57.26,32.29z M23.66,63.47V38.71c-1.54,0.59-2.97,0.6-4.17,0.2 c-0.93-0.31-1.72-0.88-2.3-1.61c-0.58-0.73-0.95-1.62-1.06-2.59c-0.17-1.51,0.28-3.24,1.58-4.84l0,0c0.06-0.08,0.14-0.16,0.22-0.22 L55.43,0.36c0.48-0.45,1.24-0.49,1.77-0.07L94.78,29.5l0,0c0.06,0.04,0.11,0.09,0.16,0.15c1.74,1.87,2.17,3.95,1.75,5.71 c-0.21,0.86-0.62,1.65-1.19,2.29c-0.57,0.64-1.3,1.14-2.13,1.44c-1.32,0.48-2.88,0.46-4.46-0.29v23.53l-2.75-2.23V37.17 c0-0.09,0.01-0.18,0.03-0.26L56.6,13.92l-30.23,23c0.03,0.11,0.05,0.23,0.05,0.35v25.46L23.66,63.47L23.66,63.47z M19.76,31.69 c-0.73,0.95-0.99,1.9-0.9,2.71c0.05,0.46,0.22,0.87,0.48,1.2c0.25,0.32,0.6,0.57,1.02,0.71c0.72,0.24,1.64,0.18,2.7-0.32 l32.71-24.89c0.4-0.3,0.9-0.36,1.33-0.19c0.28,0.11,0.56,0.36,0.8,0.54L89.24,35.8c0.01,0.01,0.03,0.02,0.04,0.03 c1.16,0.84,2.28,0.97,3.14,0.66c0.4-0.14,0.75-0.38,1.02-0.69c0.27-0.31,0.47-0.68,0.57-1.09c0.22-0.91-0.04-2.02-1.02-3.12 L56.36,3.12L19.76,31.69L19.76,31.69L19.76,31.69z M47.57,48.39h16.47c0.74,0,1.34,0.62,1.34,1.38v5.86l-2.67-0.93v-3.55l0,0H48.9 v3.55l-2.67,0.93v-5.86C46.23,49.01,46.83,48.39,47.57,48.39L47.57,48.39L47.57,48.39z M77.9,106.96c-0.22-0.2-0.37-0.47-0.43-0.77 L63.12,80.36c-1.59-2.66-3.03-2.73-4.42-1.9c-0.98,0.59-2.02,1.54-3.06,2.49c-0.63,0.57-1.25,1.15-1.79,1.58l-2.46,2.04l0,0 l-0.02,0.01c-1.79,1.45-3.82,2.22-5.74,2.38c-1.26,0.1-2.49-0.06-3.59-0.47c-1.14-0.43-2.14-1.12-2.9-2.06 c-0.82-1.01-1.35-2.3-1.48-3.83l0.01,0c-0.03-0.36,0.08-0.74,0.33-1.04l7.84-9.33c-1.65-0.02-3.11,0.2-4.48,0.63 c-2.09,0.65-4.04,1.79-6.18,3.24c-0.24,0.19-0.55,0.31-0.89,0.31h-9.05v17.06l0.04,10.91h5.25v0c0.5,0,0.98,0.26,1.25,0.72 l6.52,11.38c0.95,1.66,1.79,3.09,2.85,4.04c0.99,0.88,2.28,1.43,4.27,1.49c0.75,0.02,1.46-0.11,2.14-0.39 c0.42-0.17,0.83-0.4,1.23-0.7l-4.23-7.91c-0.37-0.7-0.11-1.57,0.59-1.94c0.7-0.37,1.57-0.11,1.94,0.59l4.6,8.6 c1.71,0.87,3.26,1.14,4.66,0.84c1.28-0.28,2.48-1.04,3.61-2.28l-6.62-10.4c-0.43-0.67-0.23-1.55,0.44-1.98 c0.67-0.43,1.55-0.23,1.98,0.44l6.98,10.96c1.22,0.5,2.4,0.61,3.52,0.3c1.07-0.29,2.14-0.98,3.21-2.09l-6.32-11.91 c-0.37-0.7-0.11-1.57,0.6-1.95c0.7-0.37,1.57-0.11,1.95,0.6l6.54,12.32c0.85,0.49,1.84,0.62,2.78,0.47 c0.83-0.14,1.62-0.49,2.28-1.01c0.63-0.5,1.12-1.15,1.36-1.89c0.26-0.8,0.24-1.73-0.19-2.75L77.9,106.96L77.9,106.96L77.9,106.96z M79.8,104.46h4.79V74.41c0-0.04,0-0.08,0-0.11c0-0.47,0.03-0.91,0.09-1.33l-4.87-3.25c-0.03-0.02-0.05-0.04-0.08-0.06 c-0.63-0.43-1.39-0.96-2.16-1.49c-2.77-1.94-5.62-3.94-8.69-4.74c-1.66-0.44-3.58-0.73-5.53-0.76c-1.71-0.03-3.45,0.13-5.09,0.55 c-0.98,0.25-1.92,0.6-2.8,1.07c-0.78,0.41-1.51,0.92-2.15,1.52l-3.27,3.89c-0.1,0.19-0.24,0.36-0.41,0.49L40.61,80.9 c0.13,0.68,0.4,1.26,0.77,1.72c0.43,0.53,1,0.93,1.66,1.17c0.7,0.26,1.5,0.36,2.35,0.29c1.38-0.11,2.84-0.68,4.16-1.74l0,0 l2.46-2.04c0.63-0.52,1.16-1,1.68-1.48c1.16-1.06,2.31-2.11,3.52-2.83c2.81-1.67,5.6-1.73,8.37,2.91l0.03,0.05L79.8,104.46 L79.8,104.46L79.8,104.46z M85.12,107.34h-3.83c0.52,1.51,0.49,2.95,0.08,4.22c-0.42,1.31-1.25,2.42-2.3,3.26 c-1.03,0.82-2.29,1.38-3.6,1.59c-1.29,0.21-2.63,0.1-3.88-0.42c-1.45,1.52-2.98,2.48-4.58,2.92c-1.6,0.44-3.23,0.35-4.87-0.22 c-1.56,1.73-3.28,2.81-5.18,3.22c-1.93,0.42-3.99,0.13-6.17-0.9c-0.68,0.53-1.39,0.95-2.13,1.26c-1.05,0.44-2.15,0.64-3.31,0.6 c-2.76-0.08-4.62-0.9-6.1-2.22c-1.41-1.26-2.36-2.88-3.43-4.75l-6.11-10.65h-4.74c-0.27,1.38-0.75,2.54-1.47,3.47 c-1.21,1.56-2.98,2.38-5.43,2.33c-0.03,0-0.05,0-0.08,0H9.87c-2.04,0.33-3.8-0.17-5.17-1.76c-1.22-1.41-2.05-3.69-2.4-7.05 c-0.01-0.04-0.01-0.08-0.02-0.12L0.15,75.67c-0.42-2.86,0.04-4.87,1.19-6.25c1.16-1.39,2.9-2.02,5.05-2.12 c0.06-0.01,0.12-0.01,0.18-0.01h10.93v0.01c2.06-0.02,3.84,0.32,5.19,1.19c1.08,0.7,1.86,1.69,2.26,3.03h8.9 c2.24-1.51,4.33-2.69,6.65-3.42c2.27-0.71,4.71-0.96,7.63-0.61l2.98-3.55c0.05-0.07,0.11-0.14,0.18-0.2 c0.85-0.8,1.8-1.47,2.82-2.01c1.07-0.57,2.23-1,3.42-1.31c1.9-0.49,3.91-0.68,5.86-0.64c2.21,0.04,4.36,0.37,6.22,0.85 c3.55,0.93,6.62,3.08,9.6,5.17c0.67,0.47,1.32,0.93,2.11,1.45c0.03,0.02,0.05,0.03,0.08,0.05l4.32,2.88 c0.22-0.3,0.47-0.58,0.75-0.83c1.24-1.11,3.01-1.66,5.28-1.66v-0.01l10.06,0c0.04,0,0.08,0,0.12,0.01 c2.58-0.01,4.67,0.46,6.12,1.58c1.62,1.24,2.37,3.14,2.05,5.86c0,0.02-0.01,0.05-0.01,0.07l-2.71,28.08l0,0 c-0.2,2.51-0.87,4.48-2.05,5.84c-1.26,1.45-3.01,2.17-5.31,2.07v0h-8.94c-1.55,0.08-2.86-0.34-3.96-1.22 C86.32,109.33,85.65,108.45,85.12,107.34L85.12,107.34L85.12,107.34z M12.55,96.43c1.07,0,1.94,0.87,1.94,1.94 c0,1.07-0.87,1.94-1.94,1.94c-1.07,0-1.94-0.87-1.94-1.94C10.61,97.3,11.48,96.43,12.55,96.43L12.55,96.43z M97.24,96.43 c1.07,0,1.94,0.87,1.94,1.94c0,1.07-0.87,1.94-1.94,1.94c-1.07,0-1.94-0.87-1.94-1.94C95.3,97.3,96.17,96.43,97.24,96.43 L97.24,96.43z M22.37,88.14l-0.05-15.18c0-0.03,0-0.06,0-0.09c-0.16-0.95-0.57-1.58-1.18-1.98c-0.83-0.54-2.08-0.75-3.62-0.73 h-0.02v0.01H6.58c-0.02,0-0.04,0-0.06,0c-1.35,0.06-2.39,0.39-2.97,1.09C2.93,72,2.71,73.29,3.01,75.29 c0.01,0.04,0.01,0.08,0.01,0.12l2.14,26.48l0,0.05c0.29,2.74,0.88,4.5,1.72,5.47c0.66,0.77,1.57,0.99,2.65,0.79 c0.08-0.02,0.17-0.02,0.25-0.02v-0.01h8.2c0.05,0,0.1,0,0.15,0.01c1.45,0.02,2.45-0.41,3.08-1.22c0.74-0.95,1.09-2.44,1.15-4.36h0 L22.37,88.14L22.37,88.14L22.37,88.14z M65.62,78.94L65.62,78.94L65.62,78.94L65.62,78.94z M65.62,78.94L65.62,78.94L65.62,78.94 L65.62,78.94z"/></g></svg>
        },
        {
          name: "Technologies",
          description: "Marketing solutions for tech companies to boost visibility and industry presence.",
          svg : <svg height={"100"} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 111.48"><defs><style></style></defs><title>tech</title><path fill="#211d37" className="cls-1" d="M50.21,38.57A17.17,17.17,0,1,1,33,55.74,17.17,17.17,0,0,1,50.21,38.57ZM91.31,94V85.28H67.46a44,44,0,0,0,5.64-6.17H94.38a3.09,3.09,0,0,1,3.08,3.07V94A9,9,0,1,1,91.31,94ZM89.16,30.71H75.51A44.78,44.78,0,0,0,71,24.55H86.09v-7a9,9,0,1,1,6.15-.06V27.64a3.07,3.07,0,0,1-3.08,3.07ZM122.88,15a9,9,0,1,0-12.65,8.25v18H80.12a43.4,43.4,0,0,1,1.27,6.16H113.3a3.09,3.09,0,0,0,3.07-3.08V23.67A9,9,0,0,0,122.88,15Zm-.15,49.93a9,9,0,0,0-17.49-3.08H80.88A42.08,42.08,0,0,1,79.14,68h26.1a9,9,0,0,0,17.49-3.07ZM49.56,105.3H46a6.13,6.13,0,0,1-6.12-6.11V92.93a38.11,38.11,0,0,1-10-3.78l-4.18,4.18a6.13,6.13,0,0,1-8.65,0L12,88.24a6.14,6.14,0,0,1,0-8.65l3.81-3.81a38,38,0,0,1-4.47-10.33H6.12A6.13,6.13,0,0,1,0,59.34v-7.2A6.13,6.13,0,0,1,6.12,46h5.12a38,38,0,0,1,4.44-10.44L12,31.88a6.14,6.14,0,0,1,0-8.64l5.09-5.09a6.13,6.13,0,0,1,8.65,0l4,4a38,38,0,0,1,10.13-3.87v-6A6.13,6.13,0,0,1,46,6.18h7.19A6.13,6.13,0,0,1,59.27,12V32.48A24.54,24.54,0,0,0,50.84,31c-.43,0-.86,0-1.28,0s-.85,0-1.27,0a24.61,24.61,0,1,0,0,49.21c.42,0,.85,0,1.27,0s.85,0,1.28,0a24.54,24.54,0,0,0,8.43-1.48V99.48a6.13,6.13,0,0,1-6.11,5.82Z"/></svg>
        },
        {
          name: "Ecommerce",
          description: "Promoting health and wellness through strategic marketing initiatives.",
          svg : <svg height={"100"} xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 118.67 122.88"  ><g><path fill="#211d37" d="M3.92,22.79C1.81,22.79,0,20.99,0,18.77c0-2.11,1.81-3.92,3.92-3.92h5.43c0.1,0,0.3,0,0.41,0c3.62,0.1,6.84,0.8,9.54,2.51 c3.01,1.91,5.22,4.82,6.43,9.15c0,0.1,0,0.2,0.1,0.3l1,4.03h11.59c0.73,2.95,2.34,5.7,4.78,7.83H29.04l0,0l8.94,33.67h63.4 l8.33-33.67H95.95c2.44-2.13,4.04-4.89,4.78-7.83h13.06h0.96c2.21,0,3.92,1.81,3.92,3.92c0,0.41-0.11,0.8-0.2,1.21l-10.25,41.29 c-0.41,1.81-2.01,3.01-3.81,3.01l0,0H40.09c1.41,5.22,2.81,8.04,4.72,9.35c2.31,1.51,6.33,1.6,13.07,1.51h0.1l0,0h45.42 c2.21,0,3.92,1.81,3.92,3.92c0,2.21-1.81,3.92-3.92,3.92H57.98l0,0c-8.34,0.1-13.46-0.1-17.59-2.81 c-4.22-2.81-6.43-7.64-8.64-16.38l0,0L18.29,28.83c0-0.1,0-0.1-0.1-0.2c-0.6-2.21-1.6-3.72-3.01-4.52c-1.41-0.91-3.31-1.3-5.52-1.3 c-0.1,0-0.2,0-0.3,0L3.92,22.79L3.92,22.79L3.92,22.79L3.92,22.79z M66.62,44.11L50.36,30.76c-1.99-1.6-2.31-4.53-0.71-6.52 c1.6-1.99,4.53-2.31,6.52-0.71l8.77,7.3l-0.01-26.2C64.92,2.07,67,0,69.55,0c2.56,0,4.63,2.07,4.63,4.63l0.01,26.21l8.78-7.3 c1.99-1.6,4.91-1.28,6.52,0.71c1.6,1.99,1.28,4.91-0.71,6.52L72.52,44.11l-0.05,0.04c-1.71,1.33-3.94,1.43-5.79,0L66.62,44.11 L66.62,44.11L66.62,44.11z M81.49,58.08c0-1.24,1.23-2.24,2.73-2.24c1.51,0,2.73,1,2.73,2.24v4.71c0,1.24-1.23,2.24-2.73,2.24 c-1.51,0-2.73-1-2.73-2.24V58.08L81.49,58.08L81.49,58.08z M65.12,58.08c0-1.24,1.23-2.24,2.73-2.24c1.51,0,2.73,1,2.73,2.24v4.71 c0,1.24-1.23,2.24-2.73,2.24c-1.51,0-2.73-1-2.73-2.24V58.08L65.12,58.08L65.12,58.08z M48.76,58.08c0-1.24,1.23-2.24,2.73-2.24 c1.51,0,2.73,1,2.73,2.24v4.71c0,1.24-1.23,2.24-2.73,2.24c-1.51,0-2.73-1-2.73-2.24V58.08L48.76,58.08L48.76,58.08z M91.64,103.58 c5.33,0,9.65,4.32,9.65,9.65s-4.32,9.65-9.65,9.65c-5.32,0-9.65-4.32-9.65-9.65S86.32,103.58,91.64,103.58L91.64,103.58 L91.64,103.58L91.64,103.58z M49.34,103.58c5.32,0,9.65,4.32,9.65,9.65s-4.32,9.65-9.65,9.65c-5.33,0-9.65-4.32-9.65-9.65 S44.01,103.58,49.34,103.58L49.34,103.58L49.34,103.58L49.34,103.58z"/></g></svg>
        },
        {
          name: "Healthy",
          description: "Promoting health and wellness through strategic marketing initiatives.",
          svg : <svg height={"100"} xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 114.45"><style type="text/css"></style><g><path fill="#211d37" className="st0" d="M59.02,38.48h4.83c0.9,0,1.64,0.74,1.64,1.64v7.2h7.2c0.9,0,1.64,0.74,1.64,1.64v4.83 c0,0.9-0.74,1.64-1.64,1.64h-7.2v7.2c0,0.9-0.74,1.64-1.64,1.64h-4.83c-0.9,0-1.64-0.74-1.64-1.64v-7.2h-7.2 c-0.9,0-1.64-0.74-1.64-1.64v-4.83c0-0.9,0.74-1.64,1.64-1.64h7.2v-7.2C57.38,39.22,58.12,38.48,59.02,38.48L59.02,38.48z M110.8,107.88v4.48c0,1.16-0.94,2.09-2.09,2.09h-95.1c-1.16,0-2.09-0.94-2.09-2.09V58.91c-2.34,0.9-4.53,0.92-6.35,0.3 c-1.42-0.48-2.62-1.34-3.5-2.45c-0.88-1.11-1.44-2.46-1.61-3.95c-0.26-2.31,0.43-4.92,2.4-7.37l0,0c0.1-0.12,0.21-0.24,0.34-0.34 L59.85,0.55c0.74-0.68,1.88-0.75,2.7-0.11l57.19,44.46l0,0c0.09,0.07,0.17,0.14,0.25,0.23c2.65,2.85,3.31,6.01,2.67,8.69 c-0.32,1.32-0.95,2.5-1.82,3.48c-0.87,0.98-1.98,1.74-3.24,2.19c-2,0.72-4.38,0.7-6.79-0.44L110.8,107.88L110.8,107.88 L110.8,107.88z M5.57,48.23c-1.11,1.45-1.5,2.9-1.37,4.12c0.08,0.7,0.33,1.32,0.72,1.82c0.39,0.49,0.92,0.86,1.56,1.08 c1.09,0.37,2.5,0.27,4.11-0.49l49.79-37.88c0.77-0.59,1.82-0.56,2.55,0.01l0,0l48.37,37.6c0.02,0.02,0.04,0.04,0.07,0.05 c1.77,1.28,3.47,1.48,4.79,1.01c0.61-0.22,1.14-0.58,1.55-1.05c0.42-0.47,0.72-1.03,0.87-1.66c0.33-1.38-0.07-3.08-1.55-4.74 L61.27,4.74L5.57,48.23L5.57,48.23L5.57,48.23z M29.6,75.49h26.7c1.04,0,1.89,0.83,1.89,1.85v20.89c0,1.02-0.85,1.85-1.89,1.85 H29.6c-1.04,0-1.89-0.83-1.89-1.85V77.34C27.72,76.32,28.56,75.49,29.6,75.49L29.6,75.49z M67.73,73.64H92.8 c1.12,0,2.03,0.94,2.03,2.1v34.52h11.78V56.57c0-0.14,0.01-0.27,0.04-0.4L61.64,21.18L15.63,56.19c0.05,0.17,0.07,0.35,0.07,0.54 v53.53h50V75.74C65.7,74.58,66.61,73.64,67.73,73.64L67.73,73.64L67.73,73.64z M90.77,77.84h-21v32.38h21V77.84L90.77,77.84 L90.77,77.84z M54.41,89.63H44.5v6.75h9.91V89.63L54.41,89.63z M40.8,89.63h-9.31v6.75h9.31V89.63L40.8,89.63z M31.49,85.93h9.31 v-6.74h-9.31V85.93L31.49,85.93z M44.5,85.93h9.91v-6.74H44.5V85.93L44.5,85.93z"/></g></svg>
        },{

          name:"Education",
          description :"Empowering educational institutions with strategic marketing for growth and success.",
          svg : <svg height={"100"} xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 88.08" ><style type="text/css">
          </style><g><path fill="#211d37" className="st0" d="M83.1,33.02l-0.3-11.21l-18.42,5.32c-1.66,0.36-3.29,0.54-4.9,0.54c-1.72,0.01-3.41-0.18-5.08-0.54l-17.6-5.38 v11.37c0.5,5.9,17.44,7.71,22.64,7.96c4.17,0.2,20.63-1.97,22.79-5.37C82.7,34.97,82.99,34.07,83.1,33.02L83.1,33.02z M2.54,83.01 h12.59c-0.93-0.24-1.63-1.1-1.63-2.1v-55.7c0-1.19,0.98-2.17,2.17-2.17h9.72c-0.31,1.11-0.49,2.24-0.51,3.4h-7.66l0,0v53.85h88.19 V26.44h-7.43c-0.02-1.16-0.19-2.29-0.5-3.4h9.17c1.19,0,2.17,0.98,2.17,2.17V80.9c0,1.01-0.69,1.86-1.63,2.1h13.16 c1.4,0,2.54,1.14,2.54,2.54l0,0c0,1.4-1.14,2.54-2.54,2.54H2.54c-1.4,0-2.54-1.14-2.54-2.54l0,0C0,84.15,1.14,83.01,2.54,83.01 L2.54,83.01L2.54,83.01z M27.14,70.69c-0.81,0-1.47-0.66-1.47-1.47s0.66-1.47,1.47-1.47h57.38c0.81,0,1.47,0.66,1.47,1.47 s-0.66,1.47-1.47,1.47H27.14L27.14,70.69z M27.14,61.92c-0.81,0-1.47-0.66-1.47-1.47s0.66-1.47,1.47-1.47h43.93 c0.81,0,1.47,0.66,1.47,1.47s-0.66,1.47-1.47,1.47H27.14L27.14,61.92z M27.14,53.15c-0.81,0-1.47-0.66-1.47-1.47 s0.66-1.47,1.47-1.47h57.84c0.81,0,1.47,0.66,1.47,1.47s-0.66,1.47-1.47,1.47H27.14L27.14,53.15z M57.87,83.96h7.14 c0.67,0,1.22,0.55,1.22,1.22l0,0c0,0.67-0.55,1.22-1.22,1.22h-7.14c-0.67,0-1.22-0.55-1.22-1.22l0,0 C56.65,84.5,57.2,83.96,57.87,83.96L57.87,83.96L57.87,83.96z M90.57,13.74v13.7H91c0.29,0,0.54,0.24,0.54,0.54v3.68 c0,0.29-0.24,0.54-0.54,0.54h-0.44v1.29c0.55,0.1,0.97,0.59,0.97,1.17v0c0,0.65-0.54,1.19-1.19,1.19h-2.13 c-0.65,0-1.19-0.53-1.19-1.19v0c0-0.58,0.42-1.06,0.97-1.17v-1.29h-0.43c-0.29,0-0.54-0.24-0.54-0.54v-3.68 c0-0.3,0.24-0.54,0.54-0.54H88v-12.9l-22.42,6.97c-4.06,0.97-8.12,1.03-12.18,0l-24.74-7.39l-2.24-0.67 c-2.79-1.14-2.09-3.81,0.5-4.43l27.99-8.36c2.89-0.82,5.77-0.95,8.66,0l27.48,8.26c2.99,0.73,3.58,3.49,0.1,4.63L90.57,13.74 L90.57,13.74z"/></g></svg>
        }
      ];
    const [currentIndex, setCurrentIndex] = useState(0);  
  
    useEffect(() => {  
        const interval = setInterval(() => {  
            setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);  
        }, 3000); // Change slides every 3 seconds  

        return () => clearInterval(interval); // Cleanup on component unmount  
    }, []);  
    return ( <div className={` ${Style.container} py-5 sm:py-10 px-5 sm:px-10 md:px-20`}>
        <Header title="We Have Served Diverse Clientele with Digital Marketing Services" upTitle="Our Services" dark={true} />
        
        <div  className={` ${Style.slider} grid grid-cols-1 sm:grid-cols-2 mt-12 lg:grid-cols-3 flex gap-5 overflow-hidden`}>
          {data.map((e,idx)=>(<div  className={``} key={`Images_services_${e.name}_${idx}`}>
                <div className={`${Style.content}`}>
                    <div  className={`${Style.info} p-5 sm:p-7 flex flex-col justify-center items-center lg:p-8`}>
                         <div className={`flex justify-center py-2`}>
                              {e.svg}
                          </div>
                        <h4 className="mb-2 text-center">{e.name}</h4>
                        <p  className="text-center">{e.description}</p>
                    </div>
                </div>
            </div>))}

        </div>
    </div> );
}

export default Services;