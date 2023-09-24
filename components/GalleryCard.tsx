import React, { useState } from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi";

interface GalleryCardProps {
  featureImage: string;
  title: string;
  about: string;
  blog: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  featureImage,
  title,
  about,
  blog,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer select-none text-center hover:shadow-lg hover:scale-105 transition-all duration-200 ease-in-out"
        onClick={handleCardClick}
      >
        <div className="relative h-64">
          <div className="mx-2 my-2 relative">
            <div className="relative h-64">
              <Image
                src={featureImage}
                alt={title}
                className="w-full h-full object-contain"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-md text-slate-800 font-bold mb-2">{title}</h2>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-11/12 relative">
            <div className="p-4 overflow-y-auto bg-white">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-3/5 md:mr-4 mb-2">
                  <div className="m-2">
                    <Image
                      src={featureImage}
                      alt={title}
                      className="w-full h-full object-contain"
                      width={2400}
                      height={2400}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-end">
                    <button
                      className="text-gray-700 text-xl absolute top-2 right-4"
                      onClick={handleModalClose}
                    >
                      <FiX className="hover:scale-110 transition-all duration-200 ease-in-out" />
                    </button>
                  </div>
                  <div className="text-center">
                    {title && <h2 className="text-m font-bold m-2">{title}</h2>}
                    <div className="max-h-[40vh] overflow-y-auto pb-0">
                      <p className="text-gray-700 mb-2 ">{about}</p>
                    </div>
                    <p className="text-blue-500 mb-2">
                      <a href={blog}>{blog}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        @media (max-width: 640px) {
          .bg-white {
            max-height: 80vh;
          }
        }
      `}</style>
    </>
  );
};

export default GalleryCard;
