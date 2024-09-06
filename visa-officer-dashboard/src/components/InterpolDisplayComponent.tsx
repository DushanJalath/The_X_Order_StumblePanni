import React from 'react';
import { CheckCircle } from 'lucide-react';
import '../styles/interpolDisplayComponent.css';

interface VerificationPoint {
  id: string;
  label: string;
}

interface DocumentVerificationProps {
  rightImages: string[];
  verificationPoints: VerificationPoint[];
}

const DocumentVerification: React.FC<DocumentVerificationProps> = ({ rightImages, verificationPoints }) => {
  return (
    <div className="document-verification">
      <h2>Document verification</h2>
      <div className="image-container">
        <div className="left-image">
          <div className="profile-image">
            <img src="https://cdn.britannica.com/34/221834-050-000BF6F5/American-actor-Chadwick-Boseman-2019.jpg" alt="Verification" />
          </div>
        </div>
        <div className="divider"></div>
        <div className="right-images">
          {rightImages.map((image, index) => (
            <div key={index} className="profile-image">
              <img src={image} alt="Verification" />
            </div>
          ))}
        </div>
      </div>
      <ul className="verification-points">
        {verificationPoints.map((point) => (
          <li key={point.id}>
            <span>{point.id}</span>
            <span>{point.label}</span>
          </li>
        ))}
      </ul>
      <button className="tick-button" aria-label="Confirm verification">
        <CheckCircle />
      </button>
    </div>
  );
};

export default DocumentVerification;
