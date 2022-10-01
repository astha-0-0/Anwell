import React from 'react'
import "../index.css"

function Home() {
  return (
    <div class="m">
		<marquee class="marq"
				bgcolor="Green"
				direction="down"
				behavior="scroll"
				loop="60">
		<p className='h-20'>The  tag in HTML is used to create scrolling text or images in a webpage. It scrolls either from horizontally left to right or right to left, or vertically top to bottom or bottom to top.

In this article, we will set the direction and behavior of the marquee tag in HTML

Syntax: The marquee element comes in pairs. It means that the tag has an opening and closing elements.</p>
		</marquee>
	</div>
  )
}

export default Home