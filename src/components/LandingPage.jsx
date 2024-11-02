import React, { useState } from 'react'
import { ArrowRight, CheckCircle, Camera, BarChart2, Users, Instagram, Twitter, Facebook, Mail, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Logo from "@/assets/vector/default-monochrome.svg";
import { Link } from 'react-scroll';

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [highlightForm, setHighlightForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted email:', email)
    setEmail('')
    alert('Thank you for joining the waitlist!')
  }

  const handleStartTransformationClick = () => {
    setIsMenuOpen(false);
    setHighlightForm(true);
    // Optionally, remove the highlight after a certain duration
    setTimeout(() => setHighlightForm(false), 3000); // Remove highlight after 3 seconds
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const navHeight = document.querySelector('.nav').offsetHeight
      const sectionTop = section.offsetTop - navHeight
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#1C1F4A] text-[#E0E0E0]">
      {/* Navigation */}
      <nav className="bg-[#1C1F4A] fixed w-full z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 text-2xl font-bold text-[#7CB9E8] transition-transform duration-200 hover:scale-105">
            <img src={Logo} alt="Logo" className="w-[6rem] h-8" />
        </a>
          <button onClick={toggleMenu} className="md:hidden text-[#E0E0E0]">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 right-0 bg-[#1C1F4A] md:bg-transparent`}>
            <ul className="md:flex space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
              <li>
                <Link
                to="features"
                smooth={true}
                duration={500}
                className="block cursor-pointer md:inline-block hover:text-[#7CB9E8]"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              </li>
              <li>
                <Link
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  className="block cursor-pointer md:inline-block hover:text-[#7CB9E8]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="how-it-works"
                  smooth={true}
                  duration={500}
                  className="block cursor-pointer md:inline-block hover:text-[#7CB9E8]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="pricing"
                  smooth={true}
                  duration={500}
                  className="block cursor-pointer md:inline-block hover:text-[#7CB9E8]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-32 text-center hero">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#7CB9E8]">See Your Future Self: AI-Powered Body Transformations</h1>
        <p className="text-xl mb-8">Experience the future of fitness with AI-generated previews of your body transformation.</p>
        {/* Whether you're building muscle or losing weight, visualize your success before you achieve it! */}
        <p className="text-lg mb-6">Sign up for early access and start your journey to a healthier, fitter you.</p>
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col sm:flex-row justify-center items-center gap-4 p-4 rounded-lg transition-all duration-300 ease-out ${
            highlightForm
              ? 'border-2 border-[#7CB9E8] bg-[#1E2A4A] shadow-lg shadow-[#7CB9E8]/30 animate-pulse'
              : 'border-2 border-transparent'
          }`}
        >
          <Input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-64 bg-[#2D305E] border-[#7CB9E8] focus:ring-[#7CB9E8] text-[#E0E0E0] placeholder-[#9DA3B4]"
            required
          />
          <Button type="submit" className="w-full sm:w-auto bg-[#00C853] hover:bg-[#00A041] text-[#1C1F4A] font-bold transition-transform duration-200 hover:scale-105">
            Join Waitlist
          </Button>
        </form>
      </section>

      {/* Key Features Section */}
      <section id="features" className="bg-[#2D305E] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#7CB9E8]">Revolutionize Your Fitness Journey</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard 
              icon={<Camera className="h-12 w-12 text-[#00C853]" />}
              title="AI Body Previews"
              description="Visualize your future self with our AI! Track your muscle gain or weight loss every 30 days and set your own personalized milestones!"
            />
            <FeatureCard 
              icon={<BarChart2 className="h-12 w-12 text-[#00C853]" />}
              title="Smart Progress Tracking"
              description="Track your journey with precision. Our AI aligns your progress photos and provides detailed body measurements."
            />
            <FeatureCard 
              icon={<CheckCircle className="h-12 w-12 text-[#00C853]" />}
              title="Personalized Goals"
              description="Achieve your unique fitness goals—lose weight, build muscle, or improve health—with a personalized workout plan tailored to your genetics, diet, and lifestyle!"
            />
            <FeatureCard 
              icon={<Users className="h-12 w-12 text-[#00C853]" />}
              title="Supportive Community"
              description="Join challenges, celebrate your streaks, and share progress photos! Transform with friends and stay motivated in a community of like-minded individuals!"
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-20 bg-[#1C1F4A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#7CB9E8]">Real People, Real Transformations</h2>
          <p className="text-center mb-8">Discover how our AI-powered app is changing lives and bodies.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Seeing my potential future body was the motivation I needed. I've lost 30 pounds and counting!"
              author="Deborah E., Weight Loss Journey"
            />
            <TestimonialCard 
              quote="The AI progress tracking is incredible. I can see my muscle gains week by week. It's addictive!"
              author="Mike T., Muscle Building"
            />
            <TestimonialCard 
              quote="The community challenges keep me accountable. I've never stuck to a fitness plan this long before!"
              author="Emily R., Overall Health Improvement"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-[#2D305E]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#7CB9E8]">Your Path to Transformation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard 
              number={1}
              title="Visualize Your Goal"
              description="Upload a photo and let our AI show you your potential future body."
            />
            <StepCard 
              number={2}
              title="Track Your Progress"
              description="Use AI-aligned photos and measurements to see your real-time transformation."
            />
            <StepCard 
              number={3}
              title="Achieve and Celebrate"
              description="Reach milestones, unlock achievements, and share your success story."
            />
          </div>
          <div className="text-center mt-12">
          <Link
                to="hero"
                smooth={true}
                duration={500}
                className="block cursor-pointer "
                onClick={handleStartTransformationClick}
              >
                <Button size="lg" className="bg-[#00C853] hover:bg-[#00A041] text-[#1C1F4A] font-semibold">
              Start Your Transformation Now 
              {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
            </Button>
          </Link>
            
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-[#1C1F4A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#7CB9E8]">Choose Your Transformation Plan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard 
              title="Free Tier"
              price="$0/month"
              features={[
                "Basic progress photo storage",
                "Weekly measurement tracking",
                "Limited access to community challenges",
                "Basic transformation previews"
              ]}
            />
            <PricingCard 
              title="Premium"
              price="$9.99/month"
              features={[
                "Daily progress photos with overlays for perfect alignment",
                "AI-powered body measurements and transformation previews",
                "Access to personalized challenges and exclusive community features",
                "Streak tracking and rewards for workout consistency"
              ]}
              highlighted={true}
            />
            <PricingCard 
              title="Elite"
              price="$19.99/month"
              features={[
                "Custom workout and nutrition guidance",
                // "1-on-1 coaching opportunities (optional)",
                "Priority support and advanced community challenges",
                "Early access to new features and community events"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1C1F4A] to-[#2D305E] text-[#E0E0E0]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#7CB9E8]">Your Dream Body is Waiting to be Unveiled</h2>
          <p className="text-xl mb-8">Join now to be among the first to experience AI-powered body transformations.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-64 bg-[#2D305E] border-[#7CB9E8] focus:ring-[#7CB9E8] text-[#E0E0E0] placeholder-[#9DA3B4]"
              required
            />
            <Button type="submit" variant="secondary" size="lg" className="w-full sm:w-auto bg-[#00C853] hover:bg-[#00A041] text-[#1C1F4A] font-bold">
              Join Waitlist
              {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1F4A] text-[#E0E0E0] py-12">
        <div className="container mx-auto px-4">
          {/* <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">Follow us for transformation tips and success stories.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#9C27B0]"><Instagram /></a>
              <a href="#" className="hover:text-[#9C27B0]"><Twitter /></a>
              <a href="#" className="hover:text-[#9C27B0]"><Facebook /></a>
            </div>
          </div> */}
          <div className="mt-8 text-center">
          <p className="flex items-center justify-center">
              Contact Me @ 
              <a href="mailto:adigungodwin2@gmail.com" className="text-blue-300 hover:underline ml-1">
                  adigungodwin2@gmail.com
              </a>
          </p>

          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-[#1C1F4A] p-6 rounded-lg shadow-lg border border-[#7CB9E8]">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-[#7CB9E8]">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function TestimonialCard({ quote, author }) {
  return (
    <div className="bg-[#2D305E] p-6 rounded-lg shadow-lg border border-[#7CB9E8]">
      <p className="italic mb-4">"{quote}"</p>
      <p className="font-semibold text-[#00C853]">{author}</p>
    </div>
  )
}

function StepCard({ number, title, description }) {
  return (
    <div className="text-center bg-[#1C1F4A] p-6 rounded-lg shadow-lg border border-[#7CB9E8]">
      <div className="bg-[#9C27B0] text-[#E0E0E0] rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#7CB9E8]">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function PricingCard({ title, price, features, highlighted = false }) {
  return (
    <div className={`bg-[#2D305E] p-6 rounded-lg shadow-lg border ${highlighted ? 'border-[#00C853]' : 'border-[#7CB9E8]'}`}>
      <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-[#00C853]' : 'text-[#7CB9E8]'}`}>{title}</h3>
      <p className="text-3xl font-bold mb-4">{price}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle  className="h-5 w-5 mr-2 text-[#00C853] flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={`w-full mt-6 ${highlighted ? 'bg-[#00C853] hover:bg-[#00A041] text-[#1C1F4A]' : 'bg-[#7CB9E8] hover:bg-[#5A9ED6] text-[#1C1F4A]'}`}>
        Choose Plan
      </Button>
    </div>
  )
}