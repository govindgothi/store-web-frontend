import React, { useState } from 'react';
import { Heart, Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, ChevronRight, Shield, Users, Award, Check } from 'lucide-react';

// TypeScript interfaces
interface DonationOption {
  id: string;
  amount: number;
  cows: number;
  description: string;
}

interface NavigationItem {
  id: string;
  label: string;
}

const CowDonationWebsite: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedAmount, setSelectedAmount] = useState<number>(500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const navigation: NavigationItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'donate', label: 'Donate Now' },
    { id: 'impact', label: 'Our Impact' },
    { id: 'contact', label: 'Contact' },
  ];

  const footerLinks: NavigationItem[] = [
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms & Conditions' },
    { id: 'refund', label: 'Refund Policy' },
    { id: 'cancellation', label: 'Cancellation Policy' },
  ];

  const donationOptions: DonationOption[] = [
    { id: '1', amount: 500, cows: 5, description: 'Feed 5 cows for a day' },
    { id: '2', amount: 1000, cows: 10, description: 'Feed 10 cows for a day' },
    { id: '3', amount: 2500, cows: 25, description: 'Feed 25 cows for a day' },
    { id: '4', amount: 5000, cows: 50, description: 'Feed 50 cows for a day' },
  ];

  const scrollToSection = (sectionId: string) => {
    setCurrentPage(sectionId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;
    
    // Razorpay integration would go here
    alert(`Processing donation of ₹${finalAmount}\n\nIn production, this would integrate with Razorpay API.\n\nDonor: ${donorInfo.name}\nEmail: ${donorInfo.email}`);
  };

  // Home Page
  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Save Our Sacred Cows</h1>
              <p className="text-xl mb-8 text-orange-50">
                Join us in our mission to feed and protect abandoned cows. Your donation can make a real difference in their lives.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => scrollToSection('donate')}
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-all flex items-center gap-2"
                >
                  Donate Now <Heart className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🐄</div>
                  <h3 className="text-2xl font-bold mb-2">Make an Impact Today</h3>
                  <p className="text-orange-50">Every contribution counts</p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm text-orange-50">Cows Fed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">2000+</div>
                    <div className="text-sm text-orange-50">Donors</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">₹5L+</div>
                    <div className="text-sm text-orange-50">Raised</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Help Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Your Help Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Compassionate Care</h3>
              <p className="text-gray-600">
                Provide nutritious food and medical care to abandoned and injured cows who have nowhere else to turn.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Protection & Shelter</h3>
              <p className="text-gray-600">
                Create safe havens where cows can live with dignity, free from harm and neglect.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Community Impact</h3>
              <p className="text-gray-600">
                Support local communities and promote sustainable practices that benefit both animals and people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Donation Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Start Making a Difference</h2>
          <p className="text-xl text-gray-600 mb-12">
            Choose a donation amount and help feed our cows today
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {donationOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => scrollToSection('donate')}
                className="bg-white border-2 border-orange-200 hover:border-orange-500 p-6 rounded-xl hover:shadow-lg transition-all"
              >
                <div className="text-3xl font-bold text-orange-600 mb-2">₹{option.amount}</div>
                <div className="text-sm text-gray-600">{option.description}</div>
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollToSection('donate')}
            className="bg-orange-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-all inline-flex items-center gap-2"
          >
            Proceed to Donate <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );

  // About Page
  const AboutPage = () => (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-gray-800">About Our Mission</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-orange-50 p-8 rounded-xl mb-8">
            <h2 className="text-3xl font-bold mb-4 text-orange-800">Who We Are</h2>
            <p className="text-gray-700 mb-4">
              We are a dedicated non-profit organization committed to the welfare and protection of cows across India. 
              Our mission is to provide shelter, food, and medical care to abandoned, injured, and aged cows who have 
              nowhere else to turn.
            </p>
            <p className="text-gray-700">
              Founded in 2015, we have grown from a small shelter to a comprehensive cow protection program that serves 
              over 500 cows daily. Our team of dedicated volunteers and veterinarians work tirelessly to ensure every 
              cow receives the care and dignity they deserve.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <Check className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-800">Compassion</h3>
              </div>
              <p className="text-gray-600">
                Every cow deserves love, care, and respect. We treat each animal with the utmost compassion.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <Check className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-800">Transparency</h3>
              </div>
              <p className="text-gray-600">
                We maintain complete transparency in our operations and fund utilization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <Check className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-800">Sustainability</h3>
              </div>
              <p className="text-gray-600">
                We focus on creating sustainable solutions for long-term cow welfare.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <Check className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-800">Community</h3>
              </div>
              <p className="text-gray-600">
                We work closely with local communities to promote cow protection awareness.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-gray-800">What We Do</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <ChevronRight className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Provide daily nutritious meals to over 500 cows</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Offer comprehensive veterinary care and medical treatment</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Maintain clean and safe shelter facilities</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Rescue and rehabilitate injured or abandoned cows</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <span className="text-gray-700">Educate communities about cow welfare and protection</span>
            </li>
          </ul>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-orange-50 mb-6">
              Your support helps us continue our vital work. Together, we can create a better future for these gentle creatures.
            </p>
            <button
              onClick={() => scrollToSection('donate')}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all"
            >
              Support Our Cause
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Donate Page
  const DonatePage = () => (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center text-gray-800">Make a Donation</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Your generosity brings hope and nourishment to our cows
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleDonation}>
            {/* Donation Amount */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Select Donation Amount</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {donationOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(option.amount);
                      setCustomAmount('');
                    }}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      selectedAmount === option.amount && !customAmount
                        ? 'border-orange-600 bg-orange-50'
                        : 'border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    <div className="text-2xl font-bold text-orange-600 mb-2">₹{option.amount}</div>
                    <div className="text-sm text-gray-600">{option.cows} cows</div>
                  </button>
                ))}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Or enter custom amount
                </label>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter amount in ₹"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Donor Information */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Your Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={donorInfo.name}
                    onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={donorInfo.phone}
                    onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    value={donorInfo.address}
                    onChange={(e) => setDonorInfo({ ...donorInfo, address: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                    placeholder="Your address (optional)"
                  />
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-orange-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Donation Summary</h3>
              <div className="flex justify-between items-center text-lg">
                <span className="text-gray-700">Donation Amount:</span>
                <span className="text-3xl font-bold text-orange-600">
                  ₹{customAmount || selectedAmount}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                * 80G tax exemption certificate will be sent to your email
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all flex items-center justify-center gap-2"
            >
              Proceed to Payment <Heart className="w-5 h-5" />
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Secured by Razorpay Payment Gateway
            </p>
          </form>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="w-12 h-12 text-orange-600 mx-auto mb-3" />
            <h4 className="font-bold text-gray-800 mb-2">Secure Payments</h4>
            <p className="text-sm text-gray-600">SSL encrypted transactions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Award className="w-12 h-12 text-orange-600 mx-auto mb-3" />
            <h4 className="font-bold text-gray-800 mb-2">80G Tax Benefit</h4>
            <p className="text-sm text-gray-600">Get tax exemption certificate</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="w-12 h-12 text-orange-600 mx-auto mb-3" />
            <h4 className="font-bold text-gray-800 mb-2">Trusted by 2000+</h4>
            <p className="text-sm text-gray-600">Join our donor community</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Impact Page
  const ImpactPage = () => (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center text-gray-800">Our Impact</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          See how your donations are making a real difference
        </p>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-xl text-center">
            <div className="text-5xl font-bold mb-2">500+</div>
            <div className="text-orange-50">Cows Fed Daily</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-xl text-center">
            <div className="text-5xl font-bold mb-2">2000+</div>
            <div className="text-blue-50">Happy Donors</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-xl text-center">
            <div className="text-5xl font-bold mb-2">₹5L+</div>
            <div className="text-green-50">Funds Raised</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-xl text-center">
            <div className="text-5xl font-bold mb-2">200+</div>
            <div className="text-purple-50">Lives Saved</div>
          </div>
        </div>

        {/* Success Stories */}
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center">
              <div className="text-8xl">🐄</div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Lakshmi's Recovery</h3>
              <p className="text-gray-600 mb-4">
                Found injured on the roadside, Lakshmi received immediate medical attention and nutritious meals. 
                Today, she's healthy and thriving in our shelter, thanks to donors like you.
              </p>
              <div className="text-orange-600 font-semibold">Rescued: January 2024</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center">
              <div className="text-8xl">🐄</div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Nandi's New Life</h3>
              <p className="text-gray-600 mb-4">
                Abandoned and malnourished, Nandi arrived at our shelter in critical condition. With proper care 
                and regular feeding, he's now a happy and healthy member of our herd.
              </p>
              <div className="text-green-600 font-semibold">Rescued: March 2024</div>
            </div>
          </div>
        </div>

        {/* Monthly Report */}
        <div className="bg-orange-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Monthly Impact Report - November 2024</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">Food Distribution</h4>
              <p className="text-3xl font-bold text-orange-600 mb-2">15,000 kg</p>
              <p className="text-sm text-gray-600">of nutritious fodder distributed</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">Medical Treatments</h4>
              <p className="text-3xl font-bold text-orange-600 mb-2">45</p>
              <p className="text-sm text-gray-600">cows received veterinary care</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">New Rescues</h4>
              <p className="text-3xl font-bold text-orange-600 mb-2">12</p>
              <p className="text-sm text-gray-600">cows rescued and sheltered</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => scrollToSection('donate')}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all inline-flex items-center gap-2"
          >
            Support Our Work <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  // Contact Page
  const ContactPage = () => (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center text-gray-800">Contact Us</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Have questions? We're here to help
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">
                    123 Cow Shelter Road<br />
                    Gau Seva Nagar<br />
                    Indore, Madhya pradesh 452016
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">
                    +91 8839571505<br />
        
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">
                    info@cowdonation.org<br />
                    support@cowdonation.org
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-orange-100 p-3 rounded-lg hover:bg-orange-200 transition-colors">
                  <Facebook className="w-6 h-6 text-orange-600" />
                </a>
                <a href="#" className="bg-orange-100 p-3 rounded-lg hover:bg-orange-200 transition-colors">
                  <Twitter className="w-6 h-6 text-orange-600" />
                </a>
                <a href="#" className="bg-orange-100 p-3 rounded-lg hover:bg-orange-200 transition-colors">
                  <Instagram className="w-6 h-6 text-orange-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                  placeholder="What is this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  // Privacy Policy Page
  const PrivacyPage = () => (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-gray-800">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: November 22, 2025</p>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us when you make a donation, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Payment information (processed securely through Razorpay)</li>
              <li>Donation amount and frequency</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Process your donations and send receipts</li>
              <li>Provide 80G tax exemption certificates</li>
              <li>Send updates about our work and impact</li>
              <li>Respond to your inquiries and requests</li>
              <li>Improve our services and donor experience</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">3. Information Sharing</h2>
            <p className="text-gray-700">
              We do not sell, trade, or rent your personal information to third parties. We may share 
              your information with trusted service providers who assist us in operating our website and 
              conducting our business, such as payment processors (Razorpay) and email service providers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">4. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate security measures to protect your personal information. All payment 
              transactions are processed through secure SSL encryption via Razorpay's PCI-DSS compliant platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Access and update your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request deletion of your data (subject to legal requirements)</li>
              <li>Object to processing of your personal data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">6. Cookies</h2>
            <p className="text-gray-700">
              We use cookies to enhance your browsing experience and analyze website traffic. You can 
              control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">7. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-orange-50 p-6 rounded-lg mt-4">
              <p className="text-gray-700">Email: privacy@cowdonation.org</p>
              <p className="text-gray-700">Phone: +91 98765 43210</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  // Terms & Conditions Page
  const TermsPage = () => (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-gray-800">Terms & Conditions</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: November 22, 2025</p>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using this website, you accept and agree to be bound by the terms and 
              provisions of this agreement. If you do not agree to these terms, please do not use this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">2. Donations</h2>
            <p className="text-gray-700 mb-4">
              All donations made through this website are:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Voluntary and made of your own free will</li>
              <li>Non-refundable except as outlined in our Refund Policy</li>
              <li>Used for cow welfare and related charitable activities</li>
              <li>Eligible for 80G tax benefits as per Indian Income Tax Act</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">3. Payment Processing</h2>
            <p className="text-gray-700">
              All payments are processed through Razorpay, a secure payment gateway. We do not store 
              your credit card or banking information on our servers. By making a donation, you agree 
              to Razorpay's terms and conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">4. Use of Funds</h2>
            <p className="text-gray-700">
              Donations are used for cow feeding, shelter maintenance, veterinary care, rescue operations, 
              and administrative costs necessary to run the organization. We reserve the right to use 
              donations where they are most needed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">5. Tax Receipts</h2>
            <p className="text-gray-700">
              80G tax exemption certificates will be sent to the email address provided within 7-10 
              business days of successful donation. It is the donor's responsibility to ensure the 
              email address provided is correct.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">6. Intellectual Property</h2>
            <p className="text-gray-700">
              All content on this website, including text, images, logos, and graphics, is the property 
              of our organization and protected by copyright laws. Unauthorized use is prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">7. Limitation of Liability</h2>
            <p className="text-gray-700">
              We strive to provide accurate information but make no warranties about the completeness 
              or accuracy of the content. We are not liable for any damages arising from the use of this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">8. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting on the website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );

  // Refund Policy Page
  const RefundPage = () => (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-gray-800">Refund Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: November 22, 2025</p>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">1. General Policy</h2>
            <p className="text-gray-700">
              As a charitable organization, all donations are generally considered final and non-refundable. 
              However, we understand that errors can occur, and we will consider refund requests under 
              specific circumstances.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">2. Eligible Refund Scenarios</h2>
            <p className="text-gray-700 mb-4">Refunds may be processed in the following cases:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Duplicate transactions made in error</li>
              <li>Incorrect donation amount entered by mistake</li>
              <li>Technical errors during payment processing</li>
              <li>Unauthorized transactions (with proper documentation)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">3. Refund Request Process</h2>
            <p className="text-gray-700 mb-4">To request a refund:</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Contact us within 7 days of the transaction</li>
              <li>Provide transaction ID and reason for refund</li>
              <li>Submit supporting documentation if applicable</li>
              <li>Our team will review and respond within 5-7 business days</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">4. Refund Timeline</h2>
            <p className="text-gray-700">
              Approved refunds will be processed within 10-15 business days. The refund will be credited 
              to the original payment method used for the donation. Please note that your bank or credit 
              card company may take additional time to process the refund.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">5. Non-Refundable Situations</h2>
            <p className="text-gray-700 mb-4">Refunds will not be provided for:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Change of mind after making a donation</li>
              <li>Disagreement with how funds are utilized</li>
              <li>Requests made after 30 days of the transaction</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">6. Tax Implications</h2>
            <p className="text-gray-700">
              If a refund is processed, the 80G tax exemption certificate (if already issued) will be 
              cancelled. Donors are responsible for adjusting their tax filings accordingly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">7. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For refund requests or questions, please contact:
            </p>
            <div className="bg-orange-50 p-6 rounded-lg">
              <p className="text-gray-700">Email: refunds@cowdonation.org</p>
              <p className="text-gray-700">Phone: +91 98765 43210</p>
              <p className="text-gray-700">Hours: Monday - Friday, 10 AM - 6 PM IST</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  // Cancellation Policy Page
  const CancellationPage = () => (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-gray-800">Cancellation Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: November 22, 2025</p>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">1. One-Time Donations</h2>
            <p className="text-gray-700">
              One-time donations are processed immediately and cannot be cancelled once the transaction 
              is complete. If you made a donation in error, please refer to our Refund Policy for 
              possible remedies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">2. Recurring Donations</h2>
            <p className="text-gray-700 mb-4">
              For recurring monthly donations, you may cancel at any time:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Log in to your donor account on our website</li>
              <li>Navigate to "My Donations" section</li>
              <li>Click "Cancel Recurring Donation"</li>
              <li>Alternatively, email us at support@cowdonation.org</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">3. Cancellation Timeline</h2>
            <p className="text-gray-700">
              Cancellations must be submitted at least 3 business days before the next scheduled donation 
              date. If cancelled after this period, one additional payment may be processed before the 
              cancellation takes effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">4. Effect of Cancellation</h2>
            <p className="text-gray-700">
              Upon cancellation of recurring donations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>No future charges will be made</li>
              <li>You will receive confirmation via email</li>
              <li>Previous donations remain non-refundable</li>
              <li>Tax certificates for past donations remain valid</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">5. Reactivation</h2>
            <p className="text-gray-700">
              You may reactivate cancelled recurring donations at any time by setting up a new recurring 
              donation through our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">6. Payment Gateway Cancellation</h2>
            <p className="text-gray-700">
              If you cancelled a recurring payment through Razorpay or your bank, please also notify us 
              to update our records and prevent any processing errors.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">7. Questions</h2>
            <p className="text-gray-700 mb-4">
              For assistance with cancellations, contact us:
            </p>
            <div className="bg-orange-50 p-6 rounded-lg">
              <p className="text-gray-700">Email: support@cowdonation.org</p>
              <p className="text-gray-700">Phone: +91 98765 43210</p>
              <p className="text-gray-700">Hours: Monday - Friday, 10 AM - 6 PM IST</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  // Render current page
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'donate':
        return <DonatePage />;
      case 'impact':
        return <ImpactPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      case 'refund':
        return <RefundPage />;
      case 'cancellation':
        return <CancellationPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="bg-orange-600 p-2 rounded-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-800">Gau Seva</div>
                <div className="text-xs text-gray-600">Cow Protection Trust</div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-orange-600'
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('donate')}
                className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-all flex items-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Donate
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-orange-50 text-orange-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('donate')}
                className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Donate Now
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{renderPage()}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* About Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-orange-500" />
                <h3 className="text-xl font-bold">Gau Seva</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Dedicated to the welfare and protection of cows across India. Join us in our mission 
                to provide love, care, and dignity to these sacred animals.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>123 Cow Shelter Road, Mumbai, Maharashtra 400001</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>info@cowdonation.org</span>
                </li>
              </ul>
              <div className="flex gap-3 mt-4">
                <a href="#" className="bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded hover:bg-gray-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2025 Gau Seva Cow Protection Trust. All rights reserved. | 80G Registered
              </p>
              <p className="text-gray-400 text-sm">
                Secured by <span className="text-orange-500 font-semibold">Razorpay</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CowDonationWebsite;