import { useState } from 'react';
import EmailSignup from './components/EmailSignup';
import EmailVerification from './components/EmailVerification';
import PersonalInfo from './components/PersonalInfo';
import PasswordCreation from './components/PasswordCreation';
import CompanyInfo from './components/CompanyInfo';
import SocialProfiles from './components/SocialProfiles';

interface OnboardingData {
  email: string;
  verificationCode: string;
  firstName: string;
  lastName: string;
  password: string;
  companyName: string;
  connectedProfiles: Array<{ network: string; username: string }>;
}

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<OnboardingData>({
    email: '',
    verificationCode: '',
    firstName: '',
    lastName: '',
    password: '',
    companyName: '',
    connectedProfiles: [],
  });

  const updateData = (field: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...field }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const steps = [
    <EmailSignup
      email={data.email}
      onEmailChange={(email) => updateData({ email })}
      onContinue={nextStep}
    />,
    <EmailVerification
      email={data.email}
      verificationCode={data.verificationCode}
      onCodeChange={(verificationCode) => updateData({ verificationCode })}
      onContinue={nextStep}
      onBack={prevStep}
    />,
    <PersonalInfo
      firstName={data.firstName}
      lastName={data.lastName}
      onFirstNameChange={(firstName) => updateData({ firstName })}
      onLastNameChange={(lastName) => updateData({ lastName })}
      onContinue={nextStep}
      onBack={prevStep}
    />,
    <PasswordCreation
      password={data.password}
      onPasswordChange={(password) => updateData({ password })}
      onContinue={nextStep}
      onBack={prevStep}
    />,
    <CompanyInfo
      companyName={data.companyName}
      onCompanyNameChange={(companyName) => updateData({ companyName })}
      onContinue={nextStep}
      onBack={prevStep}
    />,
    <SocialProfiles
      connectedProfiles={data.connectedProfiles}
      onConnect={(profile) =>
        updateData({
          connectedProfiles: [...data.connectedProfiles, profile],
        })
      }
      onDisconnect={(network) =>
        updateData({
          connectedProfiles: data.connectedProfiles.filter(
            (p) => p.network !== network
          ),
        })
      }
      onContinue={nextStep}
      onSkip={nextStep}
      onBack={prevStep}
    />,
  ];

  return <div className="size-full">{steps[currentStep]}</div>;
}
