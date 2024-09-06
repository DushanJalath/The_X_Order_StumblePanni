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
      <div className="image-container">
        <div className="left-image">
          {/* Title for the left image */}
          <h2>User</h2>
          <div className="profile-image">
            <img src="/api/placeholder/96/96" alt="Verification" />
          </div>
        </div>
        <div className="divider"></div>
        
        <div><h2>Record</h2>
          <div className="right-images">
          {/* Title for the right images */}
          
          {rightImages.map((image, index) => (
            <div key={index} className="profile-image">
              <img src={image} alt="Verification" />
            </div>
          ))}
          </div>
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
