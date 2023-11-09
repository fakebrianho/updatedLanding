'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import usePage from '../context/pageContext'
import { fadeOut } from '../utils/fadeOut'
import scroll from '../utils/scrollAnimation'
import ModalMenu from '../components/ModalMenu/ModalMenu'
import { useRef } from 'react'
import NavBarFull from './NavBarFull/NavBarFull'

export const NavigationBar = () => {
	const { lenis } = usePage()
	const menu = useRef()
	const [isMenuOpen, setIsMenuOpen] = useState(false) // Define a new state variable
	const [isMobile, setIsMobile] = useState(window.innerWidth < 667)

	const buttonClassName = isMenuOpen
		? 'hamburger nav_menu hamburger--collapse is-active'
		: 'hamburger nav_menu hamburger--collapse'

		useEffect(() => {
			const handleResize = () => {
			  setIsMobile(window.innerWidth < 768);
			};
		
			window.addEventListener('resize', handleResize);
		
			// Cleanup the event listener on component unmount
			return () => {
			  window.removeEventListener('resize', handleResize);
			};
		  }, []);
		
		  return (
			<div>
			  {isMobile ? <MobileNavBar /> : <NavBar />}
			</div>
		  );
		};
		
		export default App;
		In this example:
		
		Two separate components NavBar and MobileNavBar are defined for the desktop and mobile versions of the navigation bar, respectively.
		The App component maintains a state isMobile to track whether the window width is less than 768 pixels (a common breakpoint for mobile views).
		The useEffect hook is used to set up an event listener for the resize event on the window object. When the window is resized, the handleResize function is called, which updates the isMobile state based on the current window width.
		The useEffect hook also returns a cleanup function that removes the resize event listener when the App component is unmounted. This prevents memory leaks and ensures that the event listener is cleaned up properly.
		The App component's render function conditionally renders either the MobileNavBar or NavBar component based on the value of the isMobile state.
		This setup allows you to conditionally render different versions of your navigation bar based on the window width, and it will update the rendered navigation bar in response to window resize events.
		
		
		
		
		User
		Can you explain what an api might be in a web application 
		ChatGPT
		Certainly! API stands for Application Programming Interface. It acts as a bridge that allows different software applications to communicate with each other. In the context of web applications, APIs are typically used to retrieve data from a server or send data to a server in a structured format, usually JSON or XML.
		
		Here are the core components and functionalities of APIs in a web application:
		
		Endpoint:
		
		An endpoint is a specific route or URL where an API can be accessed.
		Each endpoint corresponds to a specific API function.
		HTTP Methods:
		
		APIs use standard HTTP methods to perform actions:
		GET: Retrieve data.
		POST: Send new data.
		PUT or PATCH: Update existing data.
		DELETE: Remove data.
		Request and Response:
		
		Request: When you want to interact with an API, you send a request to a specific endpoint, possibly with some data attached if you are creating or updating a record.
		Response: The API processes the request and sends back a response, often containing requested data or the result of the operation.
		Authentication:
		
		Many APIs require authentication to ensure that only authorized users can access or modify data.
		This can be done through various methods like API keys, OAuth tokens, or basic authentication.
		Rate Limiting:
		
		To prevent abuse and ensure fair usage, APIs often have rate limits on the number of requests a user or application can make in a certain timeframe.
		Error Handling:
		
		APIs have standardized ways of reporting errors, usually through HTTP status codes and error messages in the response body.
		Data Format:
		
		APIs use standard data formats like JSON or XML to structure the data they send and receive.
		Documentation:
		
		Good APIs have thorough documentation that explains how to use the API, including available endpoints, request/response formats, authentication requirements, and error codes.
		In a typical web application, APIs play a critical role in fetching data from the server, submitting new data, updating existing data, and deleting data. They allow the front-end of the application (what the user interacts with) to communicate with the back-end of the application (where data is stored and processed) in a secure, reliable, and structured way.
		
		
		
		
		User
		https://github.com/pmndrs/react-three-rapier#moving-things-around-and-applying-forces Please write some demo code for me to use my arrow keys to move the rigid body 
		ChatGPT
		The library you're referring to, react-three-rapier, is a wrapper for the Rapier physics engine for use with react-three-fiber. To create a setup where arrow keys control the movement of a rigid body, you would need to create event listeners for key presses and then apply forces or modify the velocity of the rigid body in response to these events.
		
		Below is a simplified example demonstrating how you might use the arrow keys to apply forces to a rigid body using react-three-rapier:
		
		javascript
		Copy code
		import React, { useEffect, useRef } from "react";
		import { Canvas } from "@react-three/fiber";
		import { Physics, useBox } from "@react-three/cannon";
		
		function Box() {
		  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 5, 0] }));
		  useEffect(() => {
			const handleKeyDown = (e
		
		
		
		
		

	useEffect(() => {
		if (lenis) {
			const handleLoad = () => {
				const loader = document.querySelector('.loader_container')
				fadeOut(loader)
				scroll()
				lenis.start()
			}

			// If the document is already loaded, call the handler immediately
			if (document.readyState === 'complete') {
				handleLoad()
			} else {
				// Otherwise, add a listener for the 'load' event
				window.addEventListener('load', handleLoad)

				// Cleanup - remove the event listener on unmount
				return () => {
					window.removeEventListener('load', handleLoad)
				}
			}
		}
	}, [lenis])

	useEffect(() => {
		console.log(menu.current)
	}, [menu])

	const handleMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen) // Toggle the isMenuOpen state variable
	}
	return (
		<>
			<NavBarFull />
			<div className='navbar'>
				<div className='nav_logo'>
					<Image
						src='/uncertain-universe-logo.svg'
						className='logo'
						height={75}
						width={75}
						alt='Logo'
					></Image>
				</div>
				<button
					onClick={handleMenuOpen}
					ref={menu}
					className={buttonClassName} // Use the computed class name
					type='button'
				>
					<span className='hamburger-box'>
						<span className='hamburger-inner'></span>
					</span>
				</button>
			</div>
			<ModalMenu isOpen={isMenuOpen} />
		</>
	)
}
