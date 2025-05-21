import React, { useState } from 'react';

// Main App Component
export default function HingeOnboarding() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [birthdate, setBirthdate] = useState('20012005');
  const [location, setLocation] = useState('Bishnah');
  const [gender, setGender] = useState('');

  // Function to advance to next screen
  const nextScreen = () => {
    setCurrentScreen(currentScreen + 1);
  };

  // Array of screen components
  const screens = [
    <PhoneNumberScreen key="phone" onNext={nextScreen} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />,
    <VerificationScreen key="verification" onNext={nextScreen} verificationCode={verificationCode} setVerificationCode={setVerificationCode} />,
    <ProfileIntroScreen key="intro" onNext={nextScreen} />,
    <BirthdateScreen key="birthdate" onNext={nextScreen} birthdate={birthdate} setBirthdate={setBirthdate} />,
    // <LocationScreen key="location" onNext={nextScreen} location={location} setLocation={setLocation} />,
    <GenderScreen key="gender" onNext={nextScreen} gender={gender} setGender={setGender} />
  ];

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Status Bar */}
      <StatusBar />
      
      {/* Current Screen */}
      <div className="flex-1 bg-gray-100">
        {screens[currentScreen]}
      </div>
      
      {/* Navigation Bar */}
      <NavigationBar />
    </div>
  );
}

// Status Bar Component
function StatusBar() {
  return (
    <div className="bg-black text-white p-2 flex justify-between items-center">
      <div className="text-sm">5:47 PM | 28.0KB/s</div>
      <div className="flex items-center space-x-2">
        <div className="text-xs">63%</div>
      </div>
    </div>
  );
}

// Navigation Bar Component
function NavigationBar() {
  return (
    <div className="bg-black h-12 flex justify-center items-center">
      <div className="w-1/3 flex justify-center">
        <div className="w-6 h-6 bg-gray-600 rounded"></div>
      </div>
      <div className="w-1/3 flex justify-center">
        <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
      </div>
      <div className="w-1/3 flex justify-center">
        <div className="w-6 h-6 bg-gray-600 rounded-sm transform rotate-45"></div>
      </div>
    </div>
  );
}

// Phone Number Screen Component
function PhoneNumberScreen({ onNext, phoneNumber, setPhoneNumber }:any) {
  const [showGoogleDialog, setShowGoogleDialog] = useState(true);
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex justify-center mb-10">
          <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
              <div className="transform rotate-45">◠</div>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-8">What's your phone number?</h1>
        
        <div className="flex mb-6">
          <div className="flex items-center border-b-2 border-gray-300 pr-4">
            <img src="/api/placeholder/24/18" alt="India flag" className="mr-2" />
            <span className="text-xl font-medium">+91 ▾</span>
          </div>
          
          <div className="flex-1 border-b-2 border-gray-300 ml-4">
            <input 
              type="tel" 
              className="w-full text-xl bg-transparent" 
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder=""
            />
          </div>
        </div>
        
        <p className="text-gray-500 text-sm">
          Hinge will send you a text with a verification code. Message and data rates may apply.
        </p>
      </div>
      
      {showGoogleDialog && (
        <div className="absolute bottom-20 left-0 right-0 bg-gray-700 text-white m-4 rounded-lg p-4">
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 mr-2 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
            <span className="text-xl">Choose a phone number</span>
            <button 
              className="ml-auto text-2xl"
              onClick={() => setShowGoogleDialog(false)}
            >×</button>
          </div>
          
          <p className="text-gray-300 mb-6">
            You can choose a phone number that's assigned to your phone, and Google will share it only with this app.
          </p>
          
          <p className="text-gray-300 mb-6">
            Google won't store the phone number that you share with this app in your Google Account
          </p>
          
          <div className="flex items-center bg-gray-600 rounded-full p-2 mb-6">
            <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center mr-3">◠</div>
            <span>096825 00965</span>
          </div>
          
          <p className="text-gray-300 mb-4">
            You can update your phone number sharing preference in your <span className="text-blue-400">device settings</span>.
          </p>
        </div>
      )}
      
      <div className="p-4">
        <button 
          className="w-full bg-purple-700 text-white p-4 rounded-full"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

// Verification Screen Component
function VerificationScreen({ onNext, verificationCode, setVerificationCode }:any) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex justify-center mb-10">
          <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center">
            <div className="w-10 h-10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-6">Enter your verification code</h1>
        
        <p className="text-gray-500 mb-8">Sent to +91 9682500965 · <span className="text-purple-700">Edit</span></p>
        
        <div className="flex justify-between mb-12">
          {Array(6).fill(0).map((_, i) => (
            <div key={i} className="w-12 border-b-2 border-gray-400 pb-1" />
          ))}
        </div>
        
        <div className="mt-auto mb-4">
          <button className="text-purple-700 font-medium">
            Didn't get a code?
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <button 
          className="w-full bg-purple-700 text-white p-4 rounded-full"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

// Profile Intro Screen Component
function ProfileIntroScreen({ onNext }:any) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-6 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-center">You're one of a kind. Your profile should be, too.</h1>
        
        <div className="w-32 h-32 bg-gray-200 rounded-full mb-8 flex items-end justify-center">
          <div className="mb-2">
            <svg viewBox="0 0 24 6" width="48" height="12">
              <circle cx="6" cy="3" r="3" fill="black" />
              <circle cx="18" cy="3" r="3" fill="black" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <button 
          className="w-full bg-purple-700 text-white p-4 rounded-full"
          onClick={onNext}
        >
          Enter basic info
        </button>
      </div>
    </div>
  );
}

// Birthdate Screen Component
function BirthdateScreen({ onNext, birthdate, setBirthdate }:any) {
  const updateBirthdate = (value:any) => {
    if (value.length <= 8) {
      setBirthdate(value);
    }
  };
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex justify-center mb-10">
          <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-6">What's your date of birth?</h1>
        
        <div className="flex justify-between mb-12">
          {birthdate.split('').map((digit:any, i:any) => (
            <div key={i} className="w-8 border-b-2 border-gray-400 text-center text-xl">
              {digit}
            </div>
          ))}
        </div>
        
        <p className="text-gray-500 mb-12">
          We use this to calculate the age on your profile.
        </p>
      </div>
      
      {/* Number pad */}
      <div className="px-4 pb-4 bg-gray-200">
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <button 
              key={num} 
              className="bg-gray-500 text-white text-2xl p-4 rounded-full"
              onClick={() => updateBirthdate(birthdate + num)}
            >
              {num}
            </button>
          ))}
          <button className="bg-gray-500 text-white text-2xl p-4 rounded-full">
            ,
          </button>
          <button 
            className="bg-gray-500 text-white text-2xl p-4 rounded-full"
            onClick={() => updateBirthdate(birthdate + '0')}
          >
            0
          </button>
          <button className="bg-gray-500 text-white text-2xl p-4 rounded-full">
            .
          </button>
        </div>
        
        <div className="flex justify-between mt-4">
          <div></div>
          <button 
            className="bg-blue-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center"
            onClick={onNext}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2">
              <path d="M5 12l5 5 9-9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// Location Screen Component
// function LocationScreen({ onNext, location, setLocation }:any) {
//   return (
//     <div className="flex flex-col h-full">
//       <div className="flex-1 p-6 flex flex-col">
//         <div className="flex justify-center mb-10">
//           <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center">
//             <MapPin size={32} />
//           </div>
//         </div>
        
//         <h1 className="text-4xl font-bold mb-4">Where do you live?</h1>
        
//         <p className="text-gray-500 mb-6">
//           Only the neighbourhood name will appear on your profile.
//         </p>
        
//         <div className="h-64 bg-gray-200 mb-8 relative">
//           {/* Map placeholder */}
//           <div className="w-full h-full relative">
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full">
//               Bishnah
//             </div>
            
//             <div className="absolute bottom-4 left-4 text-blue-600">
//               Google
//             </div>
            
//             <div className="absolute bottom-4 right-4 bg-purple-500 text-white rounded-full p-2">
//               <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2">
//                 <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
//                 <circle cx="12" cy="10" r="3" />
//               </svg>
//             </div>
            
//             <div className="absolute top-4 right-4 bg-black text-white rounded-full p-2">
//               <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2">
//                 <path d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10z" />
//                 <path d="M12 12l4 4M12 12V6M12 12l-4 4" />
//               </svg>
//             </div>
//           </div>
//         </div>
        
//         <div className="relative mb-4">
//           <input 
//             type="text" 
//             className="w-full border-b-2 border-gray-300 pb-2"
//             placeholder="Enter your address, area or postcode"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           />
//         </div>
//       </div>
      
//       <div className="p-4">
//         <button 
//           className="w-full bg-purple-700 text-white p-4 rounded-full"
//           onClick={onNext}
//         >
//           <div className="flex items-center justify-center">
//             <span>Next</span>
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// }

// Gender Screen Component
function GenderScreen({ onNext, gender, setGender }:any) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex justify-center mb-10">
          <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-6">Which gender best describes you?</h1>
        
        <p className="text-gray-500 mb-8">
          We match daters using three broad gender groups. You can add more about your gender after.
        </p>
        
        <div className="space-y-4 mb-8">
          <div 
            className={`p-4 border-b-2 border-gray-300 flex justify-between items-center ${gender === 'Man' ? 'text-purple-700' : ''}`}
            onClick={() => setGender('Man')}
          >
            <span className="text-xl">Man</span>
            {gender === 'Man' && (
              <div className="w-6 h-6 rounded-full border-2 border-purple-700 flex items-center justify-center">
                <div className="w-3 h-3 bg-purple-700 rounded-full"></div>
              </div>
            )}
            {gender !== 'Man' && (
              <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
            )}
          </div>
          
          <div 
            className={`p-4 border-b-2 border-gray-300 flex justify-between items-center ${gender === 'Woman' ? 'text-purple-700' : ''}`}
            onClick={() => setGender('Woman')}
          >
            <span className="text-xl">Woman</span>
            {gender === 'Woman' && (
              <div className="w-6 h-6 rounded-full border-2 border-purple-700 flex items-center justify-center">
                <div className="w-3 h-3 bg-purple-700 rounded-full"></div>
              </div>
            )}
            {gender !== 'Woman' && (
              <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
            )}
          </div>
          
          <div 
            className={`p-4 border-b-2 border-gray-300 flex justify-between items-center ${gender === 'Non-binary' ? 'text-purple-700' : ''}`}
            onClick={() => setGender('Non-binary')}
          >
            <span className="text-xl">Non-binary</span>
            {gender === 'Non-binary' && (
              <div className="w-6 h-6 rounded-full border-2 border-purple-700 flex items-center justify-center">
                <div className="w-3 h-3 bg-purple-700 rounded-full"></div>
              </div>
            )}
            {gender !== 'Non-binary' && (
              <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
            )}
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <div 
            className="w-6 h-6 border-2 border-purple-700 flex items-center justify-center mr-2"
            onClick={() => {}}
          >
            <Check size={16} className="text-purple-700" />
          </div>
          <span>Visible on profile</span>
        </div>
        
        <div className="flex items-center">
          <button className="text-purple-700 font-medium mr-1">
            Learn more
          </button>
          <span className="text-gray-700">about how we use gender to recommend people.</span>
        </div>
      </div>
      
      <div className="p-4">
        <button 
          className="w-full bg-purple-700 text-white p-4 rounded-full"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}