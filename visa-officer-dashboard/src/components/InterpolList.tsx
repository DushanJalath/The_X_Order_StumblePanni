import React, { useState } from 'react';
import DocumentVerification from '../components/InterpolDisplayComponent';
import '../styles/InterpolList.css'

const InterpoleList: React.FC = () => {
  const verificationData = [
    {
      titleLeft: 'Current User',
      titleRight: 'Verification 1',
      rightImages: ['/api/placeholder/96/96', '/api/placeholder/96/96', '/api/placeholder/96/96'],
      verificationPoints: [
        { id: '01', label: 'Point 01' },
        { id: '02', label: 'Point 02' },
        { id: '03', label: 'Point 03' },
        { id: '04', label: 'Point 04' },
        { id: '05', label: 'Point 05' }
      ],
    },
    {
      titleLeft: 'Document A',
      titleRight: 'Verification 2',
      rightImages: ['/api/placeholder/96/96', '/api/placeholder/96/96', '/api/placeholder/96/96'],
      verificationPoints: [
        { id: '01', label: 'Point 01' },
        { id: '02', label: 'Point 02' },
        { id: '03', label: 'Point 03' },
        { id: '04', label: 'Point 04' },
        { id: '05', label: 'Point 05' }
      ],
    },
    {
      titleLeft: 'Document B',
      titleRight: 'Verification 3',
      rightImages: ['/api/placeholder/96/96', '/api/placeholder/96/96', '/api/placeholder/96/96'],
      verificationPoints: [
        { id: '01', label: 'Point 01' },
        { id: '02', label: 'Point 02' },
        { id: '03', label: 'Point 03' },
        { id: '04', label: 'Point 04' },
        { id: '05', label: 'Point 05' }
      ],
    },
    {
      titleLeft: 'Document C',
      titleRight: 'Verification 4',
      rightImages: ['/api/placeholder/96/96', '/api/placeholder/96/96', '/api/placeholder/96/96'],
      verificationPoints: [
        { id: '01', label: 'Point 01' },
        { id: '02', label: 'Point 02' },
        { id: '03', label: 'Point 03' },
        { id: '04', label: 'Point 04' },
        { id: '05', label: 'Point 05' }
      ],
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;

  const totalPages = Math.ceil(verificationData.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Slicing the verification data to only display 2 sections at a time
  const displayedData = verificationData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div>
      {displayedData.map((data, index) => (
        <DocumentVerification
          key={index}
          rightImages={data.rightImages}
          verificationPoints={data.verificationPoints}
        />
      ))}

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button onClick={handleBack} disabled={currentPage === 0}>
          Back
        </button>

        <div className="page-number-circle">
          {currentPage + 1} 
        </div>

        <button onClick={handleNext} disabled={currentPage === totalPages - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default InterpoleList;
