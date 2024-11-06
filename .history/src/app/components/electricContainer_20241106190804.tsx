import React, { useRef, useState, useEffect } from "react";
import {motion, AnimatePresence} from 'framer-motion'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import SlidingText from './slidingText'
interface Props {
 
}

const testimonials = [
    {
      title: 'CEO of Sainey Media',
      quote: 'Hard working, disciplined and fast.',
      author: 'Sainey Take',
      effect: `Working with Thomas Musial at FocusFlow Software to design my website was an incredible experience! Thomas kept me involved in every detail, ensuring the final result matched my vision. His ability to create unique designs that make my brand stand out, combined with his competitive pricing, makes him the best choice. If you're unsure about working with Thomas, consider this your sign to take the leap and invest in your business!`, // Example effect
    },
    {
      title: 'Senior Financial Advisor at Assante Wealth Management',
      effect: 'We recently had the pleasure of working with Thomas to develop our offices\' new website. \n' +
        'We found Thomas to be professional and he was quick in his response times to our requests for changes.\n' +
        'We are happy with the completed website and look forward to working with him in the future, to expand on the base he has started for us.',
      author: 'Darryl Smith',
      quote: 'Professional with fast response times',
    },
    {
      quote: 'Thomas is the man',
      effect: `I'd like to thank FocusFlow Software so much for creating my new website! I am so excited.  I'm a Real estate investing coach with a busy schedule. They were patient with me and my busy schedule and gave me gentle reminders which I needed.  If you're looking for someone who will give 110% to them... Thomas is THE man!`,
      author: 'Theresa Beneteau',
      title: 'Owner of Ontario Cash for Houses',
    },
  ];

const ElectricContainer:React.FC<Props> = ({
    
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
  
    const prevTestimonial = () => {
      setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };
  

    const  [waveAmplitude, setWaveAmplitude] = useState(2)

    useEffect(() => {
        const interval = setInterval(() => {
            setWaveAmplitude(Math.random() * (20 - 10) + 1); // Random amplitude between 1 and 4
        }, 1000); // Update every second

        return () => clearInterval(interval); // Clean up on unmount
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const c = canvas.getContext("2d");
        if (!c) return;
    
        const width = canvas.width = canvas.offsetWidth;
        const height = canvas.height = canvas.offsetHeight;
    
        let offset = 0;
    
        const drawElectricArc = () => {
            c.clearRect(0, 0, width, height);
    
            // Style for the electric outline
            c.lineWidth = 20;
            c.strokeStyle = "#e0f7ff";
            c.shadowBlur = 50;
            c.shadowColor = "#e0f7ff";
    
            // Define path for rounded rectangle with wavy effect
            const radius = 25; // Radius for the rounded corners
           ; // Amplitude of the waviness
            const waveFrequency = 0.05; // Frequency of the waviness
    
            c.beginPath();
    
            // Top edge with waviness
            for (let x = radius; x < width - radius; x++) {
                const yOffset = Math.sin((x + offset) * waveFrequency) * waveAmplitude;
                c.lineTo(x, yOffset);
            }
    
            // Top-right corner
            c.quadraticCurveTo(width, 0, width, radius);
    
            // Right edge with waviness
            for (let y = radius; y < height - radius; y++) {
                const xOffset = Math.sin((y + offset) * waveFrequency) * waveAmplitude;
                c.lineTo(width + xOffset, y);
            }
    
            // Bottom-right corner
            c.quadraticCurveTo(width, height, width - radius, height);
    
            // Bottom edge with waviness
            for (let x = width - radius; x > radius; x--) {
                const yOffset = Math.sin((x + offset) * waveFrequency) * waveAmplitude;
                c.lineTo(x, height - yOffset);
            }
    
            // Bottom-left corner
            c.quadraticCurveTo(0, height, 0, height - radius);
    
            // Left edge with waviness
            for (let y = height - radius; y > radius; y--) {
                const xOffset = Math.sin((y + offset) * waveFrequency) * waveAmplitude;
                c.lineTo(xOffset, y);
            }
    
            // Top-left corner
            c.quadraticCurveTo(0, 0, radius, 0);
    
            c.closePath();
            c.stroke();
    
            offset += 0.5; // Speed of the wave animation
        };
    
        const animate = () => {
            drawElectricArc();
            requestAnimationFrame(animate);
        };
    
        animate();
    }, []);
    

    
    const [selectedIndex, setSelectedIndex] = useState(0)

   


    return (
        <>
          <SlidingText
      text='Client Success, Delivered'
      />
        <section className="relative  text-gray-200 bg-gradient-to-b from-[#00bfff] to-[#679aab] w-[95vw] mx-auto max-w-[900px]
         rounded-2xl overflow-hidden h-[90vh] max-h-[500px]">
                    
                    <IoIosArrowForward className="absolute sm:text-5xl top-[40%] right-0 text-2xl hover:text-blue-200
          hover:scale-[1.15] z-[12] transition-all" onClick={nextTestimonial} />
        <IoIosArrowBack className="absolute top-[40%] left-0 text-2xl
          hover:text-blue-200 z-[12]
          hover:scale-[1.15] transition-all sm:text-5xl" onClick={prevTestimonial} />

        <AnimatePresence mode='wait'>
          <motion.p key={currentTestimonial} className="font-bold mb-4 pl-8 pr-8 mt-8
            text-2xl md:text-3xl lg:text-4xl sm:pl-12 sm:pr-12 pt-8 text-center"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
          >
            {testimonials[currentTestimonial].quote}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <motion.p key={currentTestimonial} className="pl-8 pr-8 sm:pl-12 sm:pr-12 sm:text-xl
            whitespace-pre-line text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            exit={{ opacity: 0 }}
          >
            {testimonials[currentTestimonial].effect}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <motion.p key={currentTestimonial} className="mt-8 pl-6 sm:pl-12 pr-8
            sm:text-lg text-left md:text-xl font-semibold" 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
            exit={{ opacity: 0 }}
          >
            -{testimonials[currentTestimonial].author}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence mode='wait'>
          <motion.p key={currentTestimonial} className="pl-8 pr-8 sm:pl-12 sm:text-lg
            text-left md:text-xl font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.8 } }}
            exit={{ opacity: 0 }}
          >
            {testimonials[currentTestimonial].title}
          </motion.p>
        </AnimatePresence>
        

            {/* Canvas overlay for electric effect */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 rounded-2xl pointer-events-none
              w-full h-full max-w-[900px] max-h-[500px]"
                style={{ zIndex: 1 }}
            ></canvas>
        </section>
        </>
    );
   
};

export default ElectricContainer;
