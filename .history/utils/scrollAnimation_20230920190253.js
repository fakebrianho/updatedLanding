import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)

let mySplitText = new SplitText('.landing_text', { type: 'chars' })
let chars = mySplitText.chars
const section1 = document.querySelector()

const scroll = () => {
	//
}
