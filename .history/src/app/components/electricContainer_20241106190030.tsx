import React, { useRef, useState, useEffect } from "react";
import {motion, AnimatePresence} from 'framer-motion'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface Props {
 
}

const ElectricContainer:React.FC<Props> = ({
    
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
        <section className="relative  text-gray-200 bg-gradient-to-b from-[#00bfff] to-[#679aab] w-[95vw] mx-auto max-w-[900px]
         rounded-2xl overflow-hidden h-[90vh] max-h-[500px]">
                    
                    <IoIosArrowForward className="absolute sm:text-5xl top-[40%] right-0 text-2xl hover:text-blue-200
          hover:scale-[1.15] z-[12] transition-all" onClick={nextTestimonial} />
        <IoIosArrowBack className="absolute top-[40%] left-0 text-2xl
          hover:text-blue-200 z-[12]
          hover:scale-[1.15] transition-all sm:text-5xl" onClick={prevTestimonial} />

        <AnimatePresence mode='wait'>
          <MotionP key={currentTestimonial} className="font-bold mb-4 pl-8 pr-8 mt-8
            text-lg md:text-xl lg:text-2xl sm:pl-12 sm:pr-12 pt-8"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
          >
            {testimonials[currentTestimonial].quote}
          </MotionP>
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
          <MotionP key={currentTestimonial} className="pl-8 pr-8 sm:pl-12 sm:text-lg
            text-left md:text-xl font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.8 } }}
            exit={{ opacity: 0 }}
          >
            {testimonials[currentTestimonial].title}
          </MotionP>
        </AnimatePresence>
            <section className="absolute top-1/2 left-0 z-[3] w-full 
            flex justify-evenly items-end text-black">
                  <button className=" 
             mr-auto "
             >
            <IoIosArrowBack
            size={48}
            />
            </button>
            <button className=" 
             ml-auto"
         >
            <IoIosArrowForward
            size={48}/>
            </button>
            </section>

            {/* Canvas overlay for electric effect */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 rounded-2xl pointer-events-none
              w-full h-full max-w-[900px] max-h-[500px]"
                style={{ zIndex: 1 }}
            ></canvas>
        </section>
    );
};

export default ElectricContainer;
